# 优化

:::tip 优化

优化分两个场景：开发环境、生产环境

:::

## 通用环境

### 1. loader

将 loader 应用于最少数量的必要模块。通过使用 `include` 字段，仅将 loader 应用在实际需要将其转换的模块

```diff
const path = require('path');

module.exports = {
  //...
  module: {
    rules: [
      {
        test: /\.js$/,
+       include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader',
      },
    ],
  },
};

```

### 2. 引导(bootstrap) 

每个额外的 loader/plugin 都有其启动时间。尽量少地使用工具。

### 3. 解析(resolve)

以下步骤可以提高解析速度：

- 减少 `resolve.modules`, `resolve.extensions`, `resolve.mainFiles`, `resolve.descriptionFiles` 中条目数量，因为他们会增加文件系统调用的次数。
- 如果你不使用 symlinks（例如 `npm link` 或者 `yarn link`），可以设置 `resolve.symlinks: false`。
- 如果你使用自定义 resolve plugin 规则，并且没有指定 context 上下文，可以设置 `resolve.cacheWithContext: false`。

### 4. dll 

使用 `DllPlugin` 为更改不频繁的代码生成单独的编译结果。这可以提高应用程序的编译速度，尽管它增加了构建过程的复杂度。



## 开发环境优化

### 1.自动编译代码

> 每次编译代码时，要手动 `npm run build`会显得很麻烦。webpack提供了几种可选方式，帮助你在代码发生变化后**[自动编译代码](https://webpack.docschina.org/guides/development/#choosing-a-development-tool)**：

* webpck的 watch model（增量编译）
* webpack-dev-server（内存编译 - 推荐）
* webpack-dev-middleware

#### a. webpack watch mode(观察模式)

```diff
{
  "scripts": {
      "build": "webpack",
+     "watch": "webpack --watch"
  }
}
```

* 缺点：为了看到修改后的实际效果，需要刷新浏览器。

#### b. webpack-dev-server

`webpack-dev-server`为你提供了一个简单的 **web server**，并且具有 `live reloading（实时重新加载）`功能。设置如下：

```bash
npm i webpack-dev-server -D
```

修改配置文件，告知`dev server`从什么位置查找文件：

```diff
// webpack.config.js
module.exports = {
  mode: 'development',
+ devServer: {
+   contentBase: './dist',
+ }
}
```

以上配置告知 `webpack-dev-server`，将`dist` 目录下的文件 `serve` 到 `localhost:8080` 下。

:::warning

webpack-dev-server 在编译之后不会写入到任何输出文件。而是**将 bundle 文件保留在内存中**，然后将它们 serve 到 server 中，就好像它们是挂载在 server 根路径上的真实文件一样。如果你的页面希望在其他不同路径中找到 bundle 文件，则可以通过 dev server 配置中的 [`publicPath`](https://webpack.docschina.org/configuration/dev-server/#devserverpublicpath-) 选项进行修改。

:::

我们添加一个可以直接运行 dev server 的 script：

```diff
{
  "scripts": {
      "build": "webpack",
      "watch": "webpack --watch"
+     "start": "webpack serve --open"
  }
}
```

`webpack-dev-server` 具有许多可配置的选项。关于其他更多配置，请查看 [配置文档](https://webpack.docschina.org/configuration/dev-server)。

:::tip

现在，server 正在运行，你可能需要尝试 [模块热替换(hot module replacement)](https://webpack.docschina.org/guides/hot-module-replacement)！

:::

模块热替换(hot module replacement 或 HMR)是 webpack 提供的最有用的功能之一。它允许在运行时更新所有类型的模块，而无需完全刷新。我们要做的就是更新 [webpack-dev-server](https://github.com/webpack/webpack-dev-server) 配置， 然后使用 webpack 内置的 HMR 插件。

```diff
// webpack.config.js
module.exports = {
  mode: 'development',
  devServer: {
    contentBase: './dist',
+   hot: true,
  }
}
```

#### c.webpack-dev-middleware 中间件

`webpack-dev-middleware` 是一个封装器(wrapper)，它可以把 webpack 处理过的文件发送到一个 server。`webpack-dev-server` 在内部使用了它，然而它也可以作为一个单独的 package 来使用，以便根据需求进行更多自定义设置。

[webpack-dev-middleware](https://webpack.docschina.org/guides/development/#using-webpack-dev-middleware)中间件配合 express server使用



## 生产环境优化

### 1. 代码分离

> [代码分离](https://webpack.docschina.org/guides/code-splitting/)是 webpack 中最引人注目的特性之一。此特性能够把代码分离到不同的 bundle 中，然后可以按需加载或并行加载这些文件。代码分离可以用于获取更小的 bundle，以及控制资源加载优先级，如果使用合理，会极大影响加载时间。

常用的代码分离方法有三种：

- **入口起点**：使用 [`entry`](https://webpack.docschina.org/configuration/entry-context) 配置手动地分离代码。
- **防止重复**：使用 [Entry dependencies](https://webpack.docschina.org/configuration/entry-context/#dependencies) 或者 [`SplitChunksPlugin`](https://webpack.docschina.org/plugins/split-chunks-plugin) 去重和分离 chunk。
- **动态导入**：通过模块的内联函数调用来分离代码。

#### SplitChunksPlugin

[`SplitChunksPlugin`](https://webpack.docschina.org/plugins/split-chunks-plugin) 插件可以将公共的依赖模块提取到已有的入口 chunk 中，或者提取到一个新生成的 chunk。让我们使用这个插件，将之前的示例中重复的 `lodash` 模块去除：

**webpack.config.js**

```diff
  const path = require('path');

  module.exports = {
    mode: 'development',
    entry: {
      index: './src/index.js',
      another: './src/another-module.js',
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
+   optimization: {
+     splitChunks: {
+       chunks: 'all',
+     },
+   },
  };
```

使用 [`optimization.splitChunks`](https://webpack.docschina.org/plugins/split-chunks-plugin/#optimization-splitchunks) 配置选项之后，现在应该可以看出，`index.bundle.js` 和 `another.bundle.js` 中已经移除了重复的依赖模块。需要注意的是，插件将 `lodash` 分离到单独的 chunk，并且将其从 main bundle 中移除，减轻了大小。

#### bundle 分析(bundle analysis) 

一旦开始分离代码，一件很有帮助的事情是，分析输出结果来检查模块在何处结束。 [官方分析工具](https://github.com/webpack/analyse) 是一个不错的开始。还有一些其他社区支持的可选项：

- [webpack-chart](https://alexkuz.github.io/webpack-chart/): webpack stats 可交互饼图。
- [webpack-visualizer](https://chrisbateman.github.io/webpack-visualizer/): 可视化并分析你的 bundle，检查哪些模块占用空间，哪些可能是重复使用的。
- [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer)：一个 plugin 和 CLI 工具，它将 bundle 内容展示为一个便捷的、交互式、可缩放的树状图形式。
- [webpack bundle optimize helper](https://webpack.jakoblind.no/optimize)：这个工具会分析你的 bundle，并提供可操作的改进措施，以减少 bundle 的大小。
- [bundle-stats](https://github.com/bundle-stats/bundle-stats)：生成一个 bundle 报告（bundle 大小、资源、模块），并比较不同构建之间的结果。

### 2. 缓存

可以通过命中缓存，以降低网络流量，使网站加载速度更快，然而，如果我们在部署新版本时不更改资源的文件名，浏览器可能会认为它没有被更新，就会使用它的缓存版本。由于缓存的存在，当你需要获取新的代码时，就会显得很棘手。

此指南的重点在于通过必要的配置，以确保 webpack 编译生成的文件能够被客户端[缓存](https://webpack.docschina.org/guides/caching/)，而在文件内容变化后，能够请求到新的文件。

#### 输出文件的文件名(output filename) 

我们可以通过替换 `output.filename` 中的 [substitutions](https://webpack.docschina.org/configuration/output/#outputfilename) 设置，来定义输出文件的名称。webpack 提供了一种使用称为 **substitution(可替换模板字符串)** 的方式，通过带括号字符串来模板化文件名。其中，`[contenthash]` substitution 将根据资源内容创建出唯一 hash。当资源内容发生变化时，`[contenthash]` 也会发生变化。

```diff
 output: {
-  filename: 'bundle.js',
+  filename: '[name].[contenthash].js',
   path: path.resolve(__dirname, 'dist'),
   clean: true,
 },
```

### 3. Tree Shaking

:::tip 术语

*[tree shaking](https://webpack.docschina.org/guides/tree-shaking/)* 是一个术语，通常用于描述移除 JavaScript 上下文中的未引用代码(dead-code)。它依赖于 ES2015 模块语法的 [静态结构](http://exploringjs.com/es6/ch_modules.html#static-module-structure) 特性，例如 [`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) 和 [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)。这个术语和概念实际上是由 ES2015 模块打包工具 [rollup](https://github.com/rollup/rollup) 普及起来的。

:::

webpack 2 正式版本内置支持 ES2015 模块（也叫做 *harmony modules*）和未使用模块检测能力。新的 webpack 4 正式版本扩展了此检测能力，通过 `package.json` 的 `"sideEffects"` 属性作为标记，向 compiler 提供提示，表明项目中的哪些文件是 "pure(纯正 ES2015 模块)"，由此可以安全地删除文件中未使用的部分。

#### 解释 tree shaking 和 `sideEffects` 

[`sideEffects`](https://webpack.docschina.org/configuration/optimization/#optimizationsideeffects) 和 [`usedExports`](https://webpack.docschina.org/configuration/optimization/#optimizationusedexports)（更多被认为是 tree shaking）是两种不同的优化方式。

**`sideEffects` 更为有效** 是因为它允许跳过整个模块/文件和整个文件子树。

`usedExports` 依赖于 [terser](https://github.com/terser-js/terser) 去检测语句中的副作用。它是一个 JavaScript 任务而且没有像 `sideEffects` 一样简单直接。而且它不能跳转子树/依赖由于细则中说副作用需要被评估。尽管导出函数能运作如常，但 React 框架的高阶函数（HOC）在这种情况下是会出问题的。

#### tree sharking小结 

因此，我们学到为了利用 *tree shaking* 的优势， 你必须...

- 使用 ES2015 模块语法（即 `import` 和 `export`）。
- 确保没有编译器将您的 ES2015 模块语法转换为 CommonJS 的（顺带一提，这是现在常用的 @babel/preset-env 的默认行为，详细信息请参阅[文档](https://babeljs.io/docs/en/babel-preset-env#modules)）。
- 在项目的 `package.json` 文件中，添加 `"sideEffects"` 属性。
- 使用 `mode` 为 `"production"` 的配置项以启用[更多优化项](https://webpack.docschina.org/concepts/mode/#usage)，包括压缩代码与 tree shaking。

你可以将应用程序想象成一棵树。绿色表示实际用到的 source code(源码) 和 library(库)，是树上活的树叶。灰色表示未引用代码，是秋天树上枯萎的树叶。为了除去死去的树叶，你必须摇动这棵树，使它们落下。

如果你对优化输出很感兴趣，请进入到下个指南，来了解 [生产环境](https://webpack.docschina.org/guides/production) 构建的详细细节。

### 4.源码映射(Source Mapping)

我们鼓励你在生产环境中启用 source map，因为它们对 debug(调试源码) 和运行 benchmark tests(基准测试) 很有帮助。虽然有着如此强大的功能，然而还是应该针对生产环境用途，选择一个可以快速构建的推荐配置（更多选项请查看 [`devtool`](https://webpack.docschina.org/configuration/devtool)）。对于本指南，我们将在 *生产环境* 中使用 `source-map` 选项，而不是我们在 *开发环境* 中用到的 `inline-source-map`：

**webpack.prod.js**

```diff
  const { merge } = require('webpack-merge');
  const common = require('./webpack.common.js');

  module.exports = merge(common, {
    mode: 'production',
+   devtool: 'source-map',
  });
```

### 5.压缩 CSS

将生产环境下的 CSS 进行压缩会非常重要，请查看 [在生产环境下压缩](https://webpack.docschina.org/plugins/mini-css-extract-plugin/#minimizing-for-production) 章节。

为了压缩输出文件，请使用类似于 [css-minimizer-webpack-plugin](https://webpack.docschina.org/plugins/css-minimizer-webpack-plugin/) 这样的插件

**webpack.prod.js**

```js
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  optimization: {
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      // `...`,
      new CssMinimizerPlugin(),
    ],
  },
};
```

这将只在生产模式下启用 CSS 压缩优化。如果你需要在开发模式下使用，请设置 `optimization.minimize` 选项为 true。



### 6. CDN加速

:::tip 方式

将**不怎么需要更新**的**第三方库脱离webpack打包**，不被打入bundle中，从而减少打包时间，但又不影响运用第三方库的方式，例如import方式等

* 方式一：使用 `html-webpack-externals-plugin`
* 方式二：直接配置 `externals`

:::

#### html-webpack-externals-plugin

通常在 `webpack.base.conf.js` 中进行配置，让其不打包到 `vendor.js` 中，配置如下：（以vue框架为例）

```js
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');

module.exports = {
    // 其它省略...
    plugins: [
        new HtmlWebpackExternalsPlugin({
          externals: [{
            module: 'vue',
            entry: 'https://lib.baomitu.com/vue/2.6.12/vue.min.js',
            global: 'Vue'
          }]
        })
    ],
    // 其它省略...
}
```

最后看到在 `index.html` 中动态添加了如下代码：

```html
<script type="text/javascript" src="https://lib.baomitu.com/vue/2.6.12/vue.min.js"></script>
```



#### externals配置

首先在 `index.html` 中script标签引入JS，如下代码：

```html
<script type="text/javascript" src="https://lib.baomitu.com/vue/2.6.12/vue.min.js"></script>
```

在 `webpack.base.conf.js` 的配置如下：

```js
module.exports = {
    // 其它省略...
    externals: {
        vue: 'Vue'
    },
    // 其它省略...
}
```



## 总结

**development(开发环境)** 和 **production(生产环境)** 这两个环境下的构建目标存在着巨大差异。

:::tip 开发环境

在**开发环境**中，我们需要：强大的 source map 和一个有着 live reloading(实时重新加载) 或 hot module replacement(热模块替换) 能力的 localhost server。

:::

:::tip 生产环境

而**生产环境**目标则转移至其他方面，关注点在于压缩 bundle、更轻量的 source map、资源优化等，通过这些优化方式改善加载时间。由于要遵循逻辑分离，我们通常建议为每个环境编写**彼此独立的 webpack 配置**。

:::

:::tip webpack-merge

虽然，以上我们将 *生产环境* 和 *开发环境* 做了细微区分，但是，请注意，我们还是会遵循不重复原则(Don't repeat yourself - DRY)，保留一个 "common(通用)" 配置。为了将这些配置合并在一起，我们将使用一个名为 [`webpack-merge`](https://github.com/survivejs/webpack-merge) 的工具。此工具会引用 "common" 配置，因此我们不必再在环境特定(environment-specific)的配置中编写重复代码。

:::

```diff
{
    "name": "development",
    "version": "1.0.0",
    "description": "",
    "main": "src/index.js",
    "scripts": {
-    "start": "webpack serve --open",
+    "start": "webpack serve --open --config webpack.dev.js",
-    "build": "webpack"
+    "build": "webpack --config webpack.prod.js"
},
```







## 参考文献

* [webpack文档 - 构建性能](https://webpack.docschina.org/guides/build-performance/)
* [webpack文档 - 生产环境](https://webpack.docschina.org/guides/production/)
* [webpack文档 - 优化(Optimization)](https://webpack.docschina.org/configuration/optimization/)

