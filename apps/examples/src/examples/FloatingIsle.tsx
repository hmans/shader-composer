import { CustomShaderMaterialMaster } from "shader-composer"
import { useShader } from "shader-composer-r3f"
import { MeshStandardMaterial } from "three"
import CustomShaderMaterial from "three-custom-shader-material"

export default function FloatingIsle() {
  /* Let's create the shader itself! */
  const shader = useShader(() => {
    return CustomShaderMaterialMaster({})
  }, [])

  return (
    <mesh>
      <sphereGeometry />
      <CustomShaderMaterial baseMaterial={MeshStandardMaterial} {...shader} />
    </mesh>
  )
}
