import { $ } from "../expressions"
import { type } from "../glslType"
import { Bool, GLSLType, Unit, Value } from "../units"

export const If = <T extends GLSLType>(
	expression: Value<"bool">,
	then: Value<T>,
	else_: Value<T>
) => Unit(type(then) as T, $`(${expression} ? ${then} : ${else_})`)

export const GreaterOrEqual = <T extends GLSLType>(a: Value<T>, b: Value<T>) =>
	Bool($`(${a} >= ${b})`)
