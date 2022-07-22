import { Environment, OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Perf } from "r3f-perf"
import { FC, ReactNode, Suspense } from "react"
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

export const Venue: FC<{
	children?: ReactNode
	examples?: Examples
	performance?: boolean
}> = ({ children, examples, performance = true }) => {
	return (
		<>
			{examples && <Navigation examples={examples} />}
			<Canvas>
				{/* <ambientLight intensity={0.2} />
				<directionalLight position={[10, 10, 20]} intensity={0.6} />
				<directionalLight position={[-20, 0, 10]} intensity={0.6} /> */}
				<Environment preset="sunset" />
				<fogExp2 args={["#000", 0.03]} attach="fog" />

				<OrbitControls
					makeDefault
					maxDistance={10}
					minDistance={3}
					minPolarAngle={Math.PI * 0.25}
					maxPolarAngle={Math.PI * 0.75}
				/>

				{performance && <Perf position="bottom-right" />}

				<Stage />

				<Suspense>{examples && <Example examples={examples} />}</Suspense>

				{children}
			</Canvas>
		</>
	)
}
