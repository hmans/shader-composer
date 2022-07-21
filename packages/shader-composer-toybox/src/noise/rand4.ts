import { glsl, Snippet } from "shader-composer"

export const rand4 = Snippet(
	(rand4) => glsl`
		vec4 ${rand4}(vec4 p) { return mod(((p * 34.0) + 1.0) * p, 289.0); }
	`
)
