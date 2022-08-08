import { lazy } from "react"

export default {
	HelloWorld: lazy(() => import("./HelloWorld")),
	Rotation: lazy(() => import("./Rotation")),
	Flag: lazy(() => import("./Flag")),
	Dissolve: lazy(() => import("./Dissolve")),
	Fireball: lazy(() => import("./Fireball")),
	Textures: lazy(() => import("./Textures")),
	Planet: lazy(() => import("./Planet")),
	Water: lazy(() => import("./Water"))
}
