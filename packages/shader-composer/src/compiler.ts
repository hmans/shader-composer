import { glslRepresentation } from "./glslRepresentation"
import { block, concatenate, Part, sluggify, statement } from "./lib/concatenator3000"
import idGenerator from "./lib/idGenerator"
import { isNode, Node } from "./tree"

type Program = "vertex" | "fragment"

const nodeHeader = (node: Node) => `/*** BEGIN: ${node._node.name} ***/`
const nodeFooter = (node: Node) => `/*** END: ${node._node.name} ***/\n`

const compileHeader = (node: Node, program: Program) =>
	node._node[`${program}Header`] &&
	concatenate(
		nodeHeader(node),
		node._node[`${program}Header`]?.render(),
		nodeFooter(node)
	)

const compileBody = (node: Node, program: Program) =>
	concatenate(
		/* Create global variable for this node */
		statement(node.type, node._node.variableName, "=", glslRepresentation(node.value)),

		/* Include body block if one is given */
		node._node[`${program}Body`] && block(node._node[`${program}Body`]?.render())
	)

const compileProgram = (nodes: Node[], program: Program): string =>
	concatenate(
		`/*** PROGRAM: ${program.toUpperCase()} ***/\n`,
		nodes.map((n) => compileHeader(n, program)),
		"void main()",
		block(...nodes.map((n) => compileBody(n, program)))
	)

export const compileShader = (root: Node) => {
	/* Prepare some state for our compilation process */
	const nextId = idGenerator()

	const gatherProgram = (node: Node, program: Program): Node[] => {
		/* Initialize unit, if necessary */
		if (node._node.variableName === undefined) {
			node._node.variableName = `${sluggify(node._node.name)}_${nextId()}`
		}

		return [
			/* If the node value is another node, include that node */
			...(isNode(node.value) ? gatherProgram(node.value, program) : []),
			/* If the node value is an expression, include the expression's dependencies */
			node
		]
	}

	/* Step 1: compile a list of nodes to render, per program */
	const nodes = {
		vertex: gatherProgram(root, "vertex"),
		fragment: gatherProgram(root, "fragment")
	}

	/* Step 2: compile nodes */
	const vertexShader = compileProgram(nodes.vertex, "vertex")

	const fragmentShader = compileProgram(nodes.fragment, "fragment")

	return { vertexShader, fragmentShader }
}
