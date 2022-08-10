import { IUniform, PerspectiveCamera, Vector2 } from "three"
import { $ } from "../expressions"
import { GLSLType, JSTypes, Unit, UnitConfig } from "../units"
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
  initialValue: U,
  extras?: Partial<UnitConfig<T>>
) => {
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
    set value(v: U) {
      uniform.value = v
    },

    get value(): U {
      return uniform.value
    }
  }
}

export const Time = (initial: number = 0) => {
  const uniform = Uniform("float", initial, {
    name: "Time Uniform"
  })

  uniform._unitConfig.update = (dt) => (uniform.value += dt)

  return uniform
}

export const Resolution = Uniform("vec2", new Vector2(0, 0), {
  name: "Current Render Resolution"
})

Resolution._unitConfig.update = (dt, camera, scene, gl) => {
  Resolution.value.x = gl.domElement.width
  Resolution.value.y = gl.domElement.height
}

export const CameraNear = Uniform("float", 0 as number, {
  name: "Camera Near Plane"
})

CameraNear._unitConfig.update = (_, camera) => {
  if (camera instanceof PerspectiveCamera) {
    CameraNear.value = camera.near
  }
}

export const CameraFar = Uniform("float", 0 as number, {
  name: "Camera Far Plane"
})

CameraFar._unitConfig.update = (_, camera) => {
  if (camera instanceof PerspectiveCamera) {
    CameraFar.value = camera.far
  }
}

export const ScreenUV = Vec2($`${FragmentCoordinate} / ${Resolution}`, {
  name: "Screen UV"
})
