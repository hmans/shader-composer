import { useFrame, useThree } from "@react-three/fiber"
import {
	BlendFunction,
	EffectComposer,
	EffectPass,
	FXAAEffect,
	Pass,
	RenderPass,
	SelectiveBloomEffect,
	SMAAEffect,
	VignetteEffect
} from "postprocessing"
import { useLayoutEffect, useMemo } from "react"
import { HalfFloatType } from "three"

const usePass = (composer: EffectComposer, factory: () => Pass, deps: any[] = []) => {
	useLayoutEffect(() => {
		const pass = factory()
		composer.addPass(pass)
		return () => composer.removePass(pass)
	}, [composer, ...deps])
}

export const PostProcessing = () => {
	const { gl, scene, camera } = useThree()

	const composer = useMemo(
		() => new EffectComposer(gl, { frameBufferType: HalfFloatType }),
		[]
	)

	usePass(composer, () => new RenderPass(scene, camera), [scene, camera])

	const bloomEffect = useMemo(() => {
		const effect = new SelectiveBloomEffect(scene, camera, {
			blendFunction: BlendFunction.ADD,
			mipmapBlur: true,
			luminanceThreshold: 0.95,
			luminanceSmoothing: 0.3,
			intensity: 4
		} as any)
		effect.inverted = true
		return effect
	}, [scene, camera])

	usePass(composer, () => new EffectPass(camera, bloomEffect), [bloomEffect, camera])

	usePass(composer, () => new EffectPass(camera, new VignetteEffect()), [camera])
	usePass(composer, () => new EffectPass(camera, new SMAAEffect()), [camera])

	useFrame(() => {
		composer.render()
	}, 1)

	return null
}
