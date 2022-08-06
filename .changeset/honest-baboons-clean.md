---
"shader-composer": patch
---

**Added:** Vec2/3/4 units now expose `.x`, `.y`, `.z`, `.w` accessors for their components, so you can now, for example, directly refer to `UV.x` or `VertexNormal.z`. Sorry, no swizzling support -- _yet_! :-)
