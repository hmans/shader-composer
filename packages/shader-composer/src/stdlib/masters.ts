import { Color } from "three"
import { $ } from "../expressions"
import { Master, Value, Vec3 } from "../units"

export const VertexPosition = Vec3($`position`, {
	name: "Vertex Position",
	varying: true
})

export type CustomShaderMaterialMasterProps = {
	position?: Value<"vec3">
	diffuseColor?: Value<"vec3">
	alpha?: Value<"float">
}

const DummyFunction = Master({
	name: "Dummy Function",
	vertex: {
		header: $`
			vec3 dummy(in vec3 v) {
				return v;
			}
	`
	}
})

export const CustomShaderMaterialMaster = ({
	position = VertexPosition,
	diffuseColor = new Color("white"),
	alpha = 1
}: CustomShaderMaterialMasterProps = {}) =>
	Master({
		name: "CustomShaderMaterial Master",

		vertex: {
			body: $`
				csm_Position.xyz = ${DummyFunction}(${position});
			`
		},

		fragment: {
			body: $`
				csm_DiffuseColor.rgb = ${diffuseColor};
				csm_DiffuseColor.a = ${alpha};
			`
		}
	})
