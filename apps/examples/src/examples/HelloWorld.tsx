import { useControls } from "leva"
import {
	$,
	Add,
	Fresnel,
	Mix,
	NormalizePlusMinusOne,
	pipe,
	ShaderMaterialMaster,
	Sin,
	Time,
	Vec3,
	VertexPosition
} from "shader-composer"
import { useShader, useUniform } from "shader-composer-r3f"
import { Color } from "three"

export default function HelloWorld() {
	const leva = useControls("Uniforms", {
		color1: "#bc23c2",
		color2: "#c7be13"
	})

	const color1 = useUniform("vec3", new Color(leva.color1))
	const color2 = useUniform("vec3", new Color(leva.color2))

	const shader = useShader(() => {
		const time = Time()

		return ShaderMaterialMaster({
			color: pipe(
				color1,
				(v) => Mix(v, color2, NormalizePlusMinusOne(Sin(time))),
				(v) => Add(v, Fresnel())
			),

			position: $`${VertexPosition} * (1.0 + sin(${time} + ${VertexPosition}.y * 2.0) * 0.2)`
		})
	}, [])

	return (
		<mesh>
			<sphereGeometry />
			<shaderMaterial {...shader} key={Math.random()} />
		</mesh>
	)
}
