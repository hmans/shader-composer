import { Color } from "three"
import { $ } from "../expressions"
import { Master, Input } from "../units"
import { VertexNormal, VertexPosition } from "./geometry"

export type ShaderMaterialMasterProps = {
	color?: Input<"vec3">
	alpha?: Input<"float">
	position?: Input<"vec3">
}

export const ShaderMaterialMaster = ({
	color = new Color("red"),
	alpha = 1,
	position = VertexPosition
}: ShaderMaterialMasterProps = {}) =>
	Master({
		name: "ShaderMaterial Master",

		vertex: {
			body: $`
				gl_Position = projectionMatrix * modelViewMatrix * vec4(${position}, 1.0);
			`
		},

		fragment: {
			body: $`
				gl_FragColor = vec4(${color}, ${alpha});
			`
		}
	})

export type CustomShaderMaterialMasterProps = {
	position?: Input<"vec3">
	normal?: Input<"vec3">
	diffuseColor?: Input<"vec3">
	fragColor?: Input<"vec3">
	alpha?: Input<"float">
}

export const CustomShaderMaterialMaster = ({
	position = VertexPosition,
	normal = VertexNormal,
	diffuseColor,
	fragColor,
	alpha = 1
}: CustomShaderMaterialMasterProps = {}) =>
	Master({
		name: "CustomShaderMaterial Master",

		vertex: {
			body: $`
				csm_Position.xyz = ${position};
				csm_Normal = ${normal};
			`
		},

		fragment: {
			/* FIXME: meh */
			body: $`
				csm_DiffuseColor = vec4(diffuse, 1.0);
  			${alpha !== undefined ? $`csm_DiffuseColor.a = ${alpha};` : ""}
	  		${diffuseColor !== undefined ? $`csm_DiffuseColor.rgb = ${diffuseColor};` : ""}
				${fragColor !== undefined ? $`csm_FragColor = vec4(${fragColor}, ${alpha});` : ""}
			`
		}
	})
