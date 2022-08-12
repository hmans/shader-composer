import { useFrame, useThree } from "@react-three/fiber"
import { compose } from "fp-ts/lib/Refinement"
import {
  AdaptiveLuminancePass,
  BlendFunction,
  CopyPass,
  DepthCopyPass,
  DepthOfFieldEffect,
  Effect,
  EffectComposer,
  EffectPass,
  LuminancePass,
  RenderPass,
  SelectiveBloomEffect,
  SMAAEffect,
  TextureEffect,
  VignetteEffect
} from "postprocessing"
import { createContext, FC, ReactNode, useContext, useLayoutEffect, useMemo } from "react"
import * as THREE from "three"
import { BasicDepthPacking } from "three"
import { LayerRenderPass } from "./LayerRenderPass"

export const Layers = {
  Default: 0,
  TransparentFX: 1
}

const RenderPipelineContext = createContext<{
  depth: THREE.Texture
  scene: THREE.Texture
}>(null!)

export const useRenderPipeline = () => useContext(RenderPipelineContext)

export type RenderPipelineProps = {
  children?: ReactNode
  bloom?: boolean
  vignette?: boolean
  antiAliasing?: boolean
}

export const RenderPipeline: FC<RenderPipelineProps> = ({
  children,
  bloom,
  vignette,
  antiAliasing
}) => {
  const { gl, scene, camera, size } = useThree()

  const composer = useMemo(() => {
    return new EffectComposer(gl, { frameBufferType: THREE.HalfFloatType })
  }, [])

  const preRenderPass = useMemo(() => {
    return new LayerRenderPass(
      scene,
      camera,
      undefined,
      camera.layers.mask & ~(1 << Layers.TransparentFX)
    )
  }, [scene, camera])

  const copyPass = useMemo(() => {
    return new CopyPass()
  }, [])

  const copyDepthPass = useMemo(() => {
    return new DepthCopyPass({ depthPacking: BasicDepthPacking })
  }, [])

  const fullScenePass = useMemo(() => {
    return new RenderPass(scene, camera)
  }, [camera, scene])

  const vignetteEffect = useMemo(() => {
    return new VignetteEffect()
  }, [])

  const smaaEffect = useMemo(() => {
    return new SMAAEffect()
  }, [])

  const selectiveBloomEffect = useMemo(() => {
    const bloomEffect = new SelectiveBloomEffect(scene, camera, {
      blendFunction: BlendFunction.ADD,
      mipmapBlur: true,
      luminanceThreshold: 1,
      luminanceSmoothing: 0.5,
      intensity: 4
    } as any)

    bloomEffect.inverted = true

    return bloomEffect
  }, [])

  useLayoutEffect(() => {
    composer.addPass(preRenderPass)
    composer.addPass(copyDepthPass)
    composer.addPass(copyPass)
    composer.addPass(fullScenePass)

    const effects = [
      bloom && selectiveBloomEffect,
      vignette && vignetteEffect,
      antiAliasing && smaaEffect
      // new DepthOfFieldEffect(camera, {
      //   worldFocusDistance: 13,
      //   worldFocusRange: 5,
      //   bokehScale: 10
      // })
    ].filter((e) => e) as Effect[]
    composer.addPass(new EffectPass(camera, ...effects))

    // const t = new TextureEffect({ texture: copyPass.texture })
    // composer.addPass(new EffectPass(camera, t))

    return () => composer.removeAllPasses()
  }, [
    composer,
    scene,
    camera,
    preRenderPass,
    copyDepthPass,
    fullScenePass,
    selectiveBloomEffect,
    vignetteEffect,
    smaaEffect,
    bloom,
    vignette,
    antiAliasing
  ])

  useLayoutEffect(() => {
    composer.setSize(size.width, size.height)
  }, [size.width, size.height])

  useFrame(() => {
    composer.render()
  }, 1)

  return (
    <RenderPipelineContext.Provider
      value={{
        depth: copyDepthPass.texture,
        scene: copyPass.texture
      }}
    >
      {children}
    </RenderPipelineContext.Provider>
  )
}
