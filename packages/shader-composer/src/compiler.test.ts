import { compileShader } from "./compiler"
import { glsl } from "./expressions"
import { Bool, Float, Master, Unit, Vec3 } from "./units"

describe("compileShader", () => {
	it("compiles shader programs from the given unit", () => {
		const root = Bool(true)
		const [shader] = compileShader(root)

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
		const f = Float(123)
		const root = Float(f)

		const [shader] = compileShader(root)

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

	it("resolves dependencies to other units from within expressions", () => {
		const f = Float(123)
		const root = Float(glsl`${f} * 2.0`)

		const [shader] = compileShader(root)

		expect(shader.vertexShader).toMatchInlineSnapshot(`
		"/*** PROGRAM: VERTEX ***/

		void main()
		{
		  float Anonymous_2 = 123.0;
		  float Anonymous_1 = Anonymous_2 * 2.0;
		}"
	`)

		expect(shader.fragmentShader).toMatchInlineSnapshot(`
		"/*** PROGRAM: FRAGMENT ***/

		void main()
		{
		  float Anonymous_2 = 123.0;
		  float Anonymous_1 = Anonymous_2 * 2.0;
		}"
	`)
	})

	it("resolves dependencies to expressions", () => {
		const a = glsl`123.0`
		const b = glsl`${a} + 4.0`
		const root = Float(glsl`${b}`)

		const [shader] = compileShader(root)

		expect(shader.vertexShader).toMatchInlineSnapshot(`
		"/*** PROGRAM: VERTEX ***/

		void main()
		{
		  float Anonymous_1 = 123.0 + 4.0;
		}"
	`)

		expect(shader.fragmentShader).toMatchInlineSnapshot(`
		"/*** PROGRAM: FRAGMENT ***/

		void main()
		{
		  float Anonymous_1 = 123.0 + 4.0;
		}"
	`)
	})

	it("allows units to declare themselves to exist in one program only", () => {
		const position = Float(1, { name: "Position (Vertex Only)", only: "vertex" })
		const color = Float(2, { name: "Color (Fragment Only)", only: "fragment" })

		const root = Master({
			vertex: { body: glsl`gl_Position = ${position};` },
			fragment: { body: glsl`gl_FragColor = ${color};` }
		})

		const [shader] = compileShader(root)

		expect(shader.vertexShader).toMatchInlineSnapshot(`
		"/*** PROGRAM: VERTEX ***/

		void main()
		{
		  bool Anonymous_1;
		  {
		    bool value = true;
		    gl_Position = E_UNRESOLVED_DEPENDENCY;
		    Anonymous_1 = value;
		  }
		}"
	`)

		expect(shader.fragmentShader).toMatchInlineSnapshot(`
		"/*** PROGRAM: FRAGMENT ***/

		void main()
		{
		  bool Anonymous_1;
		  {
		    bool value = true;
		    gl_FragColor = E_UNRESOLVED_DEPENDENCY;
		    Anonymous_1 = value;
		  }
		}"
	`)
	})
})
