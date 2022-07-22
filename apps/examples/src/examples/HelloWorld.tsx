import { useFrame } from "@react-three/fiber"
import { useControls } from "leva"
import { useEffect, useMemo } from "react"
import {
	$,
	Add,
	Fresnel,
	Mix,
	pipe,
	Remap,
	ShaderMaterialMaster,
	Sin,
	Time,
	Uniform,
	VertexPosition
} from "shader-composer"
import { useShader } from "shader-composer-r3f"
import { Color } from "three"

export default function HelloWorld() {
	const leva = useControls({ color1: "hotpink", color2: "white" })

	const blackboard = useMemo(
		() => ({
			color1: Uniform("vec3", "u_color1", new Color(leva.color1)) /* Set initial value */,
			color2: Uniform("vec3", "u_color2", new Color(leva.color2))
		}),
		[]
	)

	const shader = useShader(
		() =>
			ShaderMaterialMaster({
				color: pipe(
					blackboard.color1,
					(v) => Mix(v, blackboard.color2, Remap(Sin(Time), -1, 1, 0, 1)),
					(v) => Add(v, Fresnel())
				),

				position: $`${VertexPosition} * (1.0 + sin(${Time} + ${VertexPosition}.y * 2.0) * 0.2)`
			}),
		[]
	)

	useEffect(() => {
		/* Interact with uniform value */
		blackboard.color1.value.set(leva.color1)
	}, [leva.color1])

	useEffect(() => {
		/* Or replace it wholesale */
		blackboard.color2.value = new Color(leva.color2)
	}, [leva.color2])

	return (
		<mesh>
			<sphereGeometry />
			<shaderMaterial {...shader} key={Math.random()} />
		</mesh>
	)
}
