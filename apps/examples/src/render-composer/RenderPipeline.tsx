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
import { LayerRenderPass } from "./LayerRenderPass"
import * as THREE from "three"

export const Layers = {
  Default: 0,
  TransparentFX: 1
}

const RenderPipelineContext = createContext<ReturnType<typeof useRenderPipelineSetup>>(
  null!
)

export const useRenderPipeline = () => useContext(RenderPipelineContext)

export const RenderPipeline: FC<{ children?: ReactNode }> = ({ children }) => {
  const rp = useRenderPipelineSetup()

  return (
    <RenderPipelineContext.Provider value={rp}>{children}</RenderPipelineContext.Provider>
  )
}

const useRenderPipelineSetup = () => {
  const { gl, scene, camera, size } = useThree()
  const [depthTexture] = useState(() => new THREE.DepthTexture(128, 128))

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

    /* Extract the depth texture */
    const copyDepthPass = new DepthCopyPass()
    composer.addPass(copyDepthPass)
    copyDepthPass.setDepthTexture(depthTexture)

    /* Now render the full scene. */
    const fullPass = new RenderPass(scene, camera)
    composer.addPass(fullPass)

    /* Add the good bloom! */
    const bloomEffect = new SelectiveBloomEffect(scene, camera, {
      blendFunction: BlendFunction.ADD,
      mipmapBlur: true,
      luminanceThreshold: 1,
      luminanceSmoothing: 0.5,
      intensity: 4
    } as any)
    bloomEffect.inverted = true

    const vignetteEffect = new VignetteEffect()

    const smaaEffect = new SMAAEffect()

    composer.addPass(new EffectPass(camera, bloomEffect, vignetteEffect, smaaEffect))

    return () => composer.removeAllPasses()
  }, [composer, scene, camera])

  useLayoutEffect(() => {
    composer.setSize(size.width, size.height)
  }, [size.width, size.height])

  useFrame(() => {
    composer.render()
  }, 1)

  return { depthTexture }
}
