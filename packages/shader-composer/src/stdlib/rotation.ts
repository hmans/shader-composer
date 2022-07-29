import { $, glsl } from "../expressions"
import { Snippet } from "../snippets"
import { Input, Mat4, Mat3 } from "../units"
import { rotation3d, rotation3dX, rotation3dY, rotation3dZ } from "../vendor/glsl-rotate"

export const Rotation3D = (axis: Input<"vec3">, angle: Input<"float">) =>
	Mat4($`${rotation3d}(${axis}, ${angle})`)

export const Rotation3DX = (angle: Input<"float">) => Mat3($`${rotation3dX}(${angle})`)

export const Rotation3DY = (angle: Input<"float">) => Mat3($`${rotation3dY}(${angle})`)

export const Rotation3DZ = (angle: Input<"float">) => Mat3($`${rotation3dZ}(${angle})`)
