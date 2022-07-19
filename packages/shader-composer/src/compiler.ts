import { Expression } from "./expressions"

export const compileShader = (root: Expression) => {
	const vertexShader = ``

	const fragmentShader = root.render()

	return { vertexShader, fragmentShader }
}
