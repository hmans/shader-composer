---
"shader-composer": patch
---

The `Time` unit now is a constructor, meaning that you need to invoke `Time()` instead of just using `Time` directly. This also means that right now, multiple invocations of `Time()` will create multiple time uniforms that will get updated separately, so it is advised that you create a single instance of this unit and then reuse that in your shader where needed:

```ts
const time = Time()
```
