import { CustomShaderMaterialMaster, Time } from "shader-composer"
import { useShader } from "shader-composer-r3f"
import { MeshStandardMaterial } from "three"
import CustomShaderMaterial from "three-custom-shader-material"

export default function DiscoCube() {
  const shader = useShader(() => {
    const time = Time()

    return CustomShaderMaterialMaster({})
  }, [])

  return (
    <mesh>
      <sphereGeometry />
      <CustomShaderMaterial baseMaterial={MeshStandardMaterial} {...shader} />
    </mesh>
  )
}
