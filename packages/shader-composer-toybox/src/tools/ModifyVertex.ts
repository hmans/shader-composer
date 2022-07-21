import {
	Add,
	Bitangent,
	Cross,
	Mul,
	Normalize,
	Sub,
	Tangent,
	Value
} from "shader-composer"

export const ModifyVertex = (
	originalPosition: Value<"vec3">,
	originalNormal: Value<"vec3">,
	modifier: (v: Value<"vec3">) => Value<"vec3">,
	offset = 0.001
) => {
	const tangent = Tangent(originalNormal)
	const bitangent = Bitangent(originalNormal, tangent)

	const displacedNeighbors = [
		Add(originalPosition, Mul(tangent, offset)),
		Add(originalPosition, Mul(bitangent, offset))
	].map(modifier)

	const position = modifier(originalPosition)
	const displacedTangent = Sub(displacedNeighbors[0], position)
	const displacedBitangent = Sub(displacedNeighbors[1], position)

	const normal = Normalize(Cross(displacedTangent, displacedBitangent))

	return {
		position,
		normal
	}
}
