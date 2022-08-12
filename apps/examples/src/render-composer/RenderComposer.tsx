import { Canvas, Props } from "@react-three/fiber"
import { RenderPipeline } from "./RenderPipeline"

export const RenderComposer = ({ children, ...props }: Props) => (
  <Canvas
    shadows
    linear
    flat
    gl={{
      powerPreference: "high-performance",
      alpha: false,
      depth: true,
      stencil: false,
      antialias: false
    }}
    {...props}
  >
    <RenderPipeline>{children}</RenderPipeline>
  </Canvas>
)
