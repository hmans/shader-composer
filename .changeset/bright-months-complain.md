---
"shader-composer": patch
---

Added `Attribute` unit, for accessing geometry attributes, and automatically make their values accessible to the fragment shader by way of a varying.

```js
const color = Attribute("vec3", "color")
```
