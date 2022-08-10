import { Float } from "@react-three/drei"
import { MeshProps } from "@react-three/fiber"
import { useControls } from "leva"
import {
  Add,
  CustomShaderMaterialMaster,
  Fresnel,
  LocalToViewSpace,
  Mul,
  OneMinus,
  PerspectiveDepth,
  pipe,
  Saturate,
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
import { useShader, useUniformUnit } from "shader-composer-r3f"
import { SceneDepthTexture } from "shader-composer-toybox"
import { Color, MeshStandardMaterial } from "three"
import CustomShaderMaterial from "three-custom-shader-material"
import { useRepeatingTexture } from "./helpers"

const Layers = {
  Default: 1,
  TransparentFX: 2
}

export default function ForceField() {
  /* Use Leva for some user input */
  const controls = useControls("Force Field", {
    color: "cyan",
    intensity: { value: 3, min: 0, max: 10 },
    strength: { value: 0.5, min: 0, max: 1 }
  })

  /* Create a bunch of uniforms */
  const color = useUniformUnit("vec3", new Color(controls.color))
  const intensity = useUniformUnit("float", controls.intensity)
  const strength = useUniformUnit("float", controls.strength)
  const sampler2D = useUniformUnit(
    "sampler2D",
    useRepeatingTexture("/textures/hexgrid.jpg")
  )

  /* Define our shader */
  const shader = useShader(() => {
    /* Define a time-based texture offset, and sample the force field texture. */
    const time = Time()
    const textureOffset = vec2(Mul(time, 0.05), Mul(time, 0.03))
    const texture = Texture2D(sampler2D, TilingUV(UV, vec2(4, 2), textureOffset))

    /* Get the depth of the current fragment. */
    const sceneDepthTexture = SceneDepthTexture({ layer: Layers.TransparentFX })
    const sceneDepth = PerspectiveDepth(ScreenUV, sceneDepthTexture)

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
      <Float floatIntensity={1} speed={2}>
        <mesh layers-mask={Layers.Default + Layers.TransparentFX}>
          <icosahedronGeometry args={[1.3, 8]} />

          <CustomShaderMaterial
            baseMaterial={MeshStandardMaterial}
            transparent
            depthWrite={false}
            {...shader}
          />
        </mesh>

        <pointLight
          intensity={8}
          decay={2}
          distance={3.5}
          color="cyan"
          castShadow
          shadow-mapSize-height={512}
          shadow-mapSize-width={512}
        />
      </Float>

      <Floor />

      <Float floatingRange={[0, 0.05]} speed={8} rotationIntensity={0}>
        <Player position-y={-0.125} />
      </Float>

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
  <mesh receiveShadow position={[0, -1, 0]}>
    <boxGeometry args={[5, 1, 5]} />
    <meshStandardMaterial color="#555" metalness={0} roughness={0.8} />
  </mesh>
)

const Obstacle = (props: MeshProps) => (
  <mesh castShadow {...props}>
    <icosahedronGeometry />
    <meshStandardMaterial color="#333" metalness={0} roughness={0.8} />
  </mesh>
)

const Player = (props: MeshProps) => (
  <mesh {...props} scale={0.25}>
    <capsuleGeometry args={[1, 1, 10, 20]} />
    <meshStandardMaterial color="hotpink" metalness={0} roughness={1} />
  </mesh>
)
