import { Camera, IUniform, PerspectiveCamera, Vector2 } from "three"
import { GLSLType, JSTypes, Unit, UnitConfig } from "../units"
import { Float } from "./values"

export const uniformName = (unit: Unit) =>
  unit._unitConfig.uniformName ?? `u_${unit._unitConfig.variableName}`

export const Uniform = <T extends GLSLType, U extends JSTypes[T]>(
  type: T,
  uniform: IUniform,
  extras?: Partial<UnitConfig<T>>
) => {
  /* Create the actual unit that represents the uniform. */
  const unit = Unit<T>(type, undefined, {
    name: `Uniform (${type})`,
    ...extras,
    uniform,
    variable: false
  })

  /* Return the unit with some API bits mixed in. */
  return {
    ...unit,

    toString: () => uniformName(unit),

    /** The uniform's value. */
    set value(v: U) {
      uniform.value = v
    },

    get value(): U {
      return uniform.value
    }
  }
}

export const Time = (initial: number = 0) => {
  const uniform = { value: initial }

  return Uniform("float", uniform, {
    name: "Time Uniform",
    update: (dt) => (uniform.value += dt)
  })
}

export const Resolution = Uniform("vec2", { value: new Vector2(0, 0) })

export const CameraNear = Uniform("float", { value: 0 })

export const CameraFar = Uniform("float", { value: 0 })

/**
 * Updates the `CameraNear` and `CameraFar` uniforms with the information from
 * the given camera instance.
 */
export const updateCameraUniforms = (camera: Camera) => {
  if (camera instanceof PerspectiveCamera) {
    CameraNear.value = camera.near
    CameraFar.value = camera.far
  }
}
