---
"shader-composer": minor
---

Added `InstanceMatrix` to wrap the `instanceMatrix` attribute provided by Three.js. When instancing is disabled, it will instead return `mat4(1.0)`, so it can generally be used safely to transform a vertex.
