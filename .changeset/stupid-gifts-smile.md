---
"shader-composer-r3f": patch
---

`useShader` now automatically updates the global `CameraNear`, `CameraFar` and `Resolution` uniforms ever frame (using the scene and camera provided by R3F's state.)
