import { pipe } from "../pipes"
import { Input } from "../units"
import { VertexNormal, ViewDirection } from "./geometry"
import { Abs, Add, Mul, Pow, Saturate } from "./math"
import { Float } from "./values"
import { Dot } from "./vectors"

export type FresnelProps = {
	normal?: Input<"vec3">
	alpha?: Input<"float">
	bias?: Input<"float">
	intensity?: Input<"float">
	power?: Input<"float">
	factor?: Input<"float">
}

export const Fresnel = ({
	normal = VertexNormal.world,
	bias = 0,
	intensity = 1,
	power = 2,
	factor = 1
}: FresnelProps = {}) =>
	Float(
		pipe(
			normal,
			(v) => Dot(ViewDirection, v),
			(v) => Add(factor, v),
			(v) => Abs(v),
			(v) => Pow(v, power),
			(v) => Mul(v, intensity),
			(v) => Add(v, bias),
			(v) => Saturate(v)
		),
		{ name: "Fresnel" }
	)
