import { $ } from "../expressions"
import { type } from "../glslType"
import { Snippet } from "../snippets"
import { GLSLType, Input, Unit } from "../units"
import { Float, vec3 } from "./values"

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
export const SingleArgumentFunction = <
  TA extends GLSLType = "float" | "vec2" | "vec3" | "vec4"
>(
  name: string,
  functionName: string
) => <A extends TA>(a: Input<A>) =>
  Unit(type(a), $`${functionName}(${a})`, { name: `${name} (${type(a)})` })

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
export const Sin = SingleArgumentFunction("Sin", "sin")

/**
 * Calculates the cosine value of the input value.
 */
export const Cos = SingleArgumentFunction("Cos", "cos")

export const Tan = SingleArgumentFunction("Tan", "tan")

export const Asin = SingleArgumentFunction("Asin", "asin")

export const Acos = SingleArgumentFunction("Acos", "acos")

export const Pow = <T extends "float" | "vec2" | "vec3" | "vec4">(
  a: Input<T>,
  e: Input<T>
) => Unit(type(a), $`pow(${a}, ${e})`, { name: `Pow (${type(a)})` })

export const Exp = SingleArgumentFunction("Exp", "exp")

export const Exp2 = SingleArgumentFunction("Exp2", "exp2")

export const Log = SingleArgumentFunction("Log", "log")

export const Log2 = SingleArgumentFunction("Log2", "log2")

export const Sqrt = SingleArgumentFunction("Sqrt", "sqrt")

export const InverseSqrt = SingleArgumentFunction("InverseSqrt", "inversesqrt")

/**
 * A Shader Unit that finds the nearest integer less than or equal to the input value.
 * It is equivalent to the GLSL expression `trunc(a)`.
 *
 * @param a The input value.
 * @returns The truncated value of `a`.
 */
export const Trunc = SingleArgumentFunction("Trunc", "trunc")

/**
 * A Shader Unit that finds the nearest integer to the input value.
 * It performs the GLSL expression `round(a)`.
 *
 * @param a The input value.
 * @returns The rounded value of `a`.
 */
export const Round = SingleArgumentFunction("Round", "round")

export const Fract = SingleArgumentFunction("Fract", "fract")

export const Floor = SingleArgumentFunction("Floor", "floor")

export const Ceil = SingleArgumentFunction("Ceil", "ceil")

export const Abs = SingleArgumentFunction("Abs", "abs")

export const Sign = SingleArgumentFunction("Sign", "sign")

/**
 * Converts the given value from degrees to radians.
 */
export const Radians = SingleArgumentFunction("Radians", "radians")

/**
 * Converts the given value from radians to degrees.
 */
export const Degrees = SingleArgumentFunction("Degrees", "degrees")

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

export const Mix = <T extends GLSLType>(
  a: Input<T>,
  b: Input<T>,
  ratio: Input<"float">
) => Unit(type(a), $`mix(${a}, ${b}, ${ratio})`, { name: "Mix" })

export const Lerp = Mix

export const InverseLerp = <T extends GLSLType>(a: Input<T>, b: Input<T>, c: Input<T>) =>
  Float($`(${c} - ${a}) / (${b} - ${a})`, { name: "Inverse Lerp" })

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
