---
"shader-composer": minor
---

**Breaking Change:** `InstanceMatrix`, which wraps the attribute-provided `instanceMatrix`, has been marked as "vertex only" to prevent it from accidentally leaking into the fragment shader through a varying. It is recommended that if you are using this attribute, you should wrap it or the derived value into a unit with `varying: true`.
