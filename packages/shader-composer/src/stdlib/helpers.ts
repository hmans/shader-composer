import { GLSLType, Unit, Value } from "../units"

export type PipeFunction<T extends GLSLType> = (v: Value<T>) => Unit<T>

export type PipeOperation<T extends GLSLType> = PipeFunction<T>

export const Pipe = <T extends GLSLType>(v: Value<T>, ...ops: PipeOperation<T>[]) =>
	ops.reduce((acc, op) => op(acc), v) as Unit<T>
