import {
	CustomShaderMaterialMaster,
	Rotate3D,
	Time,
	VertexPosition
} from "shader-composer"
import { useShader } from "shader-composer-r3f"
import { MeshStandardMaterial, Vector3 } from "three"
import CustomShaderMaterial from "three-custom-shader-material"

export default function MatrixTransformations() {
	const shader = useShader(() => {
		return CustomShaderMaterialMaster({
			position: Rotate3D(VertexPosition, new Vector3(0.5, 1, 0), Time())
		})
	}, [])

	return (
		<mesh>
			<boxGeometry />
			<CustomShaderMaterial
				baseMaterial={MeshStandardMaterial}
				color="orange"
				{...shader}
			/>
		</mesh>
	)
}
