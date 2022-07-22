import { $ } from "../expressions"
import { Bool, Float, Value, Vec3, Vec4 } from "../units"

/* TODO: find a better way to create the uniform here. Maybe reference an actual Uniform node and make it not write itself into a variable? */
export const Sampler2D = (name: string) => ({
	...Bool(true, {
		name: `Sampler2D: ${name}`,
		vertex: { header: $`uniform sampler2D ${name};` },
		fragment: { header: $`uniform sampler2D ${name};` }
	}),

	toString: () => name
})

export type Sampler2D = ReturnType<typeof Sampler2D>

export const Texture2D = (sampler2D: Sampler2D, xy: Value<"vec2">) => {
	const unit = Vec4($`texture2D(${sampler2D}, ${xy})`, {
		name: "Texture2D"
	})

	return {
		...unit,
		color: Vec3($`${unit}.rgb`),
		alpha: Float($`${unit}.a`)
	}
}
