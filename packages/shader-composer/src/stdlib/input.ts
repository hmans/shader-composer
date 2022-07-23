import { Vector2 } from "three"
import { $ } from "../expressions"
import {
	Float,
	GLSLType,
	JSTypes,
	UniformConfiguration,
	Unit,
	UnitConfig
} from "../units"

export const Uniform = <T extends GLSLType, U extends JSTypes[T]>(
	type: T,
	value: U,
	name: string,
	extras?: Partial<UnitConfig<T>>
) => {
	const uniform = { type, value }

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

export const Time = () => {
	const uniform = Uniform("float", 0, uniqueUniformName())

	return Float(uniform, { update: (dt) => (uniform.value += dt) })
}

export const Resolution = Uniform("vec2", new Vector2(0, 0), "u_resolution")

export const uniqueUniformName = () => `u_${Math.floor(Math.random() * 1000000)}`
