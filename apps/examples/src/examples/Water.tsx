import {
	Add,
	CustomShaderMaterialMaster,
	JoinVector3,
	Mul,
	Simplex3DNoise,
	Time,
	VertexNormal,
	VertexPosition
} from "shader-composer"
import { ModifyVertex } from "shader-composer-toybox"
import { useShader } from "shader-composer-r3f"
import { Color, MeshStandardMaterial } from "three"
import CustomShaderMaterial from "three-custom-shader-material"

export default function() {
	const shader = useShader(() => {
		const waterHeight = Simplex3DNoise(Mul(Add(VertexPosition, Time), 0.1))
		const diffuseColor = new Color("#66d")

		const { position, normal } = ModifyVertex(VertexPosition, VertexNormal, (v) =>
			Add(v, JoinVector3(0, Mul(waterHeight, 1.3), 0))
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
