import { Expression, isExpression } from "./expressions"
import { glslRepresentation } from "./glslRepresentation"
import {
	block,
	concatenate,
	identifier,
	Part,
	sluggify,
	statement
} from "./lib/concatenator3000"
import idGenerator from "./lib/idGenerator"
import { isUnit, Unit } from "./units"

type Program = "vertex" | "fragment"

const beginUnit = (unit: Unit) => `/*** BEGIN: ${unit._unitConfig.name} ***/`
const endUnit = (unit: Unit) => `/*** END: ${unit._unitConfig.name} ***/\n`

const compileProgram = (program: Program, state: CompilerState): string =>
	concatenate(
		`/*** PROGRAM: ${program.toUpperCase()} ***/\n`,
		state[program].headers,
		"void main()",
		block(state[program].bodies)
	)

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
			unit._unitConfig[`${program}Header`],
			endUnit(unit)
		)
}

const collectUnitBody = (unit: Unit, program: Program, state: CompilerState) => {
	state[program].bodies.push(
		beginUnit(unit),
		statement(
			unit.type,
			unit._unitConfig.variableName,
			"=",
			glslRepresentation(unit.value)
		),
		unit._unitConfig[`${program}Body`] && block(unit._unitConfig[`${program}Body`]),
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

	/* Collect dependencies */
	const dependencies: (Unit | Expression)[] = [unit.value]
	collectDependencies(dependencies, state)

	/* Collect this unit */
	collectUnitHeader(unit, "vertex", state)
	collectUnitHeader(unit, "fragment", state)
	collectUnitBody(unit, "vertex", state)
	collectUnitBody(unit, "fragment", state)
}

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
