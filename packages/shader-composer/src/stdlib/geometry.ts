import { Vector2 } from "three"
import { $ } from "../expressions"
import { GLSLType, Input, Unit } from "../units"
import { Bool, Mat4, Vec2, Vec3 } from "./values"

export const ViewMatrix = Mat4($`viewMatrix`, {
  name: "View Matrix",
  varying: true
})

export const ModelMatrix = Mat4($`modelMatrix`, {
  name: "Model Matrix",
  varying: true
})

export const ModelViewMatrix = Mat4($`modelViewMatrix`, {
  name: "ModelView Matrix",
  varying: true
})

export const InstanceMatrix = Mat4(
  $`
    #ifdef USE_INSTANCING
      instanceMatrix
    #else
      mat4(1.0)
    #endif
`,
  {
    name: "Instance Matrix",
    varying: true
  }
)

export const UV = Vec2($`uv`, {
  name: "UV",
  varying: true
})

const Vec3WithSpaceConversions = (input: Input<"vec3">, name: string) => ({
  ...Vec3(input, { name, varying: true }),

  world: Vec3($`mat3(modelMatrix) * ${input}`, {
    varying: true,
    name: `${name} (World Space)`
  }),

  view: Vec3($`mat3(modelViewMatrix) * ${input}`, {
    varying: true,
    name: `${name} (View Space)`
  })
})

export const VertexPosition = Vec3WithSpaceConversions($`position`, "Vertex Position")
export const VertexNormal = Vec3WithSpaceConversions($`normal`, "Vertex Normal")

export const ViewDirection = Vec3(
  $`vec3(-${ViewMatrix}[0][2], -${ViewMatrix}[1][2], -${ViewMatrix}[2][2])`,
  { varying: true, name: "View Direction" }
)

export const IsFrontFacing = Bool($`gl_FrontFacing`, { only: "fragment" })

export const TilingUV = (
  uv: Input<"vec2"> = UV,
  tiling: Input<"vec2"> = new Vector2(1, 1),
  offset: Input<"vec2"> = new Vector2(0, 0)
) =>
  Vec2(
    $`vec2(
      ${uv}.x * ${tiling}.x + ${offset}.x,
      ${uv}.y * ${tiling}.y + ${offset}.y)`
  )

export const Attribute = <T extends GLSLType>(type: T, name: string) =>
  Unit(type, $`${name}`, {
    name: `Attribute: ${name}`,
    varying: true,
    vertex: {
      header: $`attribute ${type} ${name};`
    }
  })
