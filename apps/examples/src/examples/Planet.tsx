import {
	Add,
	CustomShaderMaterialMaster,
	GLSLType,
	With,
	Mul,
	Simplex3DNoise,
	Smoothstep,
	Value,
	VertexPosition,
	Pipe
} from "shader-composer"
import { useShader } from "shader-composer-r3f"
import { Color, MeshStandardMaterial, Vector3 } from "three"
import CustomShaderMaterial from "three-custom-shader-material"

export default function() {
	const shader = useShader(() => {
		const ScaleAndOffset = <T extends GLSLType>(
			target: Value<T>,
			scale?: Value<T | "float">,
			offset?: Value<T | "float">
		) => Add(Mul(target, scale ?? 1), offset ?? 0)

		const continents = Pipe(
			VertexPosition,
			(v) => ScaleAndOffset(v, 1, 10),
			(v) => Simplex3DNoise(v),
			(v) => Smoothstep(0, 1, v),
			(v) => Mul(v, 0.1)
		)

		const totalHeight = continents

		return CustomShaderMaterialMaster({
			position: With(VertexPosition).Mul(With(totalHeight).Add(1.0)),
			diffuseColor: new Color("#888")
		})
	}, [Math.random()])

	return (
		<mesh>
			<icosahedronGeometry args={[1, 5]} />
			<CustomShaderMaterial baseMaterial={MeshStandardMaterial} {...shader} />
		</mesh>
	)
}
