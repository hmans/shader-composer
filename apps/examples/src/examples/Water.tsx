import {
	Add,
	CustomShaderMaterialMaster,
	JoinVector3,
	Mul,
	Simplex3DNoise,
	Time,
	VertexPosition
} from "shader-composer"
import { useShader } from "shader-composer-r3f"
import { Color, MeshStandardMaterial } from "three"
import CustomShaderMaterial from "three-custom-shader-material"

export default function() {
	const shader = useShader(() => {
		const waterHeight = Simplex3DNoise(Mul(Add(VertexPosition, Time), 0.1))
		const position = Add(VertexPosition, JoinVector3(0, waterHeight, 0))
		const diffuseColor = new Color("#66d")

		return CustomShaderMaterialMaster({ position, diffuseColor })
	})

	console.log(shader.vertexShader)
	console.log(shader.fragmentShader)

	return (
		<mesh position-y={-16}>
			<boxGeometry args={[70, 16, 70, 70, 1, 70]} />
			<CustomShaderMaterial baseMaterial={MeshStandardMaterial} {...shader} wireframe />
		</mesh>
	)
}
