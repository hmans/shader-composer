---
"shader-composer": minor
---

**Breaking Change:** The second value returned by `compilerShader` no longer includes the `units` property. Please use the `walkTree` and `collectFromTree` functions to inspect the unit tree.
