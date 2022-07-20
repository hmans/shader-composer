import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { FC, ReactNode } from "react"

export const Venue: FC<{ children?: ReactNode }> = ({ children }) => {
	return (
		<Canvas>
			<OrbitControls makeDefault />
			{children}
		</Canvas>
	)
}
