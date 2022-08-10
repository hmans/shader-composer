import { MeshProps } from "@react-three/fiber"
import { useControls } from "leva"
import {
  Add,
  CustomShaderMaterialMaster,
  Fresnel,
  LocalToViewSpace,
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
      (v) => LocalToViewSpace(v).z,
      (v) => Add(v, 0.4),
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
        (v) => Add(v, Fresnel({ power: 2 })),
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
      <Player position-y={-0.125} />
      <Obstacle position={[1.25, -0.75, -0.5]} />
      <Obstacle position={[-0.75, -0.75, 1]} scale={[1, 0.75, 0.75]} />
      <Obstacle
        position={[-1.25, -0.75, -1]}
        scale={[1, 1, 1.0]}
        rotation-y={[Math.PI / 4]}
      />
    </group>
  )
}

const Floor = () => (
  <mesh position={[0, -1, 0]}>
    <boxGeometry args={[5, 1, 5]} />
    <meshStandardMaterial color="#555" metalness={0} roughness={0.5} />
  </mesh>
)

const Obstacle = (props: MeshProps) => (
  <mesh {...props}>
    <icosahedronGeometry />
    <meshStandardMaterial color="#000" metalness={0.3} roughness={0.2} />
  </mesh>
)

const Player = (props: MeshProps) => (
  <mesh {...props} scale={0.25}>
    <capsuleGeometry args={[1, 1, 10, 20]} />
    <meshStandardMaterial color="hotpink" metalness={0} roughness={1} />
  </mesh>
)
