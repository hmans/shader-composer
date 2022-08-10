---
"shader-composer": patch
---

Added `localToViewSpace` and `localToWorldSpace`, two functions returning expressions that convert the given vec3 or vec4 input to the respective space (by multiplying it with the correct matrices.)

Also added `LocalToViewSpace` and `LocalToWorldSpace`, which are unit implementations wrapping these expressions.
