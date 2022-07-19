import { useMemo } from "react"
import { compileShader, glsl, Node } from "shader-composer"
import { MeshStandardMaterial } from "three"
import CustomShaderMaterial from "three-custom-shader-material"

export default function Playground() {
	const shader = useMemo(() => {
		const root = Node("float", 0, {
			fragmentBody: glsl`csm_DiffuseColor = vec4(1.0, 0.2, 0.5, 1.0);`
		})

		return compileShader(root)
	}, [])

	console.log(shader.vertexShader)
	console.log(shader.fragmentShader)

	return (
		<group position-y={13}>
			<mesh>
				<icosahedronGeometry args={[8, 3]} />
				<CustomShaderMaterial baseMaterial={MeshStandardMaterial} {...shader} />
			</mesh>
		</group>
	)
}
