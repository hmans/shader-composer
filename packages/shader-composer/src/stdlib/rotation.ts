import { $, glsl } from "../expressions"
import { Snippet } from "../snippets"
import { Value, Mat4, Mat3 } from "../units"
import { rotation3d, rotation3dX, rotation3dY, rotation3dZ } from "../vendor/glsl-rotate"

export const Rotation3D = (axis: Value<"vec3">, angle: Value<"float">) =>
	Mat4($`${rotation3d}(${axis}, ${angle})`)

export const Rotation3DX = (angle: Value<"float">) => Mat3($`${rotation3dX}(${angle})`)

export const Rotation3DY = (angle: Value<"float">) => Mat3($`${rotation3dY}(${angle})`)

export const Rotation3DZ = (angle: Value<"float">) => Mat3($`${rotation3dZ}(${angle})`)
