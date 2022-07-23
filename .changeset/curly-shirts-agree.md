---
"shader-composer": patch
---

Uniforms now generate their own names, so you can now create a new uniform like this:

```ts
const uniform = Uniform("vec3", new Vector3())
```
