import { Canvas, Props } from "@react-three/fiber"

export const RenderComposer = (props: Props) => (
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
  />
)
