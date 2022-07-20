import { compileShader, Unit } from "shader-composer"
import { useMemo } from "react"
import { useFrame } from "@react-three/fiber"

export const useShader = (ctor: () => Unit, deps?: any) => {
	const [shader, update] = useMemo(() => compileShader(ctor()), deps)
	useFrame((_, dt) => update(dt))
	return shader
}
