import { Float as Floating } from "@react-three/drei"
import { useControls } from "leva"
import {
  Abs,
  Add,
  CustomShaderMaterialMaster,
  GreaterOrEqual,
  If,
  Input,
  Length,
  Mul,
  Normalize,
  NormalizePlusMinusOne,
  OneMinus,
  pipe,
  Pow,
  Smoothstep,
  SplitVector3,
  Unit,
  vec2,
  vec3,
  VertexPosition
} from "shader-composer"
import { useShader, useUniformUnit } from "shader-composer-r3f"
import { PSRDNoise2D } from "shader-composer-toybox"
import { Color, MeshStandardMaterial, Vector2 } from "three"
import CustomShaderMaterial from "three-custom-shader-material"

export default function FloatingIsleExample() {
  return (
    <group>
      <Floating>
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
    const DisplaceUpper = (v: Unit<"vec3">) => {
      // TODO: enable the following line. Needs to extend Unit type.
      // const { x, y, z } = v

      const [x, y, z] = SplitVector3(v)

      const xz = vec2(x, z)

      const height = pipe(
        PSRDNoise2D(Add(xz, uniforms.offset)),
        (v) => NormalizePlusMinusOne(v),
        (v) => Pow(v, 2),
        (v) => Mul(v, 3),
        (v) => Mul(v, Smoothstep(2, 0, Length(xz)))
      )

      return vec3(x, height, z)
    }

    const DisplaceLower = (v: Input<"vec3">) => {
      const [x, y, z] = SplitVector3(v)
      return vec3(x, Mul(y, 0.7), z)
    }

    const position = pipe(VertexPosition, (v) =>
      If(GreaterOrEqual(VertexPosition.y, 0), DisplaceUpper(v), DisplaceLower(v))
    )

    return CustomShaderMaterialMaster({
      position,
      diffuseColor: new Color("#888")
    })
  }, [])

  return (
    <mesh>
      <dodecahedronGeometry args={[2, 5]} />
      <CustomShaderMaterial baseMaterial={MeshStandardMaterial} {...shader} flatShading />
    </mesh>
  )
}
