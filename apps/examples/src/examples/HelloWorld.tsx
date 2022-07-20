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
	Unit,
	Value,
	VertexPosition
} from "shader-composer"
import { useShader } from "shader-composer-r3f"
import { Color } from "three"

const $Op = <T extends GLSLType, A extends any[]>(
	fun: (target: Value<T>, ...args: A) => Unit<T>
) => (...args: A) => (target: Value<T>) => fun(target, ...args)

const $Add = $Op(Add)

export default function HelloWorld() {
	const shader = useShader(() =>
		ShaderMaterialMaster({
			color: Pipe(
				new Color("hotpink"),
				$Op(Mix)(new Color("white"), Sin(Time)),
				$Add(Fresnel())
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
