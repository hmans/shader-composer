import { Color, Matrix3, Matrix4, Vector2, Vector3, Vector4 } from "three"
import { Expression } from "./expressions"
import { identifier } from "./util/concatenator3000"

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
	variableName: string

	only?: Program
	varying: boolean

	/* Chunks */
	vertex?: {
		header?: Expression
		body?: Expression
	}

	fragment?: {
		header?: Expression
		body?: Expression
	}
}

export type Unit<T extends GLSLType = any, A extends {} = {}> = {
	_: "Unit"
	_unitConfig: UnitConfig
	type: T
	value: Value<T>
	toString: () => string
} & A

export const Unit = <T extends GLSLType>(
	type: T,
	value: Value<T>,
	_config?: Partial<UnitConfig>
): Unit<T> => {
	const config: UnitConfig = {
		name: "Anonymous",
		varying: false,
		variableName: identifier("var", Math.floor(Math.random() * 1000000)),
		..._config
	}

	const unit: Unit<T> = {
		_: "Unit",
		type,
		value,
		toString: () => config.variableName,
		_unitConfig: config
	}

	return unit
}

export function isUnit(value: any): value is Unit {
	return value && value._ === "Unit"
}

export const isUnitInProgram = (unit: Unit, program: Program) =>
	[undefined, program].includes(unit._unitConfig.only)

export const withAPI = <T extends GLSLType, A extends {}>(unit: Unit<T>, api: A) =>
	({ ...unit, ...api } as Unit<T, A>)

const makeUnit = <T extends GLSLType>(type: T) => (
	v: Value<T>,
	extras?: Partial<UnitConfig>
) => Unit(type, v, extras) as Unit<T>

export const Float = makeUnit("float")
export const Bool = makeUnit("bool")
export const Vec2 = makeUnit("vec2")
export const Vec3 = makeUnit("vec3")
export const Vec4 = makeUnit("vec4")
export const Mat3 = makeUnit("mat3")
export const Mat4 = makeUnit("mat4")

export const Master = (extras?: Partial<UnitConfig>) => Bool(true, extras)
