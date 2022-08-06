import { Input, mat3 } from "shader-composer"
import { useShader } from "shader-composer-r3f"
import {
	CustomShaderMaterialMaster,
	Mul,
	Rotation3D,
	Time,
	VertexPosition
} from "shader-composer/stdlib"
import { MeshStandardMaterial, Vector3 } from "three"
import CustomShaderMaterial from "three-custom-shader-material"

const RotateAroundAxis = (
	position: Input<"vec3">,
	axis: Input<"vec3">,
	angle: Input<"float">
) => Mul(position, mat3(Rotation3D(axis, angle)))

export default function MatrixTransformations() {
	const shader = useShader(() => {
		return CustomShaderMaterialMaster({
			position: RotateAroundAxis(VertexPosition, new Vector3(0.5, 1, 0), Time())
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
