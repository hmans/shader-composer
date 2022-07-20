import { pipe } from "fp-ts/lib/function"
import {
	Add,
	CustomShaderMaterialMaster,
	Mul,
	Pow,
	Simplex3DNoise,
	Smoothstep,
	VertexPosition
} from "shader-composer"
import { useShader } from "shader-composer-r3f"
import { Color, MeshStandardMaterial } from "three"
import CustomShaderMaterial from "three-custom-shader-material"

export default function() {
	const shader = useShader(() => {
		const continents = pipe(
			VertexPosition,
			(v) => Add(v, 10),
			(v) => Simplex3DNoise(v),
			(v) => Smoothstep(0, 0.1, v),
			(v) => Mul(v, 0.2)
		)

		const mountains = pipe(
			VertexPosition,
			(v) => Mul(v, 2),
			(v) => Add(v, 100),
			(v) => Simplex3DNoise(v),
			(v) => Smoothstep(0, 0.1, v),
			(v) => Pow(v, 3),
			(v) => Mul(v, 0.2)
		)

		const totalHeight = Add(continents, mountains)

		return CustomShaderMaterialMaster({
			position: pipe(
				totalHeight,
				(v) => Add(1.0, v),
				(v) => Mul(VertexPosition, v)
			),

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
