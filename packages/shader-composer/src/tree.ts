import { Expression, isExpression } from "./expressions"
import { isSnippet, Snippet } from "./snippets"
import { isUnit, Program, Unit } from "./units"

export type Item = Unit | Expression | Snippet

export const walkTree = (
	item: Item,
	program: Program,
	callback: (item: Item) => void,
	seen = new Set<Item>()
) => {
	/* Visit each item only once */
	if (seen.has(item)) return
	seen.add(item)

	/* Dive into dependencies */
	for (const dependency of getDependencies(item, program)) {
		walkTree(dependency, program, callback, seen)
	}

	/* Invoke callback */
	callback(item)
}

export const getDependencies = (item: Item, program: Program): Item[] => {
	const dependencies = isUnit(item)
		? [
				item._unitConfig.value,
				item._unitConfig[program]?.header?.values,
				item._unitConfig[program]?.body?.values
		  ]
		: isExpression(item)
		? item.values
		: isSnippet(item)
		? item.expression.values
		: []

	return dependencies.flat().filter(isItem)
}

const isItem = (item: any): item is Item =>
	isUnit(item) || isExpression(item) || isSnippet(item)
