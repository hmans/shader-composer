import { $ } from "../expressions"
import { Input } from "../units"
import { Vec4 } from "./values"

/**
 * Converts the given position vector (which is assumed to be in local space)
 * to view space.
 */
export const ConvertToViewSpace = (position: Input<"vec3">) =>
  Vec4(
    $`
      #ifdef USE_INSTANCING
      instanceMatrix *
      #endif
      modelViewMatrix * vec4(${position}, 1.0)
    `,
    { varying: true }
  )
