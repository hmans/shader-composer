---
"shader-composer": minor
---

Added `RawDepth` and `PerspectiveDepth`, two units that will read depth values from a provided sampler2D unit containing a depth texture. The user is expected to generate this texture in a pre-render pass. (The examples app contains a `useRenderPass` hook with an example implementation, but you can also use `THREE.EffectComposer` or the `postprocessing` library.)

![image](https://user-images.githubusercontent.com/1061/183882159-d9aa5403-9993-46ba-9f7a-c86ad2877ee3.png)
