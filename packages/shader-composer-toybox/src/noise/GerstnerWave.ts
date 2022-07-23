import { $, Snippet, Time, Value, Vec3 } from "shader-composer"
import { Vector2 } from "three"

/*
With many thanks to glNoise:
https://github.com/FarazzShaikh/glNoise/blob/master/src/GerstnerWave.glsl
*/

const gerstnerWave = Snippet(
	(gerstnerWave) => $`
		vec3 ${gerstnerWave}(in vec2 p, in vec2 direction, in float steepness, in float wavelength, in float dt) {
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
	p: Value<"vec2">,
	direction: Value<"vec2"> = new Vector2(1, 0),
	steepness: Value<"float"> = 1,
	wavelength: Value<"float"> = 1,
	offset: Value<"float"> = Time()
) =>
	Vec3($`${gerstnerWave}(${p}, ${direction}, ${steepness}, ${wavelength}, ${offset})`, {
		name: "Gerstner Wave"
	})
