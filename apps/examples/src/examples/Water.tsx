import { pipe } from "fp-ts/lib/function"
import {
	Add,
	CustomShaderMaterialMaster,
	Int,
	JoinVector2,
	JoinVector3,
	Mix,
	Mul,
	Remap,
	SplitVector3,
	Time,
	Value,
	VertexNormal,
	VertexPosition
} from "shader-composer"
import { useShader } from "shader-composer-r3f"
import { FBMNoise, GerstnerWave, ModifyVertex, PerlinNoise } from "shader-composer-toybox"
import { Color, MeshPhysicalMaterial, MeshStandardMaterial, Vector3 } from "three"
import CustomShaderMaterial from "three-custom-shader-material"

const NormalizeNoise = (v: Value<"float">) => Remap(v, -1, 1, 0, 1)

function Water() {
	const shader = useShader(() => {
		const diffuseColor = new Color("#acd")

		const { position, normal } = ModifyVertex(VertexPosition, VertexNormal, (v) => {
			const split = SplitVector3(v)
			const xy = JoinVector2(split[0], split[2])
			return pipe(
				v,
				(v) => Add(v, Mul(GerstnerWave(xy, JoinVector2(1, 1), 0.5, 20.0), 0.8)),
				(v) => Add(v, Mul(GerstnerWave(xy, JoinVector2(0.2, 1), 0.2, 10), 0.8)),
				(v) => Add(v, Mul(GerstnerWave(xy, JoinVector2(0, -1), 0.2, 5), 0.5)),
				(v) => Add(v, Mul(GerstnerWave(xy, JoinVector2(1, 1), 0.2, 8), 0.3)),
				(v) =>
					Add(
						v,
						Mul(
							JoinVector3(0, 0.005, 0),
							NormalizeNoise(
								FBMNoise(JoinVector2(Add(split[0], Time), split[2]), {
									seed: Math.random(),
									persistance: 2.2,
									lacunarity: 1.3,
									scale: 2.4,
									redistribution: 1,
									octaves: Int(2),
									terbulance: false,
									ridge: false
								})
							)
						)
					)
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
			/>
		</mesh>
	)
}

export default function WaterExample() {
	return <Water />
}
