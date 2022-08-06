export function bless<O, A>(object: O, api: (o: O) => A): O & A {
	return { ...object, ...api(object) }
}
