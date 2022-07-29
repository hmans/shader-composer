import { Vector2 } from "three"
import { $ } from "../expressions"
import { Vec2, Vec3, Mat4, Input, Bool, GLSLType, Unit } from "../units"

export const UV = Vec2($`uv`, {
	name: "UV",
	varying: true
})

export const VertexPosition = Vec3($`position`, {
	name: "Position",
	varying: true
})

export const VertexNormal = Vec3($`normal`, {
	name: "Normal",
	varying: true
})

export const ViewMatrix = Mat4($`viewMatrix`, {
	name: "View Matrix",
	varying: true
})

export const ModelMatrix = Mat4($`modelMatrix`, {
	name: "Model Matrix",
	varying: true
})

export const InstanceMatrix = Mat4($`instanceMatrix`, {
	name: "Instance Matrix",
	varying: true
})

export const VertexNormalWorld = Vec3(
	$`normalize(
      mat3(
        ${ModelMatrix}[0].xyz,
        ${ModelMatrix}[1].xyz,
        ${ModelMatrix}[2].xyz
      ) * ${VertexNormal})`,
	{ varying: true }
)

export const ViewDirection = Vec3(
	$`vec3(-${ViewMatrix}[0][2], -${ViewMatrix}[1][2], -${ViewMatrix}[2][2])`,
	{ varying: true }
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
