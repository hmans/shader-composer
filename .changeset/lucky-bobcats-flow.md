---
"shader-composer": patch
---

Added new `unit(i)` cast helper. If `i` is already a unit, it will be returned; if not, it will be wrapped in a unit of the same type.
