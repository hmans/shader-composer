import { useFrame } from "@react-three/fiber"
import { useEffect, useLayoutEffect, useMemo } from "react"
import {
  compileShader,
  GLSLType,
  JSTypes,
  Uniform,
  Unit,
  UnitConfig
} from "shader-composer"

export const useShader = (ctor: () => Unit, deps?: any) => {
  const [shader, { update, dispose }] = useMemo(() => compileShader(ctor()), deps)

  useEffect(() => () => dispose(), deps)

  useFrame(({ camera, scene, gl }, dt) => {
    /* Invoke the shader tree's update functions. */
    update(dt, camera, scene, gl)
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
