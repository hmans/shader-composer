import { DepthTexture, WebGLRenderTarget } from "three"
import { $ } from "../expressions"
import { pipe } from "../pipes"
import { Input, Unit } from "../units"
import { CameraFar, CameraNear, Uniform } from "./input"
import { Texture2D } from "./textures"
import { Float } from "./values"

/**
 * Sample a depth texture and return the raw depth value.
 *
 * @param uv Screen UV
 * @param depthTexture Depth texture to sample
 * @returns Float unit containing the depth as stored in the texture
 */
export const RawDepth = (uv: Input<"vec2">, depthTexture: Unit<"sampler2D">) =>
  Float(Texture2D(depthTexture, uv).x, { name: "Read Depth from Depth Texture (Raw)" })

/**
 * Sample a depth texture and return the depth value in eye space units.
 *
 * @param xy Screen position
 * @param depthTexture Depth texture to sample
 * @param cameraNear Camera near plane (defaults to CameraNear)
 * @param cameraFar Camera far plane (defaults to CameraFar)
 * @returns Float unit containing the depth in eye space units
 */
export const PerspectiveDepth = (
  xy: Input<"vec2">,
  depthTexture: Unit<"sampler2D">,
  cameraNear: Input<"float"> = CameraNear,
  cameraFar: Input<"float"> = CameraFar
) =>
  Float(
    pipe(
      xy,
      (v) => RawDepth(v, depthTexture),
      (v) => $`perspectiveDepthToViewZ(${v}, ${cameraNear}, ${cameraFar})`
    ),
    { name: "Read Depth from Depth Texture (Eye Space)" }
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
