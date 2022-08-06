import { Add, Div, Mix, Mul, Sub } from "../stdlib"
import { GLSLType, Input } from "../units"

export const mix = <T extends GLSLType>(b: Input<T>, f: Input<"float">) => (
	a: Input<T>
) => Mix(a, b, f)

export const add = <B extends GLSLType>(b: Input<B>) => <A extends GLSLType>(
	a: Input<A>
) => Add(a, b)

export const sub = <B extends GLSLType>(b: Input<B>) => <A extends GLSLType>(
	a: Input<A>
) => Sub(a, b)

export const mul = <B extends GLSLType>(b: Input<B>) => <A extends GLSLType>(
	a: Input<A>
) => Mul(a, b)

export const div = <B extends GLSLType>(b: Input<B>) => <A extends GLSLType>(
	a: Input<A>
) => Div(a, b)

/*
We're re-exporting the very useful `pipe` from fp-ts here. Mostly
because it's such a great tool for use with Shader Composer, but also
because there seem to be some issues around importing from `fp-ts/lib/*`
when used in a bundle splitting environment. :(

In the long run, we will probably remove the dependency and provide
our own Pipe implementation. (Any takers?)
*/
export { flow, pipe } from "fp-ts/es6/function"
