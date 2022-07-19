import { Expression, isExpression } from "./expressions"
import { glslRepresentation } from "./glslRepresentation"
import { isSnippet, Snippet } from "./snippets"
import { isUnit, Program, Unit } from "./units"
import {
	assignment,
	block,
	concatenate,
	identifier,
	Part,
	sluggify,
	statement
} from "./util/concatenator3000"
import idGenerator from "./util/idGenerator"

const beginUnit = (unit: Unit) => `/*** BEGIN: ${unit._unitConfig.name} ***/`
const endUnit = (unit: Unit) => `/*** END: ${unit._unitConfig.name} ***/\n`

const compileItem = (
	item: Unit | Expression | Snippet,
	program: Program,
	state: CompilerState
) => {
	/* Check if we've already seen this unit */
	if (state.seen.has(item)) return
	state.seen.add(item)

	if (isUnit(item)) compileUnit(item, program, state)
	else if (isExpression(item)) compileExpression(item, program, state)
	else if (isSnippet(item)) compileSnippet(item, program, state)
}

const compileExpression = (exp: Expression, program: Program, state: CompilerState) => {
	/* Compile dependencies */
	exp.values.forEach((value) => {
		compileItem(value, program, state)
	})
}

const compileSnippet = (snippet: Snippet, program: Program, state: CompilerState) => {
	/* Add dependencies */
	snippet.expression.values.forEach((value) => {
		compileItem(value, program, state)
	})

	/* Add snippet to header */
	state.header.push(snippet.expression)
}

const compileUnit = (unit: Unit, program: Program, state: CompilerState) => {
	/* Identify dependencies and add them */
	const dependencies = [
		unit.value,
		unit._unitConfig[program]?.header?.values,
		unit._unitConfig[program]?.body?.values
	].flat()

	dependencies.forEach((dep) => {
		compileItem(dep, program, state)
	})

	/* HEADER */
	const header = new Array<Part>()

	/* Declare varying if this unit has varying mode */
	if (unit._unitConfig.varying) {
		header.push(`varying ${unit.type} v_${unit._unitConfig.variableName};`)
	}

	/* Add header if present */
	if (unit._unitConfig[program]?.header) {
		header.push(unit._unitConfig[program]?.header)
	}

	if (header.length) state.header.push(beginUnit(unit), ...header, endUnit(unit))

	/* BODY */

	const value =
		unit._unitConfig.varying && program === "fragment"
			? `v_${unit._unitConfig.variableName}`
			: glslRepresentation(unit.value)

	state.body.push(beginUnit(unit))
	if (unit._unitConfig[program]?.body) {
		state.body.push(
			statement(unit.type, unit._unitConfig.variableName),
			block(
				statement(unit.type, "value", "=", value),
				unit._unitConfig[program]?.body,
				assignment(unit._unitConfig.variableName, "value")
			)
		)
	} else {
		/* Since we don't have a body chunk, we can just use the simplified form here. */
		state.body.push(statement(unit.type, unit._unitConfig.variableName, "=", value))
	}

	/* If we're in varying mode and vertex, write value to the varying, too */
	if (unit._unitConfig.varying && program === "vertex") {
		state.body.push(
			assignment(`v_${unit._unitConfig.variableName}`, unit._unitConfig.variableName)
		)
	}

	state.body.push(endUnit(unit))
}

const prepareItem = (item: Unit | Expression, state = CompilerState()) => {
	if (state.seen.has(item)) return
	state.seen.add(item)

	const dependencies = new Array<any>()

	/* Prepare dependencies */
	if (isUnit(item)) {
		dependencies.push(
			item.value,
			item._unitConfig.vertex?.header,
			item._unitConfig.vertex?.body,
			item._unitConfig.fragment?.header,
			item._unitConfig.fragment?.body
		)
	}

	if (isExpression(item)) {
		dependencies.push(...item.values)
	}

	dependencies.flat().forEach((dep) => prepareItem(dep, state))

	/* Prepare this unit */
	if (isUnit(item)) {
		item._unitConfig.variableName = identifier(
			sluggify(item._unitConfig.name),
			state.nextid()
		)
	}
}

const compileProgram = (
	unit: Unit,
	program: Program,
	state: CompilerState = CompilerState()
): string => {
	prepareItem(unit)
	compileItem(unit, program, state)

	return concatenate(
		`/*** PROGRAM: ${program.toUpperCase()} ***/\n`,
		state.header,

		"void main()",
		block(state.body)
	)
}

export const compileShader = (root: Unit) => {
	const uniforms = {
		u_time: { value: 0 }
	}

	const update = (dt: number) => {
		uniforms.u_time.value += dt
	}

	return [
		{
			vertexShader: compileProgram(root, "vertex"),
			fragmentShader: compileProgram(root, "fragment"),
			uniforms
		},
		update
	] as const
}

type CompilerState = ReturnType<typeof CompilerState>

const CompilerState = () => ({
	header: new Array<Part>(),
	body: new Array<Part>(),
	nextid: idGenerator(),
	seen: new Set<Unit | Expression | Snippet>()
})
