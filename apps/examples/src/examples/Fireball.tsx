import { useTexture } from "@react-three/drei"
import {
	$,
	Add,
	CustomShaderMaterialMaster,
	Float,
	Input,
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
import { Simplex3DNoise, simplex3Dnoise } from "shader-composer-toybox"
import { MeshStandardMaterial } from "three"
import CustomShaderMaterial from "three-custom-shader-material"
import textureUrl from "./textures/explosion.png"

const Turbulence = (p: Input<"vec3">) =>
	Float(1, {
		fragment: {
			body: $`
				float w = 100.0;
				float t = -0.5;
			
				for (float f = 1.0 ; f <= 10.0 ; f++ ){
					float power = pow(2.0, f);
					t += abs(${simplex3Dnoise}(vec3(power * ${p})) / power);
				}

				value = t;
			`
		}
	})

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

		const displacement = Mul(noise, 0.4)

		const noise2 = pipe(
			time,
			(v) => vec3(Mul(v, 0.6), Mul(v, 0.8), 0),
			(v) => Add(VertexPosition, v),
			(v) => Mul(v, 0.25),
			(v) => Turbulence(v),
			(v) => NormalizePlusMinusOne(v)
		)

		const tex2d = Texture2D(sampler2D, vec2(0, Pow(noise2, 0.5)))

		return CustomShaderMaterialMaster({
			position: Add(VertexPosition, Mul(VertexNormal, displacement)),
			diffuseColor: Mul(tex2d.color, 2)
		})
	})

	return (
		<mesh>
			<icosahedronGeometry args={[1, 5]} />
			<CustomShaderMaterial baseMaterial={MeshStandardMaterial} {...shader} />
		</mesh>
	)
}
