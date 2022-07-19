export default function Playground() {
	return (
		<group position-y={13}>
			<mesh>
				<icosahedronGeometry args={[8, 3]} />
				<meshStandardMaterial color={0x00ff00} />
			</mesh>
		</group>
	)
}
