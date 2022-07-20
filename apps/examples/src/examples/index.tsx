import { lazy } from "react"

export default {
	HelloWorld: lazy(() => import("./HelloWorld")),
	Textures: lazy(() => import("./Textures")),
	Planet: lazy(() => import("./Planet"))
}
