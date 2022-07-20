import { GLSLType, Unit, Value } from "../units"

export type PipeFunction<T extends GLSLType> = (v: Value<T>) => Unit<T>

export type PipeCompatibleFunction<T extends GLSLType> = (v: Value<T>, ...args: any[]) => Unit<T>

export type PipeOperation<T extends GLSLType> =
PipeFunction<T> |
[fun: PipeCompatibleFunction<T>, ...args: any[]]

export const Pipe = <T extends GLSLType>(v: Value<T>, ...ops: PipeOperation<T>[]) =>
	ops.reduce((acc, op) => {
		if (typeof op === "function") {
			return op(acc)
		} else {
			const [fun, ...args] = op
			return fun(acc, ...args)
		}
	}
		, v) as Unit<T>
