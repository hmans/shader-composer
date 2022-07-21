import { pipe } from "fp-ts/lib/function"
import {
	Add,
	CustomShaderMaterialMaster,
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
		const diffuseColor = new Color("#88c")

		const { position, normal } = ModifyVertex(VertexPosition, VertexNormal, (v) => {
			const split = SplitVector3(v)

			return pipe(
				v,
				(v) => Add(v, Mul(GerstnerWave(v, JoinVector2(0.5, 0.5), 0.1, 10), 0.8)),
				(v) => Add(v, Mul(GerstnerWave(v, JoinVector2(0, -0.5), 0.5, 5), 0.5)),
				(v) => Add(v, Mul(GerstnerWave(v, JoinVector2(0.5, -0.5), 0.2, 8), 0.2)),
				(v) => Add(v, Mul(GerstnerWave(v, JoinVector2(1, 1), 1, 20.0), 0.9)),
				(v) =>
					Add(
						v,
						Mul(
							JoinVector3(0, 0.005, 0),
							NormalizeNoise(
								FBMNoise(JoinVector2(Add(split[0], Time), split[2]), {
									seed: Math.random(),
									persistance: 10.2,
									lacunarity: 1.3,
									scale: 1.8,
									redistribution: 1,
									octaves: "2",
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
				roughness={0.5}
				metalness={0.5}
			/>
		</mesh>
	)
}

export default function WaterExample() {
	return <Water />
}
