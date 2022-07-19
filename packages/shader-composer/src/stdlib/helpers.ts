import { GLSLType, Unit, Value } from "../units"

export const Pipe = <T extends GLSLType>(
	v: Value<T>,
	...ops: ((v: Value<T>) => Unit<T>)[]
) => ops.reduce((acc, op) => op(acc), v) as Unit<T>
