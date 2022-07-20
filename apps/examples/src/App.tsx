import * as examplesModule from "./examples"
import "./r3f-venue/styles.css"
import { Venue } from "./r3f-venue/Venue"

/* Convert the imported module into a plain old object */
const examples = Object.fromEntries(Object.entries(examplesModule))

function App() {
	return <Venue examples={examples} />
}

export default App
