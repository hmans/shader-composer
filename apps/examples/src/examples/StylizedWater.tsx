import { Float } from "@react-three/drei"
import { MeshProps } from "@react-three/fiber"
import { useControls } from "leva"
import {
  Add,
  Clamp,
  CustomShaderMaterialMaster,
  Input,
  Mix,
  Mul,
  NormalizePlusMinusOne,
  OneMinus,
  PerspectiveDepth,
  pipe,
  SceneColor,
  ScreenUV,
  Smoothstep,
  Step,
  Sub,
  Time,
  VertexNormal,
  VertexPosition
} from "shader-composer"
import { useRenderPass, useShader, useUniformUnit } from "shader-composer-r3f"
import { PSRDNoise3D } from "shader-composer-toybox"
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

  /* Let's run a pre-pass that will render the scene, minus our
  water, to render & depth textures that we will source later. */
  const scene = useRenderPass({ layer: Layers.TransparentFX })

  const shader = useShader(() => {
    /* Get a time uniform, always useful for time-based effects! */
    const time = Time()

    /* Calculate some overlapping noise. We're going to use this
    to change the geometry original normals and scene color UVs to
    create the water surface effect. */
    const waveNoise = Add(
      PSRDNoise3D(Add(VertexPosition, time)),
      PSRDNoise3D(Sub(VertexPosition, time))
    )

    /* Modify the screen UV based on the wave noise. */
    const refractedUV = pipe(
      waveNoise,
      (v) => Mul(v, 0.01),
      (v) => Add(ScreenUV, v)
    )

    /* Calculate the depth by comparing the current fragment's
    depth in view space to the depth of the scene. */
    const depth = pipe(
      scene.depthTexture,
      (v) => PerspectiveDepth(refractedUV, v),
      (v) => Sub(VertexPosition.view.z, v)
    )

    /* Grab the original color from the pre-pass' render texture. */
    const originalColor = SceneColor(refractedUV, scene.texture).color

    /* Let's decide on some factors for specific "parts" of the water
    surface by smooth-stepping the depth. */
    const deepFactor = Smoothstep(3, 8, depth)
    const foamFactor = Smoothstep(2, 0, depth)

    /* Now let's create a foam texture based on noise. */
    const foam = pipe(
      VertexPosition,
      (v) => Add(v, Mul(time, 0.2)),
      (v) => PSRDNoise3D(v),
      (v) => NormalizePlusMinusOne(v),
      (v) => Step(OneMinus(foamFactor), v),
      (v) => Clamp(0, 0.8, v)
    )

    /* Calculate the extent to which we will be "distorting" the water
    by changing its normals later */
    const surfaceDistortion = pipe(
      calmness,
      (v) => OneMinus(v),
      (v) => Mul(waveNoise, v),
      (v) => Mul(v, 0.2)
    )

    const Waves = (xyz: Input<"vec3">, normal: Input<"vec3">, time: Input<"float">) => {
      const scaledTime = Mul(time, 0.2)
      const scaledPosition = Mul(xyz, 0.1)
      const noise = PSRDNoise3D(Add(scaledPosition, scaledTime))
      const scaledNoise = Mul(noise, 0.2)

      return Add(xyz, Mul(normal, scaledNoise))
    }

    return CustomShaderMaterialMaster({
      position: pipe(VertexPosition, (v) =>
        Mix(Waves(v, VertexNormal, time), v, calmness)
      ),

      diffuseColor: pipe(
        colors.shallow,
        (v) => Mix(v, originalColor, 0.5),
        (v) => Mix(v, colors.deep, deepFactor),
        (v) => Mix(v, colors.foam, foam)
      ),

      roughness: foamFactor,

      normal: pipe(VertexNormal, (v) => Add(v, surfaceDistortion))
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
