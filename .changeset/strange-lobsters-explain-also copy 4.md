---
"shader-composer": minor
---

Added `SceneDepth`, a unit that will return the existing scene depth at the given screen coordinate. It does this by automatically rendering the scene to a depth texture every frame, and then reading from that depth texture using `ReadPerspectiveDepth`.

**A word of caution**: please consider this unit to be _extremely_ work-in-progress. There will most likely be many changes to it over the course of the next couple of releases!

![image](https://user-images.githubusercontent.com/1061/183882159-d9aa5403-9993-46ba-9f7a-c86ad2877ee3.png)
