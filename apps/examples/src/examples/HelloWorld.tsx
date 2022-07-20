import {
	$,
	Add,
	Fresnel,
	Mul,
	ShaderMaterialMaster,
	Time,
	VertexPosition
} from "shader-composer"
import { useShader } from "shader-composer-r3f"
import { Color } from "three"

export default function HelloWorld() {
	const shader = useShader(() =>
		ShaderMaterialMaster({
			color: Add(new Color("hotpink"), Mul(new Color("white"), Fresnel())),
			position: $`${VertexPosition} * (1.0 + sin(${Time} + ${VertexPosition}.y * 2.0) * 0.2)`
		})
	)

	return (
		<mesh>
			<sphereGeometry />
			<shaderMaterial {...shader} key={Math.random()} />
		</mesh>
	)
}
