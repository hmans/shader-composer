import { Color } from "three"
import { $ } from "../expressions"
import { Master, Value, Vec3 } from "../units"

export const VertexPositionAttribute = Vec3($`position`, {
	name: "Position (Attribute)",
	only: "vertex"
})

export const VertexPosition = Vec3($`v_position`, {
	name: "Position (Varying)",
	vertex: {
		header: $`varying vec3 v_position;`,
		body: $`value = v_position = ${VertexPositionAttribute};`
	},
	fragment: {
		header: $`varying vec3 v_position;`
	}
})

export type CustomShaderMaterialMasterProps = {
	position?: Value<"vec3">
	diffuseColor?: Value<"vec3">
	alpha?: Value<"float">
}

export const CustomShaderMaterialMaster = ({
	position = VertexPosition,
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
