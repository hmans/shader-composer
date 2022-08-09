import { useThree } from "@react-three/fiber"
import { useControls } from "leva"
import {
  Add,
  ConvertToViewSpace,
  CustomShaderMaterialMaster,
  Div,
  Fresnel,
  Mul,
  OneMinus,
  pipe,
  Saturate,
  SceneDepth,
  ScreenUV,
  Smoothstep,
  SplitVector2,
  Sub,
  VertexPosition
} from "shader-composer"
import { useShader, useUniform } from "shader-composer-r3f"
import { Color, DoubleSide, MeshStandardMaterial } from "three"
import CustomShaderMaterial from "three-custom-shader-material"

export default function ForceField() {
  const { camera, gl, scene } = useThree()

  const controls = useControls("Force Field", {
    color: "cyan",
    intensity: { value: 3, min: 0, max: 10 },
    strength: { value: 0.5, min: 0, max: 1 }
  })

  const color = useUniform("vec3", new Color(controls.color))
  const intensity = useUniform("float", controls.intensity)
  const strength = useUniform("float", controls.strength)

  const shader = useShader(() => {
    const sceneDepth = SceneDepth(ScreenUV, { camera, gl, scene })

    const distance = pipe(
      VertexPosition,
      (v) => ConvertToViewSpace(v).z,
      (v) => Add(v, 0.5),
      (v) => Sub(v, sceneDepth),
      (v) => Smoothstep(0, 1, v)
    )

    return CustomShaderMaterialMaster({
      emissiveColor: Mul(color, intensity),

      alpha: pipe(
        distance,
        (v) => OneMinus(v),
        (v) => Mul(v, strength),
        (v) => Add(v, 0.005),
        (v) => Saturate(v)
      )
    })
  }, [])

  return (
    <group>
      <mesh position={[0, -0.5, -0.5]}>
        <icosahedronGeometry args={[1.3, 8]} />

        <CustomShaderMaterial
          baseMaterial={MeshStandardMaterial}
          transparent
          depthWrite={false}
          side={DoubleSide}
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
