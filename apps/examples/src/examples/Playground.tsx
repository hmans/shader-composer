import { useFrame } from "@react-three/fiber"
import { useMemo } from "react"
import { compileShader, glsl, Unit } from "shader-composer"
import { Color, MeshStandardMaterial } from "three"
import CustomShaderMaterial from "three-custom-shader-material"

export default function Playground() {
	const [shader, update] = useMemo(() => {
		const color = new Color("hotpink")

		const root = Unit("float", 0, {
			fragmentBody: glsl`
				csm_DiffuseColor.rgb = ${color};
			`
		})

		return compileShader(root)
	}, [])

	useFrame((_, dt) => update(dt))

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
