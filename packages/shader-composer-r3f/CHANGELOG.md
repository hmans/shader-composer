# shader-composer-r3f

## 0.1.0

### Minor Changes

- 74e6d2a: **Breaking Change:** The return signature of `compileShader` has been changed. It now returns `[shader, meta]`, where `shader` is the object containing the shader properties (like before), and `meta` is an object containing the `update` function, and a `units` array containing all units used in the tree.

## 0.0.5

### Patch Changes

- b59783e: New hook, `useUniform`. Will create a uniform of the specified type, and effectfully update its value when the passed value changes. Example:

  ```js
  const uniform = useUniform("float", 1)
  ```

## 0.0.4

### Patch Changes

- c2157ff: We're trying prereleases! Let's go!

## 0.0.4-next.0

### Patch Changes

- c2157ff: We're trying prereleases! Let's go!
- Updated dependencies [c2157ff]
  - shader-composer@0.0.4-next.0

## 0.0.3

### Patch Changes

- cc339f2: Bump version to fix changesets. :(
- Updated dependencies [cc339f2]
  - shader-composer@0.0.3

## 0.0.2

### Patch Changes

- 7e1d721: First release!
- Updated dependencies [7e1d721]
  - shader-composer@0.0.2
