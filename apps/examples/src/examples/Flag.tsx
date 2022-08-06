import { useShader } from "shader-composer-r3f"
import {
	Add,
	CustomShaderMaterialMaster,
	Mul,
	Sin,
	Time,
	UV,
	vec3,
	VertexPosition
} from "shader-composer/stdlib"
import { MeshStandardMaterial } from "three"
import CustomShaderMaterial from "three-custom-shader-material"

export default function Flag() {
	const shader = useShader(() => {
		const time = Time()

		return CustomShaderMaterialMaster({
			position: vec3(
				VertexPosition.x,
				VertexPosition.y,
				Mul(Sin(Add(time, Add(UV.y, UV.x))), 0.2)
			)
		})
	}, [])

	return (
		<mesh>
			<planeGeometry args={[3, 2, 30, 20]} />
			<CustomShaderMaterial baseMaterial={MeshStandardMaterial} {...shader} wireframe />
		</mesh>
	)
}
