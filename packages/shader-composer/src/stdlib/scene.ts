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

export const SceneDepth = (
  xy: Input<"vec2">,
  state: { gl: WebGLRenderer; scene: Scene; camera: Camera }
) => {
  const width = Resolution.value.x
  const height = Resolution.value.y

  const renderTarget = new WebGLRenderTarget(width, height, {
    depthTexture: new DepthTexture(width, height)
  })

  const depthTexture = Uniform("sampler2D", { value: renderTarget.depthTexture })

  const tmpVec2 = new Vector2()

  return Float(
    ReadDepth(xy, depthTexture),

    {
      name: "Scene Depth",

      update: () => {
        /* Adjust render texture resolution to match the current resolution. */
        tmpVec2.copy(Resolution.value)
        if (tmpVec2.x !== renderTarget.width || tmpVec2.y !== renderTarget.height) {
          console.log("Resizing render target...", tmpVec2)
          renderTarget.setSize(tmpVec2.x, tmpVec2.y)
          renderTarget.depthTexture.dispose()
          renderTarget.depthTexture = new DepthTexture(tmpVec2.x, tmpVec2.y)
          depthTexture.value = renderTarget.depthTexture
        }

        /* Render depth texture */
        state.gl.setRenderTarget(renderTarget)
        state.gl.clear()
        state.gl.render(state.scene, state.camera)
        state.gl.setRenderTarget(null)
      }
    }
  )
}
