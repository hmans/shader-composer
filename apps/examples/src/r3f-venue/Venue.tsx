import { Environment, OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { FC, ReactNode } from "react"
import { Link, useRoute } from "wouter"
import Stage from "./Stage"

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
	const name = match ? params.name : "HelloWorld"
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
				<Environment preset="studio" />
				<fogExp2 args={["#000", 0.03]} attach="fog" />

				<OrbitControls
					makeDefault
					maxDistance={10}
					minDistance={3}
					minPolarAngle={Math.PI * 0.25}
					maxPolarAngle={Math.PI * 0.75}
				/>

				<Stage />

				{examples && <Example examples={examples} />}
				{children}
			</Canvas>
		</>
	)
}
