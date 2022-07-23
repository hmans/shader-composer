import { compileShader, GLSLType, JSTypes, Uniform, Unit } from "shader-composer"
import { useLayoutEffect, useMemo } from "react"
import { useFrame } from "@react-three/fiber"

export const useShader = (ctor: () => Unit, deps?: any) => {
	const [shader, update] = useMemo(() => compileShader(ctor()), deps)
	useFrame((_, dt) => update(dt))
	return shader
}

export const useUniform = <T extends GLSLType>(type: T, value: JSTypes[T]) => {
	const uniform = useMemo(() => {
		const name = `u_${Math.floor(Math.random() * 10000)}`
		return Uniform({ type, value }, name)
	}, [])

	useLayoutEffect(() => {
		uniform.value = value
	}, [value])

	return uniform
}
