import React, { forwardRef, useState } from "react"
import CustomShaderMaterial, { iCSMProps } from "three-custom-shader-material"
import CustomShaderMaterialImpl from "three-custom-shader-material/vanilla"
import { MeshDepthMaterial, RGBADepthPacking } from "three"

export type CustomDepthMaterialProps = Omit<iCSMProps, "ref" | "baseMaterial">

export const CustomDepthMaterial = forwardRef<
  CustomShaderMaterialImpl,
  CustomDepthMaterialProps
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
