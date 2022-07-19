import { useMemo } from "react"
import { compileShader, glsl } from "shader-composer"
import { MeshStandardMaterial } from "three"
import CustomShaderMaterial from "three-custom-shader-material"

export default function Playground() {
	const shader = useMemo(() => {
		const root = glsl`void main() { csm_DiffuseColor = vec4(1.0, 0.2, 0.2, 1.0); }`

		return compileShader(root)
	}, [])

	return (
		<group position-y={13}>
			<mesh>
				<icosahedronGeometry args={[8, 3]} />
				<CustomShaderMaterial baseMaterial={MeshStandardMaterial} {...shader} />
			</mesh>
		</group>
	)
}
