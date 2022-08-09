---
"shader-composer": minor
---

The signature of the units' optional `update` function has been extended to include not only `dt` (the deltatime), but also, in that order, `camera` (a reference to a Three.js camera), `scene` (a reference to the scene being rendered), and `gl` (a reference to the `WebGLRenderer` instance doing the rendering.)

The same change was made to the `update` function returned by `compileShader`. If you are using Shader Composer with vanilla Three.js, you are expected to pass all of these arguments to the function:

```js
const [shader, { update }] = compileShader(root)

/* In your render loop */
update(dt, camera, scene, gl)
```

If you are using `shader-composer-r3f`, this is done automatically for you, using the active scene and the current default camera.
