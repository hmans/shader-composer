import { pipe } from "fp-ts/lib/function"
import {
	Add,
	CustomShaderMaterialMaster,
	JoinVector2,
	Time,
	VertexNormal,
	VertexPosition
} from "shader-composer"
import { useShader } from "shader-composer-r3f"
import { GerstnerWave, ModifyVertex } from "shader-composer-toybox"
import { Color, MeshStandardMaterial } from "three"
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

	console.log(shader.vertexShader)
	console.log(shader.fragmentShader)

	return (
		<mesh position-y={-16}>
			<boxGeometry args={[70, 16, 70, 70, 1, 70]} />
			<CustomShaderMaterial baseMaterial={MeshStandardMaterial} {...shader} />
		</mesh>
	)
}

export default function() {
	return <Water />
}
