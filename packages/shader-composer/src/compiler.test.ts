import { compileShader } from "./compiler"
import { glsl } from "./expressions"
import { Bool, Float, Unit } from "./units"

describe("compileShader", () => {
	it("compiles shader programs from the given unit", () => {
		const root = Bool(true)
		const shader = compileShader(root)

		expect(shader.vertexShader).toMatchInlineSnapshot(`
		"/*** PROGRAM: VERTEX ***/

		void main()
		{
		/*** BEGIN: Anonymous ***/
		bool Anonymous_1;
		{
		bool value = true;
		Anonymous_1 = value;
		}
		/*** END: Anonymous ***/

		}"
	`)

		expect(shader.fragmentShader).toMatchInlineSnapshot(`
		"/*** PROGRAM: FRAGMENT ***/

		void main()
		{
		/*** BEGIN: Anonymous ***/
		bool Anonymous_1;
		{
		bool value = true;
		Anonymous_1 = value;
		}
		/*** END: Anonymous ***/

		}"
	`)
	})

	it("resolves dependencies to other units", () => {
		const f = Float(123)
		const root = Float(f)

		const shader = compileShader(root)

		expect(shader.vertexShader).toMatchInlineSnapshot(`
		"/*** PROGRAM: VERTEX ***/

		void main()
		{
		/*** BEGIN: Anonymous ***/
		float Anonymous_2;
		{
		float value = 123.0;
		Anonymous_2 = value;
		}
		/*** END: Anonymous ***/

		/*** BEGIN: Anonymous ***/
		float Anonymous_1;
		{
		float value = Anonymous_2;
		Anonymous_1 = value;
		}
		/*** END: Anonymous ***/

		}"
	`)

		expect(shader.fragmentShader).toMatchInlineSnapshot(`
		"/*** PROGRAM: FRAGMENT ***/

		void main()
		{
		/*** BEGIN: Anonymous ***/
		float Anonymous_2;
		{
		float value = 123.0;
		Anonymous_2 = value;
		}
		/*** END: Anonymous ***/

		/*** BEGIN: Anonymous ***/
		float Anonymous_1;
		{
		float value = Anonymous_2;
		Anonymous_1 = value;
		}
		/*** END: Anonymous ***/

		}"
	`)
	})

	it("resolves dependencies to other units from within expressions", () => {
		const f = Float(123)
		const root = Float(glsl`${f} * 2.0`)

		const shader = compileShader(root)

		expect(shader.vertexShader).toMatchInlineSnapshot(`
		"/*** PROGRAM: VERTEX ***/

		void main()
		{
		/*** BEGIN: Anonymous ***/
		float Anonymous_2;
		{
		float value = 123.0;
		Anonymous_2 = value;
		}
		/*** END: Anonymous ***/

		/*** BEGIN: Anonymous ***/
		float Anonymous_1;
		{
		float value = Anonymous_2 * 2.0;
		Anonymous_1 = value;
		}
		/*** END: Anonymous ***/

		}"
	`)

		expect(shader.fragmentShader).toMatchInlineSnapshot(`
		"/*** PROGRAM: FRAGMENT ***/

		void main()
		{
		/*** BEGIN: Anonymous ***/
		float Anonymous_2;
		{
		float value = 123.0;
		Anonymous_2 = value;
		}
		/*** END: Anonymous ***/

		/*** BEGIN: Anonymous ***/
		float Anonymous_1;
		{
		float value = Anonymous_2 * 2.0;
		Anonymous_1 = value;
		}
		/*** END: Anonymous ***/

		}"
	`)
	})

	it("resolves dependencies to expressions", () => {
		const a = glsl`123.0`
		const b = glsl`${a} + 4.0`
		const root = Float(glsl`${b}`)

		const shader = compileShader(root)

		expect(shader.vertexShader).toMatchInlineSnapshot(`
		"/*** PROGRAM: VERTEX ***/

		void main()
		{
		/*** BEGIN: Anonymous ***/
		float Anonymous_1;
		{
		float value = 123.0 + 4.0;
		Anonymous_1 = value;
		}
		/*** END: Anonymous ***/

		}"
	`)

		expect(shader.fragmentShader).toMatchInlineSnapshot(`
		"/*** PROGRAM: FRAGMENT ***/

		void main()
		{
		/*** BEGIN: Anonymous ***/
		float Anonymous_1;
		{
		float value = 123.0 + 4.0;
		Anonymous_1 = value;
		}
		/*** END: Anonymous ***/

		}"
	`)
	})
})
