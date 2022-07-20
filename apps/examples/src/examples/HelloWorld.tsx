import {
	$,
	Add,
	Fresnel,
	Mul,
	Pipe,
	ShaderMaterialMaster,
	Sin,
	Time,
	VertexPosition
} from "shader-composer"
import { useShader } from "shader-composer-r3f"
import { Color } from "three"

export default function HelloWorld() {
	const shader = useShader(() =>
		ShaderMaterialMaster({
			color: Pipe(
				new Color("hotpink"),
				(color) => Add(color, Fresnel()),
				(color) => Add(color, Mul(new Color("green"), Sin(Time)))
			),

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
