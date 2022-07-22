---
"shader-composer-r3f": patch
---

New hook, `useUniform`. Will create a (randomly-named) uniform of the specified type, and effectfully update its value when the passed value changes. Example:

```js
const uniform = useUniform("float", 1)
```
