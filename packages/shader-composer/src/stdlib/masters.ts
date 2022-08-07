import { Color } from "three"
import { $ } from "../expressions"
import { Input } from "../units"
import { VertexNormal, VertexPosition } from "./geometry"
import { Master } from "./values"

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
	roughness?: Input<"float">
	metalness?: Input<"float">
}

export const CustomShaderMaterialMaster = ({
	position,
	normal,
	diffuseColor,
	fragColor,
	roughness,
	metalness,
	alpha = 1
}: CustomShaderMaterialMasterProps = {}) =>
	Master({
		name: "CustomShaderMaterial Master",

		vertex: {
			body: $`
				${position !== undefined ? $`csm_Position.xyz = ${position};` : ""}
				${normal !== undefined ? $`csm_Normal = ${normal};` : ""}
			`
		},

		fragment: {
			/* FIXME: meh */
			body: $`
				/* Temporary fix to default to the diffuse color configured for the material */
				csm_DiffuseColor = vec4(diffuse, 1.0);

  			${alpha !== undefined ? $`csm_DiffuseColor.a = ${alpha};` : ""}
				${diffuseColor !== undefined ? $`csm_DiffuseColor.rgb = ${diffuseColor};` : ""}
				${fragColor !== undefined ? $`csm_FragColor = vec4(${fragColor}, ${alpha});` : ""}

				/* Mix in the texture. This may be obsolete with a future update to CSM. */
        #ifdef USE_MAP
          csm_DiffuseColor *= texture2D(map, vUv);
        #endif

				${roughness !== undefined ? $`csm_Roughness = ${roughness};` : ""}
				${metalness !== undefined ? $`csm_Metalness = ${metalness};` : ""}

				`
		}
	})
