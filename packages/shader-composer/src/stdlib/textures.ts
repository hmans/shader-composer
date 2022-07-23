import { Texture } from "three"
import { $ } from "../expressions"
import { Bool, Float, Unit, Value, Vec3, Vec4 } from "../units"

export const Sampler2D = (name: string, texture?: Texture) => ({
	...Bool(true, {
		name: `Sampler2D: ${name}`,
		uniforms: { [name]: { type: "sampler2D", value: texture } }
	}),

	toString: () => name
})

export type Sampler2D = ReturnType<typeof Sampler2D>

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
