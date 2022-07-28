import { Expression, isExpression } from "./expressions"
import { isSnippet, Snippet } from "./snippets"
import { isUnit, Program, Unit } from "./units"

export type Item = Unit | Expression | Snippet

export const walkTree = (
	item: Item,
	callback: (item: Item) => void,
	seen = new Set<Item>()
) => {
	/* Visit each item only once */
	if (seen.has(item)) return
	seen.add(item)

	/* Dive into dependencies */
	for (const dependency of getDependencies(item)) {
		walkTree(dependency, callback, seen)
	}

	/* Invoke callback */
	callback(item)
}

export const getDependencies = (item: Item): Item[] => {
	const dependencies = isUnit(item)
		? getUnitDependencies(item)
		: isExpression(item)
		? item.values
		: isSnippet(item)
		? item.expression.values
		: []

	return dependencies.flat().filter(isItem)
}

const getUnitDependencies = ({ _unitConfig: config }: Unit) => {
	const dependencies = [config.value]

	dependencies.push(config.vertex?.header?.values, config.vertex?.body?.values)
	dependencies.push(config.fragment?.header?.values, config.fragment?.body?.values)

	return dependencies
}

const isItem = (item: any): item is Item =>
	isUnit(item) || isExpression(item) || isSnippet(item)
