import { MeshStandardMaterial } from "three"
import CustomShaderMaterial from "three-custom-shader-material"

export default function() {
	return (
		<mesh>
			<icosahedronGeometry args={[1, 4]} />
			<CustomShaderMaterial baseMaterial={MeshStandardMaterial} />
		</mesh>
	)
}
