import { Color, Matrix3, Matrix4, Vector2, Vector3, Vector4 } from "three"
import { Expression } from "./expressions"

export type Program = "vertex" | "fragment"

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

	only?: Program

	/* Chunks */
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

export const isUnitInProgram = (unit: Unit, program: Program) =>
	[undefined, program].includes(unit._unitConfig.only)

const makeUnit = <T extends GLSLType>(type: T) => (
	v: Value<T>,
	extras?: Partial<UnitConfig>
) => Unit(type, v, extras)

export const Float = makeUnit("float")
export const Bool = makeUnit("bool")
export const Vec2 = makeUnit("vec2")
export const Vec3 = makeUnit("vec3")
export const Vec4 = makeUnit("vec4")
export const Mat3 = makeUnit("mat3")
export const Mat4 = makeUnit("mat4")

export const Master = (extras?: Partial<UnitConfig>) => Bool(true, extras)
