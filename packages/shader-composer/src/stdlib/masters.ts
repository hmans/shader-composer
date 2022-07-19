import { Color } from "three"
import { $ } from "../expressions"
import { Master, Value, Vec3 } from "../units"

export const VertexPosition = Vec3($`position`, {
	name: "Position (Attribute)",
	varying: true
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
				csm_DiffuseColor.rgb = ${diffuseColor} * ${VertexPosition};
				csm_DiffuseColor.a = ${alpha};
			`
		}
	})
