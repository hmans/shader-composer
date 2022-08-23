---
"shader-composer": patch
---

In `CustomShaderMaterialMaster`, only write to `csm_Roughness` and `csm_Metalness` when the shader is used within a MeshStandardMaterial or MeshPhysicalMaterial.
