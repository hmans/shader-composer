---
"shader-composer": minor
---

Shader Composer's standard library now provides the new and/or improved units `Resolution`, `CameraNear` and `CameraFar`.

`Resolution` is a `vec2` uniform unit containing the current render resolution, and is automatically updated from the `WebGLRenderer` instance passed into the shader's `update` function.

`CameraNear` and `CameraFar` are `float` uniform units that contain the current camera's near and far planes, respectively, and are automatically updated from the `Camera` instance passed into the shader's `update` function.
