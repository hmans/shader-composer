import { isExpression } from "../expressions"
import { Item, walkTree } from "../tree"
import { isUnit, Program } from "../units"

export const collectItems = (item: Item, program: Program) => {
	const items = new Array<Item>()

	walkTree(item, program, (item) => {
		if (shouldBeIncludedInProgram(item, program)) {
			items.push(item)
		}
	})

	return items.filter((item) => !isExpression(item))
}

const shouldBeIncludedInProgram = (item: Item, program: Program) =>
	!isUnit(item) ||
	item._unitConfig.only === undefined ||
	item._unitConfig.only === program
