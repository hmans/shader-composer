import { pipe } from "fp-ts/lib/function"
import {
	Add,
	CustomShaderMaterialMaster,
	Int,
	Mul,
	Remap,
	SplitVector3,
	Time,
	Value,
	vec2,
	vec3,
	VertexNormal,
	VertexPosition
} from "shader-composer"
import { useShader } from "shader-composer-r3f"
import { FBMNoise, GerstnerWave, ModifyVertex } from "shader-composer-toybox"
import { Color, DoubleSide, MeshPhysicalMaterial } from "three"
import CustomShaderMaterial from "three-custom-shader-material"

const NormalizeNoise = (v: Value<"float">) => Remap(v, -1, 1, 0, 1)

function Water() {
	const shader = useShader(() => {
		const diffuseColor = new Color("#acd")

		const { position, normal } = ModifyVertex(VertexPosition, VertexNormal, (v) => {
			const split = SplitVector3(v)
			const xy = vec2(split[0], split[2])

			const fbm = NormalizeNoise(
				FBMNoise(vec2(Add(split[0], Time), split[2]), {
					seed: Math.random(),
					persistance: 2.2,
					lacunarity: 1.3,
					scale: 2.4,
					redistribution: 1,
					octaves: Int(2),
					turbulence: false,
					ridge: false
				})
			)

			return pipe(
				v,
				(v) => Add(v, Mul(GerstnerWave(xy, vec2(1, 1), 0.5, 20.0), 0.8)),
				(v) => Add(v, Mul(GerstnerWave(xy, vec2(0.2, 1), 0.2, 10), 0.8)),
				(v) => Add(v, Mul(GerstnerWave(xy, vec2(0, -1), 0.2, 5), 0.5)),
				(v) => Add(v, Mul(GerstnerWave(xy, vec2(1, 1), 0.2, 8), 0.3)),
				(v) => Add(v, Mul(vec3(0, 0.005, 0), fbm))
			)
		})

		return CustomShaderMaterialMaster({
			position,
			normal,
			diffuseColor
		})
	})

	return (
		<mesh position-y={-16}>
			<boxGeometry args={[70, 16, 70, 100, 1, 100]} />
			<CustomShaderMaterial
				baseMaterial={MeshPhysicalMaterial}
				{...shader}
				roughness={0.1}
				metalness={0.5}
				side={DoubleSide}
			/>
		</mesh>
	)
}

export default function WaterExample() {
	return <Water />
}
