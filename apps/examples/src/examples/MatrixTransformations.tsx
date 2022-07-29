import {
	$,
	CustomShaderMaterialMaster,
	Time,
	Value,
	Vec3,
	VertexPosition
} from "shader-composer"
import { useShader } from "shader-composer-r3f"
import { MeshStandardMaterial, Vector4 } from "three"
import CustomShaderMaterial from "three-custom-shader-material"

export default function MatrixTransformations() {
	const shader = useShader(() => {
		const time = Time()

		const StupidRotation = (v: Value<"vec3">, q: Value<"vec4">) =>
			Vec3($`
				${v} 
					+ 2.0 * cross(${q}.xyz, cross(${q}.xyz, ${v})
					+ ${q}.w * ${v})`)

		return CustomShaderMaterialMaster({
			position: StupidRotation(VertexPosition, new Vector4(0, 0, 0, 1))
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
