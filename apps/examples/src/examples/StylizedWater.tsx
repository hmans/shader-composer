import { Float } from "@react-three/drei"
import { MeshProps } from "@react-three/fiber"
import { useControls } from "leva"
import {
  Add,
  CustomShaderMaterialMaster,
  Div,
  Mix,
  OneMinus,
  PerspectiveDepth,
  pipe,
  Saturate,
  ScreenUV,
  Smoothstep,
  Sub,
  Time,
  Vec3,
  VertexPosition
} from "shader-composer"
import { useShader } from "shader-composer-r3f"
import { SceneDepthTexture } from "shader-composer-toybox"
import { Color, MeshStandardMaterial } from "three"
import CustomShaderMaterial from "three-custom-shader-material"
import { Layers } from "../r3f-venue/Layers"

export default function StylizedWater() {
  return (
    <group position-y={-2}>
      <Water layers={Layers.TransparentFX} />
      <Rock position={[-10, 0, -10]} scale={5} />
      <Rock position={[-10, -10, -10]} scale={10} />
      <Rock position={[-5, -10, -5]} scale={6} />
      <Rock position={[-3, -2, -8]} scale={4} rotation-y={2} />
      <Float>
        <Rock position={[3, -1, -3]} scale={2} rotation-y={1} />
      </Float>
    </group>
  )
}

const Water = (props: MeshProps) => {
  const controls = useControls("Water", {})

  const shader = useShader(() => {
    const time = Time()
    const sceneDepthTexture = SceneDepthTexture({ layer: Layers.TransparentFX })
    const sceneDepth = PerspectiveDepth(ScreenUV, sceneDepthTexture)

    const colors = {
      shallow: Vec3(new Color("#058")),
      deep: Vec3(new Color("#003366")),
      foam: Vec3(new Color("#eef"))
    }

    const depth = Sub(VertexPosition.view.z, sceneDepth)

    return CustomShaderMaterialMaster({
      diffuseColor: pipe(
        colors.shallow,
        (v) => Mix(v, colors.deep, Smoothstep(3, 8, depth)),
        (v) => Mix(colors.foam, v, Smoothstep(0.5, 0.51, depth))
      ),

      alpha: 0.9
    })
  }, [])

  return (
    <mesh {...props} rotation-x={-Math.PI / 2}>
      <planeGeometry args={[32, 32, 50, 50]} />
      <CustomShaderMaterial
        baseMaterial={MeshStandardMaterial}
        {...shader}
        transparent
        metalness={0.5}
        roughness={0.1}
      />
    </mesh>
  )
}

const Rock = (props: MeshProps) => (
  <mesh {...props}>
    <icosahedronGeometry args={[1, 0]} />
    <meshStandardMaterial color="#555" />
  </mesh>
)
