import { pipe } from "fp-ts/lib/function"
import {
	$,
	Add,
	Clamp,
	CustomShaderMaterialMaster,
	Mix,
	Mul,
	Pow,
	Simplex3DNoise,
	Sin,
	Smoothstep,
	Step,
	Time,
	Vec3,
	VertexPosition
} from "shader-composer"
import { useShader } from "shader-composer-r3f"
import { Color, MeshStandardMaterial } from "three"
import CustomShaderMaterial from "three-custom-shader-material"

export default function() {
	const shader = useShader(() => {
		const continents = pipe(
			VertexPosition,
			(v) => Add(v, Math.random() * 100),
			(v) => Simplex3DNoise(v),
			(v) => Mul(v, 0.1)
		)

		const hills = pipe(
			VertexPosition,
			(v) => Mul(v, 0.8),
			(v) => Add(v, Math.random() * 100),
			(v) => Simplex3DNoise(v),
			(v) => Mul(v, 0.2)
		)

		const mountains = pipe(
			VertexPosition,
			(v) => Mul(v, 1.2),
			(v) => Add(v, Math.random() * 100),
			(v) => Simplex3DNoise(v),
			(v) => Mul(v, 0.2)
		)

		const totalHeight = pipe(
			continents,
			(v) => Add(v, hills),
			(v) => Add(v, mountains),
			(v) => Clamp(v, 0, 1)
		)

		const water = Add(Mul(Sin(Add(Time, $`${VertexPosition}.y`)), 0.008), 0.02)

		return CustomShaderMaterialMaster({
			position: pipe(
				totalHeight,
				(v) => Add(1.0, v),
				(v) => Mul(VertexPosition, v)
			),

			diffuseColor: pipe(
				Vec3(new Color("#336")),
				(v) => Mix(v, new Color("yellow"), Step(water, totalHeight)),
				(v) => Mix(v, new Color("#484"), Step(0.04, totalHeight)),
				(v) => Mix(v, new Color("#262"), Step(0.1, totalHeight)),
				(v) => Mix(v, new Color("#444"), Step(0.2, totalHeight)),
				(v) => Mix(v, new Color("#555"), Step(0.25, totalHeight)),
				(v) => Mix(v, new Color("#fff"), Step(0.3, totalHeight))
			)
		})
	}, [Math.random()])

	return (
		<mesh>
			<icosahedronGeometry args={[1, 8]} />
			<CustomShaderMaterial baseMaterial={MeshStandardMaterial} {...shader} />
		</mesh>
	)
}
