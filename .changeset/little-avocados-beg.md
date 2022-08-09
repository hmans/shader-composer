---
"shader-composer": minor
---

**Breaking Change:** `Uniform` now expects a full uniform object as its second argument (instead of just a value.) What before was `Uniform("float", 0)` is now `Uniform("float", { value: 0 })`. This makes it easier to maintain referential integrity of the uniform value objects (it is the same object that will be accessible at `material.uniforms.foo.value` later), which allows for some much-needed simplifications of the library, but also makes things a little less surprising for the user.
