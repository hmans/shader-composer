import { useFrame } from "@react-three/fiber"
import { useLayoutEffect, useMemo } from "react"
import {
  compileShader,
  GLSLType,
  JSTypes,
  Uniform,
  Unit,
  UnitConfig,
  updateCameraUniforms,
  updateResolutionUniform
} from "shader-composer"

export const useShader = (ctor: () => Unit, deps?: any) => {
  const [shader, { update }] = useMemo(() => compileShader(ctor()), deps)

  useFrame(({ gl, scene, camera }, dt) => {
    updateCameraUniforms(camera)

    /* TODO: use gl's dom element dimensions */
    updateResolutionUniform(window.innerWidth, window.innerHeight)
    update(dt)
  })

  return shader
}

export const useUniform = <T extends GLSLType>(
  type: T,
  value: JSTypes[T],
  config?: UnitConfig<T>
) => {
  const uniform = useMemo(() => {
    return Uniform(type, { value }, config)
  }, [])

  useLayoutEffect(() => {
    uniform.value = value
  }, [value])

  return uniform
}
