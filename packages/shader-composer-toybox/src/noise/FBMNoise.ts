import { $, Float, Int, Snippet, Value } from "shader-composer"
import { type } from "shader-composer/src/glslType"
import { perlin } from "./PerlinNoise"

export type FBMOptions = {
	seed?: Value<"float">
	persistance?: Value<"float">
	lacunarity?: Value<"float">
	scale?: Value<"float">
	redistribution?: Value<"float">
	octaves?: Value<"int">
	terbulance?: Value<"bool">
	ridge?: Value<"bool">
}

export const FBMNoise = (
	p: Value<"vec2" | "vec3">,
	{
		seed = 0,
		persistance = 0,
		lacunarity = 0,
		scale = 1,
		redistribution = 1,
		octaves = "1", //Int(1),
		terbulance = true,
		ridge = true
	}: FBMOptions = {}
) =>
	Float(
		$`${fbmNoise}(${p}, ${fbmNoise}Opts(
			${seed},
			${persistance},
			${lacunarity},
			${scale},
			${redistribution},
			${octaves},
			${terbulance},
			${ridge}))`,
		{
			name: `FBMNoise ${type(p)}`
		}
	)

const fbmNoise = Snippet(
	(fbmNoise) => $`
		#define MAX_FBM_ITERATIONS 30

		struct ${fbmNoise}Opts {
			float seed;
			float persistance;
			float lacunarity;
			float scale;
			float redistribution;
			int octaves;
			bool terbulance;
			bool ridge;
		};

		float ${fbmNoise}(vec2 p, ${fbmNoise}Opts opts) {
			p += (opts.seed * 100.0);
			float persistance = opts.persistance;
			float lacunarity = opts.lacunarity;
			float redistribution = opts.redistribution;
			int octaves = opts.octaves;
			bool terbulance = opts.terbulance;
			bool ridge = opts.terbulance && opts.ridge;

			float result = 0.0;
			float amplitude = 1.0;
			float frequency = 1.0;
			float maximum = amplitude;

			for (int i = 0; i < MAX_FBM_ITERATIONS; i++) {
				if (i >= octaves)
					break;

				vec2 p = p * frequency * opts.scale;

				float noiseVal = ${perlin}(p);

				if (terbulance)
					noiseVal = abs(noiseVal);

				if (ridge)
					noiseVal = -1.0 * noiseVal;

				result += noiseVal * amplitude;

				frequency *= lacunarity;
				amplitude *= persistance;
				maximum += amplitude;
			}

			float redistributed = pow(result, redistribution);
			return redistributed / maximum;
		}

		float ${fbmNoise}(vec3 p, ${fbmNoise}Opts opts) {
			p += (opts.seed * 100.0);
			float persistance = opts.persistance;
			float lacunarity = opts.lacunarity;
			float redistribution = opts.redistribution;
			int octaves = opts.octaves;
			bool terbulance = opts.terbulance;
			bool ridge = opts.terbulance && opts.ridge;

			float result = 0.0;
			float amplitude = 1.0;
			float frequency = 1.0;
			float maximum = amplitude;

			for (int i = 0; i < MAX_FBM_ITERATIONS; i++) {
				if (i >= octaves)
					break;

				vec3 p = p * frequency * opts.scale;

				float noiseVal = ${perlin}(p);

				if (terbulance)
					noiseVal = abs(noiseVal);

				if (ridge)
					noiseVal = -1.0 * noiseVal;

				result += noiseVal * amplitude;

				frequency *= lacunarity;
				amplitude *= persistance;
				maximum += amplitude;
			}

			float redistributed = pow(result, redistribution);
			return redistributed / maximum;
		}
	`
)
