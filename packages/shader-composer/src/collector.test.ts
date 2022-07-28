import { collectItems } from "./collector"
import { $ } from "./expressions"
import { Float } from "./units"

describe("collectItems", () => {
	it("collects all items within a graph, starting with a given root node", () => {
		const root = Float(1)
		const items = collectItems(root, "vertex")

		expect(items).toEqual([root])
	})

	it("includes nodes referenced from other nodes", () => {
		const a = Float(1)
		const root = Float(a)
		const items = collectItems(root, "vertex")

		expect(items).toEqual([a, root])
	})

	it("includes nodes referenced in expressions", () => {
		const a = Float(1)
		const root = Float($`${a}`)
		const items = collectItems(root, "vertex")

		expect(items).toEqual([a, root])
	})
})
