import { FlatStage } from "r3f-stage"
import { ShaderMaterialMaster, VertexPosition } from "shader-composer"
import { useShader } from "shader-composer-r3f"
import { Billboard } from "shader-composer-toybox"
import { Color } from "three"

export default function BillboardingExample() {
  const shader = useShader(() => {
    return ShaderMaterialMaster({
      position: Billboard(VertexPosition),
      color: new Color("hotpink")
    })
  })

  return (
    <FlatStage>
      <mesh position-y={1.5}>
        <planeGeometry />
        <shaderMaterial {...shader} />
      </mesh>
    </FlatStage>
  )
}
