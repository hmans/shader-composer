import { useControls } from "leva"
import { CustomShaderMaterialMaster, Time } from "shader-composer"
import { useShader } from "shader-composer-r3f"
import { MeshStandardMaterial } from "three"
import CustomShaderMaterial from "three-custom-shader-material"

export default function StylizedWater() {
  /* Expose some controls via Leva. */
  const controls = useControls("Water", {})

  /* Create our shader. */
  const shader = useShader(() => {
    /* Create a time unit. Always useful! */
    const time = Time()

    return CustomShaderMaterialMaster({})
  }, [])

  return (
    <mesh>
      <icosahedronGeometry args={[1, 5]} />
      <CustomShaderMaterial baseMaterial={MeshStandardMaterial} {...shader} />
    </mesh>
  )
}
