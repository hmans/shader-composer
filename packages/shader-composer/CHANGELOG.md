# shader-composer

## 0.2.0

### Minor Changes

- 9cedc98: **Removed:** removed `With` math builder. It was experimental and not very good. If we really want something like this, it should live in `toybox` or another separate package, too.
- bb9b9c9: **Breaking Change:** The second value returned by `compilerShader` no longer includes the `units` property. Please use the `walkTree` and `collectFromTree` functions to inspect the unit tree.
- dc7bac6: **Removed:** The export `VertexNormalWorld` has been removed. The vertex normal in world space can be calculated by multiplying `VertexNormal` with `ModelMatrix`.

### Patch Changes

- c214c76: **Added:** `Dot`, a unit that calculates the dot product of two vectors.
- 4abb089: **Added:** `Tan(a)`, wrapping the GLSL expression `tan(a)`
- 8559c99: **Added:** `Asin`, `Acos`
- 5b64d3c: **Added:** `Trunc`, a new unit wrapping the GLSL `trunc` function.
- 901ff79: **Added:** `Min(a, b)` and `Max(a, b)`.
- 0d9261f: **Added:** `Length`, `Reflect` and `Refract`
- c9e35d9: **Added:** `Sqrt` and `InverseSqrt`
- 42b0798: **Added:** Vec2/3/4 units now expose `.x`, `.y`, `.z`, `.w` accessors for their components, so you can now, for example, directly refer to `UV.x` or `VertexNormal.z`. Sorry, no swizzling support -- _yet_! :-)
- f071317: **Added:** `Sign(a)`, wrapping the GLSL expression `sign(a)`.
- 3990c13: **Added:** `VertexPosition` and `VertexNormal` now expose `.world` and `.view` properties, returning the position/normal in world or view space, respectively.
- 3447459: **Added:** `Radians(a)` and `Degrees(a)`.
- 05bbe5f: **Added:** `Distance(a, b)`, returning the distance (`float`) between `a` and `b`.
- 9277d9f: **Added:** `Abs` unit, returning the absolute value of the given input.
- 6201363: **Added:** `CustomShaderMaterialMaster` now supports `roughness` and `metalness` inputs (supported by CSM 3.5.0 and up.)
- 298f5f1: **Added:** `Rotate3DX`, `Rotate3DY`, `Rotate3DZ` and `Rotate3D`, units that will immediately rotate a given vector (unlike `Rotation3DX`, `Rotation3D` etc., which just generate matrices representing the rotations.)
- c5df072: **Added:** `Exp`, `Exp2`, `Log` and `Log2`
- 094b196: **Added:** Units with uniforms now have a new configuration property `uniformName` which can be set by the user to explicitly configure the name of the shader uniform. If the name is omitted, a unique name will be generated automatically (as before).
- ba000d6: **Fixed:** `Fresnel` now uses the vertex normal _in world space_ if no other normal input is provided.

## 0.1.8

### Patch Changes

- 41c92e8: **Added:** `Time` now takes an optional argument `n` that will be used as the initial value of the time uniform.
- 41c92e8: **Added:** `Time().uniform` is now available as a reference to the uniform used by the `Time` unit. This allows you to source (or even change) the uniform's value in JS.

## 0.1.7

### Patch Changes

- a8466f2: **Fixed:** `CustomShaderMaterialMaster` now correctly sources the base material's texture map if one is given.

## 0.1.6

### Patch Changes

- 48c25c8: **Fixed:** `CustomShaderMaterialMaster` no longer overrides colors coming from the base material if no `diffuseColor` or `fragColor` inputs are specified.

## 0.1.5

### Patch Changes

- f9aa82b: **Added:** new `mat3(v)` and `mat4(v)` helpers -- they simply cast the given value `v` to their respective types.

## 0.1.4

### Patch Changes

- 9f527d7: **Changed:** The `Value` type is now officially called `Input`, but an alias to `Value` is still being exported for the time being. This alias will be removed in a future minor/major version.

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
