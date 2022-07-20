import { useTexture } from "@react-three/drei"
import { useMemo } from "react"
import {
	$,
	Add,
	CustomShaderMaterialMaster,
	Fresnel,
	JoinVector2,
	Mul,
	Sampler2D,
	Texture2D,
	TilingUV,
	Time,
	UV
} from "shader-composer"
import { useShader } from "shader-composer-r3f"
import { Color, MeshStandardMaterial, RepeatWrapping, Vector2 } from "three"
import CustomShaderMaterial from "three-custom-shader-material"

export default function Playground() {
	const texture = useTexture("/textures/hexgrid.jpg")
	texture.wrapS = RepeatWrapping
	texture.wrapT = RepeatWrapping

	const { uniforms, ...shader } = useShader(() => {
		const offset = JoinVector2(Mul(Time, 0.05), 0)

		const tex2d = Texture2D(
			Sampler2D("u_texture"),
			TilingUV(UV, new Vector2(2, 1), offset)
		)

		const color = new Color("hotpink")

		return CustomShaderMaterialMaster({
			fragColor: $`${color} * ${tex2d.color}`,
			alpha: Add(Fresnel(), 0.1)
		})
	})

	const myUniforms = useMemo(
		() => ({
			...uniforms,
			u_texture: { value: texture }
		}),
		[uniforms]
	)

	console.log(shader.vertexShader)
	console.log(shader.fragmentShader)

	return (
		<mesh>
			<icosahedronGeometry args={[1, 3]} />
			<CustomShaderMaterial
				baseMaterial={MeshStandardMaterial}
				uniforms={myUniforms}
				{...shader}
				transparent
			/>
		</mesh>
	)
}
