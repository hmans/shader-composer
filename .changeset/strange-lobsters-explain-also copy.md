---
"shader-composer": minor
---

Added `InstanceMatrix` to wrap the `instanceMatrix` attribute provided by Three.js. When instancing is disabled, it will instead return `mat4(1.0)`, so it can generally be used safely to transform a vertex.

Since the instance matrix is only available in the vertex shader and is too costly to pass to the fragment shader through a varying, this unit has been configured as "vertex only". If you're directly using this unit in your fragment shader, do it in a separate unit that you configure to use a varying.
