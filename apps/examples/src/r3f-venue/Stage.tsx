import { DoubleSide } from "three"

export default function() {
	return (
		<group>
			<mesh>
				<boxGeometry args={[64, 32, 64]} />
				<meshStandardMaterial color="#333" side={DoubleSide} />
			</mesh>
		</group>
	)
}
