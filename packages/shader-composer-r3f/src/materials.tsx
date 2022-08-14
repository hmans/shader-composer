import React, { forwardRef, useState } from "react"
import CustomShaderMaterial, { iCSMProps } from "three-custom-shader-material"
import CustomShaderMaterialImpl from "three-custom-shader-material/vanilla"
import { MeshDepthMaterial, RGBADepthPacking } from "three"

export type CustomShaderMaterialProps = Omit<iCSMProps, "ref" | "baseMaterial">

export const CustomDepthMaterial = forwardRef<
  CustomShaderMaterialImpl,
  CustomShaderMaterialProps
>((props, ref) => {
  const [material] = useState(
    () => new MeshDepthMaterial({ depthPacking: RGBADepthPacking })
  )

  return (
    <CustomShaderMaterial
      ref={ref}
      attach="customDepthMaterial"
      baseMaterial={material}
      {...props}
    />
  )
})
