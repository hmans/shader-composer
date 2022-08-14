import { Environment, Float as Floating } from "@react-three/drei"
import { useControls } from "leva"
import { FlatStage } from "r3f-stage"
import {
  Add,
  CustomShaderMaterialMaster,
  Float,
  GreaterOrEqual,
  If,
  Input,
  Length,
  Mix,
  Mul,
  NormalizePlusMinusOne,
  pipe,
  Pow,
  Smoothstep,
  Step,
  Sub,
  Unit,
  vec2,
  Vec3,
  vec3
} from "shader-composer"
import { useShader, useUniformUnit } from "shader-composer-r3f"
import { Displacement, PSRDNoise2D } from "shader-composer-toybox"
import { Color, MeshStandardMaterial, Vector2 } from "three"
import CustomShaderMaterial from "three-custom-shader-material"

export default function FloatingIslandExample() {
  return (
    <group>
      <Environment preset="sunset" />
      <FlatStage position-y={-2.5} />
      <Floating rotationIntensity={0}>
        <FloatingIsland />
      </Floating>
    </group>
  )
}

const FloatingIsland = () => {
  const controls = useControls("Floating Isle", {
    offset: { value: [0, 0], joystick: true, step: 0.1 },
    scale: { value: 1, min: 0.01, max: 3 }
  })

  const uniforms = {
    offset: useUniformUnit("vec2", new Vector2(...controls.offset), {
      name: "Noise Offset"
    }),

    scale: useUniformUnit("float", controls.scale, {
      name: "Noise Scale"
    })
  }

  /* A helper function that will generate some powered and scaled noise for us,
    taking into account the offset currently configured by the user. */
  const Noise = (
    v: Input<"vec2">,
    scale: Input<"float"> = 1,
    height: Input<"float"> = 1,
    pow: Input<"float"> = 1
  ) =>
    pipe(
      PSRDNoise2D(Mul(Add(v, uniforms.offset), Mul(scale, uniforms.scale))),
      (v) => NormalizePlusMinusOne(v),
      (v) => Pow(v, pow),
      (v) => Mul(v, height)
    )

  /* Let's create the shader itself! */
  const shader = useShader(() => {
    /* Set up a displacement function. It takes the existing position of a vertex and
    modifies it according to our rules. */
    const Displace = (v: Unit<"vec3">) => {
      const xz = vec2(v.x, v.z)

      const height = pipe(
        Float(0.2),
        (v) => Sub(v, Noise(xz, 0.5, 0.2)),
        (v) => Add(v, Noise(xz, 0.2, 1)),
        (v) => Add(v, Noise(xz, 1, 2, 3)),
        (v) => Mul(v, Smoothstep(2, 0.5, Length(xz)))
      )

      /* Displacement for the upper half of the island. */
      const DisplaceUpper = vec3(v.x, height, v.z)

      /* Displacement for the lower half of the island. */
      const DisplaceLower = vec3(v.x, Mul(v.y, 0.7), v.z)

      /* Displacement for the entire island. */
      return If(GreaterOrEqual(v.y, 0), DisplaceUpper, DisplaceLower)
    }

    /* Let's displace some vertices! We're using the `Displacement` helper from
    the toybox package, which will not only displace the vertex position using
    the given function, but also update the normal accordingly, and return both. */
    const modified = Displacement(Displace)

    /* Wrap the position in a varying. If we don't do this, the fragment shader
    will end up recalculating the position for every fragment. */
    const position = Vec3(modified.position, {
      name: "Displaced vertex position",
      varying: true
    })

    return CustomShaderMaterialMaster({
      position,
      normal: modified.normal,

      diffuseColor: pipe(Vec3(new Color("#1982c4")), (v) =>
        pipe(
          v,
          (v) => Mix(new Color("#252422"), v, Step(-0.2, position.y)),
          (v) => Mix(v, new Color("#adc178"), Step(0.02, position.y)),
          (v) => Mix(v, new Color("#3a5a40"), Step(0.3, position.y)),
          (v) => Mix(v, new Color("#4a4e69"), Step(0.5, position.y)),
          (v) => Mix(v, new Color("#fff"), Step(1.2, position.y))
        )
      )
    })
  }, [])

  return (
    <mesh castShadow receiveShadow>
      <dodecahedronGeometry args={[2, 5]} />
      <CustomShaderMaterial baseMaterial={MeshStandardMaterial} {...shader} flatShading />
    </mesh>
  )
}
