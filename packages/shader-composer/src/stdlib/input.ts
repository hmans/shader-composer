import { $ } from "../expressions"
import { GLSLType, Unit } from "../units"

export const Uniform = <T extends GLSLType>(type: T, name: string) => {
	const header = $`uniform ${type} ${name};`

	return Unit<T>(type, $`${name}`, {
		name: `Uniform: ${name}`,
		vertex: { header },
		fragment: { header }
	})
}

export const Time = Uniform("float", "u_time")

export const Resolution = Uniform("vec2", "u_resolution")
