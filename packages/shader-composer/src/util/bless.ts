export function bless<O, A>(object: O, api: (o: O) => A): O & A
export function bless<O, A>(object: O, api: A): O & A {
	return { ...object, ...(typeof api === "function" ? api(object) : api) }
}
