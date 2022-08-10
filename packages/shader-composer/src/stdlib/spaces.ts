import { $ } from "../expressions"
import { type } from "../glslType"
import { Input } from "../units"
import { Vec4 } from "./values"

const castToVec4 = (v: Input<"vec3" | "vec4">) =>
  type(v) === "vec4" ? v : $`vec4(${v}, 1.0)`

/**
 * Converts the given position vector (which is assumed to be in local space)
 * to view space.
 */
export const ToViewSpace = (position: Input<"vec3" | "vec4">) =>
  Vec4(
    $`
      #ifdef USE_INSTANCING
      instanceMatrix *
      #endif
      modelViewMatrix * ${castToVec4(position)}
    `,
    { varying: true }
  )
