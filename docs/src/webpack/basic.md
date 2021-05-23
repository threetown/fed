# 前置教育

## 模块（Modules）

在[模块化编程](https://en.wikipedia.org/wiki/Modular_programming)中，开发者将程序分解为功能离散的 chunk，并称之为 **模块**。

每个模块都拥有小于完整程序的体积，使得验证、调试及测试变得轻而易举。 精心编写的 **模块** 提供了可靠的抽象和封装界限，使得应用程序中每个模块都具备了条理清晰的设计和明确的目的。

Node.js 从一开始就支持模块化编程。 然而，web 的 *模块化* 正在缓慢支持中。 在 web 界存在多种支持 JavaScript 模块化的工具，这些工具各有优势和限制。 webpack 从这些系统中汲取了经验和教训，并将 *模块* 的概念应用到项目的任何文件中。

### 何为 webpack 模块 

与 [Node.js 模块](https://nodejs.org/api/modules.html)相比，webpack *模块* 能以各种方式表达它们的依赖关系。下面是一些示例：

- [ES2015 `import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) 语句
- [CommonJS](http://www.commonjs.org/specs/modules/1.0/) `require()` 语句
- [AMD](https://github.com/amdjs/amdjs-api/blob/master/AMD.md) `define` 和 `require` 语句
- css/sass/less 文件中的 [`@import` 语句](https://developer.mozilla.org/en-US/docs/Web/CSS/@import)。
- stylesheet `url(...)` 或者 HTML `<img src=...>` 文件中的图片链接。

### 支持的模块类型 

webpack 天生支持如下模块类型：

- [ECMAScript 模块](https://webpack.docschina.org/guides/ecma-script-modules)
- CommonJS 模块
- AMD 模块
- [Assets](https://webpack.docschina.org/guides/asset-modules)
- WebAssembly 模块

通过 **loader** 可以使 webpack 支持多种语言和预处理器语法编写的模块。**loader** 向 webpack 描述了如何处理非原生*模块*，并将相关**依赖**引入到你的 **bundles**中。 webpack 社区已经为各种流行的语言和预处理器创建了 *loader*，其中包括：

- [CoffeeScript](http://coffeescript.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [ESNext (Babel)](https://babeljs.io/)
- [Sass](http://sass-lang.com/)
- [Less](http://lesscss.org/)
- [Stylus](http://stylus-lang.com/)
- [Elm](https://elm-lang.org/)

当然还有更多！总得来说，webpack 提供了可定制，强大且丰富的 API，允许在 **任何技术栈** 中使用，同时支持在开发、测试和生产环境的工作流中做到 **无侵入性**。

关于 loader 的相关信息，请参考 [**loader 列表**](https://webpack.docschina.org/loaders) 或 [**自定义 loader**](https://webpack.docschina.org/api/loaders)。

## 模块化

在 webpack 打包应用程序时，你可以选择各种模块语法风格，包括 [ES6](https://en.wikipedia.org/wiki/ECMAScript#6th_Edition_-_ECMAScript_2015)，[CommonJS](https://en.wikipedia.org/wiki/CommonJS) 和 [AMD](https://en.wikipedia.org/wiki/Asynchronous_module_definition)。

### ES6 (推荐) 

webpack 2 支持原生的 ES6 模块语法，意味着你无须额外引入 babel 这样的工具，就可以使用 `import` 和 `export`。但是注意，如果使用其他的 ES6+ 特性，仍然需要引入 babel。



## 解析器（Resolvers）

解析器是使用 `enhanced-resolve` 库创建的。`Resolver` 类 拓展了 `tapable` 类，并使用 `tapable` 来提供了一些钩子。 `enhanced-resolve` 可以直接用于创建新的解析器， 但是，任何 [`compiler` 实例](https://webpack.docschina.org/api/node/#compiler-instance) 都有一些解析器实例，可以 被 `tap` 进去。

在继续阅读之前，请确保你已经读过 [`enhanced-resolve`](https://github.com/webpack/enhanced-resolve) 和 [`tapable`](https://webpack.docschina.org/api/plugins/#tapable) 文档。



## 模块解析（Module Resolution）

resolver 帮助 webpack 从每个 `require`/`import` 语句中，找到需要引入到 bundle 中的模块代码。 当打包模块时，webpack 使用 [enhanced-resolve](https://github.com/webpack/enhanced-resolve) 来解析文件路径。

### webpack 中的解析规则 

使用 `enhanced-resolve`，webpack 能解析三种文件路径：

#### 绝对路径 

```js
import '/home/me/file';

import 'C:\\Users\\me\\file';
```

由于已经获得文件的绝对路径，因此不需要再做进一步解析。

#### 相对路径 

```js
import '../src/file1';
import './file2';
```

在这种情况下，使用 `import` 或 `require` 的资源文件所处的目录，被认为是上下文目录。在 `import/require` 中给定的相对路径，会拼接此上下文路径，来生成模块的绝对路径。

#### 模块路径 

```js
import 'module';
import 'module/lib/file';
```

在 [`resolve.modules`](https://webpack.docschina.org/configuration/resolve/#resolvemodules) 中指定的所有目录检索模块。 你可以通过配置别名的方式来替换初始模块路径，具体请参照 [`resolve.alias`](https://webpack.docschina.org/configuration/resolve/#resolvealias) 配置选项。

- 如果 package 中包含 `package.json` 文件，那么在 [`resolve.exportsFields`](https://webpack.docschina.org/configuration/resolve/#resolveexportsfields) 配置选项中指定的字段会被依次查找，`package.json` 中的第一个字段会根据 [package 导出指南](https://webpack.docschina.org/guides/package-exports/)确定 package 中可用的 export。

一旦根据上述规则解析路径后，resolver 将会检查路径是指向文件还是文件夹。如果路径指向文件：

- 如果文件具有扩展名，则直接将文件打包。
- 否则，将使用 [`resolve.extensions`](https://webpack.docschina.org/configuration/resolve/#resolveextensions) 选项作为文件扩展名来解析，此选项会告诉解析器在解析中能够接受那些扩展名（例如 `.js`，`.jsx`）。

如果路径指向一个文件夹，则进行如下步骤寻找具有正确扩展名的文件：

- 如果文件夹中包含 `package.json` 文件，则会根据 [`resolve.mainFields`](https://webpack.docschina.org/configuration/resolve/#resolve-mainfields) 配置中的字段顺序查找，并根据 `package.json` 中的符合配置要求的第一个字段来确定文件路径。
- 如果不存在 `package.json` 文件或 [`resolve.mainFields`](https://webpack.docschina.org/configuration/resolve/#resolvemainfields) 没有返回有效路径，则会根据 [`resolve.mainFiles`](https://webpack.docschina.org/configuration/resolve/#resolvemainfiles) 配置选项中指定的文件名顺序查找，看是否能在 import/require 的目录下匹配到一个存在的文件名。
- 然后使用 [`resolve.extensions`](https://webpack.docschina.org/configuration/resolve/#resolveextensions) 选项，以类似的方式解析文件扩展名。

webpack 会根据构建目标，为这些选项提供合理的[默认](https://webpack.docschina.org/configuration/resolve)配置。

### 解析 loader 

loader 的解析规则也遵循特定的规范。但是 [`resolveLoader`](https://webpack.docschina.org/configuration/resolve/#resolveloader) 配置项可以为 loader 设置独立的解析规则。

### 缓存 

每次文件系统访问文件都会被缓存，以便于更快触发对同一文件的多个并行或串行请求。在 [watch 模式](https://webpack.docschina.org/configuration/watch/#watch) 下，只有修改过的文件会被从缓存中移出。如果关闭 watch 模式，则会在每次编译前清理缓存。

欲了解更多上述配置信息，请查阅 [Resolve API](https://webpack.docschina.org/configuration/resolve)。



## Shimming 预置依赖
webpack compiler 能够识别遵循 ES2015 模块语法、CommonJS 或 AMD 规范编写的模块。然而，一些 third party(第三方库) 可能会引用一些全局依赖（例如 jQuery 中的 $）。因此这些 library 也可能会创建一些需要导出的全局变量。这些 "broken modules(不符合规范的模块)" 就是 shimming(预置依赖) 发挥作用的地方。

:::warning
我们不推荐使用全局依赖！webpack 背后的整个理念是使前端开发更加模块化。也就是说，需要编写具有良好的封闭性(well contained)、不依赖于隐含依赖（例如，全局变量）的彼此隔离的模块。请只在必要的时候才使用这些特性。
:::

**webpack.config.js**
```diff
 const path = require('path');
+const webpack = require('webpack');

 module.exports = {
   entry: './src/index.js',
   output: {
     filename: 'main.js',
     path: path.resolve(__dirname, 'dist'),
   },
+  plugins: [
+    new webpack.ProvidePlugin({
+     $: 'jQuery',
+   }),
+  ],
 };
```



# 参考文献
* [模块（Modules）](https://webpack.docschina.org/concepts/modules/)
* [模块方法](https://webpack.docschina.org/api/module-methods/)
* [解析器（Resolvers）](https://webpack.docschina.org/api/resolvers/)
* [模块解析](https://webpack.docschina.org/concepts/module-resolution/)
* [Shimming 预置依赖](https://webpack.docschina.org/guides/shimming/)

