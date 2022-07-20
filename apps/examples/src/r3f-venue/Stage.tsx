import { DoubleSide } from "three"

export default function() {
	return (
		<group>
			<mesh>
				<boxGeometry args={[50, 25, 50]} />
				<meshStandardMaterial color="#333" side={DoubleSide} />
			</mesh>
		</group>
	)
}
