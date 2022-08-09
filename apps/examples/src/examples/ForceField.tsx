import { useThree } from "@react-three/fiber"
import { useControls } from "leva"
import {
  Add,
  ConvertToViewSpace,
  CustomShaderMaterialMaster,
  Mul,
  OneMinus,
  pipe,
  Saturate,
  SceneDepth,
  ScreenUV,
  Smoothstep,
  Sub,
  Texture2D,
  TilingUV,
  Time,
  UV,
  vec2,
  VertexPosition
} from "shader-composer"
import { useShader, useUniform } from "shader-composer-r3f"
import { Color, DoubleSide, MeshStandardMaterial } from "three"
import CustomShaderMaterial from "three-custom-shader-material"
import { useRepeatingTexture } from "./helpers"

export default function ForceField() {
  const texture = useRepeatingTexture("/textures/hexgrid.jpg")

  const controls = useControls("Force Field", {
    color: "cyan",
    intensity: { value: 3, min: 0, max: 10 },
    strength: { value: 0.5, min: 0, max: 1 }
  })

  const color = useUniform("vec3", new Color(controls.color))
  const intensity = useUniform("float", controls.intensity)
  const strength = useUniform("float", controls.strength)
  const sampler2D = useUniform("sampler2D", texture)

  const shader = useShader(() => {
    const time = Time()
    const sceneDepth = SceneDepth(ScreenUV)

    const offset = vec2(Mul(time, 0.05), 0)

    const tex2d = Texture2D(sampler2D, TilingUV(UV, vec2(4, 2), offset))

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
        (v) => Add(v, Mul(tex2d.x, 0.01)),
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
