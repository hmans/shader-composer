import { useControls } from "leva"
import { useEffect, useMemo } from "react"
import {
	$,
	Add,
	Fresnel,
	Mix,
	Mul,
	pipe,
	Remap,
	ShaderMaterialMaster,
	Sin,
	Time,
	Uniform,
	Vec3,
	VertexPosition
} from "shader-composer"
import { useShader } from "shader-composer-r3f"
import { Color } from "three"

export default function HelloWorld() {
	const opts = useControls({ color1: "hotpink", color2: "white" })

	const blackboard = {
		color1: Uniform("vec3", "u_color1"),
		color2: Uniform("vec3", "u_color2")
	}

	const { uniforms, ...shader } = useShader(() => {
		console.log("Recompiling shader. You should not see this when changing the color.")

		return ShaderMaterialMaster({
			color: pipe(
				blackboard.color1,
				(v) => Mix(v, blackboard.color2, Remap(Sin(Time), -1, 1, 0, 1)),
				(v) => Add(v, Fresnel())
			),

			position: $`${VertexPosition} * (1.0 + sin(${Time} + ${VertexPosition}.y * 2.0) * 0.2)`
		})
	}, [])

	const myUniforms = useMemo(
		() => ({
			...uniforms,
			u_color1: { value: new Color(opts.color1) },
			u_color2: { value: new Color(opts.color2) }
		}),
		[uniforms]
	)

	useEffect(() => {
		myUniforms.u_color1.value.set(opts.color1)
	}, [opts.color1])

	useEffect(() => {
		myUniforms.u_color2.value.set(opts.color2)
	}, [opts.color2])

	return (
		<mesh>
			<sphereGeometry />
			<shaderMaterial uniforms={myUniforms} {...shader} key={Math.random()} />
		</mesh>
	)
}
