import { Color, Matrix3, Matrix4, Vector2, Vector3, Vector4 } from "three"
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

export type Value<T extends GLSLType = any> = Expression | JSTypes[T] | Unit<T>

export type UnitConfig = {
	name: string
	variableName?: string
	vertexHeader?: Expression
	vertexBody?: Expression
	fragmentHeader?: Expression
	fragmentBody?: Expression
}

export type Unit<T extends GLSLType = any> = {
	_: "Unit"
	_unitConfig: UnitConfig
	type: T
	value: Value<T>
}

export const Unit = <T extends GLSLType>(
	type: T,
	value: Value<T>,
	config?: Partial<UnitConfig>
): Unit<T> => {
	const unit: Unit<T> = {
		_: "Unit",
		type,
		value,

		_unitConfig: {
			name: "Anonymous",
			...config
		}
	}

	return unit
}

export function isUnit(value: any): value is Unit {
	return value && value._ === "Unit"
}
