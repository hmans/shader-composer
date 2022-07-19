import sha256 from "crypto-js/sha256"
import { Expression } from "./expressions"

export type Snippet = {
	_: "Snippet"
	name: string
	expression: Expression
}

export const Snippet = (fun: (name: string) => Expression): Snippet => {
	/* Calculate a hash, based on the expression's contents */
	const hash = sha256(fun("").render())
		.toString()
		.substring(0, 10)

	/* Build a name using the hash */
	const name = `snippet_${hash}`

	return {
		_: "Snippet",
		name,
		expression: fun(name)
	}
}

export function isSnippet(x: any): x is Snippet {
	return x && x._ === "Snippet"
}
