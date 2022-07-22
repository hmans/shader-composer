import { compileShader } from "./compiler"
import { $, glsl } from "./expressions"
import { Snippet } from "./snippets"
import { Bool, Float, Master, Unit, Vec3 } from "./units"

describe("compileShader", () => {
	it("compiles shader programs from the given unit", () => {
		const root = Bool(true)
		const [shader] = compileShader(root)

		expect(shader.vertexShader).toMatchSnapshot()
		expect(shader.fragmentShader).toMatchSnapshot()
	})

	it("embeds body chunks in scoped blocks, with a local `value` variable", () => {
		const root = Master({
			fragment: {
				body: $`gl_FragColor.rgb = vec3(1.0, 0.0, 0.0);`
			}
		})

		const [shader] = compileShader(root)
		expect(shader.fragmentShader).toMatchSnapshot()
	})

	it("resolves dependencies to other units", () => {
		const f = Float(123)
		const root = Float(f)

		const [shader] = compileShader(root)

		expect(shader.vertexShader).toMatchSnapshot()
		expect(shader.fragmentShader).toMatchSnapshot()
	})

	it("resolves dependencies to other units from within expressions", () => {
		const f = Float(123)
		const root = Float(glsl`${f} * 2.0`)

		const [shader] = compileShader(root)

		expect(shader.vertexShader).toMatchSnapshot()
		expect(shader.fragmentShader).toMatchSnapshot()
	})

	it("resolves dependencies to expressions", () => {
		const a = glsl`123.0`
		const b = glsl`${a} + 4.0`
		const root = Float(glsl`${b}`)

		const [shader] = compileShader(root)

		expect(shader.vertexShader).toMatchSnapshot()
		expect(shader.fragmentShader).toMatchSnapshot()
	})

	it("allows units to declare themselves to exist in one program only", () => {
		const position = Float(1, { name: "Position (Vertex Only)", only: "vertex" })
		const color = Float(2, { name: "Color (Fragment Only)", only: "fragment" })

		const root = Master({
			vertex: { body: glsl`gl_Position = ${position};` },
			fragment: { body: glsl`gl_FragColor = ${color};` }
		})

		const [shader] = compileShader(root)

		expect(shader.vertexShader).toMatchSnapshot()
		expect(shader.fragmentShader).toMatchSnapshot()
	})

	it("supports snippets", () => {
		const double = Snippet(
			(name) => $`
			float ${name}(in float a) {
				return a * 2.0;
			}`
		)

		const root = Float($`${double}(1.0)`)

		const [shader] = compileShader(root)

		expect(shader.vertexShader).toMatchSnapshot()
		expect(shader.fragmentShader).toMatchSnapshot()
	})

	describe("when rendering units with registered uniforms", () => {
		const getShader = () => {
			const unitWithUniform = Float($`u_time`, {
				uniforms: {
					u_foo: { type: "float", value: 0 }
				}
			})

			const [shader] = compileShader(unitWithUniform)

			return shader
		}

		it("adds uniform declarations to the program headers", () => {
			expect(getShader().vertexShader).toMatchSnapshot()
			expect(getShader().fragmentShader).toMatchSnapshot()
		})

		it("adds the uniform value object to the returned uniforms object", () => {
			expect(getShader().uniforms).toMatchInlineSnapshot(`
			Object {
			  "u_foo": Object {
			    "type": "float",
			    "value": 0,
			  },
			  "u_time": Object {
			    "value": 0,
			  },
			}
		`)
		})
	})
})
