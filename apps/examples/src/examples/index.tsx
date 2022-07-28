import { lazy } from "react"

export default {
	HelloWorld: lazy(() => import("./HelloWorld")),
	MatrixTransformations: lazy(() => import("./MatrixTransformations")),
	Dissolve: lazy(() => import("./Dissolve")),
	Textures: lazy(() => import("./Textures")),
	Planet: lazy(() => import("./Planet")),
	Water: lazy(() => import("./Water"))
}
