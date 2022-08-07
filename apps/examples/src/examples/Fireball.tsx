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
import { Simplex3DNoise } from "shader-composer-toybox"
import { MeshStandardMaterial } from "three"
import CustomShaderMaterial from "three-custom-shader-material"
import textureUrl from "./textures/explosion.png"

export default function Fireball() {
	const texture = useTexture(textureUrl)

	const shader = useShader(() => {
		const time = Time()

		const sampler2D = Uniform("sampler2D", texture)

		const noise = pipe(
			time,
			(v) => vec3(v, 0, 0),
			(v) => Add(VertexPosition, v),
			(v) => Simplex3DNoise(v),
			(v) => NormalizePlusMinusOne(v)
		)

		const tex2d = Texture2D(sampler2D, vec2(0, Pow(noise, 0.5)))

		const displacement = Mul(noise, 0.4)

		return CustomShaderMaterialMaster({
			position: Add(VertexPosition, Mul(VertexNormal, displacement)),
			diffuseColor: tex2d.color
		})
	})

	return (
		<mesh>
			<icosahedronGeometry args={[1, 5]} />
			<CustomShaderMaterial baseMaterial={MeshStandardMaterial} {...shader} />
		</mesh>
	)
}
