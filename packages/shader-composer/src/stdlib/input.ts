import { Camera, IUniform, PerspectiveCamera, Vector2 } from "three"
import { $ } from "../expressions"
import { GLSLType, JSTypes, Unit, UnitConfig } from "../units"
import { Div } from "./math"
import { Vec2 } from "./values"

/**
 * Returns the current fragment's on-screen coordinate.
 */
export const FragmentCoordinate = Vec2($`gl_FragCoord.xy`, {
  name: "Fragment Coordinate",
  only: "fragment"
})

export const Uniform = <T extends GLSLType, U extends JSTypes[T]>(
  type: T,
  uniform: IUniform<U>,
  extras?: Partial<UnitConfig<T>>
) => {
  /* Create the actual unit that represents the uniform. */
  const unit = Unit(type, undefined, {
    name: `Uniform (${type})`,
    ...extras,
    uniform
  })

  /* Return the unit with some API bits mixed in. */
  return {
    ...unit,

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

export const CameraNear = Uniform("float", { value: 0 as number })

export const CameraFar = Uniform("float", { value: 0 as number })

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

export const updateResolutionUniform = (width: number, height: number) => {
  ;(Resolution.value as Vector2).set(width, height)
}

export const ScreenUV = Vec2($`${FragmentCoordinate} / ${Resolution}`, {
  name: "Screen UV"
})
