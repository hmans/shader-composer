import { lazy } from "react"

const HelloWorld = lazy(() => import("./HelloWorld"))
const Textures = lazy(() => import("./Textures"))
const Planet = lazy(() => import("./Planet"))
const Water = lazy(() => import("./Water"))

export default {
	HelloWorld,
	Textures,
	Planet,
	Water
}
