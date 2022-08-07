import { Color, Vector3 } from "three"
import { $ } from "./expressions"
import { Snippet } from "./snippets"
import { Float, Vec3 } from "./stdlib"
import { Item, walkTree } from "./tree"

describe("walkTree", () => {
	it("walks a given node tree", () => {
		const a = Float(1)
		const snippet = Snippet(() => $`${a}`)
		const expr = $`${snippet}`
		const root = Float(expr)

		const seen = new Array<Item>()
		walkTree(root, "any", (item) => seen.push(item))
		expect(seen).toEqual([1, a, snippet, expr, root])
	})

	it("includes constant values", () => {
		const color = new Color()
		const root = Vec3(color)

		const seen = new Array<Item>()
		walkTree(root, "any", (item) => seen.push(item))
		expect(seen).toEqual([color, root])
	})
})
