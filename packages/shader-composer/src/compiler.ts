import { Expression, isExpression } from "./expressions"
import { glslRepresentation } from "./glslRepresentation"
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
import { isUnit, isUnitInProgram, Program, Unit } from "./units"

const beginUnit = (unit: Unit) => `/*** BEGIN: ${unit._unitConfig.name} ***/`
const endUnit = (unit: Unit) => `/*** END: ${unit._unitConfig.name} ***/\n`

const compileExpression = (exp: Expression, program: Program, state: CompilerState) => {
	/* Compile dependencies */
	exp.values.forEach((value) => {
		compileItem(value, program, state)
	})
}

const compileItem = (item: Unit | Expression, program: Program, state: CompilerState) => {
	/* Check if we've already seen this unit */
	if (state.seen.has(item)) return
	state.seen.add(item)

	if (isUnit(item)) compileUnit(item, program, state)
	else if (isExpression(item)) compileExpression(item, program, state)
}

const compileUnit = (unit: Unit, program: Program, state: CompilerState) => {
	/* Prepare this unit */
	unit._unitConfig.variableName = identifier(
		sluggify(unit._unitConfig.name),
		state.nextid()
	)

	/* Identify dependencies and add them */
	const dependencies = [
		unit.value,
		unit._unitConfig[program]?.header?.values,
		unit._unitConfig[program]?.body?.values
	].flat()

	dependencies.forEach((dep) => {
		compileItem(dep, program, state)
	})

	/* Add header if present */
	if (unit._unitConfig[program]?.header) {
		state.header.push(beginUnit(unit), unit._unitConfig[program]?.header, endUnit(unit))
	}

	/* Add body */
	state.body.push(beginUnit(unit))
	if (unit._unitConfig[program]?.body) {
		state.body.push(
			statement(unit.type, unit._unitConfig.variableName),
			block(
				statement(unit.type, "value", "=", glslRepresentation(unit.value)),
				unit._unitConfig[program]?.body,
				assignment(unit._unitConfig.variableName, "value")
			)
		)
	} else {
		/* Since we don't have a body chunk, we can just use the simplified form here. */
		state.body.push(
			statement(
				unit.type,
				unit._unitConfig.variableName,
				"=",
				glslRepresentation(unit.value)
			)
		)
	}
	state.body.push(endUnit(unit))
}

const compileProgram = (
	unit: Unit,
	program: Program,
	state: CompilerState = CompilerState()
): string => {
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
	seen: new Set<Unit | Expression>()
})
