import { $ } from "../expressions"
import { Input } from "../units"
import { rotation3d, rotation3dX, rotation3dY, rotation3dZ } from "../vendor/glsl-rotate"
import { Mat3, Mat4 } from "./values"

export const Rotation3D = (axis: Input<"vec3">, angle: Input<"float">) =>
	Mat4($`${rotation3d}(${axis}, ${angle})`)

export const Rotation3DX = (angle: Input<"float">) => Mat3($`${rotation3dX}(${angle})`)

export const Rotation3DY = (angle: Input<"float">) => Mat3($`${rotation3dY}(${angle})`)

export const Rotation3DZ = (angle: Input<"float">) => Mat3($`${rotation3dZ}(${angle})`)
