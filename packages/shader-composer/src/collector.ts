import { Expression } from "./expressions"
import { Snippet } from "./snippets"
import { isUnit, Program, Unit } from "./units"

type Item = Unit | Expression | Snippet

export const collectItems = (
	item: Item,
	program: Program,
	state = { items: new Set<Item>() }
) => {
	/* Check if we've already collected this item */
	if (state.items.has(item)) return
	state.items.add(item)

	/* Collect dependencies */
	if (isUnit(item)) {
	}

	/* Add the given item */
	state.items.add(item)

	return [...state.items]
}
