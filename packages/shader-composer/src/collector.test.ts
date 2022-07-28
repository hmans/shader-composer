import { collectItems } from "./collector"
import { Float } from "./units"

describe("collectItems", () => {
	it("collects all items within a graph, starting with a given root node", () => {
		const root = Float(1)
		const items = collectItems(root, "vertex")
		expect(items).toEqual([root])
	})
})
