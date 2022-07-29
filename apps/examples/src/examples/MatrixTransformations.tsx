import { CustomShaderMaterialMaster, Time, VertexPosition } from "shader-composer"
import { useShader } from "shader-composer-r3f"
import { MeshStandardMaterial } from "three"
import CustomShaderMaterial from "three-custom-shader-material"

export default function MatrixTransformations() {
	const shader = useShader(() => {
		const time = Time()

		return CustomShaderMaterialMaster({
			position: VertexPosition
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
