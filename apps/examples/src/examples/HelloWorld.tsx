import { pipe } from "fp-ts/lib/function"
import {
	$,
	Add,
	Fresnel,
	Mix,
	ShaderMaterialMaster,
	Sin,
	Time,
	Vec3,
	VertexPosition
} from "shader-composer"
import { useShader } from "shader-composer-r3f"
import { Color } from "three"

export default function HelloWorld() {
	const shader = useShader(() =>
		ShaderMaterialMaster({
			color: pipe(
				Vec3(new Color("hotpink")),
				(v) => Mix(v, new Color("white"), Sin(Time)),
				(v) => Add(v, Fresnel())
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
