import { useFrame, useThree } from "@react-three/fiber"
import { compose } from "fp-ts/lib/Refinement"
import {
  AdaptiveLuminancePass,
  BlendFunction,
  DepthCopyPass,
  DepthOfFieldEffect,
  Effect,
  EffectComposer,
  EffectPass,
  LuminancePass,
  RenderPass,
  SelectiveBloomEffect,
  SMAAEffect,
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

const RenderPipelineContext = createContext<{ depthTexture: THREE.DepthTexture }>(null!)

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
    composer.addPass(fullScenePass)

    /* Now render the full scene. */
    const fullPass = new RenderPass(scene, camera)
    composer.addPass(fullPass)

    // const t = new TextureEffect({ texture: copyDepthPass.texture })
    // composer.addPass(new EffectPass(camera, t))

    const effects = [
      bloom && selectiveBloomEffect,
      vignette && vignetteEffect,
      antiAliasing && smaaEffect
      // new DepthOfFieldEffect(camera, {
      //   worldFocusDistance: 10,
      //   worldFocusRange: 8,
      //   focalLength: 0.1,
      //   bokehScale: 10
      // })
    ].filter((e) => e) as Effect[]

    composer.addPass(new EffectPass(camera, ...effects))

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
      value={{ depthTexture: copyDepthPass.texture as THREE.DepthTexture }}
    >
      {children}
    </RenderPipelineContext.Provider>
  )
}
