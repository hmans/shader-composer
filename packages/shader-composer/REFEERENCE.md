[Shader Composer](README.md) / Modules

# Shader Composer

## Table of contents

### Type Aliases

- [API](modules.md#api)
- [APIFactory](modules.md#apifactory)
- [CustomShaderMaterialMasterProps](modules.md#customshadermaterialmasterprops)
- [Expression](modules.md#expression)
- [FresnelProps](modules.md#fresnelprops)
- [GLSLType](modules.md#glsltype)
- [Input](modules.md#input)
- [Item](modules.md#item)
- [JSTypes](modules.md#jstypes)
- [Program](modules.md#program)
- [ShaderMaterialMasterProps](modules.md#shadermaterialmasterprops)
- [Snippet](modules.md#snippet)
- [UniformUnit](modules.md#uniformunit)
- [Unit](modules.md#unit)
- [UnitConfig](modules.md#unitconfig)
- [UpdateCallback](modules.md#updatecallback)
- [Value](modules.md#value)

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

- [$](modules.md#$)
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
- [Snippet](modules.md#snippet-1)
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
- [Unit](modules.md#unit-1)
- [Vec2](modules.md#vec2)
- [Vec3](modules.md#vec3)
- [Vec4](modules.md#vec4)
- [add](modules.md#add-1)
- [collectFromTree](modules.md#collectfromtree)
- [compileShader](modules.md#compileshader)
- [div](modules.md#div-1)
- [flow](modules.md#flow)
- [getDependencies](modules.md#getdependencies)
- [glsl](modules.md#glsl)
- [glslType](modules.md#glsltype-1)
- [injectAPI](modules.md#injectapi)
- [inverseLerp](modules.md#inverselerp-1)
- [isExpression](modules.md#isexpression)
- [isSnippet](modules.md#issnippet)
- [isUnit](modules.md#isunit)
- [isUnitInProgram](modules.md#isunitinprogram)
- [localToViewSpace](modules.md#localtoviewspace-1)
- [localToWorldSpace](modules.md#localtoworldspace-1)
- [mat3](modules.md#mat3-1)
- [mat4](modules.md#mat4-1)
- [mix](modules.md#mix-1)
- [mul](modules.md#mul-1)
- [orthogonal](modules.md#orthogonal)
- [pipe](modules.md#pipe)
- [remap](modules.md#remap-1)
- [renameSnippet](modules.md#renamesnippet)
- [sub](modules.md#sub-1)
- [type](modules.md#type)
- [uniformName](modules.md#uniformname)
- [vec2](modules.md#vec2-1)
- [vec3](modules.md#vec3-1)
- [vec4](modules.md#vec4-1)
- [walkTree](modules.md#walktree)

### Math

- [lerp](modules.md#lerp-1)

## Type Aliases

### API

Ƭ **API**: `Record`<`string`, `any`\>

#### Defined in

[packages/shader-composer/src/units.ts:168](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/units.ts#L168)

___

### APIFactory

Ƭ **APIFactory**<`U`, `A`\>: (`unit`: `U`) => `A`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends [`Unit`](modules.md#unit-1) |
| `A` | extends [`API`](modules.md#api) |

#### Type declaration

▸ (`unit`): `A`

##### Parameters

| Name | Type |
| :------ | :------ |
| `unit` | `U` |

##### Returns

`A`

#### Defined in

[packages/shader-composer/src/units.ts:169](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/units.ts#L169)

___

### CustomShaderMaterialMasterProps

Ƭ **CustomShaderMaterialMasterProps**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `alpha?` | [`Input`](modules.md#input)<``"float"``\> |
| `diffuseColor?` | [`Input`](modules.md#input)<``"vec3"``\> |
| `emissiveColor?` | [`Input`](modules.md#input)<``"vec3"``\> |
| `fragColor?` | [`Input`](modules.md#input)<``"vec3"``\> |
| `metalness?` | [`Input`](modules.md#input)<``"float"``\> |
| `normal?` | [`Input`](modules.md#input)<``"vec3"``\> |
| `position?` | [`Input`](modules.md#input)<``"vec3"``\> |
| `roughness?` | [`Input`](modules.md#input)<``"float"``\> |

#### Defined in

[packages/shader-composer/src/stdlib/masters.ts:34](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/masters.ts#L34)

___

### Expression

Ƭ **Expression**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `_` | ``"Expression"`` |
| `render` | () => `string` |
| `toString` | () => `string` |
| `values` | `any`[] |

#### Defined in

[packages/shader-composer/src/expressions.ts:5](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/expressions.ts#L5)

___

### FresnelProps

Ƭ **FresnelProps**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `alpha?` | [`Input`](modules.md#input)<``"float"``\> |
| `bias?` | [`Input`](modules.md#input)<``"float"``\> |
| `factor?` | [`Input`](modules.md#input)<``"float"``\> |
| `intensity?` | [`Input`](modules.md#input)<``"float"``\> |
| `normal?` | [`Input`](modules.md#input)<``"vec3"``\> |
| `power?` | [`Input`](modules.md#input)<``"float"``\> |

#### Defined in

[packages/shader-composer/src/stdlib/artistic.ts:8](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/artistic.ts#L8)

___

### GLSLType

Ƭ **GLSLType**: ``"bool"`` \| ``"int"`` \| ``"float"`` \| ``"vec2"`` \| ``"vec3"`` \| ``"vec4"`` \| ``"mat3"`` \| ``"mat4"`` \| ``"sampler2D"``

Currently supported GLSLTypes. Probably incomplete!

#### Defined in

[packages/shader-composer/src/units.ts:21](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/units.ts#L21)

___

### Input

Ƭ **Input**<`T`\>: [`Expression`](modules.md#expression) \| [`JSTypes`](modules.md#jstypes)[`T`] \| [`Unit`](modules.md#unit-1)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`GLSLType`](modules.md#glsltype) = `any` |

#### Defined in

[packages/shader-composer/src/units.ts:44](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/units.ts#L44)

___

### Item

Ƭ **Item**: [`Input`](modules.md#input) \| [`Snippet`](modules.md#snippet-1) \| [`Expression`](modules.md#expression)

#### Defined in

[packages/shader-composer/src/tree.ts:5](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/tree.ts#L5)

___

### JSTypes

Ƭ **JSTypes**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `bool` | `boolean` |
| `float` | `number` |
| `int` | `number` |
| `mat3` | `Matrix3` |
| `mat4` | `Matrix4` |
| `sampler2D` | `Texture` |
| `vec2` | `Vector2` |
| `vec3` | `Vector3` \| `Color` |
| `vec4` | `Vector4` |

#### Defined in

[packages/shader-composer/src/units.ts:32](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/units.ts#L32)

___

### Program

Ƭ **Program**: ``"vertex"`` \| ``"fragment"``

#### Defined in

[packages/shader-composer/src/units.ts:16](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/units.ts#L16)

___

### ShaderMaterialMasterProps

Ƭ **ShaderMaterialMasterProps**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `alpha?` | [`Input`](modules.md#input)<``"float"``\> |
| `color?` | [`Input`](modules.md#input)<``"vec3"``\> |
| `position?` | [`Input`](modules.md#input)<``"vec3"``\> |

#### Defined in

[packages/shader-composer/src/stdlib/masters.ts:7](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/masters.ts#L7)

___

### Snippet

Ƭ **Snippet**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `_` | ``"Snippet"`` |
| `expression` | [`Expression`](modules.md#expression) |
| `name` | `string` |
| `render` | (`name`: `string`) => [`Expression`](modules.md#expression) |

#### Defined in

[packages/shader-composer/src/snippets.ts:3](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/snippets.ts#L3)

[packages/shader-composer/src/snippets.ts:10](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/snippets.ts#L10)

___

### UniformUnit

Ƭ **UniformUnit**<`T`, `J`\>: [`Unit`](modules.md#unit-1)<`T`\> & { `value`: `J`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`GLSLType`](modules.md#glsltype) |
| `J` | extends [`JSTypes`](modules.md#jstypes)[`T`] = [`JSTypes`](modules.md#jstypes)[`T`] |

#### Defined in

[packages/shader-composer/src/stdlib/uniforms.ts:7](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/uniforms.ts#L7)

[packages/shader-composer/src/stdlib/uniforms.ts:13](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/uniforms.ts#L13)

___

### Unit

Ƭ **Unit**<`T`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`GLSLType`](modules.md#glsltype) = `any` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `_` | ``"Unit"`` |
| `_unitConfig` | [`UnitConfig`](modules.md#unitconfig)<`T`\> |

#### Defined in

[packages/shader-composer/src/units.ts:131](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/units.ts#L131)

[packages/shader-composer/src/units.ts:136](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/units.ts#L136)

___

### UnitConfig

Ƭ **UnitConfig**<`T`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`GLSLType`](modules.md#glsltype) |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `dispose?` | () => `void` | A callback that will be executed when the shader is being disposed. |
| `fragment?` | { `body?`: [`Expression`](modules.md#expression) ; `header?`: [`Expression`](modules.md#expression)  } | - |
| `fragment.body?` | [`Expression`](modules.md#expression) | - |
| `fragment.header?` | [`Expression`](modules.md#expression) | - |
| `name` | `string` | Human-readable name of this unit. |
| `only?` | [`Program`](modules.md#program) | If this is set to "vertex" or "fragment", the compiler will only ever render this node in the specified program. If you have units referencing gl_* variables that only exist in one of the programs, use this to make sure they never appear in the other program (which would lead to compilation failure.) |
| `type` | `T` | The GLSL type of this unit. |
| `uniform?` | { `value`: [`JSTypes`](modules.md#jstypes)[`T`]  } | An optional uniform object. It will automatically be declared in the program headers, and also made available in the object returned by `compilerShader`. |
| `uniform.value` | [`JSTypes`](modules.md#jstypes)[`T`] | - |
| `uniformName?` | `string` | - |
| `update?` | [`UpdateCallback`](modules.md#updatecallback) | A callback that will be executed once per frame. |
| `value` | [`Input`](modules.md#input)<`T`\> \| `undefined` | The value of this unit. Can be a reference to another unit, a JavaScript type that matches this unit's GLSL type, or an Expression. |
| `variableName` | `string` | Machine-readable name of the global variable for this unit. Will be recreated by the compiler, so no need to set this yourself. |
| `varying` | `boolean` | When set to true, this variable will automatically declare a varying, calculate/source its value in the vertex program only, and pass the result to the fragment program through that varying. Default: false. |
| `vertex?` | { `body?`: [`Expression`](modules.md#expression) ; `header?`: [`Expression`](modules.md#expression)  } | - |
| `vertex.body?` | [`Expression`](modules.md#expression) | - |
| `vertex.header?` | [`Expression`](modules.md#expression) | - |

#### Defined in

[packages/shader-composer/src/units.ts:61](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/units.ts#L61)

___

### UpdateCallback

Ƭ **UpdateCallback**: (`dt`: `number`, `camera`: `Camera`, `scene`: `Scene`, `gl`: `WebGLRenderer`) => `void`

#### Type declaration

▸ (`dt`, `camera`, `scene`, `gl`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `dt` | `number` |
| `camera` | `Camera` |
| `scene` | `Scene` |
| `gl` | `WebGLRenderer` |

##### Returns

`void`

#### Defined in

[packages/shader-composer/src/units.ts:54](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/units.ts#L54)

___

### Value

Ƭ **Value**<`T`\>: [`Input`](modules.md#input)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`GLSLType`](modules.md#glsltype) |

#### Defined in

[packages/shader-composer/src/units.ts:52](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/units.ts#L52)

## Variables

### CameraFar

• `Const` **CameraFar**: [`UniformUnit`](modules.md#uniformunit-1)<``"float"``, `number`\>

#### Defined in

[packages/shader-composer/src/stdlib/uniforms.ts:73](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/uniforms.ts#L73)

___

### CameraNear

• `Const` **CameraNear**: [`UniformUnit`](modules.md#uniformunit-1)<``"float"``, `number`\>

#### Defined in

[packages/shader-composer/src/stdlib/uniforms.ts:63](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/uniforms.ts#L63)

___

### CameraPosition

• `Const` **CameraPosition**: [`Unit`](modules.md#unit-1)<``"vec3"``\> & { `x`:  ; `y`:  ; `z`:   }

#### Defined in

[packages/shader-composer/src/stdlib/geometry.ts:7](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/geometry.ts#L7)

___

### FragmentCoordinate

• `Const` **FragmentCoordinate**: [`Unit`](modules.md#unit-1)<``"vec2"``\> & { `x`:  ; `y`:   }

Returns the current fragment's on-screen coordinate.

#### Defined in

[packages/shader-composer/src/stdlib/globals.ts:7](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/globals.ts#L7)

___

### InstanceMatrix

• `Const` **InstanceMatrix**: [`Unit`](modules.md#unit-1)<``"mat4"``\> & [`API`](modules.md#api)

#### Defined in

[packages/shader-composer/src/stdlib/geometry.ts:39](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/geometry.ts#L39)

___

### IsFrontFacing

• `Const` **IsFrontFacing**: [`Unit`](modules.md#unit-1)<``"bool"``\> & [`API`](modules.md#api)

#### Defined in

[packages/shader-composer/src/stdlib/geometry.ts:83](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/geometry.ts#L83)

___

### ModelMatrix

• `Const` **ModelMatrix**: [`Unit`](modules.md#unit-1)<``"mat4"``\> & [`API`](modules.md#api)

#### Defined in

[packages/shader-composer/src/stdlib/geometry.ts:15](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/geometry.ts#L15)

___

### ModelViewMatrix

• `Const` **ModelViewMatrix**: [`Unit`](modules.md#unit-1)<``"mat4"``\> & [`API`](modules.md#api)

#### Defined in

[packages/shader-composer/src/stdlib/geometry.ts:19](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/geometry.ts#L19)

___

### NormalMatrix

• `Const` **NormalMatrix**: [`Unit`](modules.md#unit-1)<``"mat4"``\> & [`API`](modules.md#api)

#### Defined in

[packages/shader-composer/src/stdlib/geometry.ts:23](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/geometry.ts#L23)

___

### ProjectionMatrix

• `Const` **ProjectionMatrix**: [`Unit`](modules.md#unit-1)<``"mat4"``\> & [`API`](modules.md#api)

#### Defined in

[packages/shader-composer/src/stdlib/geometry.ts:27](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/geometry.ts#L27)

___

### Resolution

• `Const` **Resolution**: [`UniformUnit`](modules.md#uniformunit-1)<``"vec2"``, `Vector2`\>

#### Defined in

[packages/shader-composer/src/stdlib/uniforms.ts:54](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/uniforms.ts#L54)

___

### ScreenUV

• `Const` **ScreenUV**: [`Unit`](modules.md#unit-1)<``"vec2"``\> & { `x`:  ; `y`:   }

#### Defined in

[packages/shader-composer/src/stdlib/uniforms.ts:83](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/uniforms.ts#L83)

___

### UV

• `Const` **UV**: [`Unit`](modules.md#unit-1)<``"vec2"``\> & { `x`:  ; `y`:   }

#### Defined in

[packages/shader-composer/src/stdlib/geometry.ts:53](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/geometry.ts#L53)

___

### UsingInstancing

• `Const` **UsingInstancing**: [`Unit`](modules.md#unit-1)<``"bool"``\> & [`API`](modules.md#api)

#### Defined in

[packages/shader-composer/src/stdlib/geometry.ts:31](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/geometry.ts#L31)

___

### VertexNormal

• `Const` **VertexNormal**: [`Unit`](modules.md#unit-1)<``"vec3"``\> & { `x`:  ; `y`:  ; `z`:   } & { `view`:  ; `world`:   }

#### Defined in

[packages/shader-composer/src/stdlib/geometry.ts:76](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/geometry.ts#L76)

___

### VertexPosition

• `Const` **VertexPosition**: [`Unit`](modules.md#unit-1)<``"vec3"``\> & { `x`:  ; `y`:  ; `z`:   } & { `view`:  ; `world`:   }

#### Defined in

[packages/shader-composer/src/stdlib/geometry.ts:75](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/geometry.ts#L75)

___

### ViewDirection

• `Const` **ViewDirection**: [`Unit`](modules.md#unit-1)<``"vec3"``\> & { `x`:  ; `y`:  ; `z`:   }

#### Defined in

[packages/shader-composer/src/stdlib/geometry.ts:78](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/geometry.ts#L78)

___

### ViewMatrix

• `Const` **ViewMatrix**: [`Unit`](modules.md#unit-1)<``"mat4"``\> & [`API`](modules.md#api)

#### Defined in

[packages/shader-composer/src/stdlib/geometry.ts:11](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/geometry.ts#L11)

## Functions

### $

▸ **$**(`strings`, ...`values`): [`Expression`](modules.md#expression)

A shortcut for the `glsl` tagged template literal helper.

#### Parameters

| Name | Type |
| :------ | :------ |
| `strings` | `TemplateStringsArray` |
| `...values` | `any`[] |

#### Returns

[`Expression`](modules.md#expression)

#### Defined in

[packages/shader-composer/src/expressions.ts:12](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/expressions.ts#L12)

___

### Abs

▸ **Abs**<`A`\>(`a`): [`Unit`](modules.md#unit-1)<`A`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends ``"float"`` \| ``"vec2"`` \| ``"vec3"`` \| ``"vec4"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Input`](modules.md#input)<`A`\> |

#### Returns

[`Unit`](modules.md#unit-1)<`A`\>

#### Defined in

[packages/shader-composer/src/stdlib/math.ts:29](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/math.ts#L29)

___

### Acos

▸ **Acos**<`A`\>(`a`): [`Unit`](modules.md#unit-1)<`A`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends ``"float"`` \| ``"vec2"`` \| ``"vec3"`` \| ``"vec4"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Input`](modules.md#input)<`A`\> |

#### Returns

[`Unit`](modules.md#unit-1)<`A`\>

#### Defined in

[packages/shader-composer/src/stdlib/math.ts:29](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/math.ts#L29)

___

### Add

▸ **Add**<`A`, `B`\>(`a`, `b`): [`Unit`](modules.md#unit-1)<`A`\>

A Shader Unit that adds two values and returns the result.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`GLSLType`](modules.md#glsltype) |
| `B` | extends [`GLSLType`](modules.md#glsltype) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Input`](modules.md#input)<`A`\> |
| `b` | [`Input`](modules.md#input)<`B`\> |

#### Returns

[`Unit`](modules.md#unit-1)<`A`\>

#### Defined in

[packages/shader-composer/src/stdlib/math.ts:10](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/math.ts#L10)

___

### Asin

▸ **Asin**<`A`\>(`a`): [`Unit`](modules.md#unit-1)<`A`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends ``"float"`` \| ``"vec2"`` \| ``"vec3"`` \| ``"vec4"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Input`](modules.md#input)<`A`\> |

#### Returns

[`Unit`](modules.md#unit-1)<`A`\>

#### Defined in

[packages/shader-composer/src/stdlib/math.ts:29](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/math.ts#L29)

___

### Attribute

▸ **Attribute**<`T`\>(`type`, `name`): [`Unit`](modules.md#unit-1)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`GLSLType`](modules.md#glsltype) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `T` |
| `name` | `string` |

#### Returns

[`Unit`](modules.md#unit-1)<`T`\>

#### Defined in

[packages/shader-composer/src/stdlib/geometry.ts:96](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/geometry.ts#L96)

___

### Bitangent

▸ **Bitangent**(`p`, `t`): [`Unit`](modules.md#unit-1)<``"vec3"``\> & { `x`:  ; `y`:  ; `z`:   }

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | [`Input`](modules.md#input)<``"vec3"``\> |
| `t` | [`Input`](modules.md#input)<``"vec3"``\> |

#### Returns

[`Unit`](modules.md#unit-1)<``"vec3"``\> & { `x`:  ; `y`:  ; `z`:   }

#### Defined in

[packages/shader-composer/src/stdlib/vectors.ts:38](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/vectors.ts#L38)

___

### Bool

▸ **Bool**(`v`, `extras?`): [`Unit`](modules.md#unit-1)<``"bool"``\> & [`API`](modules.md#api)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Input`](modules.md#input)<``"bool"``\> |
| `extras?` | `Partial`<[`UnitConfig`](modules.md#unitconfig)<``"bool"``\>\> |

#### Returns

[`Unit`](modules.md#unit-1)<``"bool"``\> & [`API`](modules.md#api)

#### Defined in

[packages/shader-composer/src/stdlib/values.ts:7](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/values.ts#L7)

___

### Ceil

▸ **Ceil**<`A`\>(`a`): [`Unit`](modules.md#unit-1)<`A`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends ``"float"`` \| ``"vec2"`` \| ``"vec3"`` \| ``"vec4"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Input`](modules.md#input)<`A`\> |

#### Returns

[`Unit`](modules.md#unit-1)<`A`\>

#### Defined in

[packages/shader-composer/src/stdlib/math.ts:29](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/math.ts#L29)

___

### Clamp

▸ **Clamp**<`T`\>(`x`, `min`, `max`): [`Unit`](modules.md#unit-1)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`GLSLType`](modules.md#glsltype) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Input`](modules.md#input)<`T`\> |
| `min` | [`Input`](modules.md#input)<`T`\> |
| `max` | [`Input`](modules.md#input)<`T`\> |

#### Returns

[`Unit`](modules.md#unit-1)<`T`\>

#### Defined in

[packages/shader-composer/src/stdlib/math.ts:131](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/math.ts#L131)

___

### Clamp01

▸ **Clamp01**(`x`): [`Unit`](modules.md#unit-1)<``"float"``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Input`](modules.md#input)<``"float"``\> |

#### Returns

[`Unit`](modules.md#unit-1)<``"float"``\>

#### Defined in

[packages/shader-composer/src/stdlib/math.ts:134](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/math.ts#L134)

___

### Cos

▸ **Cos**<`A`\>(`a`): [`Unit`](modules.md#unit-1)<`A`\>

Calculates the cosine value of the input value.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends ``"float"`` \| ``"vec2"`` \| ``"vec3"`` \| ``"vec4"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Input`](modules.md#input)<`A`\> |

#### Returns

[`Unit`](modules.md#unit-1)<`A`\>

#### Defined in

[packages/shader-composer/src/stdlib/math.ts:29](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/math.ts#L29)

___

### Cross

▸ **Cross**(`a`, `b`): [`Unit`](modules.md#unit-1)<``"vec3"``\> & { `x`:  ; `y`:  ; `z`:   }

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Input`](modules.md#input)<``"vec3"``\> |
| `b` | [`Input`](modules.md#input)<``"vec3"``\> |

#### Returns

[`Unit`](modules.md#unit-1)<``"vec3"``\> & { `x`:  ; `y`:  ; `z`:   }

#### Defined in

[packages/shader-composer/src/stdlib/vectors.ts:30](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/vectors.ts#L30)

___

### CustomShaderMaterialMaster

▸ **CustomShaderMaterialMaster**(`__namedParameters?`): [`Unit`](modules.md#unit-1)<``"bool"``\> & [`API`](modules.md#api)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`CustomShaderMaterialMasterProps`](modules.md#customshadermaterialmasterprops) |

#### Returns

[`Unit`](modules.md#unit-1)<``"bool"``\> & [`API`](modules.md#api)

#### Defined in

[packages/shader-composer/src/stdlib/masters.ts:45](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/masters.ts#L45)

___

### Degrees

▸ **Degrees**<`A`\>(`a`): [`Unit`](modules.md#unit-1)<`A`\>

Converts the given value from radians to degrees.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends ``"float"`` \| ``"vec2"`` \| ``"vec3"`` \| ``"vec4"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Input`](modules.md#input)<`A`\> |

#### Returns

[`Unit`](modules.md#unit-1)<`A`\>

#### Defined in

[packages/shader-composer/src/stdlib/math.ts:29](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/math.ts#L29)

___

### Distance

▸ **Distance**<`T`\>(`a`, `b`): [`Unit`](modules.md#unit-1)<``"float"``\> & [`API`](modules.md#api)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends ``"float"`` \| ``"vec2"`` \| ``"vec3"`` \| ``"vec4"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Input`](modules.md#input)<`T`\> |
| `b` | [`Input`](modules.md#input)<`T`\> |

#### Returns

[`Unit`](modules.md#unit-1)<``"float"``\> & [`API`](modules.md#api)

#### Defined in

[packages/shader-composer/src/stdlib/vectors.ts:41](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/vectors.ts#L41)

___

### Div

▸ **Div**<`A`, `B`\>(`a`, `b`): [`Unit`](modules.md#unit-1)<`A`\>

A Shader Unit that divides two values and returns the result.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`GLSLType`](modules.md#glsltype) |
| `B` | extends [`GLSLType`](modules.md#glsltype) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Input`](modules.md#input)<`A`\> |
| `b` | [`Input`](modules.md#input)<`B`\> |

#### Returns

[`Unit`](modules.md#unit-1)<`A`\>

#### Defined in

[packages/shader-composer/src/stdlib/math.ts:10](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/math.ts#L10)

___

### Dot

▸ **Dot**<`T`\>(`a`, `b`): [`Unit`](modules.md#unit-1)<``"float"``\> & [`API`](modules.md#api)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends ``"vec2"`` \| ``"vec3"`` \| ``"vec4"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Input`](modules.md#input)<`T`\> |
| `b` | [`Input`](modules.md#input)<`T`\> |

#### Returns

[`Unit`](modules.md#unit-1)<``"float"``\> & [`API`](modules.md#api)

#### Defined in

[packages/shader-composer/src/stdlib/vectors.ts:33](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/vectors.ts#L33)

___

### Exp

▸ **Exp**<`A`\>(`a`): [`Unit`](modules.md#unit-1)<`A`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends ``"float"`` \| ``"vec2"`` \| ``"vec3"`` \| ``"vec4"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Input`](modules.md#input)<`A`\> |

#### Returns

[`Unit`](modules.md#unit-1)<`A`\>

#### Defined in

[packages/shader-composer/src/stdlib/math.ts:29](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/math.ts#L29)

___

### Exp2

▸ **Exp2**<`A`\>(`a`): [`Unit`](modules.md#unit-1)<`A`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends ``"float"`` \| ``"vec2"`` \| ``"vec3"`` \| ``"vec4"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Input`](modules.md#input)<`A`\> |

#### Returns

[`Unit`](modules.md#unit-1)<`A`\>

#### Defined in

[packages/shader-composer/src/stdlib/math.ts:29](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/math.ts#L29)

___

### Float

▸ **Float**(`v`, `extras?`): [`Unit`](modules.md#unit-1)<``"float"``\> & [`API`](modules.md#api)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Input`](modules.md#input)<``"float"``\> |
| `extras?` | `Partial`<[`UnitConfig`](modules.md#unitconfig)<``"float"``\>\> |

#### Returns

[`Unit`](modules.md#unit-1)<``"float"``\> & [`API`](modules.md#api)

#### Defined in

[packages/shader-composer/src/stdlib/values.ts:7](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/values.ts#L7)

___

### Floor

▸ **Floor**<`A`\>(`a`): [`Unit`](modules.md#unit-1)<`A`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends ``"float"`` \| ``"vec2"`` \| ``"vec3"`` \| ``"vec4"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Input`](modules.md#input)<`A`\> |

#### Returns

[`Unit`](modules.md#unit-1)<`A`\>

#### Defined in

[packages/shader-composer/src/stdlib/math.ts:29](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/math.ts#L29)

___

### Fract

▸ **Fract**<`A`\>(`a`): [`Unit`](modules.md#unit-1)<`A`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends ``"float"`` \| ``"vec2"`` \| ``"vec3"`` \| ``"vec4"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Input`](modules.md#input)<`A`\> |

#### Returns

[`Unit`](modules.md#unit-1)<`A`\>

#### Defined in

[packages/shader-composer/src/stdlib/math.ts:29](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/math.ts#L29)

___

### Fresnel

▸ **Fresnel**(`__namedParameters?`): [`Unit`](modules.md#unit-1)<``"float"``\> & [`API`](modules.md#api)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`FresnelProps`](modules.md#fresnelprops) |

#### Returns

[`Unit`](modules.md#unit-1)<``"float"``\> & [`API`](modules.md#api)

#### Defined in

[packages/shader-composer/src/stdlib/artistic.ts:17](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/artistic.ts#L17)

___

### GreaterOrEqual

▸ **GreaterOrEqual**<`T`\>(`a`, `b`): [`Unit`](modules.md#unit-1)<``"bool"``\> & [`API`](modules.md#api)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`GLSLType`](modules.md#glsltype) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Input`](modules.md#input)<`T`\> |
| `b` | [`Input`](modules.md#input)<`T`\> |

#### Returns

[`Unit`](modules.md#unit-1)<``"bool"``\> & [`API`](modules.md#api)

#### Defined in

[packages/shader-composer/src/stdlib/logic.ts:12](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/logic.ts#L12)

___

### If

▸ **If**<`T`\>(`expression`, `then`, `else_`): [`Unit`](modules.md#unit-1)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`GLSLType`](modules.md#glsltype) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | [`Input`](modules.md#input)<``"bool"``\> |
| `then` | [`Input`](modules.md#input)<`T`\> |
| `else_` | [`Input`](modules.md#input)<`T`\> |

#### Returns

[`Unit`](modules.md#unit-1)<`T`\>

#### Defined in

[packages/shader-composer/src/stdlib/logic.ts:6](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/logic.ts#L6)

___

### Int

▸ **Int**(`v`, `extras?`): [`Unit`](modules.md#unit-1)<``"int"``\> & [`API`](modules.md#api)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Input`](modules.md#input)<``"int"``\> |
| `extras?` | `Partial`<[`UnitConfig`](modules.md#unitconfig)<``"int"``\>\> |

#### Returns

[`Unit`](modules.md#unit-1)<``"int"``\> & [`API`](modules.md#api)

#### Defined in

[packages/shader-composer/src/stdlib/values.ts:7](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/values.ts#L7)

___

### InverseLerp

▸ **InverseLerp**<`T`\>(`a`, `b`, `c`): [`Unit`](modules.md#unit-1)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`GLSLType`](modules.md#glsltype) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Input`](modules.md#input)<`T`\> |
| `b` | [`Input`](modules.md#input)<`T`\> |
| `c` | [`Input`](modules.md#input)<`T`\> |

#### Returns

[`Unit`](modules.md#unit-1)<`T`\>

#### Defined in

[packages/shader-composer/src/stdlib/math.ts:164](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/math.ts#L164)

___

### InverseSqrt

▸ **InverseSqrt**<`A`\>(`a`): [`Unit`](modules.md#unit-1)<`A`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends ``"float"`` \| ``"vec2"`` \| ``"vec3"`` \| ``"vec4"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Input`](modules.md#input)<`A`\> |

#### Returns

[`Unit`](modules.md#unit-1)<`A`\>

#### Defined in

[packages/shader-composer/src/stdlib/math.ts:29](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/math.ts#L29)

___

### Length

▸ **Length**<`T`\>(`a`): [`Unit`](modules.md#unit-1)<``"float"``\> & [`API`](modules.md#api)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends ``"float"`` \| ``"vec2"`` \| ``"vec3"`` \| ``"vec4"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Input`](modules.md#input)<`T`\> |

#### Returns

[`Unit`](modules.md#unit-1)<``"float"``\> & [`API`](modules.md#api)

#### Defined in

[packages/shader-composer/src/stdlib/vectors.ts:46](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/vectors.ts#L46)

___

### Lerp

▸ **Lerp**<`T`\>(`a`, `b`, `ratio`): [`Unit`](modules.md#unit-1)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`GLSLType`](modules.md#glsltype) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Input`](modules.md#input)<`T`\> |
| `b` | [`Input`](modules.md#input)<`T`\> |
| `ratio` | [`Input`](modules.md#input)<``"float"`` \| `T`\> |

#### Returns

[`Unit`](modules.md#unit-1)<`T`\>

#### Defined in

[packages/shader-composer/src/stdlib/math.ts:155](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/math.ts#L155)

___

### LocalToViewSpace

▸ **LocalToViewSpace**(`position`): [`Unit`](modules.md#unit-1)<``"vec3"``\> & { `x`:  ; `y`:  ; `z`:   }

Converts the given position vector (which is assumed to be in local space)
to view space.

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | [`Input`](modules.md#input)<``"vec3"``\> |

#### Returns

[`Unit`](modules.md#unit-1)<``"vec3"``\> & { `x`:  ; `y`:  ; `z`:   }

#### Defined in

[packages/shader-composer/src/stdlib/spaces.ts:20](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/spaces.ts#L20)

___

### LocalToWorldSpace

▸ **LocalToWorldSpace**(`position`): [`Unit`](modules.md#unit-1)<``"vec3"``\> & { `x`:  ; `y`:  ; `z`:   }

Converts the given position vector (which is assumed to be in local space)
to world space.

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | [`Input`](modules.md#input)<``"vec3"``\> |

#### Returns

[`Unit`](modules.md#unit-1)<``"vec3"``\> & { `x`:  ; `y`:  ; `z`:   }

#### Defined in

[packages/shader-composer/src/stdlib/spaces.ts:27](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/spaces.ts#L27)

___

### Log

▸ **Log**<`A`\>(`a`): [`Unit`](modules.md#unit-1)<`A`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends ``"float"`` \| ``"vec2"`` \| ``"vec3"`` \| ``"vec4"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Input`](modules.md#input)<`A`\> |

#### Returns

[`Unit`](modules.md#unit-1)<`A`\>

#### Defined in

[packages/shader-composer/src/stdlib/math.ts:29](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/math.ts#L29)

___

### Log2

▸ **Log2**<`A`\>(`a`): [`Unit`](modules.md#unit-1)<`A`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends ``"float"`` \| ``"vec2"`` \| ``"vec3"`` \| ``"vec4"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Input`](modules.md#input)<`A`\> |

#### Returns

[`Unit`](modules.md#unit-1)<`A`\>

#### Defined in

[packages/shader-composer/src/stdlib/math.ts:29](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/math.ts#L29)

___

### Master

▸ **Master**(`extras?`): [`Unit`](modules.md#unit-1)<``"bool"``\> & [`API`](modules.md#api)

#### Parameters

| Name | Type |
| :------ | :------ |
| `extras?` | `Partial`<[`UnitConfig`](modules.md#unitconfig)<``"bool"``\>\> |

#### Returns

[`Unit`](modules.md#unit-1)<``"bool"``\> & [`API`](modules.md#api)

#### Defined in

[packages/shader-composer/src/stdlib/values.ts:77](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/values.ts#L77)

___

### Mat3

▸ **Mat3**(`v`, `extras?`): [`Unit`](modules.md#unit-1)<``"mat3"``\> & [`API`](modules.md#api)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Input`](modules.md#input)<``"mat3"``\> |
| `extras?` | `Partial`<[`UnitConfig`](modules.md#unitconfig)<``"mat3"``\>\> |

#### Returns

[`Unit`](modules.md#unit-1)<``"mat3"``\> & [`API`](modules.md#api)

#### Defined in

[packages/shader-composer/src/stdlib/values.ts:7](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/values.ts#L7)

___

### Mat4

▸ **Mat4**(`v`, `extras?`): [`Unit`](modules.md#unit-1)<``"mat4"``\> & [`API`](modules.md#api)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Input`](modules.md#input)<``"mat4"``\> |
| `extras?` | `Partial`<[`UnitConfig`](modules.md#unitconfig)<``"mat4"``\>\> |

#### Returns

[`Unit`](modules.md#unit-1)<``"mat4"``\> & [`API`](modules.md#api)

#### Defined in

[packages/shader-composer/src/stdlib/values.ts:7](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/values.ts#L7)

___

### Max

▸ **Max**<`T`\>(`a`, `b`): [`Unit`](modules.md#unit-1)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends ``"float"`` \| ``"vec2"`` \| ``"vec3"`` \| ``"vec4"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Input`](modules.md#input)<`T`\> |
| `b` | [`Input`](modules.md#input)<`T`\> |

#### Returns

[`Unit`](modules.md#unit-1)<`T`\>

#### Defined in

[packages/shader-composer/src/stdlib/math.ts:198](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/math.ts#L198)

___

### Min

▸ **Min**<`T`\>(`a`, `b`): [`Unit`](modules.md#unit-1)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends ``"float"`` \| ``"vec2"`` \| ``"vec3"`` \| ``"vec4"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Input`](modules.md#input)<`T`\> |
| `b` | [`Input`](modules.md#input)<`T`\> |

#### Returns

[`Unit`](modules.md#unit-1)<`T`\>

#### Defined in

[packages/shader-composer/src/stdlib/math.ts:193](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/math.ts#L193)

___

### Mix

▸ **Mix**<`T`\>(`a`, `b`, `ratio`): [`Unit`](modules.md#unit-1)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`GLSLType`](modules.md#glsltype) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Input`](modules.md#input)<`T`\> |
| `b` | [`Input`](modules.md#input)<`T`\> |
| `ratio` | [`Input`](modules.md#input)<``"float"`` \| `T`\> |

#### Returns

[`Unit`](modules.md#unit-1)<`T`\>

#### Defined in

[packages/shader-composer/src/stdlib/math.ts:155](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/math.ts#L155)

___

### Modulo

▸ **Modulo**<`A`, `B`\>(`a`, `b`): [`Unit`](modules.md#unit-1)<`A`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends ``"float"`` \| ``"vec2"`` \| ``"vec3"`` \| ``"vec4"`` |
| `B` | extends ``"float"`` \| ``"vec2"`` \| ``"vec3"`` \| ``"vec4"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Input`](modules.md#input)<`A`\> |
| `b` | [`Input`](modules.md#input)<`B`\> |

#### Returns

[`Unit`](modules.md#unit-1)<`A`\>

#### Defined in

[packages/shader-composer/src/stdlib/math.ts:123](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/math.ts#L123)

___

### Mul

▸ **Mul**<`A`, `B`\>(`a`, `b`): [`Unit`](modules.md#unit-1)<`A`\>

A Shader Unit that multiplies two values and returns the result.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`GLSLType`](modules.md#glsltype) |
| `B` | extends [`GLSLType`](modules.md#glsltype) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Input`](modules.md#input)<`A`\> |
| `b` | [`Input`](modules.md#input)<`B`\> |

#### Returns

[`Unit`](modules.md#unit-1)<`A`\>

#### Defined in

[packages/shader-composer/src/stdlib/math.ts:10](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/math.ts#L10)

___

### Normalize

▸ **Normalize**<`T`\>(`a`): [`Unit`](modules.md#unit-1)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends ``"vec2"`` \| ``"vec3"`` \| ``"vec4"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Input`](modules.md#input)<`T`\> |

#### Returns

[`Unit`](modules.md#unit-1)<`T`\>

#### Defined in

[packages/shader-composer/src/stdlib/vectors.ts:27](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/vectors.ts#L27)

___

### NormalizePlusMinusOne

▸ **NormalizePlusMinusOne**(`f`): [`Unit`](modules.md#unit-1)<``"float"``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`Input`](modules.md#input)<``"float"``\> |

#### Returns

[`Unit`](modules.md#unit-1)<``"float"``\>

#### Defined in

[packages/shader-composer/src/stdlib/math.ts:191](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/math.ts#L191)

___

### OneMinus

▸ **OneMinus**(`v`): [`Unit`](modules.md#unit-1)<``"float"``\> & [`API`](modules.md#api)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Input`](modules.md#input)<``"float"``\> |

#### Returns

[`Unit`](modules.md#unit-1)<``"float"``\> & [`API`](modules.md#api)

#### Defined in

[packages/shader-composer/src/stdlib/math.ts:138](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/math.ts#L138)

___

### PerspectiveDepth

▸ **PerspectiveDepth**(`xy`, `depthTexture`, `cameraNear?`, `cameraFar?`): [`Unit`](modules.md#unit-1)<``"float"``\> & [`API`](modules.md#api)

Sample a depth texture and return the depth value in eye space units.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `xy` | [`Input`](modules.md#input)<``"vec2"``\> | `undefined` | Screen position |
| `depthTexture` | [`Unit`](modules.md#unit-1)<``"sampler2D"``\> | `undefined` | Depth texture to sample |
| `cameraNear` | [`Input`](modules.md#input)<``"float"``\> | `CameraNear` | Camera near plane (defaults to CameraNear) |
| `cameraFar` | [`Input`](modules.md#input)<``"float"``\> | `CameraFar` | Camera far plane (defaults to CameraFar) |

#### Returns

[`Unit`](modules.md#unit-1)<``"float"``\> & [`API`](modules.md#api)

Float unit containing the depth in eye space units

#### Defined in

[packages/shader-composer/src/stdlib/scene.ts:30](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/scene.ts#L30)

___

### Pow

▸ **Pow**<`T`\>(`a`, `e`): [`Unit`](modules.md#unit-1)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends ``"float"`` \| ``"vec2"`` \| ``"vec3"`` \| ``"vec4"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Input`](modules.md#input)<`T`\> |
| `e` | [`Input`](modules.md#input)<`T`\> |

#### Returns

[`Unit`](modules.md#unit-1)<`T`\>

#### Defined in

[packages/shader-composer/src/stdlib/math.ts:68](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/math.ts#L68)

___

### Radians

▸ **Radians**<`A`\>(`a`): [`Unit`](modules.md#unit-1)<`A`\>

Converts the given value from degrees to radians.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends ``"float"`` \| ``"vec2"`` \| ``"vec3"`` \| ``"vec4"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Input`](modules.md#input)<`A`\> |

#### Returns

[`Unit`](modules.md#unit-1)<`A`\>

#### Defined in

[packages/shader-composer/src/stdlib/math.ts:29](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/math.ts#L29)

___

### RawDepth

▸ **RawDepth**(`uv`, `depthTexture`): [`Unit`](modules.md#unit-1)<``"float"``\> & [`API`](modules.md#api)

Sample a depth texture and return the raw depth value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `uv` | [`Input`](modules.md#input)<``"vec2"``\> | Screen UV |
| `depthTexture` | [`Unit`](modules.md#unit-1)<``"sampler2D"``\> | Depth texture to sample |

#### Returns

[`Unit`](modules.md#unit-1)<``"float"``\> & [`API`](modules.md#api)

Float unit containing the depth as stored in the texture

#### Defined in

[packages/shader-composer/src/stdlib/scene.ts:18](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/scene.ts#L18)

___

### Reflect

▸ **Reflect**<`T`\>(`vector`, `normal`): [`Unit`](modules.md#unit-1)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends ``"float"`` \| ``"vec2"`` \| ``"vec3"`` \| ``"vec4"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `vector` | [`Input`](modules.md#input)<`T`\> |
| `normal` | [`Input`](modules.md#input)<`T`\> |

#### Returns

[`Unit`](modules.md#unit-1)<`T`\>

#### Defined in

[packages/shader-composer/src/stdlib/vectors.ts:49](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/vectors.ts#L49)

___

### Refract

▸ **Refract**<`T`\>(`vector`, `normal`, `eta`): [`Unit`](modules.md#unit-1)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends ``"float"`` \| ``"vec2"`` \| ``"vec3"`` \| ``"vec4"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `vector` | [`Input`](modules.md#input)<`T`\> |
| `normal` | [`Input`](modules.md#input)<`T`\> |
| `eta` | [`Input`](modules.md#input)<``"float"``\> |

#### Returns

[`Unit`](modules.md#unit-1)<`T`\>

#### Defined in

[packages/shader-composer/src/stdlib/vectors.ts:57](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/vectors.ts#L57)

___

### Remap

▸ **Remap**<`T`\>(`value`, `inMin`, `inMax`, `outMin`, `outMax`): [`Unit`](modules.md#unit-1)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends ``"float"`` \| ``"vec2"`` \| ``"vec3"`` \| ``"vec4"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Input`](modules.md#input)<`T`\> |
| `inMin` | [`Input`](modules.md#input)<`T`\> |
| `inMax` | [`Input`](modules.md#input)<`T`\> |
| `outMin` | [`Input`](modules.md#input)<`T`\> |
| `outMax` | [`Input`](modules.md#input)<`T`\> |

#### Returns

[`Unit`](modules.md#unit-1)<`T`\>

#### Defined in

[packages/shader-composer/src/stdlib/math.ts:183](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/math.ts#L183)

___

### Rotate3D

▸ **Rotate3D**(`position`, `axis`, `angle`): [`Unit`](modules.md#unit-1)<``"vec3"``\>

Rotate a vector around the specified axis.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `position` | [`Input`](modules.md#input)<``"vec3"``\> | Vector to rotate. |
| `axis` | [`Input`](modules.md#input)<``"vec3"``\> | The axis to rotate around. |
| `angle` | [`Input`](modules.md#input)<``"float"``\> | The angle (amount) to rotate around the axis. |

#### Returns

[`Unit`](modules.md#unit-1)<``"vec3"``\>

A `vec3` Shader Unit containing the rotated vector.

#### Defined in

[packages/shader-composer/src/stdlib/rotation.ts:33](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/rotation.ts#L33)

___

### RotateX

▸ **RotateX**(`position`, `angle`): [`Unit`](modules.md#unit-1)<``"vec3"``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | [`Input`](modules.md#input)<``"vec3"``\> |
| `angle` | [`Input`](modules.md#input)<``"float"``\> |

#### Returns

[`Unit`](modules.md#unit-1)<``"vec3"``\>

#### Defined in

[packages/shader-composer/src/stdlib/rotation.ts:39](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/rotation.ts#L39)

___

### RotateY

▸ **RotateY**(`position`, `angle`): [`Unit`](modules.md#unit-1)<``"vec3"``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | [`Input`](modules.md#input)<``"vec3"``\> |
| `angle` | [`Input`](modules.md#input)<``"float"``\> |

#### Returns

[`Unit`](modules.md#unit-1)<``"vec3"``\>

#### Defined in

[packages/shader-composer/src/stdlib/rotation.ts:42](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/rotation.ts#L42)

___

### RotateZ

▸ **RotateZ**(`position`, `angle`): [`Unit`](modules.md#unit-1)<``"vec3"``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | [`Input`](modules.md#input)<``"vec3"``\> |
| `angle` | [`Input`](modules.md#input)<``"float"``\> |

#### Returns

[`Unit`](modules.md#unit-1)<``"vec3"``\>

#### Defined in

[packages/shader-composer/src/stdlib/rotation.ts:45](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/rotation.ts#L45)

___

### Rotation3D

▸ **Rotation3D**(`axis`, `angle`): [`Unit`](modules.md#unit-1)<``"mat4"``\> & [`API`](modules.md#api)

Generates a Shader Unit of type `mat4` representing a rotation around a specified
axis, by a specified amount/angle. This unit can then be multiplied with a
`vec3` unit in order to apply the rotation to that vector.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `axis` | [`Input`](modules.md#input)<``"vec3"``\> | Axis to rotate around. |
| `angle` | [`Input`](modules.md#input)<``"float"``\> | The angle (amount) to rotate. |

#### Returns

[`Unit`](modules.md#unit-1)<``"mat4"``\> & [`API`](modules.md#api)

A Shader Unit of type `mat4` representing the rotation matrix.

#### Defined in

[packages/shader-composer/src/stdlib/rotation.ts:16](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/rotation.ts#L16)

___

### Rotation3DX

▸ **Rotation3DX**(`angle`): [`Unit`](modules.md#unit-1)<``"mat3"``\> & [`API`](modules.md#api)

#### Parameters

| Name | Type |
| :------ | :------ |
| `angle` | [`Input`](modules.md#input)<``"float"``\> |

#### Returns

[`Unit`](modules.md#unit-1)<``"mat3"``\> & [`API`](modules.md#api)

#### Defined in

[packages/shader-composer/src/stdlib/rotation.ts:19](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/rotation.ts#L19)

___

### Rotation3DY

▸ **Rotation3DY**(`angle`): [`Unit`](modules.md#unit-1)<``"mat3"``\> & [`API`](modules.md#api)

#### Parameters

| Name | Type |
| :------ | :------ |
| `angle` | [`Input`](modules.md#input)<``"float"``\> |

#### Returns

[`Unit`](modules.md#unit-1)<``"mat3"``\> & [`API`](modules.md#api)

#### Defined in

[packages/shader-composer/src/stdlib/rotation.ts:21](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/rotation.ts#L21)

___

### Rotation3DZ

▸ **Rotation3DZ**(`angle`): [`Unit`](modules.md#unit-1)<``"mat3"``\> & [`API`](modules.md#api)

#### Parameters

| Name | Type |
| :------ | :------ |
| `angle` | [`Input`](modules.md#input)<``"float"``\> |

#### Returns

[`Unit`](modules.md#unit-1)<``"mat3"``\> & [`API`](modules.md#api)

#### Defined in

[packages/shader-composer/src/stdlib/rotation.ts:23](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/rotation.ts#L23)

___

### Round

▸ **Round**<`A`\>(`a`): [`Unit`](modules.md#unit-1)<`A`\>

A Shader Unit that finds the nearest integer to the input value.
It performs the GLSL expression `round(a)`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends ``"float"`` \| ``"vec2"`` \| ``"vec3"`` \| ``"vec4"`` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Input`](modules.md#input)<`A`\> | The input value. |

#### Returns

[`Unit`](modules.md#unit-1)<`A`\>

The rounded value of `a`.

#### Defined in

[packages/shader-composer/src/stdlib/math.ts:29](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/math.ts#L29)

___

### Saturate

▸ **Saturate**(`x`): [`Unit`](modules.md#unit-1)<``"float"``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Input`](modules.md#input)<``"float"``\> |

#### Returns

[`Unit`](modules.md#unit-1)<``"float"``\>

#### Defined in

[packages/shader-composer/src/stdlib/math.ts:134](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/math.ts#L134)

___

### SceneColor

▸ **SceneColor**(`uv`, `texture`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `uv` | [`Input`](modules.md#input)<``"vec2"``\> |
| `texture` | [`Unit`](modules.md#unit-1)<``"sampler2D"``\> |

#### Returns

`Object`

| Name | Type | Description |
| :------ | :------ | :------ |
| `_` | ``"Unit"`` | - |
| `_unitConfig` | [`UnitConfig`](modules.md#unitconfig)<``"vec4"``\> | - |
| `alpha` | [`Unit`](modules.md#unit-1)<``"float"``\> & [`API`](modules.md#api) | The alpha value sampled from the texture. |
| `color` | [`Unit`](modules.md#unit-1)<``"vec3"``\> & { `x`:  ; `y`:  ; `z`:   } | The color value sampled from the texture. |
| `w` | [`Unit`](modules.md#unit-1)<``"float"``\> & [`API`](modules.md#api) | - |
| `x` | [`Unit`](modules.md#unit-1)<``"float"``\> & [`API`](modules.md#api) | - |
| `y` | [`Unit`](modules.md#unit-1)<``"float"``\> & [`API`](modules.md#api) | - |
| `z` | [`Unit`](modules.md#unit-1)<``"float"``\> & [`API`](modules.md#api) | - |

#### Defined in

[packages/shader-composer/src/stdlib/scene.ts:8](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/scene.ts#L8)

___

### ShaderMaterialMaster

▸ **ShaderMaterialMaster**(`__namedParameters?`): [`Unit`](modules.md#unit-1)<``"bool"``\> & [`API`](modules.md#api)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`ShaderMaterialMasterProps`](modules.md#shadermaterialmasterprops) |

#### Returns

[`Unit`](modules.md#unit-1)<``"bool"``\> & [`API`](modules.md#api)

#### Defined in

[packages/shader-composer/src/stdlib/masters.ts:13](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/masters.ts#L13)

___

### Sign

▸ **Sign**<`A`\>(`a`): [`Unit`](modules.md#unit-1)<`A`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends ``"float"`` \| ``"vec2"`` \| ``"vec3"`` \| ``"vec4"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Input`](modules.md#input)<`A`\> |

#### Returns

[`Unit`](modules.md#unit-1)<`A`\>

#### Defined in

[packages/shader-composer/src/stdlib/math.ts:29](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/math.ts#L29)

___

### Sin

▸ **Sin**<`A`\>(`a`): [`Unit`](modules.md#unit-1)<`A`\>

Calculates the sine value of the input value.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends ``"float"`` \| ``"vec2"`` \| ``"vec3"`` \| ``"vec4"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Input`](modules.md#input)<`A`\> |

#### Returns

[`Unit`](modules.md#unit-1)<`A`\>

#### Defined in

[packages/shader-composer/src/stdlib/math.ts:29](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/math.ts#L29)

___

### Smoothstep

▸ **Smoothstep**(`min`, `max`, `v`): [`Unit`](modules.md#unit-1)<``"float"``\> & [`API`](modules.md#api)

#### Parameters

| Name | Type |
| :------ | :------ |
| `min` | [`Input`](modules.md#input)<``"float"``\> |
| `max` | [`Input`](modules.md#input)<``"float"``\> |
| `v` | [`Input`](modules.md#input)<``"float"``\> |

#### Returns

[`Unit`](modules.md#unit-1)<``"float"``\> & [`API`](modules.md#api)

#### Defined in

[packages/shader-composer/src/stdlib/math.ts:172](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/math.ts#L172)

___

### Snippet

▸ **Snippet**(`render`): [`Snippet`](modules.md#snippet-1)

#### Parameters

| Name | Type |
| :------ | :------ |
| `render` | (`name`: `string`) => [`Expression`](modules.md#expression) |

#### Returns

[`Snippet`](modules.md#snippet-1)

#### Defined in

[packages/shader-composer/src/snippets.ts:10](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/snippets.ts#L10)

___

### SplitVector2

▸ **SplitVector2**(`vector`): readonly [[`Unit`](modules.md#unit-1)<``"float"``\> & [`API`](modules.md#api), [`Unit`](modules.md#unit-1)<``"float"``\> & [`API`](modules.md#api)]

#### Parameters

| Name | Type |
| :------ | :------ |
| `vector` | [`Input`](modules.md#input)<``"vec2"``\> |

#### Returns

readonly [[`Unit`](modules.md#unit-1)<``"float"``\> & [`API`](modules.md#api), [`Unit`](modules.md#unit-1)<``"float"``\> & [`API`](modules.md#api)]

#### Defined in

[packages/shader-composer/src/stdlib/vectors.ts:6](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/vectors.ts#L6)

___

### SplitVector3

▸ **SplitVector3**(`vector`): readonly [[`Unit`](modules.md#unit-1)<``"float"``\> & [`API`](modules.md#api), [`Unit`](modules.md#unit-1)<``"float"``\> & [`API`](modules.md#api), [`Unit`](modules.md#unit-1)<``"float"``\> & [`API`](modules.md#api)]

#### Parameters

| Name | Type |
| :------ | :------ |
| `vector` | [`Input`](modules.md#input)<``"vec3"``\> |

#### Returns

readonly [[`Unit`](modules.md#unit-1)<``"float"``\> & [`API`](modules.md#api), [`Unit`](modules.md#unit-1)<``"float"``\> & [`API`](modules.md#api), [`Unit`](modules.md#unit-1)<``"float"``\> & [`API`](modules.md#api)]

#### Defined in

[packages/shader-composer/src/stdlib/vectors.ts:9](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/vectors.ts#L9)

___

### SplitVector4

▸ **SplitVector4**(`vector`): readonly [[`Unit`](modules.md#unit-1)<``"float"``\> & [`API`](modules.md#api), [`Unit`](modules.md#unit-1)<``"float"``\> & [`API`](modules.md#api), [`Unit`](modules.md#unit-1)<``"float"``\> & [`API`](modules.md#api), [`Unit`](modules.md#unit-1)<``"float"``\> & [`API`](modules.md#api)]

#### Parameters

| Name | Type |
| :------ | :------ |
| `vector` | [`Input`](modules.md#input)<``"vec4"``\> |

#### Returns

readonly [[`Unit`](modules.md#unit-1)<``"float"``\> & [`API`](modules.md#api), [`Unit`](modules.md#unit-1)<``"float"``\> & [`API`](modules.md#api), [`Unit`](modules.md#unit-1)<``"float"``\> & [`API`](modules.md#api), [`Unit`](modules.md#unit-1)<``"float"``\> & [`API`](modules.md#api)]

#### Defined in

[packages/shader-composer/src/stdlib/vectors.ts:12](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/vectors.ts#L12)

___

### Sqrt

▸ **Sqrt**<`A`\>(`a`): [`Unit`](modules.md#unit-1)<`A`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends ``"float"`` \| ``"vec2"`` \| ``"vec3"`` \| ``"vec4"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Input`](modules.md#input)<`A`\> |

#### Returns

[`Unit`](modules.md#unit-1)<`A`\>

#### Defined in

[packages/shader-composer/src/stdlib/math.ts:29](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/math.ts#L29)

___

### Step

▸ **Step**(`edge`, `v`): [`Unit`](modules.md#unit-1)<``"float"``\> & [`API`](modules.md#api)

#### Parameters

| Name | Type |
| :------ | :------ |
| `edge` | [`Input`](modules.md#input)<``"float"``\> |
| `v` | [`Input`](modules.md#input)<``"float"``\> |

#### Returns

[`Unit`](modules.md#unit-1)<``"float"``\> & [`API`](modules.md#api)

#### Defined in

[packages/shader-composer/src/stdlib/math.ts:169](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/math.ts#L169)

___

### Sub

▸ **Sub**<`A`, `B`\>(`a`, `b`): [`Unit`](modules.md#unit-1)<`A`\>

A Shader Unit that subtracts two values and returns the result.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`GLSLType`](modules.md#glsltype) |
| `B` | extends [`GLSLType`](modules.md#glsltype) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Input`](modules.md#input)<`A`\> |
| `b` | [`Input`](modules.md#input)<`B`\> |

#### Returns

[`Unit`](modules.md#unit-1)<`A`\>

#### Defined in

[packages/shader-composer/src/stdlib/math.ts:10](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/math.ts#L10)

___

### Tan

▸ **Tan**<`A`\>(`a`): [`Unit`](modules.md#unit-1)<`A`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends ``"float"`` \| ``"vec2"`` \| ``"vec3"`` \| ``"vec4"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Input`](modules.md#input)<`A`\> |

#### Returns

[`Unit`](modules.md#unit-1)<`A`\>

#### Defined in

[packages/shader-composer/src/stdlib/math.ts:29](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/math.ts#L29)

___

### Tangent

▸ **Tangent**(`v`): [`Unit`](modules.md#unit-1)<``"vec3"``\> & { `x`:  ; `y`:  ; `z`:   }

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Input`](modules.md#input)<``"vec3"``\> |

#### Returns

[`Unit`](modules.md#unit-1)<``"vec3"``\> & { `x`:  ; `y`:  ; `z`:   }

#### Defined in

[packages/shader-composer/src/stdlib/vectors.ts:36](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/vectors.ts#L36)

___

### Texture2D

▸ **Texture2D**(`sampler2D`, `xy`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sampler2D` | [`Unit`](modules.md#unit-1)<``"sampler2D"``\> |
| `xy` | [`Input`](modules.md#input)<``"vec2"``\> |

#### Returns

`Object`

| Name | Type | Description |
| :------ | :------ | :------ |
| `_` | ``"Unit"`` | - |
| `_unitConfig` | [`UnitConfig`](modules.md#unitconfig)<``"vec4"``\> | - |
| `alpha` | [`Unit`](modules.md#unit-1)<``"float"``\> & [`API`](modules.md#api) | The alpha value sampled from the texture. |
| `color` | [`Unit`](modules.md#unit-1)<``"vec3"``\> & { `x`:  ; `y`:  ; `z`:   } | The color value sampled from the texture. |
| `w` | [`Unit`](modules.md#unit-1)<``"float"``\> & [`API`](modules.md#api) | - |
| `x` | [`Unit`](modules.md#unit-1)<``"float"``\> & [`API`](modules.md#api) | - |
| `y` | [`Unit`](modules.md#unit-1)<``"float"``\> & [`API`](modules.md#api) | - |
| `z` | [`Unit`](modules.md#unit-1)<``"float"``\> & [`API`](modules.md#api) | - |

#### Defined in

[packages/shader-composer/src/stdlib/textures.ts:5](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/textures.ts#L5)

___

### TilingUV

▸ **TilingUV**(`uv?`, `tiling?`, `offset?`): [`Unit`](modules.md#unit-1)<``"vec2"``\> & { `x`:  ; `y`:   }

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `uv` | [`Input`](modules.md#input)<``"vec2"``\> | `UV` |
| `tiling` | [`Input`](modules.md#input)<``"vec2"``\> | `undefined` |
| `offset` | [`Input`](modules.md#input)<``"vec2"``\> | `undefined` |

#### Returns

[`Unit`](modules.md#unit-1)<``"vec2"``\> & { `x`:  ; `y`:   }

#### Defined in

[packages/shader-composer/src/stdlib/geometry.ts:85](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/geometry.ts#L85)

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

[packages/shader-composer/src/stdlib/uniforms.ts:42](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/uniforms.ts#L42)

___

### Trunc

▸ **Trunc**<`A`\>(`a`): [`Unit`](modules.md#unit-1)<`A`\>

A Shader Unit that finds the nearest integer less than or equal to the input value.
It is equivalent to the GLSL expression `trunc(a)`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends ``"float"`` \| ``"vec2"`` \| ``"vec3"`` \| ``"vec4"`` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Input`](modules.md#input)<`A`\> | The input value. |

#### Returns

[`Unit`](modules.md#unit-1)<`A`\>

The truncated value of `a`.

#### Defined in

[packages/shader-composer/src/stdlib/math.ts:29](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/math.ts#L29)

___

### UniformUnit

▸ **UniformUnit**<`T`, `J`\>(`type`, `initialValue`, `extras?`): [`UniformUnit`](modules.md#uniformunit-1)<`T`, `J`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`GLSLType`](modules.md#glsltype) |
| `J` | extends `number` \| `boolean` \| `Vector2` \| `Vector3` \| `Color` \| `Vector4` \| `Matrix3` \| `Matrix4` \| `Texture` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `T` |
| `initialValue` | `J` |
| `extras?` | `Partial`<[`UnitConfig`](modules.md#unitconfig)<`T`\>\> |

#### Returns

[`UniformUnit`](modules.md#uniformunit-1)<`T`, `J`\>

#### Defined in

[packages/shader-composer/src/stdlib/uniforms.ts:13](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/uniforms.ts#L13)

___

### Unit

▸ **Unit**<`T`\>(`type`, `value`, `_config?`): [`Unit`](modules.md#unit-1)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`GLSLType`](modules.md#glsltype) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `T` |
| `value` | `undefined` \| [`Input`](modules.md#input)<`T`\> |
| `_config?` | `Partial`<[`UnitConfig`](modules.md#unitconfig)<`T`\>\> |

#### Returns

[`Unit`](modules.md#unit-1)<`T`\>

#### Defined in

[packages/shader-composer/src/units.ts:136](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/units.ts#L136)

___

### Vec2

▸ **Vec2**(`v`, `extras?`): [`Unit`](modules.md#unit-1)<``"vec2"``\> & { `x`:  ; `y`:   }

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Input`](modules.md#input)<``"vec2"``\> |
| `extras?` | `Partial`<[`UnitConfig`](modules.md#unitconfig)<``"vec2"``\>\> |

#### Returns

[`Unit`](modules.md#unit-1)<``"vec2"``\> & { `x`:  ; `y`:   }

#### Defined in

[packages/shader-composer/src/stdlib/values.ts:7](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/values.ts#L7)

___

### Vec3

▸ **Vec3**(`v`, `extras?`): [`Unit`](modules.md#unit-1)<``"vec3"``\> & { `x`:  ; `y`:  ; `z`:   }

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Input`](modules.md#input)<``"vec3"``\> |
| `extras?` | `Partial`<[`UnitConfig`](modules.md#unitconfig)<``"vec3"``\>\> |

#### Returns

[`Unit`](modules.md#unit-1)<``"vec3"``\> & { `x`:  ; `y`:  ; `z`:   }

#### Defined in

[packages/shader-composer/src/stdlib/values.ts:7](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/values.ts#L7)

___

### Vec4

▸ **Vec4**(`v`, `extras?`): [`Unit`](modules.md#unit-1)<``"vec4"``\> & { `w`:  ; `x`:  ; `y`:  ; `z`:   }

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Input`](modules.md#input)<``"vec4"``\> |
| `extras?` | `Partial`<[`UnitConfig`](modules.md#unitconfig)<``"vec4"``\>\> |

#### Returns

[`Unit`](modules.md#unit-1)<``"vec4"``\> & { `w`:  ; `x`:  ; `y`:  ; `z`:   }

#### Defined in

[packages/shader-composer/src/stdlib/values.ts:7](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/values.ts#L7)

___

### add

▸ **add**<`B`\>(`b`): <A\>(`a`: [`Input`](modules.md#input)<`A`\>) => [`Unit`](modules.md#unit-1)<`A`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `B` | extends [`GLSLType`](modules.md#glsltype) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`Input`](modules.md#input)<`B`\> |

#### Returns

`fn`

▸ <`A`\>(`a`): [`Unit`](modules.md#unit-1)<`A`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`GLSLType`](modules.md#glsltype) |

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Input`](modules.md#input)<`A`\> |

##### Returns

[`Unit`](modules.md#unit-1)<`A`\>

#### Defined in

[packages/shader-composer/src/pipes/index.ts:8](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/pipes/index.ts#L8)

___

### collectFromTree

▸ **collectFromTree**(`root`, `program`, `check?`): `any`[]

Walks the tree and returns all items found where the given callback function
returns true.

#### Parameters

| Name | Type |
| :------ | :------ |
| `root` | `any` |
| `program` | [`Program`](modules.md#program) \| ``"any"`` |
| `check?` | (`item`: `any`) => `boolean` |

#### Returns

`any`[]

#### Defined in

[packages/shader-composer/src/tree.ts:38](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/tree.ts#L38)

___

### compileShader

▸ **compileShader**(`root`): readonly [{ `fragmentShader`: `string` ; `uniforms`: { `[k: string]`: `T`;  } ; `vertexShader`: `string`  }, { `dispose`: () => `void` ; `update`: (`dt`: `number`, `camera`: `Camera`, `scene`: `Scene`, `gl`: `WebGLRenderer`) => `void`  }]

#### Parameters

| Name | Type |
| :------ | :------ |
| `root` | [`Unit`](modules.md#unit-1)<`any`\> |

#### Returns

readonly [{ `fragmentShader`: `string` ; `uniforms`: { `[k: string]`: `T`;  } ; `vertexShader`: `string`  }, { `dispose`: () => `void` ; `update`: (`dt`: `number`, `camera`: `Camera`, `scene`: `Scene`, `gl`: `WebGLRenderer`) => `void`  }]

#### Defined in

[packages/shader-composer/src/compiler.ts:158](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/compiler.ts#L158)

___

### div

▸ **div**<`B`\>(`b`): <A\>(`a`: [`Input`](modules.md#input)<`A`\>) => [`Unit`](modules.md#unit-1)<`A`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `B` | extends [`GLSLType`](modules.md#glsltype) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`Input`](modules.md#input)<`B`\> |

#### Returns

`fn`

▸ <`A`\>(`a`): [`Unit`](modules.md#unit-1)<`A`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`GLSLType`](modules.md#glsltype) |

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Input`](modules.md#input)<`A`\> |

##### Returns

[`Unit`](modules.md#unit-1)<`A`\>

#### Defined in

[packages/shader-composer/src/pipes/index.ts:20](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/pipes/index.ts#L20)

___

### flow

▸ **flow**<`A`, `B`\>(`ab`): (...`a`: `A`) => `B`

Performs left-to-right function composition. The first argument may have any arity, the remaining arguments must be unary.

See also [`pipe`](#pipe).

**`Example`**

```ts
import { flow } from 'fp-ts/function'

const len = (s: string): number => s.length
const double = (n: number): number => n * 2

const f = flow(len, double)

assert.strictEqual(f('aaa'), 6)
```

**`Since`**

2.0.0

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends readonly `unknown`[] |
| `B` | `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ab` | (...`a`: `A`) => `B` |

#### Returns

`fn`

▸ (...`a`): `B`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...a` | `A` |

##### Returns

`B`

#### Defined in

node_modules/fp-ts/lib/function.d.ts:161

▸ **flow**<`A`, `B`, `C`\>(`ab`, `bc`): (...`a`: `A`) => `C`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends readonly `unknown`[] |
| `B` | `B` |
| `C` | `C` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ab` | (...`a`: `A`) => `B` |
| `bc` | (`b`: `B`) => `C` |

#### Returns

`fn`

▸ (...`a`): `C`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...a` | `A` |

##### Returns

`C`

#### Defined in

node_modules/fp-ts/lib/function.d.ts:162

▸ **flow**<`A`, `B`, `C`, `D`\>(`ab`, `bc`, `cd`): (...`a`: `A`) => `D`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends readonly `unknown`[] |
| `B` | `B` |
| `C` | `C` |
| `D` | `D` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ab` | (...`a`: `A`) => `B` |
| `bc` | (`b`: `B`) => `C` |
| `cd` | (`c`: `C`) => `D` |

#### Returns

`fn`

▸ (...`a`): `D`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...a` | `A` |

##### Returns

`D`

#### Defined in

node_modules/fp-ts/lib/function.d.ts:166

▸ **flow**<`A`, `B`, `C`, `D`, `E`\>(`ab`, `bc`, `cd`, `de`): (...`a`: `A`) => `E`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends readonly `unknown`[] |
| `B` | `B` |
| `C` | `C` |
| `D` | `D` |
| `E` | `E` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ab` | (...`a`: `A`) => `B` |
| `bc` | (`b`: `B`) => `C` |
| `cd` | (`c`: `C`) => `D` |
| `de` | (`d`: `D`) => `E` |

#### Returns

`fn`

▸ (...`a`): `E`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...a` | `A` |

##### Returns

`E`

#### Defined in

node_modules/fp-ts/lib/function.d.ts:171

▸ **flow**<`A`, `B`, `C`, `D`, `E`, `F`\>(`ab`, `bc`, `cd`, `de`, `ef`): (...`a`: `A`) => `F`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends readonly `unknown`[] |
| `B` | `B` |
| `C` | `C` |
| `D` | `D` |
| `E` | `E` |
| `F` | `F` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ab` | (...`a`: `A`) => `B` |
| `bc` | (`b`: `B`) => `C` |
| `cd` | (`c`: `C`) => `D` |
| `de` | (`d`: `D`) => `E` |
| `ef` | (`e`: `E`) => `F` |

#### Returns

`fn`

▸ (...`a`): `F`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...a` | `A` |

##### Returns

`F`

#### Defined in

node_modules/fp-ts/lib/function.d.ts:177

▸ **flow**<`A`, `B`, `C`, `D`, `E`, `F`, `G`\>(`ab`, `bc`, `cd`, `de`, `ef`, `fg`): (...`a`: `A`) => `G`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends readonly `unknown`[] |
| `B` | `B` |
| `C` | `C` |
| `D` | `D` |
| `E` | `E` |
| `F` | `F` |
| `G` | `G` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ab` | (...`a`: `A`) => `B` |
| `bc` | (`b`: `B`) => `C` |
| `cd` | (`c`: `C`) => `D` |
| `de` | (`d`: `D`) => `E` |
| `ef` | (`e`: `E`) => `F` |
| `fg` | (`f`: `F`) => `G` |

#### Returns

`fn`

▸ (...`a`): `G`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...a` | `A` |

##### Returns

`G`

#### Defined in

node_modules/fp-ts/lib/function.d.ts:184

▸ **flow**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`\>(`ab`, `bc`, `cd`, `de`, `ef`, `fg`, `gh`): (...`a`: `A`) => `H`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends readonly `unknown`[] |
| `B` | `B` |
| `C` | `C` |
| `D` | `D` |
| `E` | `E` |
| `F` | `F` |
| `G` | `G` |
| `H` | `H` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ab` | (...`a`: `A`) => `B` |
| `bc` | (`b`: `B`) => `C` |
| `cd` | (`c`: `C`) => `D` |
| `de` | (`d`: `D`) => `E` |
| `ef` | (`e`: `E`) => `F` |
| `fg` | (`f`: `F`) => `G` |
| `gh` | (`g`: `G`) => `H` |

#### Returns

`fn`

▸ (...`a`): `H`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...a` | `A` |

##### Returns

`H`

#### Defined in

node_modules/fp-ts/lib/function.d.ts:192

▸ **flow**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`\>(`ab`, `bc`, `cd`, `de`, `ef`, `fg`, `gh`, `hi`): (...`a`: `A`) => `I`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends readonly `unknown`[] |
| `B` | `B` |
| `C` | `C` |
| `D` | `D` |
| `E` | `E` |
| `F` | `F` |
| `G` | `G` |
| `H` | `H` |
| `I` | `I` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ab` | (...`a`: `A`) => `B` |
| `bc` | (`b`: `B`) => `C` |
| `cd` | (`c`: `C`) => `D` |
| `de` | (`d`: `D`) => `E` |
| `ef` | (`e`: `E`) => `F` |
| `fg` | (`f`: `F`) => `G` |
| `gh` | (`g`: `G`) => `H` |
| `hi` | (`h`: `H`) => `I` |

#### Returns

`fn`

▸ (...`a`): `I`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...a` | `A` |

##### Returns

`I`

#### Defined in

node_modules/fp-ts/lib/function.d.ts:201

▸ **flow**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`\>(`ab`, `bc`, `cd`, `de`, `ef`, `fg`, `gh`, `hi`, `ij`): (...`a`: `A`) => `J`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends readonly `unknown`[] |
| `B` | `B` |
| `C` | `C` |
| `D` | `D` |
| `E` | `E` |
| `F` | `F` |
| `G` | `G` |
| `H` | `H` |
| `I` | `I` |
| `J` | `J` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ab` | (...`a`: `A`) => `B` |
| `bc` | (`b`: `B`) => `C` |
| `cd` | (`c`: `C`) => `D` |
| `de` | (`d`: `D`) => `E` |
| `ef` | (`e`: `E`) => `F` |
| `fg` | (`f`: `F`) => `G` |
| `gh` | (`g`: `G`) => `H` |
| `hi` | (`h`: `H`) => `I` |
| `ij` | (`i`: `I`) => `J` |

#### Returns

`fn`

▸ (...`a`): `J`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...a` | `A` |

##### Returns

`J`

#### Defined in

node_modules/fp-ts/lib/function.d.ts:211

___

### getDependencies

▸ **getDependencies**(`item`, `program`): `any`[]

Given a unit, expression o snippet, returns that item's dependencies.

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `any` |
| `program` | [`Program`](modules.md#program) \| ``"any"`` |

#### Returns

`any`[]

#### Defined in

[packages/shader-composer/src/tree.ts:60](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/tree.ts#L60)

___

### glsl

▸ **glsl**(`strings`, ...`values`): [`Expression`](modules.md#expression)

#### Parameters

| Name | Type |
| :------ | :------ |
| `strings` | `TemplateStringsArray` |
| `...values` | `any`[] |

#### Returns

[`Expression`](modules.md#expression)

#### Defined in

[packages/shader-composer/src/expressions.ts:12](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/expressions.ts#L12)

___

### glslType

▸ **glslType**<`T`\>(`value`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`GLSLType`](modules.md#glsltype) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Input`](modules.md#input)<`T`\> |

#### Returns

`T`

#### Defined in

[packages/shader-composer/src/glslType.ts:4](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/glslType.ts#L4)

___

### injectAPI

▸ **injectAPI**<`U`, `A`\>(`unit`, `factory`): `U` & `A`

Given a unit and an API factory function, pass the unit to the factory
function and inject its return value into the unit (as to not break
object references.)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends [`Unit`](modules.md#unit-1)<`any`\> |
| `A` | extends [`API`](modules.md#api) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `unit` | `U` |
| `factory` | [`APIFactory`](modules.md#apifactory)<`U`, `A`\> |

#### Returns

`U` & `A`

#### Defined in

[packages/shader-composer/src/units.ts:176](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/units.ts#L176)

___

### inverseLerp

▸ **inverseLerp**<`T`\>(`a`, `b`, `c`): [`Expression`](modules.md#expression)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`GLSLType`](modules.md#glsltype) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Input`](modules.md#input)<`T`\> |
| `b` | [`Input`](modules.md#input)<`T`\> |
| `c` | [`Input`](modules.md#input)<`T`\> |

#### Returns

[`Expression`](modules.md#expression)

#### Defined in

[packages/shader-composer/src/stdlib/math.ts:161](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/math.ts#L161)

___

### isExpression

▸ **isExpression**(`v`): v is Expression

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `any` |

#### Returns

v is Expression

#### Defined in

[packages/shader-composer/src/expressions.ts:32](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/expressions.ts#L32)

___

### isSnippet

▸ **isSnippet**(`x`): x is Snippet

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `any` |

#### Returns

x is Snippet

#### Defined in

[packages/shader-composer/src/snippets.ts:27](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/snippets.ts#L27)

___

### isUnit

▸ **isUnit**(`value`): value is Unit<any\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is Unit<any\>

#### Defined in

[packages/shader-composer/src/units.ts:158](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/units.ts#L158)

___

### isUnitInProgram

▸ **isUnitInProgram**(`unit`, `program`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `unit` | [`Unit`](modules.md#unit-1)<`any`\> |
| `program` | [`Program`](modules.md#program) |

#### Returns

`boolean`

#### Defined in

[packages/shader-composer/src/units.ts:162](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/units.ts#L162)

___

### localToViewSpace

▸ **localToViewSpace**(`v`): [`Expression`](modules.md#expression)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Input`](modules.md#input)<``"vec3"``\> |

#### Returns

[`Expression`](modules.md#expression)

#### Defined in

[packages/shader-composer/src/stdlib/spaces.ts:8](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/spaces.ts#L8)

___

### localToWorldSpace

▸ **localToWorldSpace**(`v`): [`Expression`](modules.md#expression)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Input`](modules.md#input)<``"vec3"``\> |

#### Returns

[`Expression`](modules.md#expression)

#### Defined in

[packages/shader-composer/src/stdlib/spaces.ts:12](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/spaces.ts#L12)

___

### mat3

▸ **mat3**(`i`): [`Unit`](modules.md#unit-1)<``"mat3"``\> & [`API`](modules.md#api)

Cast the given value to a mat3.

#### Parameters

| Name | Type |
| :------ | :------ |
| `i` | [`Input`](modules.md#input)<``"mat3"`` \| ``"mat4"``\> |

#### Returns

[`Unit`](modules.md#unit-1)<``"mat3"``\> & [`API`](modules.md#api)

#### Defined in

[packages/shader-composer/src/stdlib/values.ts:72](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/values.ts#L72)

___

### mat4

▸ **mat4**(`i`): [`Unit`](modules.md#unit-1)<``"mat4"``\> & [`API`](modules.md#api)

Cast the given value to a mat4.

#### Parameters

| Name | Type |
| :------ | :------ |
| `i` | [`Input`](modules.md#input)<``"mat3"`` \| ``"mat4"``\> |

#### Returns

[`Unit`](modules.md#unit-1)<``"mat4"``\> & [`API`](modules.md#api)

#### Defined in

[packages/shader-composer/src/stdlib/values.ts:75](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/values.ts#L75)

___

### mix

▸ **mix**<`T`\>(`b`, `f`): (`a`: [`Input`](modules.md#input)<`T`\>) => [`Unit`](modules.md#unit-1)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`GLSLType`](modules.md#glsltype) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`Input`](modules.md#input)<`T`\> |
| `f` | [`Input`](modules.md#input)<``"float"`` \| `T`\> |

#### Returns

`fn`

▸ (`a`): [`Unit`](modules.md#unit-1)<`T`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Input`](modules.md#input)<`T`\> |

##### Returns

[`Unit`](modules.md#unit-1)<`T`\>

#### Defined in

[packages/shader-composer/src/pipes/index.ts:4](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/pipes/index.ts#L4)

___

### mul

▸ **mul**<`B`\>(`b`): <A\>(`a`: [`Input`](modules.md#input)<`A`\>) => [`Unit`](modules.md#unit-1)<`A`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `B` | extends [`GLSLType`](modules.md#glsltype) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`Input`](modules.md#input)<`B`\> |

#### Returns

`fn`

▸ <`A`\>(`a`): [`Unit`](modules.md#unit-1)<`A`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`GLSLType`](modules.md#glsltype) |

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Input`](modules.md#input)<`A`\> |

##### Returns

[`Unit`](modules.md#unit-1)<`A`\>

#### Defined in

[packages/shader-composer/src/pipes/index.ts:16](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/pipes/index.ts#L16)

___

### orthogonal

▸ **orthogonal**(`v`): [`Expression`](modules.md#expression)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Input`](modules.md#input)<``"vec3"``\> |

#### Returns

[`Expression`](modules.md#expression)

#### Defined in

[packages/shader-composer/src/stdlib/vectors.ts:20](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/vectors.ts#L20)

___

### pipe

▸ **pipe**<`A`\>(`a`): `A`

Pipes the value of an expression into a pipeline of functions.

See also [`flow`](#flow).

**`Example`**

```ts
import { pipe } from 'fp-ts/function'

const len = (s: string): number => s.length
const double = (n: number): number => n * 2

// without pipe
assert.strictEqual(double(len('aaa')), 6)

// with pipe
assert.strictEqual(pipe('aaa', len, double), 6)
```

**`Since`**

2.6.3

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A` |

#### Returns

`A`

#### Defined in

node_modules/fp-ts/lib/function.d.ts:276

▸ **pipe**<`A`, `B`\>(`a`, `ab`): `B`

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A` |
| `ab` | (`a`: `A`) => `B` |

#### Returns

`B`

#### Defined in

node_modules/fp-ts/lib/function.d.ts:277

▸ **pipe**<`A`, `B`, `C`\>(`a`, `ab`, `bc`): `C`

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A` |
| `ab` | (`a`: `A`) => `B` |
| `bc` | (`b`: `B`) => `C` |

#### Returns

`C`

#### Defined in

node_modules/fp-ts/lib/function.d.ts:278

▸ **pipe**<`A`, `B`, `C`, `D`\>(`a`, `ab`, `bc`, `cd`): `D`

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |
| `D` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A` |
| `ab` | (`a`: `A`) => `B` |
| `bc` | (`b`: `B`) => `C` |
| `cd` | (`c`: `C`) => `D` |

#### Returns

`D`

#### Defined in

node_modules/fp-ts/lib/function.d.ts:279

▸ **pipe**<`A`, `B`, `C`, `D`, `E`\>(`a`, `ab`, `bc`, `cd`, `de`): `E`

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A` |
| `ab` | (`a`: `A`) => `B` |
| `bc` | (`b`: `B`) => `C` |
| `cd` | (`c`: `C`) => `D` |
| `de` | (`d`: `D`) => `E` |

#### Returns

`E`

#### Defined in

node_modules/fp-ts/lib/function.d.ts:280

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`\>(`a`, `ab`, `bc`, `cd`, `de`, `ef`): `F`

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A` |
| `ab` | (`a`: `A`) => `B` |
| `bc` | (`b`: `B`) => `C` |
| `cd` | (`c`: `C`) => `D` |
| `de` | (`d`: `D`) => `E` |
| `ef` | (`e`: `E`) => `F` |

#### Returns

`F`

#### Defined in

node_modules/fp-ts/lib/function.d.ts:281

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`\>(`a`, `ab`, `bc`, `cd`, `de`, `ef`, `fg`): `G`

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |
| `G` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A` |
| `ab` | (`a`: `A`) => `B` |
| `bc` | (`b`: `B`) => `C` |
| `cd` | (`c`: `C`) => `D` |
| `de` | (`d`: `D`) => `E` |
| `ef` | (`e`: `E`) => `F` |
| `fg` | (`f`: `F`) => `G` |

#### Returns

`G`

#### Defined in

node_modules/fp-ts/lib/function.d.ts:289

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`\>(`a`, `ab`, `bc`, `cd`, `de`, `ef`, `fg`, `gh`): `H`

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |
| `G` |
| `H` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A` |
| `ab` | (`a`: `A`) => `B` |
| `bc` | (`b`: `B`) => `C` |
| `cd` | (`c`: `C`) => `D` |
| `de` | (`d`: `D`) => `E` |
| `ef` | (`e`: `E`) => `F` |
| `fg` | (`f`: `F`) => `G` |
| `gh` | (`g`: `G`) => `H` |

#### Returns

`H`

#### Defined in

node_modules/fp-ts/lib/function.d.ts:298

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`\>(`a`, `ab`, `bc`, `cd`, `de`, `ef`, `fg`, `gh`, `hi`): `I`

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |
| `G` |
| `H` |
| `I` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A` |
| `ab` | (`a`: `A`) => `B` |
| `bc` | (`b`: `B`) => `C` |
| `cd` | (`c`: `C`) => `D` |
| `de` | (`d`: `D`) => `E` |
| `ef` | (`e`: `E`) => `F` |
| `fg` | (`f`: `F`) => `G` |
| `gh` | (`g`: `G`) => `H` |
| `hi` | (`h`: `H`) => `I` |

#### Returns

`I`

#### Defined in

node_modules/fp-ts/lib/function.d.ts:308

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`\>(`a`, `ab`, `bc`, `cd`, `de`, `ef`, `fg`, `gh`, `hi`, `ij`): `J`

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |
| `G` |
| `H` |
| `I` |
| `J` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A` |
| `ab` | (`a`: `A`) => `B` |
| `bc` | (`b`: `B`) => `C` |
| `cd` | (`c`: `C`) => `D` |
| `de` | (`d`: `D`) => `E` |
| `ef` | (`e`: `E`) => `F` |
| `fg` | (`f`: `F`) => `G` |
| `gh` | (`g`: `G`) => `H` |
| `hi` | (`h`: `H`) => `I` |
| `ij` | (`i`: `I`) => `J` |

#### Returns

`J`

#### Defined in

node_modules/fp-ts/lib/function.d.ts:319

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`\>(`a`, `ab`, `bc`, `cd`, `de`, `ef`, `fg`, `gh`, `hi`, `ij`, `jk`): `K`

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |
| `G` |
| `H` |
| `I` |
| `J` |
| `K` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A` |
| `ab` | (`a`: `A`) => `B` |
| `bc` | (`b`: `B`) => `C` |
| `cd` | (`c`: `C`) => `D` |
| `de` | (`d`: `D`) => `E` |
| `ef` | (`e`: `E`) => `F` |
| `fg` | (`f`: `F`) => `G` |
| `gh` | (`g`: `G`) => `H` |
| `hi` | (`h`: `H`) => `I` |
| `ij` | (`i`: `I`) => `J` |
| `jk` | (`j`: `J`) => `K` |

#### Returns

`K`

#### Defined in

node_modules/fp-ts/lib/function.d.ts:331

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`\>(`a`, `ab`, `bc`, `cd`, `de`, `ef`, `fg`, `gh`, `hi`, `ij`, `jk`, `kl`): `L`

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |
| `G` |
| `H` |
| `I` |
| `J` |
| `K` |
| `L` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A` |
| `ab` | (`a`: `A`) => `B` |
| `bc` | (`b`: `B`) => `C` |
| `cd` | (`c`: `C`) => `D` |
| `de` | (`d`: `D`) => `E` |
| `ef` | (`e`: `E`) => `F` |
| `fg` | (`f`: `F`) => `G` |
| `gh` | (`g`: `G`) => `H` |
| `hi` | (`h`: `H`) => `I` |
| `ij` | (`i`: `I`) => `J` |
| `jk` | (`j`: `J`) => `K` |
| `kl` | (`k`: `K`) => `L` |

#### Returns

`L`

#### Defined in

node_modules/fp-ts/lib/function.d.ts:344

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`\>(`a`, `ab`, `bc`, `cd`, `de`, `ef`, `fg`, `gh`, `hi`, `ij`, `jk`, `kl`, `lm`): `M`

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |
| `G` |
| `H` |
| `I` |
| `J` |
| `K` |
| `L` |
| `M` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A` |
| `ab` | (`a`: `A`) => `B` |
| `bc` | (`b`: `B`) => `C` |
| `cd` | (`c`: `C`) => `D` |
| `de` | (`d`: `D`) => `E` |
| `ef` | (`e`: `E`) => `F` |
| `fg` | (`f`: `F`) => `G` |
| `gh` | (`g`: `G`) => `H` |
| `hi` | (`h`: `H`) => `I` |
| `ij` | (`i`: `I`) => `J` |
| `jk` | (`j`: `J`) => `K` |
| `kl` | (`k`: `K`) => `L` |
| `lm` | (`l`: `L`) => `M` |

#### Returns

`M`

#### Defined in

node_modules/fp-ts/lib/function.d.ts:358

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`\>(`a`, `ab`, `bc`, `cd`, `de`, `ef`, `fg`, `gh`, `hi`, `ij`, `jk`, `kl`, `lm`, `mn`): `N`

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |
| `G` |
| `H` |
| `I` |
| `J` |
| `K` |
| `L` |
| `M` |
| `N` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A` |
| `ab` | (`a`: `A`) => `B` |
| `bc` | (`b`: `B`) => `C` |
| `cd` | (`c`: `C`) => `D` |
| `de` | (`d`: `D`) => `E` |
| `ef` | (`e`: `E`) => `F` |
| `fg` | (`f`: `F`) => `G` |
| `gh` | (`g`: `G`) => `H` |
| `hi` | (`h`: `H`) => `I` |
| `ij` | (`i`: `I`) => `J` |
| `jk` | (`j`: `J`) => `K` |
| `kl` | (`k`: `K`) => `L` |
| `lm` | (`l`: `L`) => `M` |
| `mn` | (`m`: `M`) => `N` |

#### Returns

`N`

#### Defined in

node_modules/fp-ts/lib/function.d.ts:373

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`\>(`a`, `ab`, `bc`, `cd`, `de`, `ef`, `fg`, `gh`, `hi`, `ij`, `jk`, `kl`, `lm`, `mn`, `no`): `O`

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |
| `G` |
| `H` |
| `I` |
| `J` |
| `K` |
| `L` |
| `M` |
| `N` |
| `O` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A` |
| `ab` | (`a`: `A`) => `B` |
| `bc` | (`b`: `B`) => `C` |
| `cd` | (`c`: `C`) => `D` |
| `de` | (`d`: `D`) => `E` |
| `ef` | (`e`: `E`) => `F` |
| `fg` | (`f`: `F`) => `G` |
| `gh` | (`g`: `G`) => `H` |
| `hi` | (`h`: `H`) => `I` |
| `ij` | (`i`: `I`) => `J` |
| `jk` | (`j`: `J`) => `K` |
| `kl` | (`k`: `K`) => `L` |
| `lm` | (`l`: `L`) => `M` |
| `mn` | (`m`: `M`) => `N` |
| `no` | (`n`: `N`) => `O` |

#### Returns

`O`

#### Defined in

node_modules/fp-ts/lib/function.d.ts:389

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`\>(`a`, `ab`, `bc`, `cd`, `de`, `ef`, `fg`, `gh`, `hi`, `ij`, `jk`, `kl`, `lm`, `mn`, `no`, `op`): `P`

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |
| `G` |
| `H` |
| `I` |
| `J` |
| `K` |
| `L` |
| `M` |
| `N` |
| `O` |
| `P` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A` |
| `ab` | (`a`: `A`) => `B` |
| `bc` | (`b`: `B`) => `C` |
| `cd` | (`c`: `C`) => `D` |
| `de` | (`d`: `D`) => `E` |
| `ef` | (`e`: `E`) => `F` |
| `fg` | (`f`: `F`) => `G` |
| `gh` | (`g`: `G`) => `H` |
| `hi` | (`h`: `H`) => `I` |
| `ij` | (`i`: `I`) => `J` |
| `jk` | (`j`: `J`) => `K` |
| `kl` | (`k`: `K`) => `L` |
| `lm` | (`l`: `L`) => `M` |
| `mn` | (`m`: `M`) => `N` |
| `no` | (`n`: `N`) => `O` |
| `op` | (`o`: `O`) => `P` |

#### Returns

`P`

#### Defined in

node_modules/fp-ts/lib/function.d.ts:406

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`\>(`a`, `ab`, `bc`, `cd`, `de`, `ef`, `fg`, `gh`, `hi`, `ij`, `jk`, `kl`, `lm`, `mn`, `no`, `op`, `pq`): `Q`

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |
| `G` |
| `H` |
| `I` |
| `J` |
| `K` |
| `L` |
| `M` |
| `N` |
| `O` |
| `P` |
| `Q` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A` |
| `ab` | (`a`: `A`) => `B` |
| `bc` | (`b`: `B`) => `C` |
| `cd` | (`c`: `C`) => `D` |
| `de` | (`d`: `D`) => `E` |
| `ef` | (`e`: `E`) => `F` |
| `fg` | (`f`: `F`) => `G` |
| `gh` | (`g`: `G`) => `H` |
| `hi` | (`h`: `H`) => `I` |
| `ij` | (`i`: `I`) => `J` |
| `jk` | (`j`: `J`) => `K` |
| `kl` | (`k`: `K`) => `L` |
| `lm` | (`l`: `L`) => `M` |
| `mn` | (`m`: `M`) => `N` |
| `no` | (`n`: `N`) => `O` |
| `op` | (`o`: `O`) => `P` |
| `pq` | (`p`: `P`) => `Q` |

#### Returns

`Q`

#### Defined in

node_modules/fp-ts/lib/function.d.ts:424

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`\>(`a`, `ab`, `bc`, `cd`, `de`, `ef`, `fg`, `gh`, `hi`, `ij`, `jk`, `kl`, `lm`, `mn`, `no`, `op`, `pq`, `qr`): `R`

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |
| `G` |
| `H` |
| `I` |
| `J` |
| `K` |
| `L` |
| `M` |
| `N` |
| `O` |
| `P` |
| `Q` |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A` |
| `ab` | (`a`: `A`) => `B` |
| `bc` | (`b`: `B`) => `C` |
| `cd` | (`c`: `C`) => `D` |
| `de` | (`d`: `D`) => `E` |
| `ef` | (`e`: `E`) => `F` |
| `fg` | (`f`: `F`) => `G` |
| `gh` | (`g`: `G`) => `H` |
| `hi` | (`h`: `H`) => `I` |
| `ij` | (`i`: `I`) => `J` |
| `jk` | (`j`: `J`) => `K` |
| `kl` | (`k`: `K`) => `L` |
| `lm` | (`l`: `L`) => `M` |
| `mn` | (`m`: `M`) => `N` |
| `no` | (`n`: `N`) => `O` |
| `op` | (`o`: `O`) => `P` |
| `pq` | (`p`: `P`) => `Q` |
| `qr` | (`q`: `Q`) => `R` |

#### Returns

`R`

#### Defined in

node_modules/fp-ts/lib/function.d.ts:443

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`\>(`a`, `ab`, `bc`, `cd`, `de`, `ef`, `fg`, `gh`, `hi`, `ij`, `jk`, `kl`, `lm`, `mn`, `no`, `op`, `pq`, `qr`, `rs`): `S`

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |
| `G` |
| `H` |
| `I` |
| `J` |
| `K` |
| `L` |
| `M` |
| `N` |
| `O` |
| `P` |
| `Q` |
| `R` |
| `S` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A` |
| `ab` | (`a`: `A`) => `B` |
| `bc` | (`b`: `B`) => `C` |
| `cd` | (`c`: `C`) => `D` |
| `de` | (`d`: `D`) => `E` |
| `ef` | (`e`: `E`) => `F` |
| `fg` | (`f`: `F`) => `G` |
| `gh` | (`g`: `G`) => `H` |
| `hi` | (`h`: `H`) => `I` |
| `ij` | (`i`: `I`) => `J` |
| `jk` | (`j`: `J`) => `K` |
| `kl` | (`k`: `K`) => `L` |
| `lm` | (`l`: `L`) => `M` |
| `mn` | (`m`: `M`) => `N` |
| `no` | (`n`: `N`) => `O` |
| `op` | (`o`: `O`) => `P` |
| `pq` | (`p`: `P`) => `Q` |
| `qr` | (`q`: `Q`) => `R` |
| `rs` | (`r`: `R`) => `S` |

#### Returns

`S`

#### Defined in

node_modules/fp-ts/lib/function.d.ts:463

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`\>(`a`, `ab`, `bc`, `cd`, `de`, `ef`, `fg`, `gh`, `hi`, `ij`, `jk`, `kl`, `lm`, `mn`, `no`, `op`, `pq`, `qr`, `rs`, `st`): `T`

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |
| `G` |
| `H` |
| `I` |
| `J` |
| `K` |
| `L` |
| `M` |
| `N` |
| `O` |
| `P` |
| `Q` |
| `R` |
| `S` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A` |
| `ab` | (`a`: `A`) => `B` |
| `bc` | (`b`: `B`) => `C` |
| `cd` | (`c`: `C`) => `D` |
| `de` | (`d`: `D`) => `E` |
| `ef` | (`e`: `E`) => `F` |
| `fg` | (`f`: `F`) => `G` |
| `gh` | (`g`: `G`) => `H` |
| `hi` | (`h`: `H`) => `I` |
| `ij` | (`i`: `I`) => `J` |
| `jk` | (`j`: `J`) => `K` |
| `kl` | (`k`: `K`) => `L` |
| `lm` | (`l`: `L`) => `M` |
| `mn` | (`m`: `M`) => `N` |
| `no` | (`n`: `N`) => `O` |
| `op` | (`o`: `O`) => `P` |
| `pq` | (`p`: `P`) => `Q` |
| `qr` | (`q`: `Q`) => `R` |
| `rs` | (`r`: `R`) => `S` |
| `st` | (`s`: `S`) => `T` |

#### Returns

`T`

#### Defined in

node_modules/fp-ts/lib/function.d.ts:484

___

### remap

▸ **remap**<`T`\>(`value`, `inMin`, `inMax`, `outMin`, `outMax`): [`Expression`](modules.md#expression)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends ``"float"`` \| ``"vec2"`` \| ``"vec3"`` \| ``"vec4"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Input`](modules.md#input)<`T`\> |
| `inMin` | [`Input`](modules.md#input)<`T`\> |
| `inMax` | [`Input`](modules.md#input)<`T`\> |
| `outMin` | [`Input`](modules.md#input)<`T`\> |
| `outMax` | [`Input`](modules.md#input)<`T`\> |

#### Returns

[`Expression`](modules.md#expression)

#### Defined in

[packages/shader-composer/src/stdlib/math.ts:175](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/math.ts#L175)

___

### renameSnippet

▸ **renameSnippet**(`snippet`, `name`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `snippet` | [`Snippet`](modules.md#snippet-1) |
| `name` | `string` |

#### Returns

`void`

#### Defined in

[packages/shader-composer/src/snippets.ts:22](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/snippets.ts#L22)

___

### sub

▸ **sub**<`B`\>(`b`): <A\>(`a`: [`Input`](modules.md#input)<`A`\>) => [`Unit`](modules.md#unit-1)<`A`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `B` | extends [`GLSLType`](modules.md#glsltype) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`Input`](modules.md#input)<`B`\> |

#### Returns

`fn`

▸ <`A`\>(`a`): [`Unit`](modules.md#unit-1)<`A`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`GLSLType`](modules.md#glsltype) |

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Input`](modules.md#input)<`A`\> |

##### Returns

[`Unit`](modules.md#unit-1)<`A`\>

#### Defined in

[packages/shader-composer/src/pipes/index.ts:12](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/pipes/index.ts#L12)

___

### type

▸ **type**<`T`\>(`value`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`GLSLType`](modules.md#glsltype) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Input`](modules.md#input)<`T`\> |

#### Returns

`T`

#### Defined in

[packages/shader-composer/src/glslType.ts:4](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/glslType.ts#L4)

___

### uniformName

▸ **uniformName**(`unit`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `unit` | [`Unit`](modules.md#unit-1)<`any`\> |

#### Returns

`string`

#### Defined in

[packages/shader-composer/src/units.ts:165](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/units.ts#L165)

___

### vec2

▸ **vec2**(`x?`, `y?`, `extras?`): [`Unit`](modules.md#unit-1)<``"vec2"``\> & { `x`:  ; `y`:   }

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `x` | [`Input`](modules.md#input)<``"float"``\> | `0` |
| `y` | [`Input`](modules.md#input)<``"float"``\> | `0` |
| `extras?` | `Partial`<[`UnitConfig`](modules.md#unitconfig)<``"vec2"``\>\> | `undefined` |

#### Returns

[`Unit`](modules.md#unit-1)<``"vec2"``\> & { `x`:  ; `y`:   }

#### Defined in

[packages/shader-composer/src/stdlib/values.ts:50](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/values.ts#L50)

___

### vec3

▸ **vec3**(`x?`, `y?`, `z?`, `extras?`): [`Unit`](modules.md#unit-1)<``"vec3"``\> & { `x`:  ; `y`:  ; `z`:   }

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `x` | [`Input`](modules.md#input)<``"float"``\> | `0` |
| `y` | [`Input`](modules.md#input)<``"float"``\> | `0` |
| `z` | [`Input`](modules.md#input)<``"float"``\> | `0` |
| `extras?` | `Partial`<[`UnitConfig`](modules.md#unitconfig)<``"vec3"``\>\> | `undefined` |

#### Returns

[`Unit`](modules.md#unit-1)<``"vec3"``\> & { `x`:  ; `y`:  ; `z`:   }

#### Defined in

[packages/shader-composer/src/stdlib/values.ts:56](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/values.ts#L56)

___

### vec4

▸ **vec4**(`x?`, `y?`, `z?`, `w?`, `extras?`): [`Unit`](modules.md#unit-1)<``"vec4"``\> & { `w`:  ; `x`:  ; `y`:  ; `z`:   }

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `x` | [`Input`](modules.md#input)<``"float"``\> | `0` |
| `y` | [`Input`](modules.md#input)<``"float"``\> | `0` |
| `z` | [`Input`](modules.md#input)<``"float"``\> | `0` |
| `w` | [`Input`](modules.md#input)<``"float"``\> | `0` |
| `extras?` | `Partial`<[`UnitConfig`](modules.md#unitconfig)<``"vec4"``\>\> | `undefined` |

#### Returns

[`Unit`](modules.md#unit-1)<``"vec4"``\> & { `w`:  ; `x`:  ; `y`:  ; `z`:   }

#### Defined in

[packages/shader-composer/src/stdlib/values.ts:63](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/values.ts#L63)

___

### walkTree

▸ **walkTree**(`item`, `program`, `callback`, `seen?`): `void`

Given a root unit, iterate over the tree and invoke the given callback for each
item encountered. Items include units, expressions, snippets, and any constant
values.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | `any` | The root of the tree to traverse. |
| `program` | [`Program`](modules.md#program) \| ``"any"`` | - |
| `callback` | (`item`: `any`) => `void` | The callback to execute for each item. |
| `seen` | `Set`<`any`\> | - |

#### Returns

`void`

#### Defined in

[packages/shader-composer/src/tree.ts:15](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/tree.ts#L15)

## Math

### lerp

▸ **lerp**<`T`\>(`a`, `b`, `ratio`): [`Expression`](modules.md#expression)

Lerpy fun!

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`GLSLType`](modules.md#glsltype) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Input`](modules.md#input)<`T`\> |
| `b` | [`Input`](modules.md#input)<`T`\> |
| `ratio` | [`Input`](modules.md#input)<``"float"`` \| `T`\> |

#### Returns

[`Expression`](modules.md#expression)

#### Defined in

[packages/shader-composer/src/stdlib/math.ts:149](https://github.com/hmans/shader-composer/blob/7343f16/packages/shader-composer/src/stdlib/math.ts#L149)
