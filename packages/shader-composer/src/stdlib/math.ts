import { $ } from "../expressions"
import { type } from "../glslType"
import { Snippet } from "../snippets"
import { GLSLType, Input, Unit } from "../units"
import { Float } from "./values"

/**
 * @internal
 */
export const Operator = (title: string, operator: "+" | "-" | "*" | "/") => <
	A extends GLSLType,
	B extends GLSLType
>(
	a: Input<A>,
	b: Input<B>
) =>
	Unit(type(a), $`${a} ${operator} ${b}`, {
		name: `${title} (${type(a)})`
	})

/**
 * A Shader Unit that adds two values and returns the result.
 */
export const Add = Operator("Add", "+")

/**
 * A Shader Unit that subtracts two values and returns the result.
 */
export const Sub = Operator("Subtract", "-")

/**
 * A Shader Unit that multiplies two values and returns the result.
 */
export const Mul = Operator("Multiply", "*")

/**
 * A Shader Unit that divides two values and returns the result.
 */
export const Div = Operator("Divide", "/")

/**
 * Calculates the sine value of the input value.
 *
 * @param a The input value.
 * @returns A Shader Unit of type `float` that contains the sine value of `a`.
 */
export const Sin = (a: Input<"float">) => Float($`sin(${a})`)

/**
 * Calculates the cosine value of the input value.
 *
 * @param a The input value.
 * @returns A Shader Unit of type `float` that contains the cosine value of `a`.
 */
export const Cos = (a: Input<"float">) => Float($`cos(${a})`)

export const Tan = (a: Input<"float">) => Float($`tan(${a})`)

export const Pow = (a: Input<"float">, e: Input<"float">) => Float($`pow(${a}, ${e})`)

/**
 * A Shader Unit that finds the nearest integer less than or equal to the input value.
 * It is equivalent to the GLSL expression `trunc(a)`.
 *
 * @param a The input value.
 * @returns The truncated value of `a`.
 */
export const Trunc = <T extends "float" | "vec2" | "vec3" | "vec4">(a: Input<T>) =>
	Unit(type(a), $`trunc(${a})`)

/**
 * A Shader Unit that finds the nearest integer to the input value.
 * It performs the GLSL expression `round(a)`.
 *
 * @param a The input value.
 * @returns The rounded value of `a`.
 */
export const Round = <T extends "float" | "vec2" | "vec3" | "vec4">(a: Input<T>) =>
	Unit(type(a), $`round(${a})`)

export const Fract = <T extends "float" | "vec2" | "vec3" | "vec4">(v: Input<T>) =>
	Unit(type(v), $`fract(${v})`)

export const Floor = <T extends "float" | "vec2" | "vec3" | "vec4">(v: Input<T>) =>
	Unit(type(v), $`floor(${v})`)

export const Ceil = <T extends "float" | "vec2" | "vec3" | "vec4">(v: Input<T>) =>
	Unit(type(v), $`ceil(${v})`)

export const Modulo = <T extends "float" | "vec2" | "vec3" | "vec4">(v: Input<T>) =>
	Unit(type(v), $`mod(${v})`)

export const Abs = <T extends GLSLType>(a: Input<T>) => Unit(type(a), $`abs(${a})`)

export const Clamp = <T extends GLSLType>(x: Input<T>, min: Input<T>, max: Input<T>) =>
	Unit(type(x), $`clamp(${x}, ${min}, ${max})`)

export const Clamp01 = (x: Input<"float">) => Clamp(x, 0, 1)

export const Saturate = Clamp01

export const OneMinus = (v: Input<"float">) => Float(Sub(1, v), { name: "OneMinus" })

export const Mix = <T extends GLSLType>(a: Input<T>, b: Input<T>, f: Input<"float">) =>
	Unit(type(a), $`mix(${a}, ${b}, ${f})`)

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

export const Min = <T extends GLSLType>(a: Input<T>, b: Input<T>) =>
	Unit(type(a), $`min(${a}, ${b})`)

export const Max = <T extends GLSLType>(a: Input<T>, b: Input<T>) =>
	Unit(type(a), $`max(${a}, ${b})`)
