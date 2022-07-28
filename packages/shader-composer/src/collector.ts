import { Expression, isExpression } from "./expressions"
import { isSnippet, Snippet } from "./snippets"
import { isUnit, Program, Unit } from "./units"

type Item = Unit | Expression | Snippet

export const collectItems = (item: Item, program: Program, items = new Array<Item>()) => {
	/* Check if we've already collected this item */
	if (items.includes(item)) return

	/* Collect dependencies */
	for (const dependency of getDependencies(item, program)) {
		collectItems(dependency, program, items)
	}

	/* Add this item */
	if (shouldBeIncludedInProgram(item, program)) {
		items.push(item)
	}

	/* Return everything except expressions. */
	return items.filter((item) => !isExpression(item))
}

const getDependencies = (item: Item, program: Program): Item[] => {
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

const shouldBeIncludedInProgram = (item: Item, program: Program) =>
	!isUnit(item) ||
	item._unitConfig.only === undefined ||
	item._unitConfig.only === program
