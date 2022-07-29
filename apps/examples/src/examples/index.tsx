import { lazy } from "react"

export default {
	HelloWorld: lazy(() => import("./HelloWorld")),
	Rotation: lazy(() => import("./Rotation")),
	Dissolve: lazy(() => import("./Dissolve")),
	Textures: lazy(() => import("./Textures")),
	Planet: lazy(() => import("./Planet")),
	Water: lazy(() => import("./Water"))
}
