import {
	$,
	CustomShaderMaterialMaster,
	Mul,
	Rotation3D,
	Rotation3DX,
	Rotation3DY,
	Rotation3DZ,
	Time,
	Value,
	VertexPosition
} from "shader-composer"
import { useShader } from "shader-composer-r3f"
import { Euler, MeshStandardMaterial, Quaternion, Vector3 } from "three"
import CustomShaderMaterial from "three-custom-shader-material"

const RotateAroundAxis = (
	position: Value<"vec3">,
	axis: Value<"vec3">,
	angle: Value<"float">
) => Mul(position, $`mat3(${Rotation3D(axis, angle)})`)

export default function MatrixTransformations() {
	const shader = useShader(() => {
		const time = Time()

		const quat = new Quaternion().setFromEuler(new Euler(0, 0.5, 0))

		return CustomShaderMaterialMaster({
			position: RotateAroundAxis(VertexPosition, new Vector3(0.5, 1, 0), time)
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
