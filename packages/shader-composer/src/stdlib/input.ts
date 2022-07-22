import { $ } from "../expressions"
import { GLSLType, JSTypes, UniformConfiguration, Unit, withAPI } from "../units"

export const Uniform = <T extends GLSLType>(type: T, name: string, value?: any) => {
	const uniform: UniformConfiguration<T> = { type, value }

	const unit = Unit<T>(type, $`${name}`, {
		name: `Uniform: ${name}`,
		uniforms: { [name]: uniform }
	})

	return {
		...unit,

		get value() {
			return uniform.value
		},

		set value(v: any) {
			uniform.value = v
		}
	}
}

export const Time = Uniform("float", "u_time", 0)

export const Resolution = Uniform("vec2", "u_resolution")
