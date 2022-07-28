---
"shader-composer": patch
---

Adds `walkTree`, a utility function that takes a graph item (unit, expression, or snippet), and then walks the dependency tree starting at that item, invoking a callback function for every item encountered.
