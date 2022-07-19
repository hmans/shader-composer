export const compileShader = () => {
	const vertexShader = `void main() {
	}`

	const fragmentShader = `void main() { csm_DiffuseColor = vec4(1.0, 0.4, 0.0, 1.0); }`

	return { vertexShader, fragmentShader }
}
