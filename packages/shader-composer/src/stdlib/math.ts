import { $ } from "../expressions"
import { type } from "../glslType"
import { Snippet } from "../snippets"
import { GLSLType, Input, Unit } from "../units"
import { Float } from "./values"

/**
 * @internal
 */
export const Operator = (name: string, operator: "+" | "-" | "*" | "/") => <
	A extends GLSLType,
	B extends GLSLType
>(
	a: Input<A>,
	b: Input<B>
) =>
	Unit(type(a), $`${a} ${operator} ${b}`, {
		name: `${name} (${type(a)})`
	})

/**
 * @internal
 */
export const UnaryOperator = (name: string, functionName: string) => <
	T extends "float" | "vec2" | "vec3" | "vec4"
>(
	a: Input<T>
) => Unit(type(a), $`${functionName}(${a})`, { name: `${name} (${type(a)})` })

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
 */
export const Sin = UnaryOperator("Sin", "sin")

/**
 * Calculates the cosine value of the input value.
 */
export const Cos = UnaryOperator("Cos", "cos")

export const Tan = UnaryOperator("Tan", "tan")

export const Asin = UnaryOperator("Asin", "asin")

export const Acos = UnaryOperator("Acos", "acos")

export const Pow = (a: Input<"float">, e: Input<"float">) =>
	Float($`pow(${a}, ${e})`, { name: "Pow" })

/**
 * A Shader Unit that finds the nearest integer less than or equal to the input value.
 * It is equivalent to the GLSL expression `trunc(a)`.
 *
 * @param a The input value.
 * @returns The truncated value of `a`.
 */
export const Trunc = UnaryOperator("Trunc", "trunc")

/**
 * A Shader Unit that finds the nearest integer to the input value.
 * It performs the GLSL expression `round(a)`.
 *
 * @param a The input value.
 * @returns The rounded value of `a`.
 */
export const Round = UnaryOperator("Round", "round")

export const Fract = UnaryOperator("Fract", "fract")

export const Floor = UnaryOperator("Floor", "floor")

export const Ceil = UnaryOperator("Ceil", "ceil")

export const Abs = UnaryOperator("Abs", "abs")

export const Sign = UnaryOperator("Sign", "sign")

/**
 * Converts the given value from degrees to radians.
 */
export const Radians = UnaryOperator("Radians", "radians")

/**
 * Converts the given value from radians to degrees.
 */
export const Degrees = UnaryOperator("Degrees", "degrees")

export const Modulo = <
	A extends "float" | "vec2" | "vec3" | "vec4",
	B extends "float" | A
>(
	a: Input<A>,
	b: Input<B>
) => Unit(type(a), $`mod(${a}, ${b})`)

export const Clamp = <T extends GLSLType>(x: Input<T>, min: Input<T>, max: Input<T>) =>
	Unit(type(x), $`clamp(${x}, ${min}, ${max})`, { name: "Clamp" })

export const Clamp01 = (x: Input<"float">) => Clamp(x, 0, 1)

export const Saturate = Clamp01

export const OneMinus = (v: Input<"float">) => Float(Sub(1, v), { name: "OneMinus" })

export const Mix = <T extends GLSLType>(a: Input<T>, b: Input<T>, f: Input<"float">) =>
	Unit(type(a), $`mix(${a}, ${b}, ${f})`, { name: "Mix" })

export const Step = (edge: Input<"float">, v: Input<"float">) =>
	Float($`step(${edge}, ${v})`, { name: "Step" })

export const Smoothstep = (min: Input<"float">, max: Input<"float">, v: Input<"float">) =>
	Float($`smoothstep(${min}, ${max}, ${v})`, { name: "Smoothstep" })

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

export const Min = <T extends "float" | "vec2" | "vec3" | "vec4">(
	a: Input<T>,
	b: Input<T>
) => Unit(type(a), $`min(${a}, ${b})`)

export const Max = <T extends "float" | "vec2" | "vec3" | "vec4">(
	a: Input<T>,
	b: Input<T>
) => Unit(type(a), $`max(${a}, ${b})`)

export const Distance = <T extends "float" | "vec2" | "vec3" | "vec4">(
	a: Input<T>,
	b: Input<T>
) => Float($`distance(${a}, ${b})`)
