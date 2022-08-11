import { useFrame, useThree } from "@react-three/fiber"
import { EffectComposer } from "postprocessing"
import { useLayoutEffect, useMemo } from "react"
import { HalfFloatType } from "three"
import { LayerRenderPass } from "./LayerRenderPass"

export const RenderPipeline = () => {
  const { gl, scene, camera, size } = useThree()

  const composer = useMemo(
    () => new EffectComposer(gl, { frameBufferType: HalfFloatType }),
    []
  )

  useLayoutEffect(() => {
    /* Render all layers except transparent FX. */
    const preRenderPass = new LayerRenderPass(scene, camera, undefined, 1)
    preRenderPass.clear = false
    composer.addPass(preRenderPass)

    /* Now render only transparent FX. */
    const transparentFXPass = new LayerRenderPass(scene, camera, undefined, 2)
    transparentFXPass.clear = false
    composer.addPass(transparentFXPass)

    return () => composer.removeAllPasses()
  }, [composer, scene, camera])

  useLayoutEffect(() => {
    composer.setSize(size.width, size.height)
  }, [size.width, size.height])

  useFrame(() => {
    composer.render()
  }, 1)

  return null
}
