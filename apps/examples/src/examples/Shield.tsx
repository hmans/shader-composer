import { useThree } from "@react-three/fiber"
import {
  ConvertToViewSpace,
  CustomShaderMaterialMaster,
  Mul,
  pipe,
  Saturate,
  SceneDepth,
  ScreenUV,
  SplitVector2,
  Sub,
  VertexPosition
} from "shader-composer"
import { useShader } from "shader-composer-r3f"
import { Color, MeshStandardMaterial } from "three"
import CustomShaderMaterial from "three-custom-shader-material"

export default function Shield() {
  const { camera, gl, scene } = useThree()

  const shader = useShader(() => {
    /* Read existing depth from depth texture */
    const sceneDepth = SceneDepth(ScreenUV, { camera, gl, scene })

    const distance = pipe(
      VertexPosition,
      /* Convert position to view space and grab depth */
      (v) => ConvertToViewSpace(v).z,
      /* Subtract from the existing scene depth at the fragment coordinate */
      (v) => Sub(v, sceneDepth),
      /* Divide by softness factor */
      // (v) => Div(v, softness),
      /* Clamp between 0 and 1 */
      (v) => Saturate(v)
    )

    return CustomShaderMaterialMaster({
      fragColor: Mul(new Color("white"), distance)
    })
  })

  console.log(shader.fragmentShader)

  return (
    <group>
      <mesh position={[0, -0.5, -0.5]}>
        <icosahedronGeometry args={[1.3, 8]} />

        <CustomShaderMaterial
          baseMaterial={MeshStandardMaterial}
          transparent
          depthWrite={false}
          {...shader}
        />
      </mesh>

      <Floor />
      <Wall />
    </group>
  )
}

const Floor = () => (
  <mesh position={[0, -1.5, 0]}>
    <boxGeometry args={[4, 1, 4]} />
    <meshStandardMaterial color="#555" />
  </mesh>
)

const Wall = () => (
  <mesh position={[0, 0, -1.5]}>
    <boxGeometry args={[4, 4, 1]} />
    <meshStandardMaterial color="#555" />
  </mesh>
)
