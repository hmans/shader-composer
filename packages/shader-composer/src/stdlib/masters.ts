import { Color } from "three"
import { glsl } from "../expressions"
import { Float, Master, Value, Vec3 } from "../units"

export type CustomShaderMaterialMasterProps = {
	diffuseColor?: Value<"vec3">
	alpha?: Value<"float">
}

export const CustomShaderMaterialMaster = ({
	diffuseColor = new Color("white"),
	alpha = 1
}: CustomShaderMaterialMasterProps = {}) =>
	Master({
		name: "CustomShaderMaterial Master",

		vertexBody: glsl`
		`,

		fragmentBody: glsl`
			csm_DiffuseColor.rgb = ${Vec3(diffuseColor, { only: "fragment" })};
			csm_DiffuseColor.a = ${Float(alpha, { only: "fragment" })};
		`
	})
