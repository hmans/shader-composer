import { Node } from "./tree"

type Program = "vertex" | "fragment"

const compileHeader = (node: Node, program: Program): string =>
	node._node[`${program}Header`]?.render() ?? ""

const compileBody = (node: Node, program: Program): string =>
	node._node[`${program}Body`]?.render() ?? ""

const compileProgram = (nodes: Node[], program: Program): string => `
	${nodes.map((n) => compileHeader(n, program)).join("\n")}

	void main() {
		${nodes.map((n) => compileBody(n, program)).join("\n")}
	}
`

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
