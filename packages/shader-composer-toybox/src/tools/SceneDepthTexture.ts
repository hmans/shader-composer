import { UniformUnit } from "shader-composer"
import { DepthTexture, WebGLRenderTarget } from "three"

export type SceneDepthTextureOptions = {
  resolution?: number
  layer?: number
}

/**
 * A unit that will render a depth texture for the current scene and return
 * a sampler2D uniform that you can plug into units like `RawDepth` or `PerspectiveDepth`.
 */
export const SceneDepthTexture = ({
  resolution = 0.5,
  layer
}: SceneDepthTextureOptions = {}) => {
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

  const uniform = UniformUnit("sampler2D", renderTargets[0].depthTexture, {
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
