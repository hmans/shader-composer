import { compileShader, Unit } from "shader-composer"
import { useMemo } from "react"
import { useFrame } from "@react-three/fiber"

export const useShader = (ctor: () => Unit) => {
	const [shader, update] = useMemo(() => compileShader(ctor()), [])
	useFrame((_, dt) => update(dt))
	return shader
}
