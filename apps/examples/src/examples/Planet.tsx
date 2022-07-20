import {
	Add,
	CustomShaderMaterialMaster,
	GLSLType,
	Mul,
	Simplex3DNoise,
	Smoothstep,
	Value,
	VertexPosition
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

		const continents = Mul(
			Smoothstep(0, 0.1, Simplex3DNoise(ScaleAndOffset(VertexPosition, 1, 10))),
			0.1
		)

		const totalHeight = continents

		return CustomShaderMaterialMaster({
			position: Mul(VertexPosition, Add(1.0, totalHeight)),
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
