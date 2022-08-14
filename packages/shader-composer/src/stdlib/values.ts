import { $ } from "../expressions"
import { GLSLType, Input, Unit, UnitConfig } from "../units"

const makeUnitFactory = <T extends GLSLType>(type: T) => (
  v: Input<T>,
  extras?: Partial<UnitConfig<T>>
) => Unit(type, v, extras) as Unit<T>

export const Float = makeUnitFactory("float")

export const Int = makeUnitFactory("int")
export const Bool = makeUnitFactory("bool")
export const Vec2 = makeUnitFactory("vec2")
export const Vec3 = makeUnitFactory("vec3")
export const Vec4 = makeUnitFactory("vec4")

export const Mat3 = makeUnitFactory("mat3")
export const Mat4 = makeUnitFactory("mat4")

export const vec2 = (
  x: Input<"float"> = 0,
  y: Input<"float"> = 0,
  extras?: Partial<UnitConfig<"vec2">>
) => Vec2($`vec2(${x}, ${y})`, extras)

export const vec3 = (
  x: Input<"float"> = 0,
  y: Input<"float"> = 0,
  z: Input<"float"> = 0,
  extras?: Partial<UnitConfig<"vec3">>
) => Vec3($`vec3(${x}, ${y}, ${z})`, extras)

export const vec4 = (
  x: Input<"float"> = 0,
  y: Input<"float"> = 0,
  z: Input<"float"> = 0,
  w: Input<"float"> = 0,
  extras?: Partial<UnitConfig<"vec4">>
) => Vec4($`vec4(${x}, ${y}, ${z}, ${w})`, extras)

/** Cast the given value to a mat3. */
export const mat3 = (i: Input<"mat3" | "mat4">) => Mat3($`mat3(${i})`)

/** Cast the given value to a mat4. */
export const mat4 = (i: Input<"mat3" | "mat4">) => Mat4($`mat4(${i})`)

export const Master = (extras?: Partial<UnitConfig<"bool">>) => Bool(true, extras)
