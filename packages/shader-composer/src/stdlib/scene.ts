import { DepthTexture, WebGLRenderTarget } from "three"
import { $ } from "../expressions"
import { pipe } from "../pipes"
import { Input, Unit } from "../units"
import { CameraFar, CameraNear, Uniform } from "./input"
import { Texture2D } from "./textures"
import { Float } from "./values"

export const PerspectiveDepth = (
  xy: Input<"vec2">,
  depthTexture: Unit<"sampler2D">,
  cameraNear: Input<"float"> = CameraNear,
  cameraFar: Input<"float"> = CameraFar
) =>
  Float(
    pipe(
      xy,
      (v) => Texture2D(depthTexture, v).x,
      (v) => $`perspectiveDepthToViewZ(${v}, ${cameraNear}, ${cameraFar})`
    ),
    { name: "Read Depth from Depth Texture" }
  )

export type SceneDepthOptions = {
  resolution?: number
  layer?: number
}

export const SceneDepth = ({ resolution = 0.5, layer }: SceneDepthOptions = {}) => {
  const width = 256
  const height = 256

  const renderTargets = [
    new WebGLRenderTarget(width, height, {
      depthTexture: new DepthTexture(width, height)
    }),

    new WebGLRenderTarget(width, height, {
      depthTexture: new DepthTexture(width, height)
    })
  ]

  let cursor = 0

  const uniform = Uniform("sampler2D", renderTargets[0].depthTexture, {
    name: "Scene Depth Texture",

    update: (dt, camera, scene, gl) => {
      const renderTarget = renderTargets[cursor]

      /* Update rendertarget size if necessary */
      const width = gl.domElement.width * gl.getPixelRatio() * resolution
      const height = gl.domElement.height * gl.getPixelRatio() * resolution

      if (renderTarget.width !== width || renderTarget.height !== height) {
        renderTarget.setSize(width, height)
      }

      /* If a layer was given, disable it for rendering */
      if (layer !== undefined) camera.layers.disable(layer)

      /* Render depth texture */
      gl.setRenderTarget(renderTarget)
      gl.clear()
      gl.render(scene, camera)
      gl.setRenderTarget(null)

      /* If a layer was given, re-enable it again */
      if (layer !== undefined) camera.layers.enable(layer)

      /* Cycle render targets */
      uniform.value = renderTargets[cursor].depthTexture
      cursor = (cursor + 1) % 2
    },

    dispose: () => {
      renderTargets[0].dispose()
      renderTargets[1].dispose()
    }
  })

  return uniform
}
