import { useFrame } from "@react-three/fiber"
import { useControls } from "leva"
import { useMemo } from "react"
import { CustomShaderMaterialMaster, Mix, Mul, pipe, Uniform } from "shader-composer"
import { useShader } from "shader-composer-r3f"
import { Dissolve } from "shader-composer-toybox"
import { Color, DoubleSide, MeshPhysicalMaterial } from "three"
import CustomShaderMaterial from "three-custom-shader-material"

export default function DissolveExample() {
	const sphereOpts = useControls("Sphere", { color: "#666" })
	const dissolveOpts = useControls("Dissolve", {
		edgeColor: "#0ef",
		edgeThickness: { value: 0.2, min: 0, max: 1 },
		scale: { value: 2.5, min: 0, max: 5 },
		visibility: { value: 0.5, min: 0, max: 1 }
	})

	const blackboard = useMemo(
		() => ({
			sphere: {
				color: Uniform("vec3", "u_sphereColor", new Color(sphereOpts.color))
			},
			dissolve: {
				visibility: Uniform("float", "u_visibility", dissolveOpts.visibility),
				scale: Uniform("float", "u_scale", dissolveOpts.scale),
				edgeColor: Uniform("vec3", "u_dissolveColor", new Color(dissolveOpts.edgeColor)),
				edgeThickness: Uniform("float", "u_edgeThickness", dissolveOpts.edgeThickness)
			}
		}),
		[]
	)

	const shader = useShader(() => {
		const dissolve = Dissolve(
			blackboard.dissolve.visibility,
			blackboard.dissolve.scale,
			blackboard.dissolve.edgeThickness
		)

		return CustomShaderMaterialMaster({
			diffuseColor: pipe(blackboard.sphere.color, (v) =>
				Mix(v, blackboard.dissolve.edgeColor, dissolve.edge)
			),
			alpha: dissolve.alpha
		})
	}, [])

	/* TODO: Maybe shader-composer-r3f can provide some glue for this? */
	useFrame(() => {
		blackboard.sphere.color.value.set(sphereOpts.color)
		blackboard.dissolve.edgeColor.value.set(dissolveOpts.edgeColor)
		blackboard.dissolve.edgeThickness.value = dissolveOpts.edgeThickness
		blackboard.dissolve.visibility.value = dissolveOpts.visibility
		blackboard.dissolve.scale.value = dissolveOpts.scale
	})

	return (
		<mesh>
			<icosahedronGeometry args={[1, 10]} />
			<CustomShaderMaterial
				baseMaterial={MeshPhysicalMaterial}
				{...shader}
				transparent
				side={DoubleSide}
				metalness={0.1}
				roughness={0.2}
			/>
		</mesh>
	)
}
