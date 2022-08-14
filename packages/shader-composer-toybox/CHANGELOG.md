# shader-composer-toybox

## 0.1.0-next.0

### Minor Changes

- 104be03: **Breaking Change:** `Uniform` is now called `UniformUnit`. The r3f package's `useUniform` is now `useUniformUnit`.
- a4739b1: **Breaking Change:** The `ModifyPosition` helper has been refactored into `Displacement(displacementFunction, opts)`. The functionality remains the same, but name and signature have been changed.

### Patch Changes

- Updated dependencies [b945b21]
- Updated dependencies [847b42f]
- Updated dependencies [a4739b1]
- Updated dependencies [847b42f]
- Updated dependencies [48f1880]
- Updated dependencies [104be03]
- Updated dependencies [1155845]
- Updated dependencies [3563f33]
- Updated dependencies [a4739b1]
- Updated dependencies [a4739b1]
- Updated dependencies [847b42f]
- Updated dependencies [b945b21]
- Updated dependencies [847b42f]
- Updated dependencies [847b42f]
- Updated dependencies [847b42f]
- Updated dependencies [847b42f]
- Updated dependencies [847b42f]
- Updated dependencies [847b42f]
- Updated dependencies [b571299]
  - shader-composer@0.3.0-next.0

## 0.0.9

### Patch Changes

- 252fe37: Added `Turbulence3D` and `turbulence3D`, a unit/snippet combo turbulence function that will generate noise turbulence using the newly added PSRDNoise implementation.
- 252fe37: Alongside the units that wrap them, toybox now also exports the `simplex3DNoise`, `gerstnerWave` and `pnoise` snippets.
- 78044e1: Added `PSRDNoise2D` and `PSRDNoise3D` units (as well as `psrdnoise2` and `psrdnoise3` snippets.)

## 0.0.8

### Patch Changes

- 9f527d7: **Changed:** The `Value` type is now officially called `Input`, but an alias to `Value` is still being exported for the time being. This alias will be removed in a future minor/major version.

## 0.0.7

### Patch Changes

- cfee267: Add `Grid2D` unit.

## 0.0.6

### Patch Changes

- 4ae847a: Export `glslType` from shader-composer.

## 0.0.5

### Patch Changes

- 23e4c40: Upgraded the `Dissolve` effect to not return a color, but just a float `edge` value that can then be multiplied with a color (etc.) by the user.

## 0.0.4

### Patch Changes

- 6827654: Added `GerstnerWave` and `FBMNoise` implementations.
- 6827654: Introducing `shader-composer-toybox`, a collection of units and effects that didn't make the cut for shader-composer's standard library.

## 0.0.4-next.1

### Patch Changes

- 6827654: Added `GerstnerWave` and `FBMNoise` implementations.
- 6827654: Introducing `shader-composer-toybox`, a collection of units and effects that didn't make the cut for shader-composer's standard library.
