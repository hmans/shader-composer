import { lazy } from "react"

export default {
  HelloWorld: lazy(() => import("./HelloWorld")),
  Rotation: lazy(() => import("./Rotation")),
  Flag: lazy(() => import("./Flag")),
  Dissolve: lazy(() => import("./Dissolve")),
  Fireball: lazy(() => import("./Fireball")),
  Textures: lazy(() => import("./Textures")),
  ForceField: lazy(() => import("./ForceField")),
  Planet: lazy(() => import("./Planet")),
  DiscoCube: lazy(() => import("./DiscoCube")),
  StylizedWater: lazy(() => import("./StylizedWater")),
  Water: lazy(() => import("./Water"))
}
