import { compileShader } from "../compiler"
import { Float } from "../units"
import { Pipe } from "./helpers"
import { Add, Multiply } from "./math"

describe("Pipe", () => {
	it("pipes a value through multiple transformations", () => {
		const v = Pipe(
			Float(1),
			(v) => Add(v, 1),
			(v) => Multiply(v, 5)
		)

		const [shader] = compileShader(v)

		expect(shader.vertexShader).toMatchInlineSnapshot(`
		"/*** PROGRAM: VERTEX ***/

		void main()
		{
		  /*** BEGIN: Anonymous ***/
		  float Anonymous_1 = 1.0;
		  /*** END: Anonymous ***/
		  
		  /*** BEGIN: Add (float) ***/
		  float Add_float_2 = Anonymous_1 + 1.0;
		  /*** END: Add (float) ***/
		  
		  /*** BEGIN: Multiply (float) ***/
		  float Multiply_float_3 = Add_float_2 * 5.0;
		  /*** END: Multiply (float) ***/
		  
		}"
	`)
	})
})
