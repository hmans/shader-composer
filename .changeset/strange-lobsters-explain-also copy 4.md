---
"shader-composer": minor
---

Added `RawDepth` and `PerspectiveDepth`, two units that will read depth values from a provided sampler2D unit (containing a depth texture). The user can choose to generate this depth texture however they prefer, but to make things easy, a `SceneDepthTexture` unit that will do this has been added to the Toybox package.

![image](https://user-images.githubusercontent.com/1061/183882159-d9aa5403-9993-46ba-9f7a-c86ad2877ee3.png)
