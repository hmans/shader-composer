import { Color } from "three"
import { $ } from "../expressions"
import { Master, Value } from "../units"
import { VertexNormal, VertexPosition } from "./geometry"

export type ShaderMaterialMasterProps = {
	color?: Value<"vec3">
	alpha?: Value<"float">
	position?: Value<"vec3">
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
	position?: Value<"vec3">
	normal?: Value<"vec3">
	diffuseColor?: Value<"vec3">
	fragColor?: Value<"vec3">
	alpha?: Value<"float">
}

export const CustomShaderMaterialMaster = ({
	position = VertexPosition,
	normal = VertexNormal,
	diffuseColor = new Color("white"),
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
				${diffuseColor && $`csm_DiffuseColor = vec4(${diffuseColor}, ${alpha});`}
				${fragColor && $`csm_FragColor = vec4(${fragColor}, ${alpha});`}
			`
		}
	})
