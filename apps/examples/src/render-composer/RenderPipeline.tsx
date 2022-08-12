import { useFrame, useThree } from "@react-three/fiber"
import {
  BlendFunction,
  DepthCopyPass,
  EffectComposer,
  EffectPass,
  RenderPass,
  SelectiveBloomEffect,
  SMAAEffect,
  VignetteEffect
} from "postprocessing"
import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useLayoutEffect,
  useMemo,
  useState
} from "react"
import * as THREE from "three"
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

  const composer = useMemo(
    () => new EffectComposer(gl, { frameBufferType: THREE.HalfFloatType }),
    []
  )

  const preRenderPass = useMemo(
    () =>
      new LayerRenderPass(
        scene,
        camera,
        undefined,
        camera.layers.mask & ~(1 << Layers.TransparentFX)
      ),
    []
  )
  const copyDepthPass = useMemo(() => new DepthCopyPass(), [])
  const fullScenePass = useMemo(() => new RenderPass(scene, camera), [camera, scene])
  const vignetteEffect = useMemo(() => new VignetteEffect(), [])
  const smaaEffect = useMemo(() => new SMAAEffect(), [])
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

    return () => composer.removeAllPasses()
  }, [composer, scene, camera])

  useLayoutEffect(() => {
    const pass = new EffectPass(camera, selectiveBloomEffect, vignetteEffect, smaaEffect)
    composer.addPass(pass)
    return () => composer.removePass(pass)
  }, [camera, bloom, vignette, antiAliasing])

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
