import {
	Add,
	Mul,
	Remap,
	Smoothstep,
	Step,
	Sub,
	Value,
	VertexPosition
} from "shader-composer"
import { Color } from "three"
import { Simplex3DNoise } from "../noise/Simplex3DNoise"

export const Dissolve = (
	visibility: Value<"float"> = 0.5,
	scale: Value<"float"> = 1,
	edgeThickness: Value<"float"> = 0.1,
	edgeColor: Value<"vec3"> = new Color(0, 10, 8)
) => {
	const noise = Remap(
		Simplex3DNoise(Mul(VertexPosition, scale)),
		-1,
		Add(edgeThickness, 1),
		0,
		1
	)

	return {
		color: Mul(edgeColor, Smoothstep(Sub(visibility, edgeThickness), visibility, noise)),
		alpha: Step(noise, visibility)
	}
}
