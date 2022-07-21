import { $ } from "../expressions"
import { type } from "../glslType"
import { Float, Value, Unit, Vec2, Vec3, Vec4 } from "../units"

export const JoinVector2 = (x: Value<"float">, y: Value<"float">) =>
	Vec2($`vec2(${x}, ${y})`, { name: "Join Vector2" })

export const JoinVector3 = (x: Value<"float">, y: Value<"float">, z: Value<"float">) =>
	Vec3($`vec3(${x}, ${y}, ${z})`, { name: "Join Vector3" })

export const JoinVector4 = (
	x: Value<"float">,
	y: Value<"float">,
	z: Value<"float">,
	w: Value<"float">
) => Vec4($`vec4(${x}, ${y}, ${z}, ${w})`, { name: "Join Vector4" })

export const SplitVector2 = (vector: Value<"vec2">) =>
	[Float($`${vector}.x`), Float($`${vector}.y`)] as const

export const SplitVector3 = (vector: Value<"vec3">) =>
	[Float($`${vector}.x`), Float($`${vector}.y`), Float($`${vector}.z`)] as const

export const SplitVector4 = (vector: Value<"vec4">) =>
	[
		Float($`${vector}.x`),
		Float($`${vector}.y`),
		Float($`${vector}.z`),
		Float($`${vector}.w`)
	] as const

export const orthogonal = (v: Value<"vec3">) => $/*glsl*/ `
  normalize(
    abs(${v}.x) > abs(${v}.z)
    ? vec3( -${v}.y, ${v}.x, 0.0 )
    : vec3( 0.0, -${v}.z, ${v}.y)
  )`

export const normalize = (a: Value) => $`normalize(${a})`

export const Normalize = <T extends "vec2" | "vec3" | "vec4">(a: Value<T>) =>
	Unit(type(a) as T, normalize(a), { name: "Normalize" })

export const cross = (a: Value<"vec3">, b: Value<"vec3">) => $`cross(${a}, ${b})`

export const Cross = (a: Value<"vec3">, b: Value<"vec3">) =>
	Vec3(cross(a, b), { name: "Cross" })

export const Tangent = (v: Value<"vec3">) => Vec3(orthogonal(v), { name: "Tangent" })

export const Bitangent = (p: Value<"vec3">, t: Value<"vec3">) =>
	Vec3(normalize(cross(p, t)), { name: "Bitangent" })
