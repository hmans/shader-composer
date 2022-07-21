import { Color, Vector2, Vector3, Vector4 } from "three"
import { isExpression } from "./expressions"
import { isSnippet } from "./snippets"
import { GLSLType, isUnit, Value } from "./units"

export const glslRepresentation = (
	value: Value | undefined,
	typeHint?: GLSLType
): string => {
	if (value === undefined) return ""
	if (isUnit(value)) return value.toString()
	if (isExpression(value)) return value.render()
	if (isSnippet(value)) return value.name

	if (typeof value === "string") return value

	if (typeof value === "boolean") return value ? "true" : "false"

	if (typeof value === "number") {
		const s = value.toString()
		return typeHint === "int" ? s : s.match(/[.e]/) ? s : `${s}.0`
	}

	if (value instanceof Color) return `vec3(${g(value.r)}, ${g(value.g)}, ${g(value.b)})`

	if (value instanceof Vector2) return `vec2(${g(value.x)}, ${g(value.y)})`

	if (value instanceof Vector3) return `vec3(${g(value.x)}, ${g(value.y)}, ${g(value.z)})`

	if (value instanceof Vector4)
		return ` vec4(${g(value.x)}, ${g(value.y)}, ${g(value.z)} ${g(value.w)})`

	/* TODO: Matrix3 */

	/* TODO: Matrix4 */

	/* Fail */
	throw new Error(`Could not render value to GLSL: ${value}`)
}

const g = glslRepresentation
