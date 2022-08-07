import { isExpression } from "./expressions"
import { isSnippet, Snippet } from "./snippets"
import { isUnit, Unit, Input, Program } from "./units"

export type Item = Input | Snippet

/**
 * Given a root unit, iterate over the tree and invoke the given callback for each
 * item encountered. Items include units, expressions, snippets, and any constant
 * values.
 *
 * @param item The root of the tree to traverse.
 * @param callback The callback to execute for each item.
 */
export const walkTree = (
	item: Item,
	program: Program | "any",
	callback: (item: Item) => void,
	seen = new Set<Item>()
) => {
	/* Visit each item only once */
	if (seen.has(item)) return
	seen.add(item)

	/* Dive into dependencies */
	for (const dependency of getDependencies(item)) {
		walkTree(dependency, program, callback, seen)
	}

	/* Invoke callback */
	callback(item)
}

/**
 * Walks the tree and returns all items found where the given callback function
 * returns true.
 */
export const collectFromTree = (
	root: Item,
	program: Program | "any",
	check: (item: Item) => boolean
) => {
	const found = new Array<Item>()

	walkTree(root, program, (item) => {
		if (check(item)) {
			found.push(item)
		}
	})

	return found
}

/**
 * Given a unit, expression o snippet, returns that item's dependencies.
 *
 * @param item
 * @returns
 */
export const getDependencies = (item: Item): Item[] => {
	const dependencies = isUnit(item)
		? getUnitDependencies(item)
		: isExpression(item)
		? item.values
		: isSnippet(item)
		? item.expression.values
		: []

	return dependencies.flat().filter((i) => !!i)
}

const getUnitDependencies = ({ _unitConfig: config }: Unit) => {
	const dependencies = [config.value]

	dependencies.push(config.vertex?.header?.values, config.vertex?.body?.values)
	dependencies.push(config.fragment?.header?.values, config.fragment?.body?.values)

	return dependencies.filter((i) => !!i)
}
