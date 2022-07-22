import { Suspense } from "react"
import examples from "./examples"
import "./r3f-venue/styles.css"
import { Venue } from "./r3f-venue/Venue"

function App() {
	return (
		<Suspense fallback={<p>Loading...</p>}>
			<Venue examples={examples} />
		</Suspense>
	)
}

export default App
