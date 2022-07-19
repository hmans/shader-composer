import { $ } from "../expressions"
import { Bool, Float, Value, Vec3, Vec4, withAPI } from "../units"

/* TODO: find a better way to create the uniform here. Maybe reference an actual Uniform node and make it not write itself into a variable? */
export const Sampler2D = (name: string) =>
	withAPI(
		Bool(true, {
			name: `Sampler2D: ${name}`,
			vertex: { header: $`uniform sampler2D ${name};` },
			fragment: { header: $`uniform sampler2D ${name};` }
		}),

		{
			toString: () => name
		}
	)

export type Sampler2D = ReturnType<typeof Sampler2D>

export const Texture2D = (sampler2D: Sampler2D, xy: Value<"vec2">) => {
	const node = Vec4($`texture2D(${sampler2D}, ${xy})`, {
		name: "Texture2D"
	})

	return withAPI(node, {
		color: Vec3($`${node}.rgb`),
		alpha: Float($`${node}.a`)
	})
}
