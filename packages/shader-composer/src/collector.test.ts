import { collectItems } from "./collector"
import { Float } from "./units"

describe("collectItems", () => {
	it("collects all items within a graph, starting with a given root node", () => {
		const root = Float(1)
		const items = collectItems(root, "vertex")

		/*
		The graph just consists of a simple node, so the returned items should only
		contain the root node and nothing else.
		*/
		expect(items).toEqual([root])
	})

	it("includes nodes referenced from other nodes", () => {
		const a = Float(1)
		const b = Float(a)
		const items = collectItems(b, "vertex")

		expect(items).toEqual([a, b])
	})
})
