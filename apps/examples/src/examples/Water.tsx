import { pipe } from "fp-ts/lib/function"
import {
	Add,
	CustomShaderMaterialMaster,
	JoinVector2,
	Mix,
	Time,
	VertexNormal,
	VertexPosition
} from "shader-composer"
import { useShader } from "shader-composer-r3f"
import { GerstnerWave, ModifyVertex, PerlinNoise } from "shader-composer-toybox"
import { Color, MeshStandardMaterial, Vector3 } from "three"
import CustomShaderMaterial from "three-custom-shader-material"

function Water() {
	const shader = useShader(() => {
		const diffuseColor = new Color("#66d")

		const { position, normal } = ModifyVertex(VertexPosition, VertexNormal, (v) =>
			pipe(
				v,
				(v) => Add(v, GerstnerWave(VertexPosition, JoinVector2(0, -1), 0.5, 8.0, Time)),
				(v) => Add(v, GerstnerWave(VertexPosition, JoinVector2(0, 1), 1.25, 3, Time)),
				(v) => Add(v, GerstnerWave(VertexPosition, JoinVector2(1, 1), 0.2, 8.0, Time)),
				(v) => Add(v, GerstnerWave(VertexPosition, JoinVector2(1, 1), 1, 20.0, Time))
			)
		)

		return CustomShaderMaterialMaster({
			position,
			normal,
			diffuseColor
		})
	})

	return (
		<mesh position-y={-16}>
			<boxGeometry args={[70, 16, 70, 70, 1, 70]} />
			<CustomShaderMaterial baseMaterial={MeshStandardMaterial} {...shader} />
		</mesh>
	)
}

function Thingy() {
	const shader = useShader(() => {
		const diffuseColor = Mix<"vec3">(
			new Color("black"),
			new Color("white"),
			PerlinNoise(VertexPosition)
		)

		return CustomShaderMaterialMaster({
			diffuseColor
		})
	})

	return (
		<mesh>
			<icosahedronBufferGeometry args={[1.5, 8]} />
			<CustomShaderMaterial baseMaterial={MeshStandardMaterial} {...shader} />
		</mesh>
	)
}

export default function WaterExample() {
	return (
		<>
			<Thingy />
			<Water />
		</>
	)
}
