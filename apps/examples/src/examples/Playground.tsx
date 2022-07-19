import { compileShader } from "shader-composer"
import { MeshStandardMaterial } from "three"
import CustomShaderMaterial from "three-custom-shader-material"

export default function Playground() {
	const shader = compileShader()
	console.log(shader)

	return (
		<group position-y={13}>
			<mesh>
				<icosahedronGeometry args={[8, 3]} />
				<CustomShaderMaterial baseMaterial={MeshStandardMaterial} {...shader} />
			</mesh>
		</group>
	)
}
