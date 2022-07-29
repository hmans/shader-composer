# shader-composer

## 0.1.3

### Patch Changes

- 3350f94: **Fixed:** `vec4` values were not rendering correctly in GLSL. Ouch!
- 8b55c9c: **Added:** `collectFromTree`, which returns all items from the given tree matching a specific condition.
- 3350f94: **Added:** `Rotation3DX(angle)`, `Rotation3DY(angle)`, `Rotation3DZ(angle)` and `Rotation3D(axis, angle)` units returning transformation matrices expressing the specified rotation. (Multiply your positions etc. with them to apply them!)
- 3350f94: **Fixed:** `mat3` and `mat4` values were not rendering _at all_ in GLSL. Woops!

## 0.1.2

### Patch Changes

- 0c0f413: `walkTree` now includes constant values (numbers, Vector and Color instances, etc.) in its traversal.
- b70b206: Reverse order in which `walkTree` traverses the graph.

## 0.1.1

### Patch Changes

- 39524d2: Add `getDependencies`, a utility function that returns the dependencies of the given unit, expression, or snippet.
- 39524d2: Adds `walkTree`, a utility function that takes a graph item (unit, expression, or snippet), and then walks the dependency tree starting at that item, invoking a callback function for every item encountered.

## 0.1.0

### Minor Changes

- 74e6d2a: **Breaking Change:** The return signature of `compileShader` has been changed. It now returns `[shader, meta]`, where `shader` is the object containing the shader properties (like before), and `meta` is an object containing the `update` function, and a `units` array containing all units used in the tree.

## 0.0.11

### Patch Changes

- 0514bca: Added `Attribute` unit, for accessing geometry attributes, and automatically making their values accessible to the fragment shader by way of a varying.

  ```js
  const color = Attribute("vec3", "color")
  ```

- 61d7881: Also re-export `flow` from fp-ts. Thank you, fp-ts!

## 0.0.10

### Patch Changes

- f57f58e: New logo! Yay!

## 0.0.9

### Patch Changes

- 267d8a2: Re-export `Clamp01` as `Saturate`, because that's how people call it in that other tool.
- 5622611: Add `OneMinus` unit.

## 0.0.8

### Patch Changes

- eb25ba8: Added `Round`, `Fract`, `Floor`, `Ceil` and `Module` units.

## 0.0.7

### Patch Changes

- b59783e: Unit values can now be set to `undefined`. This is useful in units that are guaranteed to source their actual value in one of the shader chunks, or through a uniform.
- b59783e: The `Time` unit now is a constructor, meaning that you need to invoke `Time()` instead of just using `Time` directly. This also means that right now, multiple invocations of `Time()` will create multiple time uniforms that will get updated separately, so it is advised that you create a single instance of this unit and then reuse that in your shader where needed:

  ```ts
  const time = Time()
  ```

- b59783e: Uniforms now generate their own names, so you can now create a new uniform like this:

  ```ts
  const uniform = Uniform("vec3", new Vector3())
  ```

- b59783e: `Sampler2D` is gone; in its stead, you can now just use a `Uniform` with the `sampler2D` type. Example:

  ```ts
  const sampler2D = Uniform("sampler2D", texture)
  const tex2d = Texture2D(sampler2D)
  ```

## 0.0.6

### Patch Changes

- 4ae847a: Export `glslType` from shader-composer.

## 0.0.5

### Patch Changes

- 61458c3: Removed `withAPI`. It is no longer needed; just mix in your favorite properties, getters, setters etc. into the units you're creating.
- 61458c3: **Better Uniform support!** The `Uniform` unit will now automatically register its uniform value objects with the material (so you no longer have to do it yourself). It also exposes a `value` getter/setter that you can use to update or otherwise interact with the uniform's value.
- ea71657: Shader Composer now re-exports the extremely useful `pipe` from `fp-ts`.
- 61458c3: Moved `value` and `type` into `_unitConfig` to make room for nicer user-facing APIs.

## 0.0.4

### Patch Changes

- ae36751: Remove `JoinVector2/3/4`. The new `vec2/3/4` helpers do the same thing (but better.)
- ca37b48: Introduce `vec2`, `vec3`, `vec4` helpers as an alternative syntax to their capitalized counterparts. Yes, there are now three ways to construct vectors (`Vec3`, `vec3` and `JoinVector3`), and that's not great. We will eventually consolidate these in a future version.
- c2157ff: We're trying prereleases! Let's go!
- c90ab60: Force high precision in all shaders. (This will be made configurable in a future update.)

## 0.0.4-next.2

### Patch Changes

- ae36751: Remove `JoinVector2/3/4`. The new `vec2/3/4` helpers do the same thing (but better.)
- c90ab60: Force high precision in all shaders. (This will be made configurable in a future update.)

## 0.0.4-next.1

### Patch Changes

- ca37b48: Introduce `vec2`, `vec3`, `vec4` helpers as an alternative syntax to their capitalized counterparts. Yes, there are now three ways to construct vectors (`Vec3`, `vec3` and `JoinVector3`), and that's not great. We will eventually consolidate these in a future version.

## 0.0.4-next.0

### Patch Changes

- c2157ff: We're trying prereleases! Let's go!

## 0.0.3

### Patch Changes

- cc339f2: Bump version to fix changesets. :(

## 0.0.2

### Patch Changes

- 7e1d721: First release!
