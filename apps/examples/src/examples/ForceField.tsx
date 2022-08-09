import { useControls } from "leva"
import {
  Add,
  CustomShaderMaterialMaster,
  Fresnel,
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
  ToViewSpace,
  UV,
  vec2,
  VertexPosition
} from "shader-composer"
import { useShader, useUniform } from "shader-composer-r3f"
import { Color, MeshStandardMaterial } from "three"
import CustomShaderMaterial from "three-custom-shader-material"
import { useRepeatingTexture } from "./helpers"

export default function ForceField() {
  /* Use Leva for some user input */
  const controls = useControls("Force Field", {
    color: "cyan",
    intensity: { value: 3, min: 0, max: 10 },
    strength: { value: 0.5, min: 0, max: 1 }
  })

  /* Create a bunch of uniforms */
  const color = useUniform("vec3", new Color(controls.color))
  const intensity = useUniform("float", controls.intensity)
  const strength = useUniform("float", controls.strength)
  const sampler2D = useUniform("sampler2D", useRepeatingTexture("/textures/hexgrid.jpg"))

  /* Define our shader */
  const shader = useShader(() => {
    /* Define a time-based texture offset, and sample the force field texture. */
    const time = Time()
    const textureOffset = vec2(Mul(time, 0.05), Mul(time, 0.03))
    const texture = Texture2D(sampler2D, TilingUV(UV, vec2(2, 1), textureOffset))

    /* Get the depth of the current fragment. */
    const sceneDepth = SceneDepth(ScreenUV)

    const distance = pipe(
      VertexPosition,
      (v) => ToViewSpace(v).z,
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
        (v) => Add(v, Mul(texture.x, 0.01)),
        (v) => Add(v, Fresnel({ power: 3 })),
        (v) => Saturate(v)
      )
    })
  }, [])

  return (
    <group>
      <mesh>
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
  <mesh position={[0, -1, 1]}>
    <boxGeometry args={[5, 1, 5]} />
    <meshStandardMaterial color="#222" metalness={0.5} roughness={0.5} />
  </mesh>
)

const Wall = () => (
  <mesh position={[0, 1, -1]}>
    <boxGeometry args={[5, 5, 1]} />
    <meshStandardMaterial color="#222" metalness={0.5} roughness={0.5} />
  </mesh>
)
