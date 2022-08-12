[Shader Composer](README.md) / Exports

# Shader Composer

The `shader-composer/stdlib` module contains a core collection of Shader unit implementations.

## Table of contents

### Type Aliases

- [CustomShaderMaterialMasterProps](modules.md#customshadermaterialmasterprops)
- [FresnelProps](modules.md#fresnelprops)
- [ShaderMaterialMasterProps](modules.md#shadermaterialmasterprops)
- [UniformUnit](modules.md#uniformunit)

### Variables

- [CameraFar](modules.md#camerafar)
- [CameraNear](modules.md#cameranear)
- [CameraPosition](modules.md#cameraposition)
- [FragmentCoordinate](modules.md#fragmentcoordinate)
- [InstanceMatrix](modules.md#instancematrix)
- [IsFrontFacing](modules.md#isfrontfacing)
- [ModelMatrix](modules.md#modelmatrix)
- [ModelViewMatrix](modules.md#modelviewmatrix)
- [NormalMatrix](modules.md#normalmatrix)
- [ProjectionMatrix](modules.md#projectionmatrix)
- [Resolution](modules.md#resolution)
- [ScreenUV](modules.md#screenuv)
- [UV](modules.md#uv)
- [UsingInstancing](modules.md#usinginstancing)
- [VertexNormal](modules.md#vertexnormal)
- [VertexPosition](modules.md#vertexposition)
- [ViewDirection](modules.md#viewdirection)
- [ViewMatrix](modules.md#viewmatrix)

### Functions

- [Abs](modules.md#abs)
- [Acos](modules.md#acos)
- [Add](modules.md#add)
- [Asin](modules.md#asin)
- [Attribute](modules.md#attribute)
- [Bitangent](modules.md#bitangent)
- [Bool](modules.md#bool)
- [Ceil](modules.md#ceil)
- [Clamp](modules.md#clamp)
- [Clamp01](modules.md#clamp01)
- [Cos](modules.md#cos)
- [Cross](modules.md#cross)
- [CustomShaderMaterialMaster](modules.md#customshadermaterialmaster)
- [Degrees](modules.md#degrees)
- [Distance](modules.md#distance)
- [Div](modules.md#div)
- [Dot](modules.md#dot)
- [Exp](modules.md#exp)
- [Exp2](modules.md#exp2)
- [Float](modules.md#float)
- [Floor](modules.md#floor)
- [Fract](modules.md#fract)
- [Fresnel](modules.md#fresnel)
- [GreaterOrEqual](modules.md#greaterorequal)
- [If](modules.md#if)
- [Int](modules.md#int)
- [InverseLerp](modules.md#inverselerp)
- [InverseSqrt](modules.md#inversesqrt)
- [Length](modules.md#length)
- [Lerp](modules.md#lerp)
- [LocalToViewSpace](modules.md#localtoviewspace)
- [LocalToWorldSpace](modules.md#localtoworldspace)
- [Log](modules.md#log)
- [Log2](modules.md#log2)
- [Master](modules.md#master)
- [Mat3](modules.md#mat3)
- [Mat4](modules.md#mat4)
- [Max](modules.md#max)
- [Min](modules.md#min)
- [Mix](modules.md#mix)
- [Modulo](modules.md#modulo)
- [Mul](modules.md#mul)
- [Normalize](modules.md#normalize)
- [NormalizePlusMinusOne](modules.md#normalizeplusminusone)
- [OneMinus](modules.md#oneminus)
- [PerspectiveDepth](modules.md#perspectivedepth)
- [Pow](modules.md#pow)
- [Radians](modules.md#radians)
- [RawDepth](modules.md#rawdepth)
- [Reflect](modules.md#reflect)
- [Refract](modules.md#refract)
- [Remap](modules.md#remap)
- [Rotate3D](modules.md#rotate3d)
- [RotateX](modules.md#rotatex)
- [RotateY](modules.md#rotatey)
- [RotateZ](modules.md#rotatez)
- [Rotation3D](modules.md#rotation3d)
- [Rotation3DX](modules.md#rotation3dx)
- [Rotation3DY](modules.md#rotation3dy)
- [Rotation3DZ](modules.md#rotation3dz)
- [Round](modules.md#round)
- [Saturate](modules.md#saturate)
- [SceneColor](modules.md#scenecolor)
- [ShaderMaterialMaster](modules.md#shadermaterialmaster)
- [Sign](modules.md#sign)
- [Sin](modules.md#sin)
- [Smoothstep](modules.md#smoothstep)
- [SplitVector2](modules.md#splitvector2)
- [SplitVector3](modules.md#splitvector3)
- [SplitVector4](modules.md#splitvector4)
- [Sqrt](modules.md#sqrt)
- [Step](modules.md#step)
- [Sub](modules.md#sub)
- [Tan](modules.md#tan)
- [Tangent](modules.md#tangent)
- [Texture2D](modules.md#texture2d)
- [TilingUV](modules.md#tilinguv)
- [Time](modules.md#time)
- [Trunc](modules.md#trunc)
- [UniformUnit](modules.md#uniformunit-1)
- [Vec2](modules.md#vec2)
- [Vec3](modules.md#vec3)
- [Vec4](modules.md#vec4)
- [inverseLerp](modules.md#inverselerp-1)
- [localToViewSpace](modules.md#localtoviewspace-1)
- [localToWorldSpace](modules.md#localtoworldspace-1)
- [mat3](modules.md#mat3-1)
- [mat4](modules.md#mat4-1)
- [orthogonal](modules.md#orthogonal)
- [remap](modules.md#remap-1)
- [vec2](modules.md#vec2-1)
- [vec3](modules.md#vec3-1)
- [vec4](modules.md#vec4-1)

### Math

- [lerp](modules.md#lerp-1)

## Type Aliases

### CustomShaderMaterialMasterProps

Ƭ **CustomShaderMaterialMasterProps**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `alpha?` | `Input`<``"float"``\> |
| `diffuseColor?` | `Input`<``"vec3"``\> |
| `emissiveColor?` | `Input`<``"vec3"``\> |
| `fragColor?` | `Input`<``"vec3"``\> |
| `metalness?` | `Input`<``"float"``\> |
| `normal?` | `Input`<``"vec3"``\> |
| `position?` | `Input`<``"vec3"``\> |
| `roughness?` | `Input`<``"float"``\> |

#### Defined in

[stdlib/masters.ts:34](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/masters.ts#L34)

___

### FresnelProps

Ƭ **FresnelProps**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `alpha?` | `Input`<``"float"``\> |
| `bias?` | `Input`<``"float"``\> |
| `factor?` | `Input`<``"float"``\> |
| `intensity?` | `Input`<``"float"``\> |
| `normal?` | `Input`<``"vec3"``\> |
| `power?` | `Input`<``"float"``\> |

#### Defined in

[stdlib/artistic.ts:8](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/artistic.ts#L8)

___

### ShaderMaterialMasterProps

Ƭ **ShaderMaterialMasterProps**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `alpha?` | `Input`<``"float"``\> |
| `color?` | `Input`<``"vec3"``\> |
| `position?` | `Input`<``"vec3"``\> |

#### Defined in

[stdlib/masters.ts:7](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/masters.ts#L7)

___

### UniformUnit

Ƭ **UniformUnit**<`T`, `J`\>: `Unit`<`T`\> & { `value`: `J`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `GLSLType` |
| `J` | extends `JSTypes`[`T`] = `JSTypes`[`T`] |

#### Defined in

[stdlib/uniforms.ts:7](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/uniforms.ts#L7)

[stdlib/uniforms.ts:13](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/uniforms.ts#L13)

## Variables

### CameraFar

• `Const` **CameraFar**: [`UniformUnit`](modules.md#uniformunit-1)<``"float"``, `number`\>

#### Defined in

[stdlib/uniforms.ts:73](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/uniforms.ts#L73)

___

### CameraNear

• `Const` **CameraNear**: [`UniformUnit`](modules.md#uniformunit-1)<``"float"``, `number`\>

#### Defined in

[stdlib/uniforms.ts:63](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/uniforms.ts#L63)

___

### CameraPosition

• `Const` **CameraPosition**: `Unit`<``"vec3"``\> & { `x`:  ; `y`:  ; `z`:   }

#### Defined in

[stdlib/geometry.ts:7](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/geometry.ts#L7)

___

### FragmentCoordinate

• `Const` **FragmentCoordinate**: `Unit`<``"vec2"``\> & { `x`:  ; `y`:   }

Returns the current fragment's on-screen coordinate.

#### Defined in

[stdlib/globals.ts:7](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/globals.ts#L7)

___

### InstanceMatrix

• `Const` **InstanceMatrix**: `Unit`<``"mat4"``\> & `API`

#### Defined in

[stdlib/geometry.ts:39](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/geometry.ts#L39)

___

### IsFrontFacing

• `Const` **IsFrontFacing**: `Unit`<``"bool"``\> & `API`

#### Defined in

[stdlib/geometry.ts:83](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/geometry.ts#L83)

___

### ModelMatrix

• `Const` **ModelMatrix**: `Unit`<``"mat4"``\> & `API`

#### Defined in

[stdlib/geometry.ts:15](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/geometry.ts#L15)

___

### ModelViewMatrix

• `Const` **ModelViewMatrix**: `Unit`<``"mat4"``\> & `API`

#### Defined in

[stdlib/geometry.ts:19](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/geometry.ts#L19)

___

### NormalMatrix

• `Const` **NormalMatrix**: `Unit`<``"mat4"``\> & `API`

#### Defined in

[stdlib/geometry.ts:23](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/geometry.ts#L23)

___

### ProjectionMatrix

• `Const` **ProjectionMatrix**: `Unit`<``"mat4"``\> & `API`

#### Defined in

[stdlib/geometry.ts:27](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/geometry.ts#L27)

___

### Resolution

• `Const` **Resolution**: [`UniformUnit`](modules.md#uniformunit-1)<``"vec2"``, `Vector2`\>

#### Defined in

[stdlib/uniforms.ts:54](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/uniforms.ts#L54)

___

### ScreenUV

• `Const` **ScreenUV**: `Unit`<``"vec2"``\> & { `x`:  ; `y`:   }

#### Defined in

[stdlib/uniforms.ts:83](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/uniforms.ts#L83)

___

### UV

• `Const` **UV**: `Unit`<``"vec2"``\> & { `x`:  ; `y`:   }

#### Defined in

[stdlib/geometry.ts:53](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/geometry.ts#L53)

___

### UsingInstancing

• `Const` **UsingInstancing**: `Unit`<``"bool"``\> & `API`

#### Defined in

[stdlib/geometry.ts:31](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/geometry.ts#L31)

___

### VertexNormal

• `Const` **VertexNormal**: `Unit`<``"vec3"``\> & { `x`:  ; `y`:  ; `z`:   } & { `view`:  ; `world`:   }

#### Defined in

[stdlib/geometry.ts:76](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/geometry.ts#L76)

___

### VertexPosition

• `Const` **VertexPosition**: `Unit`<``"vec3"``\> & { `x`:  ; `y`:  ; `z`:   } & { `view`:  ; `world`:   }

#### Defined in

[stdlib/geometry.ts:75](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/geometry.ts#L75)

___

### ViewDirection

• `Const` **ViewDirection**: `Unit`<``"vec3"``\> & { `x`:  ; `y`:  ; `z`:   }

#### Defined in

[stdlib/geometry.ts:78](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/geometry.ts#L78)

___

### ViewMatrix

• `Const` **ViewMatrix**: `Unit`<``"mat4"``\> & `API`

#### Defined in

[stdlib/geometry.ts:11](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/geometry.ts#L11)

## Functions

### Abs

▸ **Abs**<`A`\>(`a`): `Unit`<`A`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends ``"float"`` \| ``"vec2"`` \| ``"vec3"`` \| ``"vec4"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `Input`<`A`\> |

#### Returns

`Unit`<`A`\>

#### Defined in

[stdlib/math.ts:29](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/math.ts#L29)

___

### Acos

▸ **Acos**<`A`\>(`a`): `Unit`<`A`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends ``"float"`` \| ``"vec2"`` \| ``"vec3"`` \| ``"vec4"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `Input`<`A`\> |

#### Returns

`Unit`<`A`\>

#### Defined in

[stdlib/math.ts:29](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/math.ts#L29)

___

### Add

▸ **Add**<`A`, `B`\>(`a`, `b`): `Unit`<`A`\>

A Shader Unit that adds two values and returns the result.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends `GLSLType` |
| `B` | extends `GLSLType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `Input`<`A`\> |
| `b` | `Input`<`B`\> |

#### Returns

`Unit`<`A`\>

#### Defined in

[stdlib/math.ts:10](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/math.ts#L10)

___

### Asin

▸ **Asin**<`A`\>(`a`): `Unit`<`A`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends ``"float"`` \| ``"vec2"`` \| ``"vec3"`` \| ``"vec4"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `Input`<`A`\> |

#### Returns

`Unit`<`A`\>

#### Defined in

[stdlib/math.ts:29](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/math.ts#L29)

___

### Attribute

▸ **Attribute**<`T`\>(`type`, `name`): `Unit`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `GLSLType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `T` |
| `name` | `string` |

#### Returns

`Unit`<`T`\>

#### Defined in

[stdlib/geometry.ts:96](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/geometry.ts#L96)

___

### Bitangent

▸ **Bitangent**(`p`, `t`): `Unit`<``"vec3"``\> & { `x`:  ; `y`:  ; `z`:   }

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | `Input`<``"vec3"``\> |
| `t` | `Input`<``"vec3"``\> |

#### Returns

`Unit`<``"vec3"``\> & { `x`:  ; `y`:  ; `z`:   }

#### Defined in

[stdlib/vectors.ts:38](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/vectors.ts#L38)

___

### Bool

▸ **Bool**(`v`, `extras?`): `Unit`<``"bool"``\> & `API`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `Input`<``"bool"``\> |
| `extras?` | `Partial`<`UnitConfig`<``"bool"``\>\> |

#### Returns

`Unit`<``"bool"``\> & `API`

#### Defined in

[stdlib/values.ts:7](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/values.ts#L7)

___

### Ceil

▸ **Ceil**<`A`\>(`a`): `Unit`<`A`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends ``"float"`` \| ``"vec2"`` \| ``"vec3"`` \| ``"vec4"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `Input`<`A`\> |

#### Returns

`Unit`<`A`\>

#### Defined in

[stdlib/math.ts:29](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/math.ts#L29)

___

### Clamp

▸ **Clamp**<`T`\>(`x`, `min`, `max`): `Unit`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `GLSLType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `Input`<`T`\> |
| `min` | `Input`<`T`\> |
| `max` | `Input`<`T`\> |

#### Returns

`Unit`<`T`\>

#### Defined in

[stdlib/math.ts:131](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/math.ts#L131)

___

### Clamp01

▸ **Clamp01**(`x`): `Unit`<``"float"``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `Input`<``"float"``\> |

#### Returns

`Unit`<``"float"``\>

#### Defined in

[stdlib/math.ts:134](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/math.ts#L134)

___

### Cos

▸ **Cos**<`A`\>(`a`): `Unit`<`A`\>

Calculates the cosine value of the input value.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends ``"float"`` \| ``"vec2"`` \| ``"vec3"`` \| ``"vec4"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `Input`<`A`\> |

#### Returns

`Unit`<`A`\>

#### Defined in

[stdlib/math.ts:29](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/math.ts#L29)

___

### Cross

▸ **Cross**(`a`, `b`): `Unit`<``"vec3"``\> & { `x`:  ; `y`:  ; `z`:   }

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `Input`<``"vec3"``\> |
| `b` | `Input`<``"vec3"``\> |

#### Returns

`Unit`<``"vec3"``\> & { `x`:  ; `y`:  ; `z`:   }

#### Defined in

[stdlib/vectors.ts:30](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/vectors.ts#L30)

___

### CustomShaderMaterialMaster

▸ **CustomShaderMaterialMaster**(`__namedParameters?`): `Unit`<``"bool"``\> & `API`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`CustomShaderMaterialMasterProps`](modules.md#customshadermaterialmasterprops) |

#### Returns

`Unit`<``"bool"``\> & `API`

#### Defined in

[stdlib/masters.ts:45](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/masters.ts#L45)

___

### Degrees

▸ **Degrees**<`A`\>(`a`): `Unit`<`A`\>

Converts the given value from radians to degrees.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends ``"float"`` \| ``"vec2"`` \| ``"vec3"`` \| ``"vec4"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `Input`<`A`\> |

#### Returns

`Unit`<`A`\>

#### Defined in

[stdlib/math.ts:29](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/math.ts#L29)

___

### Distance

▸ **Distance**<`T`\>(`a`, `b`): `Unit`<``"float"``\> & `API`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends ``"float"`` \| ``"vec2"`` \| ``"vec3"`` \| ``"vec4"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `Input`<`T`\> |
| `b` | `Input`<`T`\> |

#### Returns

`Unit`<``"float"``\> & `API`

#### Defined in

[stdlib/vectors.ts:41](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/vectors.ts#L41)

___

### Div

▸ **Div**<`A`, `B`\>(`a`, `b`): `Unit`<`A`\>

A Shader Unit that divides two values and returns the result.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends `GLSLType` |
| `B` | extends `GLSLType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `Input`<`A`\> |
| `b` | `Input`<`B`\> |

#### Returns

`Unit`<`A`\>

#### Defined in

[stdlib/math.ts:10](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/math.ts#L10)

___

### Dot

▸ **Dot**<`T`\>(`a`, `b`): `Unit`<``"float"``\> & `API`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends ``"vec2"`` \| ``"vec3"`` \| ``"vec4"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `Input`<`T`\> |
| `b` | `Input`<`T`\> |

#### Returns

`Unit`<``"float"``\> & `API`

#### Defined in

[stdlib/vectors.ts:33](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/vectors.ts#L33)

___

### Exp

▸ **Exp**<`A`\>(`a`): `Unit`<`A`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends ``"float"`` \| ``"vec2"`` \| ``"vec3"`` \| ``"vec4"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `Input`<`A`\> |

#### Returns

`Unit`<`A`\>

#### Defined in

[stdlib/math.ts:29](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/math.ts#L29)

___

### Exp2

▸ **Exp2**<`A`\>(`a`): `Unit`<`A`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends ``"float"`` \| ``"vec2"`` \| ``"vec3"`` \| ``"vec4"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `Input`<`A`\> |

#### Returns

`Unit`<`A`\>

#### Defined in

[stdlib/math.ts:29](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/math.ts#L29)

___

### Float

▸ **Float**(`v`, `extras?`): `Unit`<``"float"``\> & `API`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `Input`<``"float"``\> |
| `extras?` | `Partial`<`UnitConfig`<``"float"``\>\> |

#### Returns

`Unit`<``"float"``\> & `API`

#### Defined in

[stdlib/values.ts:7](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/values.ts#L7)

___

### Floor

▸ **Floor**<`A`\>(`a`): `Unit`<`A`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends ``"float"`` \| ``"vec2"`` \| ``"vec3"`` \| ``"vec4"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `Input`<`A`\> |

#### Returns

`Unit`<`A`\>

#### Defined in

[stdlib/math.ts:29](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/math.ts#L29)

___

### Fract

▸ **Fract**<`A`\>(`a`): `Unit`<`A`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends ``"float"`` \| ``"vec2"`` \| ``"vec3"`` \| ``"vec4"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `Input`<`A`\> |

#### Returns

`Unit`<`A`\>

#### Defined in

[stdlib/math.ts:29](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/math.ts#L29)

___

### Fresnel

▸ **Fresnel**(`__namedParameters?`): `Unit`<``"float"``\> & `API`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`FresnelProps`](modules.md#fresnelprops) |

#### Returns

`Unit`<``"float"``\> & `API`

#### Defined in

[stdlib/artistic.ts:17](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/artistic.ts#L17)

___

### GreaterOrEqual

▸ **GreaterOrEqual**<`T`\>(`a`, `b`): `Unit`<``"bool"``\> & `API`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `GLSLType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `Input`<`T`\> |
| `b` | `Input`<`T`\> |

#### Returns

`Unit`<``"bool"``\> & `API`

#### Defined in

[stdlib/logic.ts:12](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/logic.ts#L12)

___

### If

▸ **If**<`T`\>(`expression`, `then`, `else_`): `Unit`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `GLSLType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `Input`<``"bool"``\> |
| `then` | `Input`<`T`\> |
| `else_` | `Input`<`T`\> |

#### Returns

`Unit`<`T`\>

#### Defined in

[stdlib/logic.ts:6](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/logic.ts#L6)

___

### Int

▸ **Int**(`v`, `extras?`): `Unit`<``"int"``\> & `API`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `Input`<``"int"``\> |
| `extras?` | `Partial`<`UnitConfig`<``"int"``\>\> |

#### Returns

`Unit`<``"int"``\> & `API`

#### Defined in

[stdlib/values.ts:7](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/values.ts#L7)

___

### InverseLerp

▸ **InverseLerp**<`T`\>(`a`, `b`, `c`): `Unit`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `GLSLType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `Input`<`T`\> |
| `b` | `Input`<`T`\> |
| `c` | `Input`<`T`\> |

#### Returns

`Unit`<`T`\>

#### Defined in

[stdlib/math.ts:164](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/math.ts#L164)

___

### InverseSqrt

▸ **InverseSqrt**<`A`\>(`a`): `Unit`<`A`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends ``"float"`` \| ``"vec2"`` \| ``"vec3"`` \| ``"vec4"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `Input`<`A`\> |

#### Returns

`Unit`<`A`\>

#### Defined in

[stdlib/math.ts:29](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/math.ts#L29)

___

### Length

▸ **Length**<`T`\>(`a`): `Unit`<``"float"``\> & `API`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends ``"float"`` \| ``"vec2"`` \| ``"vec3"`` \| ``"vec4"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `Input`<`T`\> |

#### Returns

`Unit`<``"float"``\> & `API`

#### Defined in

[stdlib/vectors.ts:46](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/vectors.ts#L46)

___

### Lerp

▸ **Lerp**<`T`\>(`a`, `b`, `ratio`): `Unit`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `GLSLType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `Input`<`T`\> |
| `b` | `Input`<`T`\> |
| `ratio` | `Input`<``"float"`` \| `T`\> |

#### Returns

`Unit`<`T`\>

#### Defined in

[stdlib/math.ts:155](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/math.ts#L155)

___

### LocalToViewSpace

▸ **LocalToViewSpace**(`position`): `Unit`<``"vec3"``\> & { `x`:  ; `y`:  ; `z`:   }

Converts the given position vector (which is assumed to be in local space)
to view space.

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | `Input`<``"vec3"``\> |

#### Returns

`Unit`<``"vec3"``\> & { `x`:  ; `y`:  ; `z`:   }

#### Defined in

[stdlib/spaces.ts:20](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/spaces.ts#L20)

___

### LocalToWorldSpace

▸ **LocalToWorldSpace**(`position`): `Unit`<``"vec3"``\> & { `x`:  ; `y`:  ; `z`:   }

Converts the given position vector (which is assumed to be in local space)
to world space.

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | `Input`<``"vec3"``\> |

#### Returns

`Unit`<``"vec3"``\> & { `x`:  ; `y`:  ; `z`:   }

#### Defined in

[stdlib/spaces.ts:27](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/spaces.ts#L27)

___

### Log

▸ **Log**<`A`\>(`a`): `Unit`<`A`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends ``"float"`` \| ``"vec2"`` \| ``"vec3"`` \| ``"vec4"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `Input`<`A`\> |

#### Returns

`Unit`<`A`\>

#### Defined in

[stdlib/math.ts:29](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/math.ts#L29)

___

### Log2

▸ **Log2**<`A`\>(`a`): `Unit`<`A`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends ``"float"`` \| ``"vec2"`` \| ``"vec3"`` \| ``"vec4"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `Input`<`A`\> |

#### Returns

`Unit`<`A`\>

#### Defined in

[stdlib/math.ts:29](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/math.ts#L29)

___

### Master

▸ **Master**(`extras?`): `Unit`<``"bool"``\> & `API`

#### Parameters

| Name | Type |
| :------ | :------ |
| `extras?` | `Partial`<`UnitConfig`<``"bool"``\>\> |

#### Returns

`Unit`<``"bool"``\> & `API`

#### Defined in

[stdlib/values.ts:77](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/values.ts#L77)

___

### Mat3

▸ **Mat3**(`v`, `extras?`): `Unit`<``"mat3"``\> & `API`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `Input`<``"mat3"``\> |
| `extras?` | `Partial`<`UnitConfig`<``"mat3"``\>\> |

#### Returns

`Unit`<``"mat3"``\> & `API`

#### Defined in

[stdlib/values.ts:7](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/values.ts#L7)

___

### Mat4

▸ **Mat4**(`v`, `extras?`): `Unit`<``"mat4"``\> & `API`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `Input`<``"mat4"``\> |
| `extras?` | `Partial`<`UnitConfig`<``"mat4"``\>\> |

#### Returns

`Unit`<``"mat4"``\> & `API`

#### Defined in

[stdlib/values.ts:7](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/values.ts#L7)

___

### Max

▸ **Max**<`T`\>(`a`, `b`): `Unit`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends ``"float"`` \| ``"vec2"`` \| ``"vec3"`` \| ``"vec4"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `Input`<`T`\> |
| `b` | `Input`<`T`\> |

#### Returns

`Unit`<`T`\>

#### Defined in

[stdlib/math.ts:198](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/math.ts#L198)

___

### Min

▸ **Min**<`T`\>(`a`, `b`): `Unit`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends ``"float"`` \| ``"vec2"`` \| ``"vec3"`` \| ``"vec4"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `Input`<`T`\> |
| `b` | `Input`<`T`\> |

#### Returns

`Unit`<`T`\>

#### Defined in

[stdlib/math.ts:193](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/math.ts#L193)

___

### Mix

▸ **Mix**<`T`\>(`a`, `b`, `ratio`): `Unit`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `GLSLType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `Input`<`T`\> |
| `b` | `Input`<`T`\> |
| `ratio` | `Input`<``"float"`` \| `T`\> |

#### Returns

`Unit`<`T`\>

#### Defined in

[stdlib/math.ts:155](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/math.ts#L155)

___

### Modulo

▸ **Modulo**<`A`, `B`\>(`a`, `b`): `Unit`<`A`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends ``"float"`` \| ``"vec2"`` \| ``"vec3"`` \| ``"vec4"`` |
| `B` | extends ``"float"`` \| ``"vec2"`` \| ``"vec3"`` \| ``"vec4"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `Input`<`A`\> |
| `b` | `Input`<`B`\> |

#### Returns

`Unit`<`A`\>

#### Defined in

[stdlib/math.ts:123](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/math.ts#L123)

___

### Mul

▸ **Mul**<`A`, `B`\>(`a`, `b`): `Unit`<`A`\>

A Shader Unit that multiplies two values and returns the result.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends `GLSLType` |
| `B` | extends `GLSLType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `Input`<`A`\> |
| `b` | `Input`<`B`\> |

#### Returns

`Unit`<`A`\>

#### Defined in

[stdlib/math.ts:10](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/math.ts#L10)

___

### Normalize

▸ **Normalize**<`T`\>(`a`): `Unit`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends ``"vec2"`` \| ``"vec3"`` \| ``"vec4"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `Input`<`T`\> |

#### Returns

`Unit`<`T`\>

#### Defined in

[stdlib/vectors.ts:27](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/vectors.ts#L27)

___

### NormalizePlusMinusOne

▸ **NormalizePlusMinusOne**(`f`): `Unit`<``"float"``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `Input`<``"float"``\> |

#### Returns

`Unit`<``"float"``\>

#### Defined in

[stdlib/math.ts:191](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/math.ts#L191)

___

### OneMinus

▸ **OneMinus**(`v`): `Unit`<``"float"``\> & `API`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `Input`<``"float"``\> |

#### Returns

`Unit`<``"float"``\> & `API`

#### Defined in

[stdlib/math.ts:138](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/math.ts#L138)

___

### PerspectiveDepth

▸ **PerspectiveDepth**(`xy`, `depthTexture`, `cameraNear?`, `cameraFar?`): `Unit`<``"float"``\> & `API`

Sample a depth texture and return the depth value in eye space units.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `xy` | `Input`<``"vec2"``\> | `undefined` | Screen position |
| `depthTexture` | `Unit`<``"sampler2D"``\> | `undefined` | Depth texture to sample |
| `cameraNear` | `Input`<``"float"``\> | `CameraNear` | Camera near plane (defaults to CameraNear) |
| `cameraFar` | `Input`<``"float"``\> | `CameraFar` | Camera far plane (defaults to CameraFar) |

#### Returns

`Unit`<``"float"``\> & `API`

Float unit containing the depth in eye space units

#### Defined in

[stdlib/scene.ts:30](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/scene.ts#L30)

___

### Pow

▸ **Pow**<`T`\>(`a`, `e`): `Unit`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends ``"float"`` \| ``"vec2"`` \| ``"vec3"`` \| ``"vec4"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `Input`<`T`\> |
| `e` | `Input`<`T`\> |

#### Returns

`Unit`<`T`\>

#### Defined in

[stdlib/math.ts:68](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/math.ts#L68)

___

### Radians

▸ **Radians**<`A`\>(`a`): `Unit`<`A`\>

Converts the given value from degrees to radians.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends ``"float"`` \| ``"vec2"`` \| ``"vec3"`` \| ``"vec4"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `Input`<`A`\> |

#### Returns

`Unit`<`A`\>

#### Defined in

[stdlib/math.ts:29](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/math.ts#L29)

___

### RawDepth

▸ **RawDepth**(`uv`, `depthTexture`): `Unit`<``"float"``\> & `API`

Sample a depth texture and return the raw depth value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `uv` | `Input`<``"vec2"``\> | Screen UV |
| `depthTexture` | `Unit`<``"sampler2D"``\> | Depth texture to sample |

#### Returns

`Unit`<``"float"``\> & `API`

Float unit containing the depth as stored in the texture

#### Defined in

[stdlib/scene.ts:18](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/scene.ts#L18)

___

### Reflect

▸ **Reflect**<`T`\>(`vector`, `normal`): `Unit`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends ``"float"`` \| ``"vec2"`` \| ``"vec3"`` \| ``"vec4"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `vector` | `Input`<`T`\> |
| `normal` | `Input`<`T`\> |

#### Returns

`Unit`<`T`\>

#### Defined in

[stdlib/vectors.ts:49](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/vectors.ts#L49)

___

### Refract

▸ **Refract**<`T`\>(`vector`, `normal`, `eta`): `Unit`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends ``"float"`` \| ``"vec2"`` \| ``"vec3"`` \| ``"vec4"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `vector` | `Input`<`T`\> |
| `normal` | `Input`<`T`\> |
| `eta` | `Input`<``"float"``\> |

#### Returns

`Unit`<`T`\>

#### Defined in

[stdlib/vectors.ts:57](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/vectors.ts#L57)

___

### Remap

▸ **Remap**<`T`\>(`value`, `inMin`, `inMax`, `outMin`, `outMax`): `Unit`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends ``"float"`` \| ``"vec2"`` \| ``"vec3"`` \| ``"vec4"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Input`<`T`\> |
| `inMin` | `Input`<`T`\> |
| `inMax` | `Input`<`T`\> |
| `outMin` | `Input`<`T`\> |
| `outMax` | `Input`<`T`\> |

#### Returns

`Unit`<`T`\>

#### Defined in

[stdlib/math.ts:183](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/math.ts#L183)

___

### Rotate3D

▸ **Rotate3D**(`position`, `axis`, `angle`): `Unit`<``"vec3"``\>

Rotate a vector around the specified axis.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `position` | `Input`<``"vec3"``\> | Vector to rotate. |
| `axis` | `Input`<``"vec3"``\> | The axis to rotate around. |
| `angle` | `Input`<``"float"``\> | The angle (amount) to rotate around the axis. |

#### Returns

`Unit`<``"vec3"``\>

A `vec3` Shader Unit containing the rotated vector.

#### Defined in

[stdlib/rotation.ts:33](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/rotation.ts#L33)

___

### RotateX

▸ **RotateX**(`position`, `angle`): `Unit`<``"vec3"``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | `Input`<``"vec3"``\> |
| `angle` | `Input`<``"float"``\> |

#### Returns

`Unit`<``"vec3"``\>

#### Defined in

[stdlib/rotation.ts:39](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/rotation.ts#L39)

___

### RotateY

▸ **RotateY**(`position`, `angle`): `Unit`<``"vec3"``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | `Input`<``"vec3"``\> |
| `angle` | `Input`<``"float"``\> |

#### Returns

`Unit`<``"vec3"``\>

#### Defined in

[stdlib/rotation.ts:42](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/rotation.ts#L42)

___

### RotateZ

▸ **RotateZ**(`position`, `angle`): `Unit`<``"vec3"``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | `Input`<``"vec3"``\> |
| `angle` | `Input`<``"float"``\> |

#### Returns

`Unit`<``"vec3"``\>

#### Defined in

[stdlib/rotation.ts:45](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/rotation.ts#L45)

___

### Rotation3D

▸ **Rotation3D**(`axis`, `angle`): `Unit`<``"mat4"``\> & `API`

Generates a Shader Unit of type `mat4` representing a rotation around a specified
axis, by a specified amount/angle. This unit can then be multiplied with a
`vec3` unit in order to apply the rotation to that vector.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `axis` | `Input`<``"vec3"``\> | Axis to rotate around. |
| `angle` | `Input`<``"float"``\> | The angle (amount) to rotate. |

#### Returns

`Unit`<``"mat4"``\> & `API`

A Shader Unit of type `mat4` representing the rotation matrix.

#### Defined in

[stdlib/rotation.ts:16](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/rotation.ts#L16)

___

### Rotation3DX

▸ **Rotation3DX**(`angle`): `Unit`<``"mat3"``\> & `API`

#### Parameters

| Name | Type |
| :------ | :------ |
| `angle` | `Input`<``"float"``\> |

#### Returns

`Unit`<``"mat3"``\> & `API`

#### Defined in

[stdlib/rotation.ts:19](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/rotation.ts#L19)

___

### Rotation3DY

▸ **Rotation3DY**(`angle`): `Unit`<``"mat3"``\> & `API`

#### Parameters

| Name | Type |
| :------ | :------ |
| `angle` | `Input`<``"float"``\> |

#### Returns

`Unit`<``"mat3"``\> & `API`

#### Defined in

[stdlib/rotation.ts:21](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/rotation.ts#L21)

___

### Rotation3DZ

▸ **Rotation3DZ**(`angle`): `Unit`<``"mat3"``\> & `API`

#### Parameters

| Name | Type |
| :------ | :------ |
| `angle` | `Input`<``"float"``\> |

#### Returns

`Unit`<``"mat3"``\> & `API`

#### Defined in

[stdlib/rotation.ts:23](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/rotation.ts#L23)

___

### Round

▸ **Round**<`A`\>(`a`): `Unit`<`A`\>

A Shader Unit that finds the nearest integer to the input value.
It performs the GLSL expression `round(a)`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends ``"float"`` \| ``"vec2"`` \| ``"vec3"`` \| ``"vec4"`` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `Input`<`A`\> | The input value. |

#### Returns

`Unit`<`A`\>

The rounded value of `a`.

#### Defined in

[stdlib/math.ts:29](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/math.ts#L29)

___

### Saturate

▸ **Saturate**(`x`): `Unit`<``"float"``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `Input`<``"float"``\> |

#### Returns

`Unit`<``"float"``\>

#### Defined in

[stdlib/math.ts:134](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/math.ts#L134)

___

### SceneColor

▸ **SceneColor**(`uv`, `texture`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `uv` | `Input`<``"vec2"``\> |
| `texture` | `Unit`<``"sampler2D"``\> |

#### Returns

`Object`

| Name | Type | Description |
| :------ | :------ | :------ |
| `_` | ``"Unit"`` | - |
| `_unitConfig` | `UnitConfig`<``"vec4"``\> | - |
| `alpha` | `Unit`<``"float"``\> & `API` | The alpha value sampled from the texture. |
| `color` | `Unit`<``"vec3"``\> & { `x`:  ; `y`:  ; `z`:   } | The color value sampled from the texture. |
| `w` | `Unit`<``"float"``\> & `API` | - |
| `x` | `Unit`<``"float"``\> & `API` | - |
| `y` | `Unit`<``"float"``\> & `API` | - |
| `z` | `Unit`<``"float"``\> & `API` | - |

#### Defined in

[stdlib/scene.ts:8](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/scene.ts#L8)

___

### ShaderMaterialMaster

▸ **ShaderMaterialMaster**(`__namedParameters?`): `Unit`<``"bool"``\> & `API`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`ShaderMaterialMasterProps`](modules.md#shadermaterialmasterprops) |

#### Returns

`Unit`<``"bool"``\> & `API`

#### Defined in

[stdlib/masters.ts:13](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/masters.ts#L13)

___

### Sign

▸ **Sign**<`A`\>(`a`): `Unit`<`A`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends ``"float"`` \| ``"vec2"`` \| ``"vec3"`` \| ``"vec4"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `Input`<`A`\> |

#### Returns

`Unit`<`A`\>

#### Defined in

[stdlib/math.ts:29](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/math.ts#L29)

___

### Sin

▸ **Sin**<`A`\>(`a`): `Unit`<`A`\>

Calculates the sine value of the input value.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends ``"float"`` \| ``"vec2"`` \| ``"vec3"`` \| ``"vec4"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `Input`<`A`\> |

#### Returns

`Unit`<`A`\>

#### Defined in

[stdlib/math.ts:29](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/math.ts#L29)

___

### Smoothstep

▸ **Smoothstep**(`min`, `max`, `v`): `Unit`<``"float"``\> & `API`

#### Parameters

| Name | Type |
| :------ | :------ |
| `min` | `Input`<``"float"``\> |
| `max` | `Input`<``"float"``\> |
| `v` | `Input`<``"float"``\> |

#### Returns

`Unit`<``"float"``\> & `API`

#### Defined in

[stdlib/math.ts:172](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/math.ts#L172)

___

### SplitVector2

▸ **SplitVector2**(`vector`): readonly [`Unit`<``"float"``\> & `API`, `Unit`<``"float"``\> & `API`]

#### Parameters

| Name | Type |
| :------ | :------ |
| `vector` | `Input`<``"vec2"``\> |

#### Returns

readonly [`Unit`<``"float"``\> & `API`, `Unit`<``"float"``\> & `API`]

#### Defined in

[stdlib/vectors.ts:6](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/vectors.ts#L6)

___

### SplitVector3

▸ **SplitVector3**(`vector`): readonly [`Unit`<``"float"``\> & `API`, `Unit`<``"float"``\> & `API`, `Unit`<``"float"``\> & `API`]

#### Parameters

| Name | Type |
| :------ | :------ |
| `vector` | `Input`<``"vec3"``\> |

#### Returns

readonly [`Unit`<``"float"``\> & `API`, `Unit`<``"float"``\> & `API`, `Unit`<``"float"``\> & `API`]

#### Defined in

[stdlib/vectors.ts:9](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/vectors.ts#L9)

___

### SplitVector4

▸ **SplitVector4**(`vector`): readonly [`Unit`<``"float"``\> & `API`, `Unit`<``"float"``\> & `API`, `Unit`<``"float"``\> & `API`, `Unit`<``"float"``\> & `API`]

#### Parameters

| Name | Type |
| :------ | :------ |
| `vector` | `Input`<``"vec4"``\> |

#### Returns

readonly [`Unit`<``"float"``\> & `API`, `Unit`<``"float"``\> & `API`, `Unit`<``"float"``\> & `API`, `Unit`<``"float"``\> & `API`]

#### Defined in

[stdlib/vectors.ts:12](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/vectors.ts#L12)

___

### Sqrt

▸ **Sqrt**<`A`\>(`a`): `Unit`<`A`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends ``"float"`` \| ``"vec2"`` \| ``"vec3"`` \| ``"vec4"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `Input`<`A`\> |

#### Returns

`Unit`<`A`\>

#### Defined in

[stdlib/math.ts:29](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/math.ts#L29)

___

### Step

▸ **Step**(`edge`, `v`): `Unit`<``"float"``\> & `API`

#### Parameters

| Name | Type |
| :------ | :------ |
| `edge` | `Input`<``"float"``\> |
| `v` | `Input`<``"float"``\> |

#### Returns

`Unit`<``"float"``\> & `API`

#### Defined in

[stdlib/math.ts:169](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/math.ts#L169)

___

### Sub

▸ **Sub**<`A`, `B`\>(`a`, `b`): `Unit`<`A`\>

A Shader Unit that subtracts two values and returns the result.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends `GLSLType` |
| `B` | extends `GLSLType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `Input`<`A`\> |
| `b` | `Input`<`B`\> |

#### Returns

`Unit`<`A`\>

#### Defined in

[stdlib/math.ts:10](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/math.ts#L10)

___

### Tan

▸ **Tan**<`A`\>(`a`): `Unit`<`A`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends ``"float"`` \| ``"vec2"`` \| ``"vec3"`` \| ``"vec4"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `Input`<`A`\> |

#### Returns

`Unit`<`A`\>

#### Defined in

[stdlib/math.ts:29](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/math.ts#L29)

___

### Tangent

▸ **Tangent**(`v`): `Unit`<``"vec3"``\> & { `x`:  ; `y`:  ; `z`:   }

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `Input`<``"vec3"``\> |

#### Returns

`Unit`<``"vec3"``\> & { `x`:  ; `y`:  ; `z`:   }

#### Defined in

[stdlib/vectors.ts:36](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/vectors.ts#L36)

___

### Texture2D

▸ **Texture2D**(`sampler2D`, `xy`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sampler2D` | `Unit`<``"sampler2D"``\> |
| `xy` | `Input`<``"vec2"``\> |

#### Returns

`Object`

| Name | Type | Description |
| :------ | :------ | :------ |
| `_` | ``"Unit"`` | - |
| `_unitConfig` | `UnitConfig`<``"vec4"``\> | - |
| `alpha` | `Unit`<``"float"``\> & `API` | The alpha value sampled from the texture. |
| `color` | `Unit`<``"vec3"``\> & { `x`:  ; `y`:  ; `z`:   } | The color value sampled from the texture. |
| `w` | `Unit`<``"float"``\> & `API` | - |
| `x` | `Unit`<``"float"``\> & `API` | - |
| `y` | `Unit`<``"float"``\> & `API` | - |
| `z` | `Unit`<``"float"``\> & `API` | - |

#### Defined in

[stdlib/textures.ts:5](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/textures.ts#L5)

___

### TilingUV

▸ **TilingUV**(`uv?`, `tiling?`, `offset?`): `Unit`<``"vec2"``\> & { `x`:  ; `y`:   }

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `uv` | `Input`<``"vec2"``\> | `UV` |
| `tiling` | `Input`<``"vec2"``\> | `undefined` |
| `offset` | `Input`<``"vec2"``\> | `undefined` |

#### Returns

`Unit`<``"vec2"``\> & { `x`:  ; `y`:   }

#### Defined in

[stdlib/geometry.ts:85](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/geometry.ts#L85)

___

### Time

▸ **Time**(`initial?`): [`UniformUnit`](modules.md#uniformunit-1)<``"float"``, `number`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `initial` | `number` | `0` |

#### Returns

[`UniformUnit`](modules.md#uniformunit-1)<``"float"``, `number`\>

#### Defined in

[stdlib/uniforms.ts:42](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/uniforms.ts#L42)

___

### Trunc

▸ **Trunc**<`A`\>(`a`): `Unit`<`A`\>

A Shader Unit that finds the nearest integer less than or equal to the input value.
It is equivalent to the GLSL expression `trunc(a)`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends ``"float"`` \| ``"vec2"`` \| ``"vec3"`` \| ``"vec4"`` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `Input`<`A`\> | The input value. |

#### Returns

`Unit`<`A`\>

The truncated value of `a`.

#### Defined in

[stdlib/math.ts:29](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/math.ts#L29)

___

### UniformUnit

▸ **UniformUnit**<`T`, `J`\>(`type`, `initialValue`, `extras?`): [`UniformUnit`](modules.md#uniformunit-1)<`T`, `J`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `GLSLType` |
| `J` | extends `number` \| `boolean` \| `Vector2` \| `Vector3` \| `Color` \| `Vector4` \| `Matrix3` \| `Matrix4` \| `Texture` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `T` |
| `initialValue` | `J` |
| `extras?` | `Partial`<`UnitConfig`<`T`\>\> |

#### Returns

[`UniformUnit`](modules.md#uniformunit-1)<`T`, `J`\>

#### Defined in

[stdlib/uniforms.ts:13](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/uniforms.ts#L13)

___

### Vec2

▸ **Vec2**(`v`, `extras?`): `Unit`<``"vec2"``\> & { `x`:  ; `y`:   }

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `Input`<``"vec2"``\> |
| `extras?` | `Partial`<`UnitConfig`<``"vec2"``\>\> |

#### Returns

`Unit`<``"vec2"``\> & { `x`:  ; `y`:   }

#### Defined in

[stdlib/values.ts:7](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/values.ts#L7)

___

### Vec3

▸ **Vec3**(`v`, `extras?`): `Unit`<``"vec3"``\> & { `x`:  ; `y`:  ; `z`:   }

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `Input`<``"vec3"``\> |
| `extras?` | `Partial`<`UnitConfig`<``"vec3"``\>\> |

#### Returns

`Unit`<``"vec3"``\> & { `x`:  ; `y`:  ; `z`:   }

#### Defined in

[stdlib/values.ts:7](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/values.ts#L7)

___

### Vec4

▸ **Vec4**(`v`, `extras?`): `Unit`<``"vec4"``\> & { `w`:  ; `x`:  ; `y`:  ; `z`:   }

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `Input`<``"vec4"``\> |
| `extras?` | `Partial`<`UnitConfig`<``"vec4"``\>\> |

#### Returns

`Unit`<``"vec4"``\> & { `w`:  ; `x`:  ; `y`:  ; `z`:   }

#### Defined in

[stdlib/values.ts:7](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/values.ts#L7)

___

### inverseLerp

▸ **inverseLerp**<`T`\>(`a`, `b`, `c`): `Expression`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `GLSLType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `Input`<`T`\> |
| `b` | `Input`<`T`\> |
| `c` | `Input`<`T`\> |

#### Returns

`Expression`

#### Defined in

[stdlib/math.ts:161](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/math.ts#L161)

___

### localToViewSpace

▸ **localToViewSpace**(`v`): `Expression`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `Input`<``"vec3"``\> |

#### Returns

`Expression`

#### Defined in

[stdlib/spaces.ts:8](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/spaces.ts#L8)

___

### localToWorldSpace

▸ **localToWorldSpace**(`v`): `Expression`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `Input`<``"vec3"``\> |

#### Returns

`Expression`

#### Defined in

[stdlib/spaces.ts:12](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/spaces.ts#L12)

___

### mat3

▸ **mat3**(`i`): `Unit`<``"mat3"``\> & `API`

Cast the given value to a mat3.

#### Parameters

| Name | Type |
| :------ | :------ |
| `i` | `Input`<``"mat3"`` \| ``"mat4"``\> |

#### Returns

`Unit`<``"mat3"``\> & `API`

#### Defined in

[stdlib/values.ts:72](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/values.ts#L72)

___

### mat4

▸ **mat4**(`i`): `Unit`<``"mat4"``\> & `API`

Cast the given value to a mat4.

#### Parameters

| Name | Type |
| :------ | :------ |
| `i` | `Input`<``"mat3"`` \| ``"mat4"``\> |

#### Returns

`Unit`<``"mat4"``\> & `API`

#### Defined in

[stdlib/values.ts:75](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/values.ts#L75)

___

### orthogonal

▸ **orthogonal**(`v`): `Expression`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `Input`<``"vec3"``\> |

#### Returns

`Expression`

#### Defined in

[stdlib/vectors.ts:20](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/vectors.ts#L20)

___

### remap

▸ **remap**<`T`\>(`value`, `inMin`, `inMax`, `outMin`, `outMax`): `Expression`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends ``"float"`` \| ``"vec2"`` \| ``"vec3"`` \| ``"vec4"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Input`<`T`\> |
| `inMin` | `Input`<`T`\> |
| `inMax` | `Input`<`T`\> |
| `outMin` | `Input`<`T`\> |
| `outMax` | `Input`<`T`\> |

#### Returns

`Expression`

#### Defined in

[stdlib/math.ts:175](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/math.ts#L175)

___

### vec2

▸ **vec2**(`x?`, `y?`, `extras?`): `Unit`<``"vec2"``\> & { `x`:  ; `y`:   }

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `x` | `Input`<``"float"``\> | `0` |
| `y` | `Input`<``"float"``\> | `0` |
| `extras?` | `Partial`<`UnitConfig`<``"vec2"``\>\> | `undefined` |

#### Returns

`Unit`<``"vec2"``\> & { `x`:  ; `y`:   }

#### Defined in

[stdlib/values.ts:50](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/values.ts#L50)

___

### vec3

▸ **vec3**(`x?`, `y?`, `z?`, `extras?`): `Unit`<``"vec3"``\> & { `x`:  ; `y`:  ; `z`:   }

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `x` | `Input`<``"float"``\> | `0` |
| `y` | `Input`<``"float"``\> | `0` |
| `z` | `Input`<``"float"``\> | `0` |
| `extras?` | `Partial`<`UnitConfig`<``"vec3"``\>\> | `undefined` |

#### Returns

`Unit`<``"vec3"``\> & { `x`:  ; `y`:  ; `z`:   }

#### Defined in

[stdlib/values.ts:56](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/values.ts#L56)

___

### vec4

▸ **vec4**(`x?`, `y?`, `z?`, `w?`, `extras?`): `Unit`<``"vec4"``\> & { `w`:  ; `x`:  ; `y`:  ; `z`:   }

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `x` | `Input`<``"float"``\> | `0` |
| `y` | `Input`<``"float"``\> | `0` |
| `z` | `Input`<``"float"``\> | `0` |
| `w` | `Input`<``"float"``\> | `0` |
| `extras?` | `Partial`<`UnitConfig`<``"vec4"``\>\> | `undefined` |

#### Returns

`Unit`<``"vec4"``\> & { `w`:  ; `x`:  ; `y`:  ; `z`:   }

#### Defined in

[stdlib/values.ts:63](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/values.ts#L63)

## Math

### lerp

▸ **lerp**<`T`\>(`a`, `b`, `ratio`): `Expression`

Lerpy fun!

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `GLSLType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `Input`<`T`\> |
| `b` | `Input`<`T`\> |
| `ratio` | `Input`<``"float"`` \| `T`\> |

#### Returns

`Expression`

#### Defined in

[stdlib/math.ts:149](https://github.com/hmans/shader-composer/blob/0bd461e/packages/shader-composer/src/stdlib/math.ts#L149)
