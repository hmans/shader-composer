import { Color } from "three"
import { $ } from "../expressions"
import { Master, Value, Vec3 } from "../units"

export const VertexPositionAttribute = Vec3($`position`, {
	name: "Position",
	only: "vertex"
})

export type CustomShaderMaterialMasterProps = {
	position?: Value<"vec3">
	diffuseColor?: Value<"vec3">
	alpha?: Value<"float">
}

export const CustomShaderMaterialMaster = ({
	position = VertexPositionAttribute,
	diffuseColor = new Color("white"),
	alpha = 1
}: CustomShaderMaterialMasterProps = {}) =>
	Master({
		name: "CustomShaderMaterial Master",

		vertex: {
			body: $`
				csm_Position.xyz = ${position};
			`
		},

		fragment: {
			body: $`
				csm_DiffuseColor.rgb = ${diffuseColor};
				csm_DiffuseColor.a = ${alpha};
			`
		}
	})
