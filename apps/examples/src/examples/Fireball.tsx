import { useTexture } from "@react-three/drei"
import { useControls } from "leva"
import {
  Add,
  CustomShaderMaterialMaster,
  Mul,
  NormalizePlusMinusOne,
  pipe,
  Pow,
  Texture2D,
  Time,
  vec2,
  vec3,
  VertexNormal,
  VertexPosition
} from "shader-composer"
import { useShader, useUniform } from "shader-composer-r3f"
import { Simplex3DNoise, Turbulence3D } from "shader-composer-toybox"
import { MeshStandardMaterial } from "three"
import CustomShaderMaterial from "three-custom-shader-material"
import textureUrl from "./textures/explosion.png"

export default function Fireball() {
  /* Expose some controls via Leva. */
  const controls = useControls("Fireball", {
    turbulenceScale: { value: 0.25, min: 0, max: 2 },
    turbulenceOctaves: { value: 5, min: 1, max: 10, step: 1 }
  })

  /* Create some uniforms. */
  const turbulenceScale = useUniform("float", controls.turbulenceScale)
  const turbulenceOctaves = useUniform("float", controls.turbulenceOctaves)
  const sampler2D = useUniform("sampler2D", useTexture(textureUrl))

  /* Create our shader. */
  const shader = useShader(() => {
    /* Create a time unit. Always useful! */
    const time = Time()

    /* Create a unit with a displacement factor calculated from 3D noise. */
    const displacement = pipe(
      VertexPosition,
      (v) => Add(v, Mul(time, 0.3)),
      (v) => Simplex3DNoise(v),
      (v) => Mul(v, 0.1)
    )

    /* Create another unit that calculates the fragment color based on
		noise turbulence. */
    const color = pipe(
      time,
      /* Modify the original vertex position using offset based on time. */
      (v) => vec3(Mul(v, 0.1), Mul(v, 0.3), Mul(v, 0.5)),
      (v) => Add(VertexPosition, v),

      /* Apply the user-provided turbulence scale. */
      (v) => Mul(v, turbulenceScale),

      /* Calculate the turbulence. */
      (v) => Turbulence3D(v, turbulenceOctaves),
      (v) => NormalizePlusMinusOne(v),
      (v) => Pow(v, 0.5),

      /* Source the color from the provided texture. */
      (v) => Texture2D(sampler2D, vec2(0, v)).color
    )

    return CustomShaderMaterialMaster({
      /* Modify the vertex position based on the displacement value. */
      position: pipe(
        displacement,
        (v) => Mul(VertexNormal, v),
        (v) => Add(VertexPosition, v)
      ),

      /* Apply color values. */
      diffuseColor: color,
      emissiveColor: Mul(color, 1.5)
    })
  }, [])

  return (
    <mesh>
      <icosahedronGeometry args={[1, 5]} />
      <CustomShaderMaterial baseMaterial={MeshStandardMaterial} {...shader} />
    </mesh>
  )
}
