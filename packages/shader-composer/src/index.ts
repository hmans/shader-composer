export { compileShader } from "./compiler"
export * from "./glslType"
export * from "./expressions"
export * from "./snippets"
export * from "./stdlib"
export * from "./tree"
export * from "./units"
export * from "./vendor"

/*
We're re-exporting the very useful `pipe` from fp-ts here. Mostly
because it's such a great tool for use with Shader Composer, but also
because there seem to be some issues around importing from `fp-ts/lib/*`
when used in a bundle splitting environment. :(

In the long run, we will probably remove the dependency and provide
our own Pipe implementation. (Any takers?)
*/
export { pipe, flow } from "fp-ts/es6/function"
