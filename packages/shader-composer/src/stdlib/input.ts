import { PerspectiveCamera, Vector2 } from "three"
import { $ } from "../expressions"
import { GLSLType, JSTypes, Unit, UnitConfig, UpdateCallback } from "../units"
import { Vec2 } from "./values"

/**
 * Returns the current fragment's on-screen coordinate.
 */
export const FragmentCoordinate = Vec2($`gl_FragCoord.xy`, {
  name: "Fragment Coordinate",
  only: "fragment"
})

export type Uniform<T extends GLSLType, J extends JSTypes[T] = JSTypes[T]> = Unit<T> & {
  value: J
}

export const Uniform = <T extends GLSLType, J extends JSTypes[T]>(
  type: T,
  initialValue: J,
  extras?: Partial<UnitConfig<T>>
): Uniform<T, J> => {
  const uniform = { value: initialValue }

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
    set value(v: J) {
      uniform.value = v
    },

    get value(): J {
      return uniform.value
    }
  }
}

export const Time = (initial: number = 0) => {
  const uniform: Uniform<"float"> = Uniform("float", initial, {
    name: "Time Uniform",
    update: (dt) => (uniform.value += dt)
  })

  return uniform
}

export const Resolution = Uniform("vec2", new Vector2(0, 0), {
  name: "Current Render Resolution",

  update: (dt, camera, scene, gl) => {
    Resolution.value.x = gl.domElement.width
    Resolution.value.y = gl.domElement.height
  }
})

export const CameraNear = Uniform("float", 0 as number, {
  name: "Camera Near Plane",

  update: (_, camera) => {
    if (camera instanceof PerspectiveCamera) {
      CameraNear.value = camera.near
    }
  }
})

export const CameraFar = Uniform("float", 0 as number, {
  name: "Camera Far Plane",

  update: (_, camera) => {
    if (camera instanceof PerspectiveCamera) {
      CameraFar.value = camera.far
    }
  }
})

export const ScreenUV = Vec2($`${FragmentCoordinate} / ${Resolution}`, {
  name: "Screen UV"
})
