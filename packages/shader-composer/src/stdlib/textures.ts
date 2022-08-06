import { $ } from "../expressions"
import { Input, Unit } from "../units"
import { Float, Vec3, Vec4 } from "./values"

export const Texture2D = (sampler2D: Unit<"sampler2D">, xy: Input<"vec2">) => {
	const unit = Vec4($`texture2D(${sampler2D}, ${xy})`, {
		name: "Texture2D"
	})

	return {
		...unit,
		color: Vec3($`${unit}.rgb`),
		alpha: Float($`${unit}.a`)
	}
}
