import { GLSLType, Unit, Value } from "../units"
import { Add, Div, Mix, Mul, Sub } from "./math"

export type PipeFunction<T extends GLSLType> = (v: Value<T>) => Unit<T>

export type PipeOperation<T extends GLSLType> = PipeFunction<T>

export const Pipe = <T extends GLSLType>(v: Value<T>, ...ops: PipeOperation<T>[]) =>
	ops.reduce((acc, op) => op(acc), v) as Unit<T>

export const $Op = <T extends GLSLType, A extends any[]>(
	fun: (target: Value<T>, ...args: A) => Unit<T>
) => (...args: A) => (target: Value<T>) => fun(target, ...args)

export const $Add = $Op(Add)
export const $Sub = $Op(Sub)
export const $Mul = $Op(Mul)
export const $Div = $Op(Div)
export const $Mix = $Op(Mix)
