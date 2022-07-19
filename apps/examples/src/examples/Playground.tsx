import { useMemo } from "react"
import { compileShader, glsl, Unit } from "shader-composer"
import { MeshStandardMaterial } from "three"
import CustomShaderMaterial from "three-custom-shader-material"

export default function Playground() {
	const shader = useMemo(() => {
		const color = Unit("vec4", glsl`vec4(1.0, 0.2, 0.5, 1.0)`)

		const root = Unit("float", 0, {
			fragmentBody: glsl`
				csm_DiffuseColor = ${color};
			`
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
