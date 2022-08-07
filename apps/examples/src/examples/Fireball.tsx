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
	Snippet,
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

const Turbulence = (
	p: Input<"vec3">,
	octaves: Input<"float"> = 10,
	noiseFun: Snippet = simplex3Dnoise
) => {
	const body = $`
		float t = -0.5;
				
		for (float f = 1.0 ; f <= ${octaves}; f++ ){
			float power = pow(2.0, f);
			t += abs(${noiseFun}(vec3(power * ${p})) / power);
		}

		value = t;
	`

	return Float(1, {
		fragment: { body },
		vertex: { body }
	})
}

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

		const displacement = Mul(noise, 0.3)

		const noise2 = pipe(
			time,
			(v) => vec3(Mul(v, 0.6), Mul(v, 0.8), 0),
			(v) => Add(VertexPosition, v),
			(v) => Mul(v, 0.25),
			(v) => Turbulence(v),
			(v) => NormalizePlusMinusOne(v),
			(v) => Pow(v, 0.5)
		)

		const tex2d = Texture2D(sampler2D, vec2(0, noise2))

		return CustomShaderMaterialMaster({
			position: Add(VertexPosition, Mul(VertexNormal, displacement)),
			diffuseColor: tex2d.color,
			emissiveColor: Mul(tex2d.color, 0.5)
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
