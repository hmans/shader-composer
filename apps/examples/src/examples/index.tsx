import { Examples } from "r3f-stage"
import { lazy } from "react"

const examples: Examples = {
  "hello-world": {
    title: "Hello World",
    Description: () => (
      <p>
        A simple example demonstrating <strong>color changes</strong>,{" "}
        <strong>vertex displacement</strong>, and using <strong>uniforms</strong>.
      </p>
    ),
    Example: lazy(() => import("./HelloWorld"))
  },

  Rotation: {
    Description: () => (
      <p>
        Sometimes you'll want to perform rotation within the vertex shader (and not in the
        scene itself.) This example shows you how, including how to fix the normals so
        lighting still works as intended.
      </p>
    ),
    Example: lazy(() => import("./Rotation"))
  },

  Flag: {
    Example: lazy(() => import("./Flag")),
    Description: () => <p>A wavy flag!</p>
  },

  Dissolve: { Example: lazy(() => import("./Dissolve")) },

  Fireball: {
    Description: () => (
      <>
        <p>
          Holy crap, it's a freakin' <strong>ball of fire</strong>!
        </p>
        <p>
          This example applies two separate PSRD noise functions &ndash; one for the
          wobbly <strong>vertex displacement</strong>, the other for{" "}
          <strong>picking a color from a tiny palette texture</strong> to visualize
          heat/fiery doom.
        </p>
      </>
    ),
    Example: lazy(() => import("./Fireball"))
  },

  Textures: { Example: lazy(() => import("./Textures")) },
  ForceField: { Example: lazy(() => import("./ForceField")) },
  Planet: { Example: lazy(() => import("./Planet")) },
  DiscoCube: { Example: lazy(() => import("./DiscoCube")) },
  StylizedWater: { Example: lazy(() => import("./StylizedWater")) },
  Water: { Example: lazy(() => import("./Water")) }
}

export default examples
