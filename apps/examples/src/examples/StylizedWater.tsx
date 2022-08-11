import { Float } from "@react-three/drei"
import { MeshProps } from "@react-three/fiber"
import { useControls } from "leva"
import {
  Abs,
  Add,
  CustomShaderMaterialMaster,
  Div,
  Mix,
  Mul,
  NormalizePlusMinusOne,
  OneMinus,
  PerspectiveDepth,
  pipe,
  Saturate,
  SceneColor,
  ScreenUV,
  Smoothstep,
  Sub,
  Time,
  Vec3,
  VertexNormal,
  VertexPosition
} from "shader-composer"
import { useRenderPass, useShader, useUniformUnit } from "shader-composer-r3f"
import { PSRDNoise3D, SceneDepthTexture } from "shader-composer-toybox"
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
  const scene = useRenderPass({ layer: Layers.TransparentFX })

  const controls = useControls("Water", {
    calmness: { value: 0.5, min: 0, max: 1 },
    shallow: "#00877d",
    deep: "#06192e",
    foam: "white"
  })

  const calmness = useUniformUnit("float", controls.calmness)

  const colors = {
    shallow: useUniformUnit("vec3", new Color(controls.shallow)),
    deep: useUniformUnit("vec3", new Color(controls.deep)),
    foam: useUniformUnit("vec3", new Color(controls.foam))
  }

  const shader = useShader(() => {
    const time = Time()

    const waveNoise = Add(
      PSRDNoise3D(Add(VertexPosition, time)),
      PSRDNoise3D(Sub(VertexPosition, time))
    )
    const refractedUV = Add(ScreenUV, Mul(waveNoise, 0.01))

    const sceneDepth = PerspectiveDepth(refractedUV, scene.depthTexture)

    const depth = Sub(VertexPosition.view.z, sceneDepth)

    const deepAmount = Smoothstep(3, 8, depth)
    const foamAmount = Add(Smoothstep(0.7, 0.6, depth), 0.01)

    const foamNoise = pipe(
      VertexPosition,
      (v) => Add(v, Mul(time, 0.2)),
      (v) => PSRDNoise3D(v),
      (v) => Smoothstep(0.8, 0.7, v)
    )

    return CustomShaderMaterialMaster({
      diffuseColor: pipe(
        colors.shallow,
        (v) => Mix(v, SceneColor(refractedUV, scene.texture).color, 0.6),
        (v) => Mix(v, colors.deep, deepAmount),
        (v) => Mix(v, colors.foam, Mul(foamNoise, foamAmount))
      ),

      roughness: foamAmount,

      normal: pipe(VertexNormal, (v) =>
        Add(
          v,
          pipe(
            calmness,
            (v) => OneMinus(v),
            (v) => Mul(waveNoise, v),
            (v) => Mul(v, 0.2)
          )
        )
      )
    })
  }, [])

  return (
    <mesh {...props} rotation-x={-Math.PI / 2}>
      <planeGeometry args={[32, 32, 50, 50]} />
      <CustomShaderMaterial
        baseMaterial={MeshStandardMaterial}
        {...shader}
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
