---
"shader-composer": minor
---

**Breaking Change:** Removed the `variable` configuration setting for units. You were probably not using it, and it really only existed to give uniform units a chance to not attempt to create `sampler2D foo = u_foo` variables (which is not allowed in GLSL.) The uniform issue being handled differently now, and this feature has been removed, further simplifying the compiler code.
