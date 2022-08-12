import { useFrame, useThree } from "@react-three/fiber"
import { EffectComposer, RenderPass } from "postprocessing"
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
    composer.addPass(preRenderPass)

    /* Now render the full scene. */
    const transparentFXPass = new RenderPass(scene, camera)
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
