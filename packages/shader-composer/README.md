![Shader Composer](https://user-images.githubusercontent.com/1061/181271132-f7f57f23-174b-418f-b5f1-225fc76b11c7.jpg)

[![Version](https://img.shields.io/npm/v/shader-composer?style=for-the-badge)](https://www.npmjs.com/package/shader-composer)
[![Downloads](https://img.shields.io/npm/dt/shader-composer.svg?style=for-the-badge)](https://www.npmjs.com/package/shader-composer)
[![Bundle Size](https://img.shields.io/bundlephobia/min/shader-composer?label=bundle%20size&style=for-the-badge)](https://bundlephobia.com/result?p=shader-composer)

## Summary

Write GLSL shaders, but with JavaScript.

> **Warning**
>
> This library is very extremely new. I'd love for you to give it a go and maybe provide some feedback, but I would currently recommend **strongly** against using it in any sort of production project, unless you're ready and willing to keep up with the changes every release. **Use at your own risk.**

## Examples & Sandboxes

- **[Official Examples App](https://shader-composer-examples.vercel.app/)** ([CodeSandbox](https://codesandbox.io/p/github/hmans/shader-composer), [Source Code](https://github.com/hmans/shader-composer/tree/main/apps/examples/src/examples))

## Questions and Answers

### Where is the documentation?

I want to wait for things to stabilize some more before sitting down to write documentation. For the time being, please take a look at the [examples provided within this repository](https://github.com/hmans/shader-composer/tree/main/apps/examples/src/examples). (Or open them in a [CodeSandbox](https://codesandbox.io/p/github/hmans/shader-composer)!)

### Does this reimplement Three's built-in materials?

No, it only knows how to hook into them if you want to customize their behavior.

### Does this work with WebGPU, WebGL, ...?

Currently, only WebGL (GLSL) is supported, but adding support for WebGPU and WGSL is definitely possible and has a good chance of happening at some point.

### Where is the node editor? I was expecting a node editor!

Shader Composer is a code-first library, and there is no intention for it to provide a graphical node-based editor. It is definitely possible to build one on top of it, though. Any takers? :D

## License

```
Copyright (c) 2022 Hendrik Mans

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```

[shadermaterial]: https://threejs.org/docs/#api/en/materials/ShaderMaterial
[three.js]: https://threejs.org/
[react-three-fiber]: https://github.com/pmndrs/react-three-fiber
[three-custom-shader-material]: https://github.com/FarazzShaikh/THREE-CustomShaderMaterial
[glsl]: https://webglfundamentals.org/webgl/lessons/webgl-shaders-and-glsl.html
