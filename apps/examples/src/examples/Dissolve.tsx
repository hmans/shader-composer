import { useFrame } from "@react-three/fiber"
import { useControls } from "leva"
import { useMemo } from "react"
import { CustomShaderMaterialMaster, Mix, pipe, Uniform } from "shader-composer"
import { useShader, useUniform } from "shader-composer-r3f"
import { Dissolve } from "shader-composer-toybox"
import { Color, DoubleSide, MeshPhysicalMaterial } from "three"
import CustomShaderMaterial from "three-custom-shader-material"

export default function DissolveExample() {
	/* Leva */
	const sphereOpts = useControls("Sphere", { color: "#666" })
	const dissolveOpts = useControls("Dissolve", {
		edgeColor: "#0ef",
		edgeThickness: { value: 0.2, min: 0, max: 1 },
		scale: { value: 2.5, min: 0, max: 5 },
		visibility: { value: 0.5, min: 0, max: 1 }
	})

	/* Uniforms */
	const sphereColor = useUniform("vec3", new Color(sphereOpts.color))
	const dissolveVisibility = useUniform("float", dissolveOpts.visibility)
	const dissolveScale = useUniform("float", dissolveOpts.scale)
	const dissolveEdgeColor = useUniform("vec3", new Color(dissolveOpts.edgeColor))
	const dissolveEdgeThickness = useUniform("float", dissolveOpts.edgeThickness)

	/* Shader */
	const shader = useShader(() => {
		const dissolve = Dissolve(dissolveVisibility, dissolveScale, dissolveEdgeThickness)

		return CustomShaderMaterialMaster({
			diffuseColor: pipe(sphereColor, (v) => Mix(v, dissolveEdgeColor, dissolve.edge)),
			alpha: dissolve.alpha
		})
	}, [])

	/* Scene Object */
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
