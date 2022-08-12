import { useFrame, useThree } from "@react-three/fiber"
import { EffectComposer, RenderPass } from "postprocessing"
import { useLayoutEffect, useMemo } from "react"
import { LayerRenderPass } from "./LayerRenderPass"
import * as THREE from "three"

export const Layers = {
  Default: 0,
  TransparentFX: 1
}

export const RenderPipeline = () => {
  const { gl, scene, camera, size } = useThree()

  const composer = useMemo(
    () => new EffectComposer(gl, { frameBufferType: THREE.HalfFloatType }),
    []
  )

  useLayoutEffect(() => {
    /* Render all layers except transparent FX. */
    const preRenderPass = new LayerRenderPass(
      scene,
      camera,
      undefined,
      camera.layers.mask & ~(1 << Layers.TransparentFX)
    )
    composer.addPass(preRenderPass)

    /* TODO: extract the depth texture */

    /* Now render the full scene. */
    const fullPass = new RenderPass(scene, camera)
    composer.addPass(fullPass)

    /* TODO: add postprocessing effects */

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
