import { useFrame, useThree } from "@react-three/fiber"
import { EffectComposer } from "postprocessing"
import { useLayoutEffect, useMemo } from "react"
import { LayerRenderPass } from "./LayerRenderPass"

export const RenderPipeline = () => {
  const { gl, scene, camera, size } = useThree()

  const composer = useMemo(() => new EffectComposer(gl), [])

  useLayoutEffect(() => {
    composer.addPass(new LayerRenderPass(scene, camera, undefined, 0xffffff))

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
