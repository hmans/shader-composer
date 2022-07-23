import { $ } from "../expressions"
import { Float, Unit, Value, Vec3, Vec4 } from "../units"

export const Texture2D = (sampler2D: Unit<"sampler2D">, xy: Value<"vec2">) => {
	const unit = Vec4($`texture2D(${sampler2D}, ${xy})`, {
		name: "Texture2D"
	})

	return {
		...unit,
		color: Vec3($`${unit}.rgb`),
		alpha: Float($`${unit}.a`)
	}
}
