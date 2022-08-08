import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import {
  Add,
  CustomShaderMaterialMaster,
  Div,
  Floor,
  Modulo,
  Mul,
  NormalizePlusMinusOne,
  OneMinus,
  pipe,
  Sub,
  Time,
  VertexPosition
} from "shader-composer"
import { useShader } from "shader-composer-r3f"
import { PSRDNoise3D } from "shader-composer-toybox"
import { Color, Mesh, MeshPhysicalMaterial } from "three"
import CustomShaderMaterial from "three-custom-shader-material"

export default function DiscoCube() {
  const mesh = useRef<Mesh>(null!)

  const shader = useShader(() => {
    const time = Time()

    const resolution = 0.25

    const noise = pipe(
      VertexPosition,
      (v) => Add(v, 100),
      (v) => Div(v, resolution),
      (v) => Floor(v),
      (v) => Mul(v, resolution),
      (v) => PSRDNoise3D(v),
      (v) => NormalizePlusMinusOne(v),
      (v) => Sub(v, Mul(time, 0.1)),
      (v) => Modulo(v, 1)
    )

    return CustomShaderMaterialMaster({
      diffuseColor: Mul(new Color("#abf"), noise),
      metalness: noise,
      roughness: OneMinus(noise)
    })
  }, [])

  useFrame((_, dt) => {
    mesh.current.rotation.x += dt * 0.1
    mesh.current.rotation.y += dt * 0.5
    mesh.current.rotation.z += dt * 0.3
  })

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <CustomShaderMaterial
        baseMaterial={MeshPhysicalMaterial}
        {...shader}
        clearcoat={0.2}
      />
    </mesh>
  )
}
