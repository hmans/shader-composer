import { IUniform } from "three"
import { Expression, isExpression } from "./expressions"
import { glslRepresentation } from "./glslRepresentation"
import { isSnippet, Snippet } from "./snippets"
import { uniformName } from "./stdlib"
import { isUnit, Program, Unit, UpdateCallback } from "./units"
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

const beginUnit = (unit: Unit) => `/*** UNIT: ${unit._unitConfig.name} ***/`

const endUnit = (unit: Unit) => `\n`

const compileItem = (
	item: Unit | Expression | Snippet,
	program: Program,
	state: CompilerState
) => {
	/* Check if we've already seen this unit */
	if (state.seen.has(item)) return
	state.seen.add(item)

	/* If the item is something we know, delegate to the corresponding function */
	if (isUnit(item)) compileUnit(item, program, state)
	else if (isExpression(item)) compileExpression(item, program, state)
	else if (isSnippet(item)) compileSnippet(item, program, state)
}

const compileExpression = (exp: Expression, program: Program, state: CompilerState) => {
	/*
	Expressions automatically expand to their string representations, so we don't need to
	add them to headers or bodies, but we _do_ need to resolve their dependencies (because
	they may include other units.)
	*/

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
	/*
	Before we add this unit, let's recurse into its dependencies. We're limiting
	ourselves to direct dependencies (within the value), and dependencies of the
	header and body of the program we're currenty compiling.
	*/
	const dependencies = [
		unit._unitConfig.value,
		unit._unitConfig[program]?.header?.values,
		unit._unitConfig[program]?.body?.values
	].flat()

	dependencies.forEach((dep) => {
		compileItem(dep, program, state)
	})

	/* Register update callback, if given */
	if (unit._unitConfig.update) {
		state.updates.add(unit._unitConfig.update)
	}

	/* HEADER */
	const header = new Array<Part>()

	/* Declare varying if this unit has varying mode */
	if (unit._unitConfig.varying) {
		header.push(`varying ${unit._unitConfig.type} v_${unit._unitConfig.variableName};`)
	}

	/* Declare uniform, if one is configured. */
	if (unit._unitConfig.uniform) {
		/* Register uniform with compiler state */
		state.uniforms.set(uniformName(unit), unit._unitConfig.uniform)

		/* Declare uniforms in header */
		header.push(statement("uniform", unit._unitConfig.type, uniformName(unit)))
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
			: unit._unitConfig.uniform
			? uniformName(unit)
			: glslRepresentation(unit._unitConfig.value, unit._unitConfig.type)

	state.body.push(beginUnit(unit))

	/*
	Declare the unit's global variable, and assign the specified value to it.
	*/
	if (unit._unitConfig.variable) {
		state.body.push(
			statement(unit._unitConfig.type, unit._unitConfig.variableName, "=", value)
		)
	}

	/*
	If a body chunk is given, we'll create a scoped block with a local variable called
	"value" that the chunk can modify before it is assigned back to the unit's global.
	*/
	if (unit._unitConfig[program]?.body)
		state.body.push(
			block(
				/* Declare local value variable */
				unit._unitConfig.variable &&
					statement(unit._unitConfig.type, "value", "=", unit._unitConfig.variableName),

				/* Include body chunk */
				unit._unitConfig[program]?.body,

				/* Re-assign local value variable to global variable */
				unit._unitConfig.variable && assignment(unit._unitConfig.variableName, "value")
			)
		)

	/*
	If we're in varying mode and vertex, write value to the varying, too.
	*/
	if (unit._unitConfig.variable && unit._unitConfig.varying && program === "vertex") {
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
			item._unitConfig.value,
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

const compileProgram = (unit: Unit, program: Program, state: CompilerState): string => {
	compileItem(unit, program, state)

	return concatenate(
		`/*** PROGRAM: ${program.toUpperCase()} ***/\n`,
		"precision highp float;\n",

		state.header,

		"void main()",
		block(state.body)
	)
}

export const compileShader = (root: Unit) => {
	/* STEP 1: prepare all units and their dependencies! */
	prepareItem(root)

	/*
	STEP 2: compile the fragment shader. We're going to compile it first because
	we need to identify units with varyings, because we will _always_ want to
	include them in the vertex shader.
	*/
	const fragmentState = CompilerState()
	const fragmentShader = compileProgram(root, "fragment", fragmentState)

	/*
	STEP 3: compile the vertex shader. But first, we'll manually squeeze in all
	units with varyings.
	*/
	const vertexState = CompilerState()

	/* Explicitly add all units with varyings. */
	fragmentState.seen.forEach((item) => {
		if (isUnit(item) && item._unitConfig.varying) {
			compileItem(item, "vertex", vertexState)
		}
	})

	/* Explicitly add all uniforms we've seen so far */
	vertexState.uniforms = fragmentState.uniforms

	/* Compile! */
	const vertexShader = compileProgram(root, "vertex", vertexState)

	/*
	STEP 4: Collect uniforms.
	*/
	const uniforms = Object.fromEntries(vertexState.uniforms)

	/*
	STEP 5: Collect update callbacks.
	*/
	const updates = new Set<UpdateCallback>([
		...vertexState.updates,
		...fragmentState.updates
	])

	/*
	Build a complete list of all units included in the tree. The code consuming
	this function might have a need for it!
	*/
	const units = [
		...new Set<Unit>([...fragmentState.seen, ...vertexState.seen].filter(isUnit))
	]

	/*
	STEP 6: Build per-frame update function.
	*/
	const update = (dt: number) => {
		updates.forEach((u) => u(dt))
	}

	/*
	DONE! Let's return everything and go on a lengthy vacation somewhere nice.
	*/
	return [
		{
			vertexShader,
			fragmentShader,
			uniforms
		},
		update,
		units
	] as const
}

type CompilerState = ReturnType<typeof CompilerState>

const CompilerState = () => ({
	header: new Array<Part>(),
	body: new Array<Part>(),
	nextid: idGenerator(),
	seen: new Set<Unit | Expression | Snippet>(),
	uniforms: new Map<string, IUniform>(),
	updates: new Set<UpdateCallback>()
})
