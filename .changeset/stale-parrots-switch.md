---
"shader-composer": patch
---

`Sampler2D` is gone; in its stead, you can now just use a `Uniform` with the `sampler2D` type. Example:

```ts
const sampler2D = Uniform("sampler2D", texture)
const tex2d = Texture2D(sampler2D)
```
