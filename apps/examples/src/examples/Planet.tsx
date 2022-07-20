import { CustomShaderMaterialMaster } from "shader-composer"
import { useShader } from "shader-composer-r3f"
import { Color, MeshStandardMaterial } from "three"
import CustomShaderMaterial from "three-custom-shader-material"

export default function() {
	const shader = useShader(() => {
		return CustomShaderMaterialMaster({
			diffuseColor: new Color("hotpink")
		})
	})

	return (
		<mesh>
			<icosahedronGeometry args={[1, 4]} />
			<CustomShaderMaterial baseMaterial={MeshStandardMaterial} {...shader} />
		</mesh>
	)
}
