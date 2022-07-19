import { Vector2, Vector3, Color, Vector4, Matrix3, Matrix4 } from "three"
import { Expression } from "./expressions"

export type GLSLType = "bool" | "float" | "vec2" | "vec3" | "vec4" | "mat3" | "mat4"

export type JSTypes = {
	bool: boolean
	float: number
	vec2: Vector2
	vec3: Vector3 | Color
	vec4: Vector4
	mat3: Matrix3
	mat4: Matrix4
}

export type Value<T extends GLSLType = any> = Expression | JSTypes[T] //| Node<T>
