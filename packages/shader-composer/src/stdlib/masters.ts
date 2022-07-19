import { Color } from "three"
import { $ } from "../expressions"
import { Snippet } from "../snippets"
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

const foo = Snippet(
	(name) => $`
	vec3 ${name}(in vec3 v) {
		return v;
	}
`
)

const dummy = Snippet(
	(name) => $`
	vec3 ${name}(in vec3 v) {
		return ${foo}(v);
	}
`
)

export const CustomShaderMaterialMaster = ({
	position = VertexPosition,
	diffuseColor = new Color("white"),
	alpha = 1
}: CustomShaderMaterialMasterProps = {}) =>
	Master({
		name: "CustomShaderMaterial Master",

		vertex: {
			body: $`
				csm_Position.xyz = ${dummy}(${position});
			`
		},

		fragment: {
			body: $`
				csm_DiffuseColor.rgb = ${diffuseColor};
				csm_DiffuseColor.a = ${alpha};
			`
		}
	})
