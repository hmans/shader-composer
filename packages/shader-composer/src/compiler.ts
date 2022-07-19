import { glslRepresentation } from "./glslRepresentation"
import { block, concatenate, Part, statement } from "./lib/concatenator3000"
import { Node } from "./tree"

type Program = "vertex" | "fragment"

const nodeHeader = (node: Node) => `/*** BEGIN: ${node._node.name} ***/`
const nodeFooter = (node: Node) => `/*** END: ${node._node.name} ***/\n`

const compileHeader = (node: Node, program: Program): Part[] =>
	node._node[`${program}Header`]
		? [nodeHeader(node), node._node[`${program}Header`]?.render(), nodeFooter(node)]
		: []

const compileBody = (node: Node, program: Program): Part[] => [
	/* Create global variable for this node */
	statement(node.type, node._node.variableName, "=", glslRepresentation(node.value)),

	/* Include body block if one is given */
	node._node[`${program}Body`] && block(node._node[`${program}Body`]?.render())
]

const compileProgram = (nodes: Node[], program: Program): string =>
	concatenate(
		`/*** PROGRAM: ${program.toUpperCase()} ***/\n`,
		nodes.map((n) => compileHeader(n, program)),
		"void main()",
		block(...nodes.map((n) => compileBody(n, program)))
	)

export const compileShader = (root: Node) => {
	/* Step 1: compile a list of nodes to render, per program */
	const nodes = {
		vertex: [root],
		fragment: [root]
	}

	/* Step 2: compile nodes */
	const vertexShader = compileProgram(nodes.vertex, "vertex")

	const fragmentShader = compileProgram(nodes.fragment, "fragment")

	return { vertexShader, fragmentShader }
}
