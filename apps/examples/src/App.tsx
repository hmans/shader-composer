import { Link, useRoute } from "wouter"
import * as examples from "./examples"
import "./r3f-venue/styles.css"
import { Venue } from "./r3f-venue/Venue"

function Navigation() {
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

function Example() {
	const [match, params] = useRoute("/examples/:name")
	const name = match ? params.name : "Playground"
	const Component = examples[name as keyof typeof examples]

	return <Component />
}

function App() {
	return (
		<>
			<Navigation />
			<Venue>
				<Example />
			</Venue>
		</>
	)
}

export default App
