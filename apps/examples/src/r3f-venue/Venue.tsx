import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { FC, ReactNode } from "react"
import { Link, useRoute } from "wouter"

function Navigation({ examples }: { examples: Examples }) {
	return (
		<div style={{ position: "fixed", top: 10, left: 10, zIndex: 1 }}>
			{Object.entries(examples).map(([name, _]) => (
				<Link to={`/examples/${name}`} key={name}>
					{name}
				</Link>
			))}
		</div>
	)
}

function Example({ examples }: { examples: Examples }) {
	const [match, params] = useRoute("/examples/:name")
	const name = match ? params.name : "Textures"
	const Component = examples[name as keyof typeof examples]

	return <Component />
}

export type Examples = Record<string, any>

export const Venue: FC<{ children?: ReactNode; examples?: Examples }> = ({
	children,
	examples
}) => {
	return (
		<>
			{examples && <Navigation examples={examples} />}
			<Canvas>
				{examples && <Example examples={examples} />}
				<OrbitControls makeDefault />
				{children}
			</Canvas>
		</>
	)
}
