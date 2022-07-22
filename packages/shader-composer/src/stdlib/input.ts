import { $ } from "../expressions"
import { GLSLType, Unit } from "../units"

export const Uniform = <T extends GLSLType>(type: T, name: string, value?: any) =>
	Unit<T>(type, $`${name}`, {
		name: `Uniform: ${name}`,
		uniforms: { [name]: { type, value } }
	})

export const Time = Uniform("float", "u_time")

export const Resolution = Uniform("vec2", "u_resolution")
