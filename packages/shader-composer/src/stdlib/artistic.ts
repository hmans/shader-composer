import { $ } from "../expressions"
import { Input } from "../units"
import { VertexNormal, ViewDirection } from "./geometry"
import { Float } from "./values"

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
	Float(0, {
		name: "Fresnel",
		fragment: {
			body: $`
				float f_a = (${factor} + dot(${ViewDirection}, ${normal}));
				float f_fresnel = ${bias} + ${intensity} * pow(abs(f_a), ${power});
				f_fresnel = clamp(f_fresnel, 0.0, 1.0);
				value = f_fresnel;
			`
		}
	})
