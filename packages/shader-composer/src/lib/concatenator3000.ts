export type Part = any

export const concatenate = (...parts: Part[]): string =>
	compact(parts)
		.flat(Infinity)
		.join("\n")

export const identifier = (...parts: Part[]): string => compact(parts).join("_")

export const compact = (parts: Part[]): Part[] => parts.filter((p) => !!p)

export const block = (...parts: Part[]): Part[] => ["{", ...parts, "}"]
