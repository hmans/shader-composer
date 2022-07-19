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

		const [shader] = compileShader(root)

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

		const [shader] = compileShader(root)

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

		const [shader] = compileShader(root)

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

	it("allows units to declare themselves to exist in one program only", () => {
		const position = Float(1, { name: "Position (Vertex Only)", only: "vertex" })
		const color = Float(2, { name: "Color (Fragment Only)", only: "fragment" })

		const root = Master({
			vertexBody: glsl`gl_Position = ${position};`,
			fragmentBody: glsl`gl_FragColor = ${color};`
		})

		const [shader] = compileShader(root)

		expect(shader.vertexShader).toMatchInlineSnapshot(`
		"/*** PROGRAM: VERTEX ***/

		void main()
		{
		  /*** BEGIN: Position (Vertex Only) ***/
		  float Position_Vertex_Only__2;
		  {
		    float value = 1.0;
		    Position_Vertex_Only__2 = value;
		  }
		  /*** END: Position (Vertex Only) ***/
		  
		  /*** BEGIN: Anonymous ***/
		  bool Anonymous_1;
		  {
		    bool value = true;
		    gl_Position = Position_Vertex_Only__2;
		    Anonymous_1 = value;
		  }
		  /*** END: Anonymous ***/
		  
		}"
	`)

		expect(shader.fragmentShader).toMatchInlineSnapshot(`
		"/*** PROGRAM: FRAGMENT ***/

		void main()
		{
		  /*** BEGIN: Color (Fragment Only) ***/
		  float Color_Fragment_Only__3;
		  {
		    float value = 2.0;
		    Color_Fragment_Only__3 = value;
		  }
		  /*** END: Color (Fragment Only) ***/
		  
		  /*** BEGIN: Anonymous ***/
		  bool Anonymous_1;
		  {
		    bool value = true;
		    gl_FragColor = Color_Fragment_Only__3;
		    Anonymous_1 = value;
		  }
		  /*** END: Anonymous ***/
		  
		}"
	`)
	})
})
