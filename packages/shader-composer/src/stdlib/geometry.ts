import { Vector2 } from "three"
import { $ } from "../expressions"
import { Input, GLSLType, Unit } from "../units"
import { bless } from "../util/bless"
import { Vec2, Vec3, Mat4, Bool } from "./values"

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

export const UV = Vec2($`uv`, {
	name: "UV",
	varying: true
})

const matrixConversions = (unit: Unit<"vec3">) => ({
	world: Vec3($`mat3(modelMatrix) * ${unit}`, { varying: true }),
	view: Vec3($`mat3(modelViewMatrix) * ${unit}`, { varying: true })
})

export const VertexPosition = bless(
	Vec3($`position`, {
		name: "Position",
		varying: true
	}),
	matrixConversions
)

export const VertexNormal = bless(
	Vec3($`normal`, {
		name: "Normal",
		varying: true
	}),
	matrixConversions
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
