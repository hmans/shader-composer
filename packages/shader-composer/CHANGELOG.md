# shader-composer

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
