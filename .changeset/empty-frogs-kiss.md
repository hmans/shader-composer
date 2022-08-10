---
"shader-composer-toybox": patch
---

Added `SceneDepthTexture`, a `sampler2D` unit that will automatically render a depth texture for the current scene. It uses double buffering and can be configured to your preferred resolution ratio, as well as which layer to ignore when rendering (assuming that layer contains all the transparent effects that will need the texture later.)
