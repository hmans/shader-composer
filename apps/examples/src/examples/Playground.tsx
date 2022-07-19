import { useTexture } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useMemo } from "react"
import {
	$,
	Add,
	compileShader,
	CustomShaderMaterialMaster,
	Div,
	Fresnel,
	Sampler2D,
	Texture2D,
	TilingUV,
	Time,
	UV
} from "shader-composer"
import { Color, MeshStandardMaterial, RepeatWrapping, Vector2 } from "three"
import CustomShaderMaterial from "three-custom-shader-material"

export default function Playground() {
	const texture = useTexture("/textures/hexgrid.jpg")
	texture.wrapS = RepeatWrapping
	texture.wrapT = RepeatWrapping

	const [{ uniforms, ...shader }, update] = useMemo(() => {
		const tex2d = Texture2D(
			Sampler2D("u_texture"),
			TilingUV($`vec2(${UV}.x + ${Time} * 0.05, ${UV}.y)`, new Vector2(2, 1))
		)

		const color = new Color("hotpink")

		const root = CustomShaderMaterialMaster({
			diffuseColor: $`${color} * ${tex2d.color}`,
			alpha: Add(Fresnel(), 0.1)
		})

		return compileShader(root)
	}, [])

	const myUniforms = useMemo(
		() => ({
			...uniforms,
			u_texture: { value: texture }
		}),
		[uniforms]
	)

	useFrame((_, dt) => update(dt))

	console.log(shader.vertexShader)
	console.log(shader.fragmentShader)

	return (
		<group position-y={13}>
			<mesh>
				<icosahedronGeometry args={[8, 3]} />
				<CustomShaderMaterial
					baseMaterial={MeshStandardMaterial}
					uniforms={myUniforms}
					{...shader}
					transparent
				/>
			</mesh>
		</group>
	)
}
