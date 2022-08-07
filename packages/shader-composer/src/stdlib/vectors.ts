import { $ } from "../expressions"
import { type } from "../glslType"
import { Input, Unit } from "../units"
import { Float, Vec3 } from "./values"

export const SplitVector2 = (vector: Input<"vec2">) =>
	[Float($`${vector}.x`), Float($`${vector}.y`)] as const

export const SplitVector3 = (vector: Input<"vec3">) =>
	[Float($`${vector}.x`), Float($`${vector}.y`), Float($`${vector}.z`)] as const

export const SplitVector4 = (vector: Input<"vec4">) =>
	[
		Float($`${vector}.x`),
		Float($`${vector}.y`),
		Float($`${vector}.z`),
		Float($`${vector}.w`)
	] as const

export const orthogonal = (v: Input<"vec3">) => $/*glsl*/ `
  normalize(
    abs(${v}.x) > abs(${v}.z)
    ? vec3( -${v}.y, ${v}.x, 0.0 )
    : vec3( 0.0, -${v}.z, ${v}.y)
  )`

export const Normalize = <T extends "vec2" | "vec3" | "vec4">(a: Input<T>) =>
	Unit(type(a) as T, $`normalize(${a})`, { name: "Normalize" })

export const Cross = (a: Input<"vec3">, b: Input<"vec3">) =>
	Vec3($`cross(${a}, ${b})`, { name: "Cross Product" })

export const Dot = <T extends "vec2" | "vec3" | "vec4">(a: Input<T>, b: Input<T>) =>
	Float($`dot(${a}, ${b})`, { name: "Dot Product" })

export const Tangent = (v: Input<"vec3">) => Vec3(orthogonal(v), { name: "Tangent" })

export const Bitangent = (p: Input<"vec3">, t: Input<"vec3">) =>
	Vec3(Normalize(Cross(p, t)), { name: "Bitangent" })
