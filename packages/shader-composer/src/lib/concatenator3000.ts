export type Part = any

export const concatenate = (...parts: Part[]) => compact(parts).join("\n")

export const compact = (parts: Part[]) => parts.filter((p) => !!p)

export const identifier = (...parts: Part[]) => compact(parts).join("_")
