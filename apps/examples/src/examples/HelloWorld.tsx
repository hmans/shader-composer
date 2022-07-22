import { useControls } from "leva"
import {
	$,
	Add,
	Fresnel,
	Mix,
	pipe,
	ShaderMaterialMaster,
	Sin,
	Time,
	Vec3,
	VertexPosition
} from "shader-composer"
import { useShader } from "shader-composer-r3f"
import { Color } from "three"

export default function HelloWorld() {
	const opts = useControls({ color1: "hotpink", color2: "white" })

	const shader = useShader(() => {
		console.log("Recompiling shader. You should not see this when changing the color.")

		return ShaderMaterialMaster({
			color: pipe(
				Vec3(new Color(opts.color1)),
				(v) => Mix(v, new Color(opts.color2), Sin(Time)),
				(v) => Add(v, Fresnel())
			),

			position: $`${VertexPosition} * (1.0 + sin(${Time} + ${VertexPosition}.y * 2.0) * 0.2)`
		})
	}, [])

	return (
		<mesh>
			<sphereGeometry />
			<shaderMaterial {...shader} key={Math.random()} />
		</mesh>
	)
}
