import { $, Float, Input, Snippet } from "shader-composer"
import { simplex3Dnoise } from "./Simplex3DNoise"

export const turbulence3D = (noiseFun: Snippet) =>
	Snippet(
		(turbulence3D) => $`
			float ${turbulence3D}(vec3 p, float octaves) {
				float t = -0.5;
					
				for (float f = 1.0 ; f <= octaves; f++) {
					float power = pow(2.0, f);
					t += abs(${noiseFun}(vec3(power * p)) / power);
				}

				return t;
			}
		`
	)

export const Turbulence3D = (
	p: Input<"vec3">,
	octaves: Input<"float"> = 10,
	noiseFun: Snippet = simplex3Dnoise
) => Float($`${turbulence3D(noiseFun)}(${p}, ${octaves})`, { name: `Turbulence3D` })
