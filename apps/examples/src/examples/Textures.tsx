import {
	$,
	Add,
	CustomShaderMaterialMaster,
	Fresnel,
	Mul,
	Sampler2D,
	Texture2D,
	TilingUV,
	Time,
	Uniform,
	UV,
	vec2
} from "shader-composer"
import { useShader } from "shader-composer-r3f"
import { Color, MeshStandardMaterial } from "three"
import CustomShaderMaterial from "three-custom-shader-material"
import { useRepeatingTexture } from "./helpers"

export default function Playground() {
	const texture = useRepeatingTexture("/textures/hexgrid.jpg")

	const shader = useShader(() => {
		const offset = vec2(Mul(Time, 0.05), 0)

		/* Create a texture sampler */
		const sampler2D = Uniform("sampler2D", "u_texture2", texture)

		/* Get the texture information for the current fragment */
		const tex2d = Texture2D(sampler2D, TilingUV(UV, vec2(2, 1), offset))

		/* Define a color to tint the texture with */
		const color = new Color("hotpink")

		return CustomShaderMaterialMaster({
			fragColor: $`${color} * ${tex2d.color}`,
			alpha: Add(Fresnel(), 0.1)
		})
	})

	console.log(shader.fragmentShader)

	return (
		<mesh>
			<icosahedronGeometry args={[1, 3]} />
			<CustomShaderMaterial baseMaterial={MeshStandardMaterial} {...shader} transparent />
		</mesh>
	)
}
