import {
  CustomShaderMaterialMaster,
  Input,
  Rotate3D,
  Time,
  VertexNormal,
  VertexPosition
} from "shader-composer"
import { useShader } from "shader-composer-r3f"
import { MeshStandardMaterial, Vector3 } from "three"
import CustomShaderMaterial from "three-custom-shader-material"

export default function MatrixTransformations() {
  const shader = useShader(() => {
    /* Let's define a small function that takes a vec3 input and returns a
    Rotated version of it! */
    const rotate = (v: Input<"vec3">) => Rotate3D(v, new Vector3(0.5, 1, 0), Time())

    /* Rotate both the position and the normal using our rotation function.
    It's important to also update the normal so that the lighting is correct. */
    return CustomShaderMaterialMaster({
      position: rotate(VertexPosition),
      normal: rotate(VertexNormal)
    })
  }, [])

  return (
    <mesh>
      <boxGeometry />
      <CustomShaderMaterial
        baseMaterial={MeshStandardMaterial}
        color="orange"
        {...shader}
      />
    </mesh>
  )
}
