---
"shader-composer": minor
---

`compileShader` now returns `dispose` function as part of its second return value (in the same object that houses the `update` function). The user is expected to invoke this method when the shader is no longer needed.

When using `useShader` from `shader-composer-r3f`, this will be done automatically.

Similarly, units can now implement their own `dispose` functions (analogous to their `update` functions). These will be unvoked when the user invokes the `dispose` function returned by `compileShader`.
