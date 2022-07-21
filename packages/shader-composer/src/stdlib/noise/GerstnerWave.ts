import { $ } from "../../expressions"
import { Snippet } from "../../snippets"
import { Value, Vec3 } from "../../units"

/*
With many thanks to glNoise:
https://github.com/FarazzShaikh/glNoise/blob/master/src/GerstnerWave.glsl
*/

const gerstnerWave = Snippet(
	(gerstnerWave) => $`
		vec3 ${gerstnerWave}(in vec3 p, in vec2 direction, in float steepness, in float wavelength, in float dt) {
			float k = 2.0 * PI / wavelength;
			float c = sqrt(9.8 / k);
			vec2 d = normalize(direction);
			float f = k * (dot(d, p.xy) - c * dt);
			float a = steepness / k;

			return vec3(d.x * (a * cos(f)), a * sin(f), d.y * (a * cos(f)));
		}
	`
)

export const GerstnerWave = (
	p: Value<"vec3">,
	direction: Value<"vec2">,
	steepness: Value<"float">,
	wavelength: Value<"float">,
	dt: Value<"float">
) =>
	Vec3($`${gerstnerWave}(${p}, ${direction}, ${steepness}, ${wavelength}, ${dt})`, {
		name: "Gerstner Wave"
	})
