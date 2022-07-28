import { $ } from "./expressions"
import { Snippet } from "./snippets"
import { Item, walkTree } from "./tree"
import { Float } from "./units"

describe("walkTree", () => {
	it("walks a given node tree", () => {
		const a = Float(1)
		const snippet = Snippet(() => $`${a}`)
		const expr = $`${snippet}`
		const root = Float(expr)
		const seen = new Array<Item>()

		walkTree(root, (item) => seen.push(item))

		expect(seen).toEqual([a, snippet, expr, root])
	})
})
