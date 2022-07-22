import { Vector2 } from "three"
import { $ } from "../expressions"
import { GLSLType, JSTypes, UniformConfiguration, Unit, withAPI } from "../units"

export const Uniform = <T extends GLSLType, U extends JSTypes[T]>(
	type: T,
	name: string,
	value: U
) => {
	const uniform: UniformConfiguration<T, U> = { type, value }

	const unit = Unit<T>(type, $`${name}`, {
		name: `Uniform: ${name}`,
		uniforms: { [name]: uniform }
	})

	return withAPI(unit, {
		get value(): U {
			return uniform.value
		},

		set value(v: U) {
			uniform.value = v
		}
	})
}

export const Time = Uniform("float", "u_time", 0)

export const Resolution = Uniform("vec2", "u_resolution", new Vector2(0, 0))
