import { compileShader } from "./compiler"
import { glsl } from "./expressions"
import { Unit } from "./units"

describe("compileShader", () => {
	it("compiles shader programs from the given unit", () => {
		const root = Unit("bool", true)
		const shader = compileShader(root)

		expect(shader.vertexShader).toMatchInlineSnapshot(`
		"/*** PROGRAM: VERTEX ***/

		void main()
		{
		/*** BEGIN: Anonymous ***/
		bool Anonymous_1 = true;
		/*** END: Anonymous ***/

		}"
	`)

		expect(shader.fragmentShader).toMatchInlineSnapshot(`
		"/*** PROGRAM: FRAGMENT ***/

		void main()
		{
		/*** BEGIN: Anonymous ***/
		bool Anonymous_1 = true;
		/*** END: Anonymous ***/

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
		/*** BEGIN: Anonymous ***/
		float Anonymous_2 = 123.0;
		/*** END: Anonymous ***/

		/*** BEGIN: Anonymous ***/
		float Anonymous_1 = Anonymous_2;
		/*** END: Anonymous ***/

		}"
	`)

		expect(shader.fragmentShader).toMatchInlineSnapshot(`
		"/*** PROGRAM: FRAGMENT ***/

		void main()
		{
		/*** BEGIN: Anonymous ***/
		float Anonymous_2 = 123.0;
		/*** END: Anonymous ***/

		/*** BEGIN: Anonymous ***/
		float Anonymous_1 = Anonymous_2;
		/*** END: Anonymous ***/

		}"
	`)
	})

	it("resolves dependencies to other units from within expressions", () => {
		const f = Unit("float", 123)
		const root = Unit("float", glsl`${f} * 2.0`)

		const shader = compileShader(root)

		expect(shader.vertexShader).toMatchInlineSnapshot(`
		"/*** PROGRAM: VERTEX ***/

		void main()
		{
		/*** BEGIN: Anonymous ***/
		float Anonymous_2 = 123.0;
		/*** END: Anonymous ***/

		/*** BEGIN: Anonymous ***/
		float Anonymous_1 = Anonymous_2 * 2.0;
		/*** END: Anonymous ***/

		}"
	`)

		expect(shader.fragmentShader).toMatchInlineSnapshot(`
		"/*** PROGRAM: FRAGMENT ***/

		void main()
		{
		/*** BEGIN: Anonymous ***/
		float Anonymous_2 = 123.0;
		/*** END: Anonymous ***/

		/*** BEGIN: Anonymous ***/
		float Anonymous_1 = Anonymous_2 * 2.0;
		/*** END: Anonymous ***/

		}"
	`)
	})

	it("resolves dependencies to expressions", () => {
		const f = glsl`123.0`
		const g = glsl`${f} + 4.0`
		const root = Unit("float", glsl`${g}`)

		const shader = compileShader(root)

		expect(shader.vertexShader).toMatchInlineSnapshot(`
		"/*** PROGRAM: VERTEX ***/

		void main()
		{
		/*** BEGIN: Anonymous ***/
		float Anonymous_1 = 123.0 + 4.0;
		/*** END: Anonymous ***/

		}"
	`)

		expect(shader.fragmentShader).toMatchInlineSnapshot(`
		"/*** PROGRAM: FRAGMENT ***/

		void main()
		{
		/*** BEGIN: Anonymous ***/
		float Anonymous_1 = 123.0 + 4.0;
		/*** END: Anonymous ***/

		}"
	`)
	})
})
