import { Expression } from "./expressions"

export type Snippet = {
	_: "Snippet"
	name: string
	expression: Expression
}

export const Snippet = (fun: (name: string) => Expression): Snippet => {
	const name = `snippet_${Math.floor(Math.random() * 100000)}`

	return {
		_: "Snippet",
		name,
		expression: fun(name)
	}
}

export function isSnippet(x: any): x is Snippet {
	return x && x._ === "Snippet"
}
