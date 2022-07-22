import { lazy } from "react"

const HelloWorld = lazy(() => import("./HelloWorld"))
const Dissolve = lazy(() => import("./Dissolve"))
const Textures = lazy(() => import("./Textures"))
const Planet = lazy(() => import("./Planet"))
const Water = lazy(() => import("./Water"))

export default {
	HelloWorld,
	Dissolve,
	Textures,
	Planet,
	Water
}
