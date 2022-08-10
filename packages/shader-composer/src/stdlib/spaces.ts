import { $ } from "../expressions"
import { type } from "../glslType"
import { Input } from "../units"
import { InstanceMatrix, ModelMatrix, ModelViewMatrix } from "./geometry"
import { Vec4 } from "./values"

const castToVec4 = (v: Input<"vec3" | "vec4">) =>
  type(v) === "vec4" ? v : $`vec4(${v}, 1.0)`

export const localToViewSpace = (v: Input<"vec3" | "vec4">) => $`
  (${InstanceMatrix} * ${ModelViewMatrix} * ${castToVec4(v)})
`

export const localToWorldSpace = (v: Input<"vec3" | "vec4">) => $`
  (${InstanceMatrix} * ${ModelMatrix} * ${castToVec4(v)})
`

/**
 * Converts the given position vector (which is assumed to be in local space)
 * to view space.
 */
export const LocalToViewSpace = (position: Input<"vec3" | "vec4">) =>
  Vec4(localToViewSpace(position))

/**
 * Converts the given position vector (which is assumed to be in local space)
 * to world space.
 */
export const LocalToWorldSpace = (position: Input<"vec3" | "vec4">) =>
  Vec4(localToWorldSpace(position))
