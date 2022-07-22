export { compileShader } from "./compiler"
export * from "./expressions"
export * from "./snippets"
export * from "./stdlib"
export * from "./units"

/*
We're re-exporting the very useful `pipe` from fp-ts here. Mostly
because it's such a great tool for use with Shader Composer, but also
because there seem to be some issues around importing from `fp-ts/lib/*`
when used in a bundle splitting environment. :(

In the long run, we will probably remove the dependency and provide
our own Pipe implementation. (Any takers?)
*/
export { pipe } from "fp-ts/es6/function"
