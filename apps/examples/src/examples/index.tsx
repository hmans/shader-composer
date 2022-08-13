import { lazy } from "react"

export default {
  HelloWorld: { Example: lazy(() => import("./HelloWorld")) },
  Rotation: { Example: lazy(() => import("./Rotation")) },
  Flag: { Example: lazy(() => import("./Flag")) },
  Dissolve: { Example: lazy(() => import("./Dissolve")) },
  Fireball: { Example: lazy(() => import("./Fireball")) },
  Textures: { Example: lazy(() => import("./Textures")) },
  ForceField: { Example: lazy(() => import("./ForceField")) },
  Planet: { Example: lazy(() => import("./Planet")) },
  DiscoCube: { Example: lazy(() => import("./DiscoCube")) },
  StylizedWater: { Example: lazy(() => import("./StylizedWater")) },
  Water: { Example: lazy(() => import("./Water")) }
}
