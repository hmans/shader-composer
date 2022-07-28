import { Vector2 } from "three"
import { Float, GLSLType, JSTypes, Unit, UnitConfig } from "../units"

export const uniformName = (unit: Unit) => `u_${unit._unitConfig.variableName}`

export const Uniform = <T extends GLSLType, U extends JSTypes[T]>(
	type: T,
	initialValue: U,
	extras?: Partial<UnitConfig<T>>
) => {
	/*
	Create a uniform object. One of the reasons we need to wrap the value here
	is that there is a good chance that we will need to mutate it, and we can only
	reliably do this for scalar values if they are wrapped.
	*/
	const uniform = { value: initialValue }

	/* Create the actual unit that represents the uniform. */
	const unit = Unit<T>(type, undefined, {
		name: `Uniform (${type})`,
		...extras,
		uniform,
		variable: false
	})

	/* Return the unit with some API bits mixed in. */
	return {
		...unit,

		toString: () => uniformName(unit),

		/** The uniform's value. */
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
