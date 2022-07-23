import { Vector2 } from "three"
import { $ } from "../expressions"
import { GLSLType, JSTypes, UniformConfiguration, Unit, UnitConfig } from "../units"

export const Uniform = <T extends GLSLType, U extends JSTypes[T]>(
	type: T,
	name: string,
	value: U,
	extras?: Partial<UnitConfig<T>>
) => {
	const uniform: UniformConfiguration<T, U> = { type, value }

	const unit = Unit<T>(type, $`${name}`, {
		...extras,
		name: `Uniform: ${name}`,
		uniforms: { [name]: uniform },
		variable: false
	})

	return {
		...unit,

		toString: () => name,

		set value(v: U) {
			uniform.value = v
		},

		get value(): U {
			return uniform.value
		}
	}
}

export const Time = Uniform("float", "u_time", 0, {
	update: (dt) => console.log(dt)
})

export const Resolution = Uniform("vec2", "u_resolution", new Vector2(0, 0))
