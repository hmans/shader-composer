import {
	Color,
	IUniform,
	Matrix3,
	Matrix4,
	Texture,
	Vector2,
	Vector3,
	Vector4
} from "three"
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
	| "sampler2D"

export type JSTypes = {
	bool: boolean
	float: number
	int: number
	vec2: Vector2 | [number, number]
	vec3: Vector3 | Color
	vec4: Vector4
	mat3: Matrix3
	mat4: Matrix4
	sampler2D: Texture
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

export type UpdateCallback = (dt: number) => void

export type UnitConfig<T extends GLSLType> = {
	/**
	 * Human-readable name of this unit.
	 */
	name: string

	/**
	 * Machine-readable name of the global variable for this unit.
	 * Will be recreated by the compiler, so no need to set this yourself.
	 */
	variableName: string

	/**
	 * The GLSL type of this unit.
	 */
	type: T

	/**
	 * The value of this unit. Can be a reference to another unit,
	 * a JavaScript type that matches this unit's GLSL type, or
	 * an Expression.
	 */
	value: Value<T>

	/**
	 * If this is set to "vertex" or "fragment", the compiler will
	 * only ever render this node in the specified program. If you
	 * have units referencing gl_* variables that only exist in one
	 * of the programs, use this to make sure they never appear
	 * in the other program (which would lead to compilation failure.)
	 */
	only?: Program

	/**
	 * When set to true, the value of this unit will be represented
	 * as a "global" variable (within the program's `main` function.)
	 * Defaults to true, since most units will want to use this.
	 * When you set this to false, you need to override the unit's
	 * `toString` function to allow other units to reference it.
	 */
	variable: boolean

	/**
	 * When set to true, this variable will automatically declare a varying,
	 * calculate/source its value in the vertex program only, and pass the
	 * result to the fragment program through that varying. Default: false.
	 */
	varying: boolean

	/**
	 * An object of uniforms. Uniforms added here will automatically be
	 * declared in the program headers, and also made available in the
	 * object returned by `compilerShader`.
	 */
	uniform?: { value: JSTypes[T] }

	/**
	 * A callback that will be executed once per frame.
	 */
	update?: UpdateCallback

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
		variable: true,
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
