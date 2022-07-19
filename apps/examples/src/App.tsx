import { R3FStage } from "r3f-stage"
import "@react-three/fiber"
import "r3f-stage/styles.css"
import Playground from "./examples/Playground"

function App() {
	return (
		<R3FStage>
			<Playground />
		</R3FStage>
	)
}

export default App
