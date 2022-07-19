export type Part = any

export const isPresent = (p: Part) => !!p

export const concatenate = (...parts: Part[]): string =>
	parts
		.flat(Infinity)
		.filter(isPresent)
		.join("\n")

export const identifier = (...parts: Part[]): string => parts.filter(isPresent).join("_")

export const statement = (...parts: Part[]): string =>
	parts.filter(isPresent).join(" ") + ";"

export const block = (...parts: Part[]): Part[] => ["{", ...parts, "}"]

export const sluggify = (s: string) =>
	s.replace(/[^a-zA-Z0-9]/g, "_").replace(/_{2,}/g, "_")
