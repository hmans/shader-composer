import { useTexture } from "@react-three/drei"
import {
	Add,
	CustomShaderMaterialMaster,
	Mul,
	NormalizePlusMinusOne,
	pipe,
	Pow,
	Texture2D,
	Time,
	Uniform,
	vec2,
	vec3,
	VertexNormal,
	VertexPosition
} from "shader-composer"
import { useShader } from "shader-composer-r3f"
import { Simplex3DNoise, Turbulence3D } from "shader-composer-toybox"
import { MeshStandardMaterial } from "three"
import CustomShaderMaterial from "three-custom-shader-material"
import textureUrl from "./textures/explosion.png"

export default function Fireball() {
	const texture = useTexture(textureUrl)

	const shader = useShader(() => {
		const time = Time()

		const sampler2D = Uniform("sampler2D", texture)

		const displacement = pipe(
			VertexPosition,
			(v) => Add(v, Mul(time, 0.3)),
			(v) => Simplex3DNoise(v),
			(v) => Mul(v, 0.1)
		)

		const color = pipe(
			time,
			(v) => vec3(Mul(v, 0.1), Mul(v, 0.3), Mul(v, 0.5)),
			(v) => Add(VertexPosition, v),
			(v) => Mul(v, 0.25),
			(v) => Turbulence3D(v),
			(v) => NormalizePlusMinusOne(v),
			(v) => Pow(v, 0.5),
			(v) => Texture2D(sampler2D, vec2(0, v)),
			(v) => v.color
		)

		return CustomShaderMaterialMaster({
			position: pipe(
				displacement,
				(v) => Mul(VertexNormal, v),
				(v) => Add(VertexPosition, v)
			),
			diffuseColor: color,
			emissiveColor: Mul(color, 1.5)
		})
	})

	return (
		<mesh>
			<icosahedronGeometry args={[1, 5]} />
			<CustomShaderMaterial
				baseMaterial={MeshStandardMaterial}
				{...shader}
				metalness={0.5}
				roughness={0.5}
			/>
		</mesh>
	)
}
