import { Vector2, Vector3, Color, Vector4, Matrix3, Matrix4 } from "three"
import { Expression } from "./expressions"
import { identifier } from "./lib/concatenator3000"

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

export type Value<T extends GLSLType = any> = Expression | JSTypes[T] | Node<T>

export type NodeConfig = {
	name: string
	variableName: string
	vertexHeader?: Expression
	vertexBody?: Expression
	fragmentHeader?: Expression
	fragmentBody?: Expression
}

export type Node<T extends GLSLType = any> = {
	_node: NodeConfig
	type: T
	value: Value<T>
}

export const Node = <T extends GLSLType>(
	type: T,
	value: Value<T>,
	config?: Partial<NodeConfig>
): Node<T> => {
	const node = {
		_node: {
			name: "Anonymous",
			variableName: identifier("anonymous", Math.floor(Math.random() * 100000)),
			...config
		},
		type,
		value
	}

	return node
}

export function isNode(value: any): value is Node {
	return value && value._node
}
