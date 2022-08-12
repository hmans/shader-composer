import { Canvas as R3FCanvas, Props } from "@react-three/fiber"

export const Canvas = (props: Props) => (
  <R3FCanvas
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
