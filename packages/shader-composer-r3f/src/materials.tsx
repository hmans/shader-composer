import React, { forwardRef, useState } from "react"
import CustomShaderMaterial, { iCSMProps } from "three-custom-shader-material"
import CustomShaderMaterialImpl from "three-custom-shader-material/vanilla"
import {
  Material,
  MeshBasicMaterial,
  MeshDepthMaterial,
  MeshStandardMaterial,
  RGBADepthPacking
} from "three"
import { Node, NodeProps } from "@react-three/fiber"

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

const makeMaterialComponent = <T extends THREE.Material>(ctor: {
  new (...args: any[]): T
}) =>
  forwardRef<CustomShaderMaterialImpl, Node<T, typeof ctor>>((props, ref) => {
    /* We still need to ts-ignore the next line, because something between
    R3F's and CSM's props typings appears to be deeply incompatible. */

    // @ts-ignore
    return <CustomShaderMaterial baseMaterial={ctor} {...props} ref={ref} />
  })

export const Custom = {
  MeshStandardMaterial: makeMaterialComponent(MeshStandardMaterial),
  MeshBasicMaterial: makeMaterialComponent(MeshBasicMaterial)
}
