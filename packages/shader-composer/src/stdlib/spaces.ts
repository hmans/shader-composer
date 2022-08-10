import { $ } from "../expressions"
import { Input } from "../units"
import { InstanceMatrix, ModelMatrix, ModelViewMatrix } from "./geometry"
import { Vec3 } from "./values"

export const localToViewSpace = (v: Input<"vec3">) => $`
  vec3(${ModelViewMatrix} * ${InstanceMatrix} * vec4(${v}, 1.0))
`

export const localToWorldSpace = (v: Input<"vec3">) => $`
  vec3(${ModelMatrix} * ${InstanceMatrix} * vec4(${v}, 1.0))
`

/**
 * Converts the given position vector (which is assumed to be in local space)
 * to view space.
 */
export const LocalToViewSpace = (position: Input<"vec3">) =>
  Vec3(localToViewSpace(position))

/**
 * Converts the given position vector (which is assumed to be in local space)
 * to world space.
 */
export const LocalToWorldSpace = (position: Input<"vec3">) =>
  Vec3(localToWorldSpace(position))
