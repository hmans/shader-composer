import { compileShader } from "./compiler"
import { $, glsl } from "./expressions"
import { Snippet } from "./snippets"
import { Bool, Master, Float } from "./stdlib"

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

	describe("when rendering units without variables", () => {
		it("doesn't declare global or local value variables", () => {
			const unitWithoutVariable = Float(1, {
				variable: false,
				vertex: { body: $`/* Hi from the vertex program */` },
				fragment: { body: $`/* Hi from the vertex program */` }
			})

			const [shader] = compileShader(unitWithoutVariable)

			expect(shader.vertexShader).toMatchSnapshot()
			expect(shader.fragmentShader).toMatchSnapshot()
		})
	})

	describe("when rendering units with registered uniforms", () => {
		const getShader = () => {
			const unitWithUniform = Float(0, {
				uniform: { value: 0 }
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
			  "u_Anonymous_1": Object {
			    "value": 0,
			  },
			}
		`)
		})
	})

	it("only includes the units needed in individual programs", () => {
		const a = Float(1, { name: "A" })
		const b = Float(2, { name: "B" })

		const master = Bool(true, {
			vertex: {
				body: $`foo = ${a};`
			},
			fragment: {
				body: $`bar = ${b}`
			}
		})

		const [shader] = compileShader(master)

		expect(shader.vertexShader).toMatchSnapshot()
		expect(shader.fragmentShader).toMatchSnapshot()
	})

	it("returns a list of all units contained in the tree", () => {
		const a = Float(1)
		const root = Float(a)
		const [shader, { units }] = compileShader(root)

		expect(units).toEqual([root, a])
	})
})
