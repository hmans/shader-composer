import { $ } from "../expressions"
import { type } from "../glslType"
import { Snippet } from "../snippets"
import { GLSLType, Unit, Input } from "../units"
import { VertexNormal, ViewDirection } from "./geometry"
import { Float } from "./values"

export const Operator = (title: string, operator: "+" | "-" | "*" | "/") => <
	T extends GLSLType
>(
	a: Input<T>,
	b: Input<any>
) => {
	return Unit(type(a), $`${a} ${operator} ${b}`, {
		name: `${title} (${type(a)})`
	})
}

/* Basic mathematical operations */
export const Add = Operator("Add", "+")
export const Sub = Operator("Subtract", "-")
export const Mul = Operator("Multiply", "*")
export const Div = Operator("Divide", "/")

export const Sin = (x: Input<"float">) => Float($`sin(${x})`)
export const Cos = (x: Input<"float">) => Float($`cos(${x})`)
export const Pow = (x: Input<"float">, y: Input<"float">) => Float($`pow(${x}, ${y})`)

export const Round = <T extends "float" | "vec2" | "vec3" | "vec4">(v: Input<T>) =>
	Unit(type(v), $`round(${v})`)

export const Fract = <T extends "float" | "vec2" | "vec3" | "vec4">(v: Input<T>) =>
	Unit(type(v), $`fract(${v})`)

export const Floor = <T extends "float" | "vec2" | "vec3" | "vec4">(v: Input<T>) =>
	Unit(type(v), $`floor(${v})`)

export const Ceil = <T extends "float" | "vec2" | "vec3" | "vec4">(v: Input<T>) =>
	Unit(type(v), $`ceil(${v})`)

export const Modulo = <T extends "float" | "vec2" | "vec3" | "vec4">(v: Input<T>) =>
	Unit(type(v), $`mod(${v})`)

export const Clamp = <T extends GLSLType>(x: Input<T>, min: Input<T>, max: Input<T>) =>
	Unit(type(x), $`clamp(${x}, ${min}, ${max})`)

export const Clamp01 = (x: Input<"float">) => Clamp(x, 0, 1)

export const Saturate = Clamp01

export const OneMinus = (v: Input<"float">) => Float(Sub(1, v), { name: "OneMinus" })

export const Mix = <T extends GLSLType>(a: Input<T>, b: Input<T>, f: Input<"float">) =>
	Unit(type(a), $`mix(${a}, ${b}, ${f})`)

export type FresnelProps = {
	normal?: Input<"vec3">
	alpha?: Input<"float">
	bias?: Input<"float">
	intensity?: Input<"float">
	power?: Input<"float">
	factor?: Input<"float">
}

export const Fresnel = ({
	normal = VertexNormal,
	bias = 0,
	intensity = 1,
	power = 2,
	factor = 1
}: FresnelProps = {}) =>
	Float(0, {
		fragment: {
			body: $`
				float f_a = (${factor} + dot(${ViewDirection}, ${normal}));
				float f_fresnel = ${bias} + ${intensity} * pow(abs(f_a), ${power});
				f_fresnel = clamp(f_fresnel, 0.0, 1.0);
				value = f_fresnel;
			`
		}
	})

export const Step = (edge: Input<"float">, v: Input<"float">) =>
	Float($`step(${edge}, ${v})`)

export const Smoothstep = (min: Input<"float">, max: Input<"float">, v: Input<"float">) =>
	Float($`smoothstep(${min}, ${max}, ${v})`)

const remap = Snippet(
	(name) => $`
    float ${name}(float value, float inMin, float inMax, float outMin, float outMax) {
      return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);
    }

    vec2 ${name}(vec2 value, vec2 inMin, vec2 inMax, vec2 outMin, vec2 outMax) {
      return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);
    }

    vec3 ${name}(vec3 value, vec3 inMin, vec3 inMax, vec3 outMin, vec3 outMax) {
      return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);
    }

    vec4 ${name}(vec4 value, vec4 inMin, vec4 inMax, vec4 outMin, vec4 outMax) {
      return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);
    }`
)

export const Remap = <T extends "float" | "vec2" | "vec3" | "vec4">(
	v: Input<T>,
	inMin: Input<T>,
	inMax: Input<T>,
	outMin: Input<T>,
	outMax: Input<T>
) => Unit(type(v), $`${remap}(${v}, ${inMin}, ${inMax}, ${outMin}, ${outMax})`)

export const NormalizePlusMinusOne = (f: Input<"float">) => Remap(f, -1, 1, 0, 1)
