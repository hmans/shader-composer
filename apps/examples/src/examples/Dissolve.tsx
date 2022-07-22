import { useFrame } from "@react-three/fiber"
import { useControls } from "leva"
import { useMemo } from "react"
import { CustomShaderMaterialMaster, Mix, pipe, Uniform } from "shader-composer"
import { useShader } from "shader-composer-r3f"
import { Dissolve } from "shader-composer-toybox"
import { Color, DoubleSide, MeshStandardMaterial } from "three"
import CustomShaderMaterial from "three-custom-shader-material"

export default function DissolveExample() {
	const sphereOpts = useControls("Sphere", { color: "hotpink" })
	const dissolveOpts = useControls("Dissolve", {
		color: "white",
		visibility: { value: 0.5, min: 0, max: 1 }
	})

	const blackboard = useMemo(
		() => ({
			sphereColor: Uniform("vec3", "u_sphereColor", new Color(sphereOpts.color)),
			dissolveColor: Uniform("vec3", "u_dissolveColor", new Color(dissolveOpts.color)),
			visibility: Uniform("float", "u_visibility", dissolveOpts.visibility)
		}),
		[]
	)

	const shader = useShader(() => {
		const dissolve = Dissolve(blackboard.visibility, 1, 0.1, blackboard.dissolveColor)

		return CustomShaderMaterialMaster({
			diffuseColor: pipe(blackboard.sphereColor, (v) => Mix(v, dissolve.color, 0.5)),
			alpha: dissolve.alpha
		})
	}, [])

	/* TODO: Maybe shader-composer-r3f can provide some glue for this? */
	useFrame(() => {
		blackboard.sphereColor.value.set(sphereOpts.color)
		blackboard.dissolveColor.value.set(dissolveOpts.color)
		blackboard.visibility.value = dissolveOpts.visibility
	})

	return (
		<mesh>
			<sphereGeometry args={[2]} />
			<CustomShaderMaterial
				baseMaterial={MeshStandardMaterial}
				{...shader}
				transparent
				side={DoubleSide}
			/>
		</mesh>
	)
}
