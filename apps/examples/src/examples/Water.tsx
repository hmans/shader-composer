import { CustomShaderMaterialMaster, ShaderMaterialMaster } from "shader-composer"
import { useShader } from "shader-composer-r3f"
import { Color, MeshStandardMaterial } from "three"
import CustomShaderMaterial from "three-custom-shader-material"

export default function() {
	const shader = useShader(() =>
		CustomShaderMaterialMaster({ diffuseColor: new Color("blue") })
	)

	console.log(shader.vertexShader)
	console.log(shader.fragmentShader)

	return (
		<mesh position-y={-16}>
			<boxGeometry args={[70, 16, 70, 70, 1, 70]} />
			<CustomShaderMaterial baseMaterial={MeshStandardMaterial} {...shader} />
		</mesh>
	)
}
