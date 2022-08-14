---
"shader-composer-r3f": minor
---

Added a `<Custom.* />` component that wraps all the available Three.js materials (making use of the [three-custom-shader-material](https://github.com/FarazzShaikh/THREE-CustomShaderMaterial) library), making it super-easy to create instances of these materials using your custom shaders:

```jsx
<mesh castShadow receiveShadow>
  <dodecahedronGeometry args={[2, 5]} />

  <Custom.MeshStandardMaterial {...shader} flatShading metalness={0.5} roughness={0.5} />

  <Custom.MeshDepthMaterial {...depthShader} />
</mesh>
```
