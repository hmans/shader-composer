import { $, glsl } from "../expressions"
import { Snippet } from "../snippets"
import { Value, Mat4 } from "../units"
import { rotation3d } from "../vendor/glsl-rotate"

export const Rotation3D = (axis: Value<"vec3">, angle: Value<"float">) =>
	Mat4($`${rotation3d}(${axis}, ${angle})`)
