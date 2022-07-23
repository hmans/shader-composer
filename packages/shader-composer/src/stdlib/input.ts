import { Vector2 } from "three"
import { $ } from "../expressions"
import { Float, GLSLType, JSTypes, Unit, UnitConfig } from "../units"

export const uniformName = (unit: Unit) => `u_${unit._unitConfig.variableName}`

export const Uniform = <T extends GLSLType, U extends JSTypes[T]>(
	type: T,
	value: U,
	extras?: Partial<UnitConfig<T>>
) => {
	const uniform = { value }

	const unit = Unit<T>(type, $`/* BREAK */`, {
		name: `Uniform (${type})`,
		...extras,
		uniform,
		variable: false
	})

	return {
		...unit,

		toString: () => `u_${unit._unitConfig.variableName}`,

		set value(v: U) {
			uniform.value = v
		},

		get value(): U {
			return uniform.value
		}
	}
}

export const Time = () => {
	const uniform = Uniform("float", 0, { name: "Time Uniform" })

	return Float(uniform, {
		name: "Time",
		update: (dt) => (uniform.value += dt)
	})
}

export const Resolution = Uniform("vec2", new Vector2(0, 0))
