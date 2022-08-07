import { Unit } from "../units"

/**
 * Blesses the given unit with an API.
 *
 * @param unit The unit to bless.
 * @param api A constructor function that returns an API for the unit.
 * @returns A blessed version of the specified version.
 */
export function bless<U extends Unit, A>(unit: U, api: (o: U) => A): U & A {
	return Object.assign(unit, api(unit))
}
