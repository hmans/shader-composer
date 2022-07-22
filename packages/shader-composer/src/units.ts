import { Color, Matrix3, Matrix4, Vector2, Vector3, Vector4 } from "three"
import { $, Expression } from "./expressions"
import { identifier } from "./util/concatenator3000"

export type Program = "vertex" | "fragment"

export type GLSLType =
	| "bool"
	| "int"
	| "float"
	| "vec2"
	| "vec3"
	| "vec4"
	| "mat3"
	| "mat4"

export type JSTypes = {
	bool: boolean
	float: number
	int: number
	vec2: Vector2 | [number, number]
	vec3: Vector3 | Color
	vec4: Vector4
	mat3: Matrix3
	mat4: Matrix4
}

export type GLSLTypeFor<T extends any> = T extends boolean
	? "bool"
	: T extends number
	? "float"
	: T extends Vector2
	? "vec2"
	: T extends Vector3 | Color
	? "vec3"
	: T extends Matrix3
	? "mat3"
	: T extends Matrix4
	? "mat4"
	: never

export type Value<T extends GLSLType = any> = Expression | JSTypes[T] | Unit<T>

export type UniformConfiguration<T extends GLSLType, U extends JSTypes[T]> = {
	type: T
	value: U
}

export type UnitConfig<T extends GLSLType> = {
	name: string
	variableName: string

	type: T
	value: Value<T>

	only?: Program
	varying: boolean

	uniforms?: Record<string, UniformConfiguration<any, any>>

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
	_unitConfig: UnitConfig<T>
	toString: () => string
} & A

export const Unit = <T extends GLSLType>(
	type: T,
	value: Value<T>,
	_config?: Partial<UnitConfig<T>>
): Unit<T> => {
	const config: UnitConfig<T> = {
		name: "Anonymous",
		type,
		value,
		varying: false,
		variableName: identifier("var", Math.floor(Math.random() * 1000000)),
		..._config
	}

	const unit: Unit<T> = {
		_: "Unit",
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

const makeUnit = <T extends GLSLType>(type: T) => (
	v: Value<T>,
	extras?: Partial<UnitConfig<T>>
) => Unit(type, v, extras) as Unit<T>

export const Float = makeUnit("float")
export const Int = makeUnit("int")
export const Bool = makeUnit("bool")
export const Vec2 = makeUnit("vec2")
export const Vec3 = makeUnit("vec3")
export const Vec4 = makeUnit("vec4")
export const Mat3 = makeUnit("mat3")
export const Mat4 = makeUnit("mat4")

export const vec2 = (
	x: Value<"float">,
	y: Value<"float">,
	extras?: Partial<UnitConfig<"vec2">>
) => Vec2($`vec2(${x}, ${y})`, extras)

export const vec3 = (
	x: Value<"float">,
	y: Value<"float">,
	z: Value<"float">,
	extras?: Partial<UnitConfig<"vec3">>
) => Vec3($`vec3(${x}, ${y}, ${z})`, extras)

export const vec4 = (
	x: Value<"float">,
	y: Value<"float">,
	z: Value<"float">,
	w: Value<"float">,
	extras?: Partial<UnitConfig<"vec4">>
) => Vec4($`vec4(${x}, ${y}, ${z}, ${w})`, extras)

export const Master = (extras?: Partial<UnitConfig<"bool">>) => Bool(true, extras)
