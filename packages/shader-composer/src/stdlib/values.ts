import { $ } from "../expressions"
import { GLSLType, Input, Unit, UnitConfig } from "../units"
import { bless } from "../util/bless"

const makeUnit = <T extends GLSLType, A extends {} = {}>(
	type: T,
	apiFun?: (unit: Unit<T>) => A
) => (v: Input<T>, extras?: Partial<UnitConfig<T>>) => {
	const unit = Unit(type, v, extras) as Unit<T>
	return apiFun ? bless(unit, apiFun) : unit
}

export const Float = makeUnit("float")
export const Int = makeUnit("int")
export const Bool = makeUnit("bool")
export const Vec2 = makeUnit("vec2", (unit) => ({
	x: Float($`${unit}.x`),
	y: Float($`${unit}.y`)
}))
export const Vec3 = makeUnit("vec3", (unit) => ({
	x: Float($`${unit}.x`),
	y: Float($`${unit}.y`),
	z: Float($`${unit}.z`)
}))
export const Vec4 = makeUnit("vec4", (unit) => ({
	x: Float($`${unit}.x`),
	y: Float($`${unit}.y`),
	z: Float($`${unit}.z`),
	w: Float($`${unit}.w`)
}))

export const Mat3 = makeUnit("mat3")
export const Mat4 = makeUnit("mat4")

export const vec2 = (
	x: Input<"float">,
	y: Input<"float">,
	extras?: Partial<UnitConfig<"vec2">>
) => Vec2($`vec2(${x}, ${y})`, extras)

export const vec3 = (
	x: Input<"float">,
	y: Input<"float">,
	z: Input<"float">,
	extras?: Partial<UnitConfig<"vec3">>
) => Vec3($`vec3(${x}, ${y}, ${z})`, extras)

export const vec4 = (
	x: Input<"float">,
	y: Input<"float">,
	z: Input<"float">,
	w: Input<"float">,
	extras?: Partial<UnitConfig<"vec4">>
) => Vec4($`vec4(${x}, ${y}, ${z}, ${w})`, extras)

/** Cast the given value to a mat3. */
export const mat3 = (i: Input<"mat3" | "mat4">) => Mat3($`mat3(${i})`)

/** Cast the given value to a mat4. */
export const mat4 = (i: Input<"mat3" | "mat4">) => Mat4($`mat4(${i})`)

export const Master = (extras?: Partial<UnitConfig<"bool">>) => Bool(true, extras)
