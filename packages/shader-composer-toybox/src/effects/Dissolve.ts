import {
	Float,
	Mul,
	pipe,
	Remap,
	Smoothstep,
	Step,
	Sub,
	Value,
	VertexPosition
} from "shader-composer"
import { Simplex3DNoise } from "../noise/Simplex3DNoise"

export const Dissolve = (
	visibility: Value<"float"> = 0.5,
	scale: Value<"float"> = 1,
	edgeThickness: Value<"float"> = 0.1,
	varying = false
) => {
	const noise = pipe(
		VertexPosition,

		/* Scale vertex position */
		(v) => Mul(v, scale),

		/* Make some noise */
		(v) => Simplex3DNoise(v),

		/* Remap to 0-1, taking edge thickness into account */
		(v) => Remap(v, -1, 1, 0, Sub(1, edgeThickness)),

		/* Wrap resulting value in a float unit that _may_ use a varying */
		(v) => Float(v, { varying })
	)

	const edge = Smoothstep(Sub(visibility, edgeThickness), visibility, noise)

	return {
		edge,
		alpha: Step(noise, visibility)
	}
}
