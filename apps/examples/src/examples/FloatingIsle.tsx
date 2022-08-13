import { Float as Floating } from "@react-three/drei"
import { useControls } from "leva"
import {
  Abs,
  Add,
  CustomShaderMaterialMaster,
  Float,
  GreaterOrEqual,
  If,
  Input,
  Length,
  Lerp,
  Mix,
  Mul,
  Normalize,
  NormalizePlusMinusOne,
  OneMinus,
  pipe,
  Pow,
  Smoothstep,
  SplitVector3,
  Step,
  Sub,
  Unit,
  vec2,
  Vec3,
  vec3,
  VertexNormal,
  VertexPosition
} from "shader-composer"
import { useShader, useUniformUnit } from "shader-composer-r3f"
import { ModifyVertex, PSRDNoise2D } from "shader-composer-toybox"
import { Color, MeshStandardMaterial, Vector2 } from "three"
import CustomShaderMaterial from "three-custom-shader-material"

export default function FloatingIsleExample() {
  return (
    <group>
      <Floating rotationIntensity={0}>
        <FloatingIsle />
      </Floating>
    </group>
  )
}

const FloatingIsle = () => {
  const controls = useControls("Floating Isle", {
    offset: { value: [0, 0], joystick: true, step: 0.1 }
  })

  const uniforms = {
    offset: useUniformUnit("vec2", new Vector2(...controls.offset))
  }

  /* Let's create the shader itself! */
  const shader = useShader(() => {
    const Noise = (
      v: Input<"vec2">,
      scale: Input<"float"> = 1,
      height: Input<"float"> = 1,
      pow: Input<"float"> = 1
    ) =>
      pipe(
        PSRDNoise2D(Mul(Add(v, uniforms.offset), scale)),
        (v) => NormalizePlusMinusOne(v),
        (v) => Pow(v, pow),
        (v) => Mul(v, height)
      )

    const xz = vec2(VertexPosition.x, VertexPosition.z)

    const height = pipe(
      Float(0.2),
      (v) => Sub(v, Noise(xz, 0.5, 0.2)),
      (v) => Add(v, Noise(xz, 0.2, 1)),
      (v) => Add(v, Noise(xz, 1, 2, 3)),
      (v) => Mul(v, Smoothstep(2, 0.5, Length(xz)))
    )

    const DisplaceUpper = (v: Input<"vec3">) => {
      // TODO: enable the following line. Needs to extend Unit type.
      // const { x, y, z } = v
      const [x, y, z] = SplitVector3(VertexPosition)

      return vec3(x, height, z)
    }

    const DisplaceLower = (v: Input<"vec3">) => {
      const [x, y, z] = SplitVector3(v)
      return vec3(x, Mul(y, 0.7), z)
    }

    const UpperHalf = GreaterOrEqual(VertexPosition.y, 0)

    const { position, normal } = ModifyVertex(VertexPosition, VertexNormal, (v) =>
      If(UpperHalf, DisplaceUpper(v), DisplaceLower(v))
    )

    return CustomShaderMaterialMaster({
      position,
      normal,

      diffuseColor: pipe(Vec3(new Color("#1982c4")), (v) =>
        If(
          UpperHalf,
          pipe(
            v,
            (v) => Mix(v, new Color("#adc178"), Step(0.02, height)),
            (v) => Mix(v, new Color("#3a5a40"), Step(0.3, height)),
            (v) => Mix(v, new Color("#4a4e69"), Step(0.5, height)),
            (v) => Mix(v, new Color("#fff"), Step(1.2, height))
          ),

          pipe(v, (v) => Mix(new Color("#252422"), v, Step(-0.2, VertexPosition.y)))
        )
      )
    })
  }, [])

  return (
    <mesh>
      <dodecahedronGeometry args={[2, 5]} />
      <CustomShaderMaterial baseMaterial={MeshStandardMaterial} {...shader} flatShading />
    </mesh>
  )
}
