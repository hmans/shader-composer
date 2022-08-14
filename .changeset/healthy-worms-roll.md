---
"shader-composer": minor
---

**Breaking Change:** The `Input<T>` type started out named `Value<T>`, and we've kept around a type alias for that to not break existing code. This `Value` type has now been removed; please use `Input`.
