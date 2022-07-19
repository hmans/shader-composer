import { compileShader } from "./compiler"
import { Unit } from "./units"

describe("compileShader", () => {
	it("compiles shader programs from the given unit", () => {
		const root = Unit("bool", true)
		const shader = compileShader(root)

		expect(shader.vertexShader).toMatchInlineSnapshot(`
		"/*** PROGRAM: VERTEX ***/

		void main()
		{
		bool Anonymous_1 = true;
		}"
	`)

		expect(shader.fragmentShader).toMatchInlineSnapshot(`
		"/*** PROGRAM: FRAGMENT ***/

		void main()
		{
		bool Anonymous_1 = true;
		}"
	`)
	})

	it("resolves dependencies to other units", () => {
		const f = Unit("float", 123)
		const root = Unit("float", f)

		const shader = compileShader(root)

		expect(shader.vertexShader).toMatchInlineSnapshot(`
		"/*** PROGRAM: VERTEX ***/

		void main()
		{
		float Anonymous_2 = 123.0;
		float Anonymous_1 = Anonymous_2;
		}"
	`)

		expect(shader.fragmentShader).toMatchInlineSnapshot(`
		"/*** PROGRAM: FRAGMENT ***/

		void main()
		{
		float Anonymous_2 = 123.0;
		float Anonymous_1 = Anonymous_2;
		}"
	`)
	})
})
