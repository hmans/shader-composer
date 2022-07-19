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
} from "./lib/concatenator3000"
import idGenerator from "./lib/idGenerator"
import { isUnit, isUnitInProgram, Program, Unit } from "./units"

const beginUnit = (unit: Unit) => `/*** BEGIN: ${unit._unitConfig.name} ***/`
const endUnit = (unit: Unit) => `/*** END: ${unit._unitConfig.name} ***/\n`

const collectDependencies = (
	dependencies: (Expression | Unit)[],
	state: CompilerState
) => {
	dependencies.forEach((dependency) => {
		if (isUnit(dependency)) collectUnit(dependency, state)
		else if (isExpression(dependency)) collectExpression(dependency, state)
	})
}

const collectExpression = (expression: Expression, state: CompilerState) => {
	/* Collect dependencies */
	collectDependencies(expression.values, state)
}

const collectUnitHeader = (unit: Unit, program: Program, state: CompilerState) => {
	if (unit._unitConfig[`${program}Header`])
		state[program].headers.push(
			beginUnit(unit),
			unit._unitConfig[`${program}Header`]?.render(),
			endUnit(unit)
		)
}

const collectUnitBody = (unit: Unit, program: Program, state: CompilerState) => {
	state[program].bodies.push(
		beginUnit(unit),

		/* Declare global variable */
		statement(unit.type, unit._unitConfig.variableName),

		block(
			/* Declare local value variable */
			statement(unit.type, "value", "=", glslRepresentation(unit.value)),

			/* Include body chunk, if given */
			unit._unitConfig[`${program}Body`]?.render(),

			/* Assign value back to global variable */
			assignment(unit._unitConfig.variableName, "value")
		),

		endUnit(unit)
	)
}

const collectUnit = (unit: Unit, state = CompilerState()) => {
	if (state.seen.has(unit)) return
	state.seen.add(unit)

	/* Prepare unit */
	unit._unitConfig.variableName = identifier(
		sluggify(unit._unitConfig.name),
		state.nextid()
	)

	/* Collect for vertex program */
	if (isUnitInProgram(unit, "vertex")) {
		collectDependencies(
			[unit.value, unit._unitConfig.vertexHeader, unit._unitConfig.vertexBody],
			state
		)

		collectUnitHeader(unit, "vertex", state)
		collectUnitBody(unit, "vertex", state)
	}

	/* Collect for fragment program */
	if (isUnitInProgram(unit, "fragment")) {
		collectDependencies(
			[unit.value, unit._unitConfig.fragmentHeader, unit._unitConfig.fragmentBody],
			state
		)
		collectUnitHeader(unit, "fragment", state)
		collectUnitBody(unit, "fragment", state)
	}
}

/**
 * Generates a full shader program from a compiler state object.
 */
const compileProgram = (program: Program, state: CompilerState): string =>
	concatenate(
		`/*** PROGRAM: ${program.toUpperCase()} ***/\n`,
		state[program].headers,
		"void main()",
		block(state[program].bodies)
	)

export const compileShader = (root: Unit) => {
	const state = CompilerState()
	collectUnit(root, state)

	return {
		vertexShader: compileProgram("vertex", state),
		fragmentShader: compileProgram("fragment", state)
	}
}

type CompilerState = ReturnType<typeof CompilerState>

const CompilerState = () => ({
	vertex: {
		headers: new Array<Part>(),
		bodies: new Array<Part>()
	},
	fragment: {
		headers: new Array<Part>(),
		bodies: new Array<Part>()
	},
	nextid: idGenerator(),
	seen: new Set<Unit>()
})
