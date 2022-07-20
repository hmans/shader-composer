import {
	$,
	Add,
	Fresnel,
	GLSLType,
	Mix,
	Mul,
	Pipe,
	ShaderMaterialMaster,
	Sin,
	Time,
	Value,
	VertexPosition
} from "shader-composer"
import { useShader } from "shader-composer-r3f"
import { Color } from "three"

const $Add = <T extends GLSLType>(operand: Value) => (target: Value<T>) =>
	Add(target, operand)

const $Mix = <T extends GLSLType>(operand: Value, factor: Value<"float">) => (
	target: Value<T>
) => Mix(target, operand, factor)

export default function HelloWorld() {
	const shader = useShader(() =>
		ShaderMaterialMaster({
			color: Pipe(
				new Color("hotpink"),
				[Mix, new Color("white"), Sin(Time)],
				[Add, Fresnel()]
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
