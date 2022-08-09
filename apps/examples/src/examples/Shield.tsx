import { useThree } from "@react-three/fiber"
import {
  CustomShaderMaterialMaster,
  SceneDepth,
  ScreenUV,
  SplitVector2,
  UV,
  vec3
} from "shader-composer"
import { useShader } from "shader-composer-r3f"
import { MeshStandardMaterial } from "three"
import CustomShaderMaterial from "three-custom-shader-material"

export default function Shield() {
  const { camera, gl, scene } = useThree()

  const shader = useShader(() => {
    const [x, y] = SplitVector2(ScreenUV)

    return CustomShaderMaterialMaster({
      fragColor: vec3(x, y, 0.0)
    })
  })

  console.log(shader.fragmentShader)

  return (
    <group>
      <mesh position={[0, -0.5, -0.5]}>
        <icosahedronGeometry args={[1.3, 8]} />

        <CustomShaderMaterial
          baseMaterial={MeshStandardMaterial}
          {...shader}
          transparent
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
