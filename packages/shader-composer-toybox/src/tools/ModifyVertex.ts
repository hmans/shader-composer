import {
	Add,
	Bitangent,
	Cross,
	Input,
	Mul,
	Normalize,
	Sub,
	Tangent
} from "shader-composer"

export const ModifyVertex = (
	originalPosition: Input<"vec3">,
	originalNormal: Input<"vec3">,
	modifier: (v: Input<"vec3">) => Input<"vec3">,
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
