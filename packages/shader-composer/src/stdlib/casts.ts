import { $ } from "../expressions"
import { type } from "../glslType"
import { GLSLType, Input, isUnit, Unit, UnitConfig } from "../units"
import { Mat3, Mat4, Vec2, Vec3, Vec4 } from "./values"

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

export const unit = <T extends GLSLType>(i: Input<T>) =>
  isUnit(i) ? i : Unit(type(i), i)
