import {
  Camera,
  Color,
  Matrix3,
  Matrix4,
  Scene,
  Texture,
  Vector2,
  Vector3,
  Vector4,
  WebGLRenderer
} from "three"
import { Expression } from "./expressions"
import { identifier } from "./util/concatenator3000"

export type Program = "vertex" | "fragment"

/**
 * Currently supported GLSLTypes. Probably incomplete!
 */
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

export type Input<T extends GLSLType = any> = Expression | JSTypes[T] | Unit<T>

/*
`Input` used to be named `Value`. We will export an alias here for backwards compatibility
and remove it in a future release.

TODO: Remove `Value` type!
*/
export type Value<T extends GLSLType> = Input<T>

export type UpdateCallback = (
  dt: number,
  camera: Camera,
  scene: Scene,
  gl: WebGLRenderer
) => void

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
  value: Input<T> | undefined

  /**
   * If this is set to "vertex" or "fragment", the compiler will
   * only ever render this node in the specified program. If you
   * have units referencing gl_* variables that only exist in one
   * of the programs, use this to make sure they never appear
   * in the other program (which would lead to compilation failure.)
   */
  only?: Program

  /**
   * When set to true, this variable will automatically declare a varying,
   * calculate/source its value in the vertex program only, and pass the
   * result to the fragment program through that varying. Default: false.
   */
  varying: boolean

  /**
   * An optional uniform object. It will automatically be
   * declared in the program headers, and also made available in the
   * object returned by `compilerShader`.
   */
  uniform?: { value: JSTypes[T] }
  uniformName?: string

  /**
   * A callback that will be executed once per frame.
   */
  update?: UpdateCallback

  /**
   * A callback that will be executed when the shader is being disposed.
   */
  dispose?: () => void

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

export type Unit<T extends GLSLType = any> = {
  _: "Unit"
  _unitConfig: UnitConfig<T>
}

export const Unit = <T extends GLSLType>(
  type: T,
  value: Input<T> | undefined,
  _config?: Partial<UnitConfig<T>>
) => {
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
    _unitConfig: config
  }

  return unit
}

export function isUnit(value: any): value is Unit {
  return value && value._ === "Unit"
}

export const isUnitInProgram = (unit: Unit, program: Program) =>
  [undefined, program].includes(unit._unitConfig.only)

export const uniformName = (unit: Unit) =>
  unit._unitConfig.uniformName ?? `u_${unit._unitConfig.variableName}`
