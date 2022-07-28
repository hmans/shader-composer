import { collectItems } from "./collector"
import { $ } from "./expressions"
import { Snippet } from "./snippets"
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

	it("includes snippets and nodes referenced in snippets", () => {
		const a = Float(1)
		const snip = Snippet(() => $`${a}`)
		const root = Float($`${snip}`)
		const items = collectItems(root, "vertex")

		expect(items).toEqual([a, snip, root])
	})

	it("respects nodes marked for specific programs", () => {
		const a = Float(1, { only: "fragment" })
		const root = Float(a)
		const items = collectItems(root, "vertex")

		expect(items).toEqual([root])
	})
})
