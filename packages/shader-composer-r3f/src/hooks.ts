import { useFrame } from "@react-three/fiber"
import { useLayoutEffect, useMemo } from "react"
import { compileShader, GLSLType, JSTypes, Unit } from "shader-composer"
import { Uniform } from "shader-composer/stdlib"

export const useShader = (ctor: () => Unit, deps?: any) => {
	const [shader, { update }] = useMemo(() => compileShader(ctor()), deps)
	useFrame((_, dt) => update(dt))
	return shader
}

export const useUniform = <T extends GLSLType>(type: T, value: JSTypes[T]) => {
	const uniform = useMemo(() => {
		return Uniform(type, value)
	}, [])

	useLayoutEffect(() => {
		uniform.value = value
	}, [value])

	return uniform
}
