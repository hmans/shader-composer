import {
	Add,
	Clamp,
	CustomShaderMaterialMaster,
	Float,
	Fresnel,
	Mix,
	Mul,
	pipe,
	Sin,
	Smoothstep,
	SplitVector3,
	Step,
	Time,
	Value,
	Vec3,
	VertexPosition
} from "shader-composer"
import { useShader } from "shader-composer-r3f"
import { Simplex3DNoise } from "shader-composer-toybox"
import { Color, MeshStandardMaterial } from "three"
import CustomShaderMaterial from "three-custom-shader-material"

const getNoise = (
	scale: number,
	amplitude: number,
	offset: Value<"float" | "vec3"> = 0
) =>
	pipe(
		VertexPosition,
		(v) => Mul(v, scale),
		(v) => Add(v, Add(offset, Math.random() * 100)),
		(v) => Simplex3DNoise(v),
		(v) => Mul(v, amplitude)
	)

function Planet() {
	const shader = useShader(() => {
		const continents = getNoise(1, 0.1)
		const hills = getNoise(0.8, 0.2)
		const mountains = getNoise(1.2, 0.2)

		const totalHeight = pipe(
			continents,
			(v) => Add(v, hills),
			(v) => Add(v, mountains),
			(v) => Clamp(v, 0, 1)
		)

		const water = pipe(
			Time,
			(v) => Add(v, SplitVector3(VertexPosition)[1]),
			(v) => Sin(v),
			(v) => Mul(v, 0.008),
			(v) => Add(v, 0.02)
		)

		const applyColor = (color: Color, height: Value<"float">) => (v: Value<"vec3">) =>
			Mix(v, color, Step(height, totalHeight))

		return CustomShaderMaterialMaster({
			position: pipe(
				totalHeight,
				(v) => Add(1.0, v),
				(v) => Mul(VertexPosition, v)
			),

			diffuseColor: pipe(
				Vec3(new Color("#336")),
				applyColor(new Color("yellow"), water),
				applyColor(new Color("#484"), 0.04),
				applyColor(new Color("#262"), 0.1),
				applyColor(new Color("#444"), 0.2),
				applyColor(new Color("#555"), 0.25),
				applyColor(new Color("#fff"), 0.3)
			)
		})
	})

	return (
		<mesh>
			<icosahedronGeometry args={[1, 12]} />
			<CustomShaderMaterial baseMaterial={MeshStandardMaterial} {...shader} />
		</mesh>
	)
}

function Atmosphere() {
	const shader = useShader(() => {
		const cloudSpeed = 0.02
		const cloudThreshold = 0.5
		const cloudDensity = 0.9
		const atmosphereDensity = 0.05

		const cloudNoise = Add(
			getNoise(0.5, 1, Mul(Time, cloudSpeed)),
			getNoise(0.2, 1, Mul(Time, cloudSpeed * -0.5))
		)

		const clouds = pipe(
			cloudNoise,
			(v) => Smoothstep(cloudThreshold, cloudThreshold + 0.08, v),
			(v) => Mul(v, cloudDensity)
		)

		const fresnel = Mul(Fresnel(), 0.3)

		return CustomShaderMaterialMaster({
			alpha: pipe(
				Float(atmosphereDensity),
				(v) => Add(v, clouds),
				(v) => Add(v, fresnel)
			)
		})
	})

	return (
		<mesh>
			<icosahedronGeometry args={[1.15, 12]} />
			<CustomShaderMaterial baseMaterial={MeshStandardMaterial} {...shader} transparent />
		</mesh>
	)
}

export default function() {
	return (
		<>
			<Planet />
			<Atmosphere />
		</>
	)
}
