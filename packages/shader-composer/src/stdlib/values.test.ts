import { Vector3 } from "three"
import { glslRepresentation } from "../glslRepresentation"
import { vec2, vec3, Vec3 } from "./values"

describe("Vec3", () => {
  it("provides .x, .y, and .z accessors", () => {
    const v = Vec3(new Vector3(), { variableName: "foo" })
    expect(glslRepresentation(v.x._unitConfig.value)).toBe("foo.x")
    expect(glslRepresentation(v.y._unitConfig.value)).toBe("foo.y")
    expect(glslRepresentation(v.z._unitConfig.value)).toBe("foo.z")
  })
})

describe("vec3", () => {
  it("constructs a Vec3 unit from three components", () => {
    const v = vec3(1, 2, 3)
    expect(glslRepresentation(v._unitConfig.value)).toBe("vec3(1.0, 2.0, 3.0)")
  })

  it("uses default values of 0 for its components", () => {
    const v = vec3()
    expect(glslRepresentation(v._unitConfig.value)).toBe("vec3(0.0, 0.0, 0.0)")
  })
})
