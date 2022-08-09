import {
  Camera,
  DepthTexture,
  Scene,
  Vector2,
  WebGLRenderer,
  WebGLRenderTarget
} from "three"
import { $ } from "../expressions"
import { pipe } from "../pipes"
import { Input, Unit } from "../units"
import { CameraFar, CameraNear, Resolution, Uniform } from "./input"
import { Texture2D } from "./textures"
import { Float } from "./values"

export const ReadDepth = (
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

export const SceneDepth = (xy: Input<"vec2">) => {
  const width = window.innerWidth
  const height = window.innerWidth

  const renderTargets = [
    new WebGLRenderTarget(width, height, {
      depthTexture: new DepthTexture(128, 128)
    }),

    new WebGLRenderTarget(width, height, {
      depthTexture: new DepthTexture(128, 128)
    })
  ]

  let index = 0

  const uniform = Uniform("sampler2D", { value: renderTargets[0].depthTexture })

  return Float(
    ReadDepth(xy, uniform, CameraNear, CameraFar),

    {
      name: "Scene Depth",

      update: (dt, camera, scene, gl) => {
        const renderTarget = renderTargets[index]

        /* Update rendertarget size if necessary */
        const width = gl.domElement.width
        const height = gl.domElement.height

        if (renderTarget.width !== width || renderTarget.height !== height) {
          renderTarget.setSize(width, height)
        }

        /* Render depth texture */
        gl.setRenderTarget(renderTarget)
        gl.clear()
        gl.render(scene, camera)
        gl.setRenderTarget(null)

        /* Cycle render targets */
        uniform.value = renderTargets[index].depthTexture
        index = (index + 1) % 2
      }
    }
  )
}
