import { $ } from "../expressions"
import { type } from "../glslType"
import { Bool, GLSLType, Unit, Input } from "../units"

export const If = <T extends GLSLType>(
	expression: Input<"bool">,
	then: Input<T>,
	else_: Input<T>
) => Unit(type(then) as T, $`(${expression} ? ${then} : ${else_})`)

export const GreaterOrEqual = <T extends GLSLType>(a: Input<T>, b: Input<T>) =>
	Bool($`(${a} >= ${b})`)
