import { CustomShaderMaterialMaster } from "shader-composer"
import { useShader } from "shader-composer-r3f"
import { MeshStandardMaterial } from "three"
import CustomShaderMaterial from "three-custom-shader-material"

export default function Shield() {
  const shader = useShader(() => {
    return CustomShaderMaterialMaster({})
  })

  return (
    <mesh>
      <icosahedronGeometry args={[1, 3]} />
      <CustomShaderMaterial baseMaterial={MeshStandardMaterial} {...shader} transparent />
    </mesh>
  )
}
