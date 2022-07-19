import { glslRepresentation } from "./glslRepresentation"
import { block, concatenate, Part, sluggify, statement } from "./lib/concatenator3000"
import idGenerator from "./lib/idGenerator"
import { isUnit, Unit } from "./units"

type Program = "vertex" | "fragment"

const nodeHeader = (node: Unit) => `/*** BEGIN: ${node._unitConfig.name} ***/`
const nodeFooter = (node: Unit) => `/*** END: ${node._unitConfig.name} ***/\n`

const compileHeader = (node: Unit, program: Program) =>
	node._unitConfig[`${program}Header`] &&
	concatenate(
		nodeHeader(node),
		node._unitConfig[`${program}Header`]?.render(),
		nodeFooter(node)
	)

const compileBody = (node: Unit, program: Program) =>
	concatenate(
		/* Create global variable for this node */
		statement(
			node.type,
			node._unitConfig.variableName,
			"=",
			glslRepresentation(node.value)
		),

		/* Include body block if one is given */
		node._unitConfig[`${program}Body`] &&
			block(node._unitConfig[`${program}Body`]?.render())
	)

const compileProgram = (nodes: Unit[], program: Program): string =>
	concatenate(
		`/*** PROGRAM: ${program.toUpperCase()} ***/\n`,
		nodes.map((n) => compileHeader(n, program)),
		"void main()",
		block(...nodes.map((n) => compileBody(n, program)))
	)

export const compileShader = (root: Unit) => {
	/* Prepare some state for our compilation process */
	const nextId = idGenerator()

	const gather = (node: Unit, program: Program): Unit[] => {
		/* Initialize unit, if necessary */
		if (node._unitConfig.variableName === undefined) {
			node._unitConfig.variableName = `${sluggify(node._unitConfig.name)}_${nextId()}`
		}

		return [
			/* If the node value is another node, include that node */
			...(isUnit(node.value) ? gather(node.value, program) : []),
			/* If the node value is an expression, include the expression's dependencies */
			node
		]
	}

	/* Step 1: compile a list of nodes to render, per program */
	const nodes = {
		vertex: gather(root, "vertex"),
		fragment: gather(root, "fragment")
	}

	/* Step 2: compile nodes */
	const vertexShader = compileProgram(nodes.vertex, "vertex")

	const fragmentShader = compileProgram(nodes.fragment, "fragment")

	return { vertexShader, fragmentShader }
}
