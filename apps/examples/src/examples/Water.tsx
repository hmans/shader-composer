import {
	Add,
	CustomShaderMaterialMaster,
	Int,
	Mul,
	pipe,
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
		const time = Time()

		const { position, normal } = ModifyVertex(VertexPosition, VertexNormal, (v) => {
			const [x, y, z] = SplitVector3(v)
			const xy = vec2(x, z)

			const fbm = NormalizeNoise(
				FBMNoise(vec2(x, z), {
					seed: Math.random(),
					persistance: 10.4,
					lacunarity: 2.3,
					scale: 0.4,
					redistribution: 1,
					octaves: Int(5),
					turbulence: false,
					ridge: false
				})
			)

			return pipe(
				v,
				(v) => Add(v, Mul(GerstnerWave(xy, vec2(1, 1), 0.5, 20.0, time), 0.8)),
				(v) => Add(v, Mul(GerstnerWave(xy, vec2(0.2, 1), 0.2, 10, time), 0.8)),
				(v) => Add(v, Mul(GerstnerWave(xy, vec2(0, -1), 0.2, 5, time), 0.5)),
				(v) => Add(v, Mul(GerstnerWave(xy, vec2(1, 1), 0.2, 8, time), 0.3)),
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
		<mesh position-y={-12}>
			<boxGeometry args={[70, 16, 70, 120, 1, 120]} />
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
