import { Vector2 } from "three"
import { $ } from "../expressions"
import { GLSLType, JSTypes, UniformConfiguration, Unit, UnitConfig } from "../units"

export const Uniform = <T extends GLSLType, U extends JSTypes[T]>(
	uniform: UniformConfiguration<T, U>,
	name: string,
	extras?: Partial<UnitConfig<T>>
) => {
	const unit = Unit<T>(uniform.type, $`${name}`, {
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
	const time: UniformConfiguration<"float", number> = { type: "float", value: 0 }

	return Uniform(time, uniqueUniformName(), {
		update: (dt) => (time.value += dt)
	})
}

export const Resolution = Uniform(
	{ type: "vec2", value: new Vector2(0, 0) },
	"u_resolution"
)

export const uniqueUniformName = () => `u_${Math.floor(Math.random() * 1000000)}`
