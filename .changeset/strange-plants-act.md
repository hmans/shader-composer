---
"shader-composer": minor
---

**Breaking Change:** The unit returned by `Time()` has been simplified. You can now access the uniform's value through `Time().value` (before it was `Time().uniform.value`.)
