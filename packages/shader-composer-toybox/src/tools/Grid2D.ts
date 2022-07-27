import {
	Value,
	SplitVector2,
	Mul,
	Fract,
	Step,
	pipe,
	OneMinus,
	Float
} from "shader-composer"

export const Grid2D = (
	v: Value<"vec2">,
	scale: Value<"float"> = 1,
	thickness: Value<"float"> = 0.1
) => {
	const [x, y] = SplitVector2(Mul(v, scale))

	const fx = Fract(x)
	const fy = Fract(y)

	const sx = Step(thickness, fx)
	const sy = Step(thickness, fy)

	return pipe(
		Mul(sx, sy),
		(v) => OneMinus(v),
		(v) => Float(v, { name: "Grid2D" })
	)
}
