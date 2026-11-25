## Plugin

 插件（plugin），系统赋予了 webpack 丰富的可扩展性。



### plugin工作原理





### 开发一个plugin

> A webpack **plugin** is a JavaScript object that has an `apply` method. This `apply` method is called by the webpack compiler, giving access to the **entire** compilation lifecycle.
>
> webpack插件本质上就是一个 拥有`apply`方法的函数或类。`apply` 方法会被 webpack compiler 调用，并且在 **整个** 编译生命周期都可以访问 compiler 对象。

下面我们来看一下 `HtmlWebpackPlugin`源码结构

* [`HtmlWebpackPlugin`](https://github.com/jantimon/html-webpack-plugin/blob/4.x/index.js)

  ```js
  class HtmlWebpackPlugin {
    /**
     * @param {HtmlWebpackOptions} [options]
     */
    constructor (options) {
      /** @type {HtmlWebpackOptions} */
      const userOptions = options || {};
      
      // Default options
      /** @type {ProcessedHtmlWebpackOptions} */
      const defaultOptions = {
        // ...
      };
  
      /** @type {ProcessedHtmlWebpackOptions} */
      this.options = Object.assign(defaultOptions, userOptions);
      
      // ...
      
      this.version = HtmlWebpackPlugin.version;
    }
    
    /**
     * apply is called by the webpack main compiler during the start phase
     * @param {WebpackCompiler} compiler
     */
    apply (compiler) {
      const self = this;
      
      // ...
      
      compiler.hooks.emit.tapAsync('HtmlWebpackPlugin',
        /**
         * Hook into the webpack emit phase
         * @param {WebpackCompilation} compilation
         * @param {(err?: Error) => void} callback
        */
        (compilation, callback) => {
          // Get all entry point names for this html file
          const entryNames = Array.from(compilation.entrypoints.keys());
        
        }
        // ...
      }
                                   
    }
    
    // ...
  }
    
  // Statics:
  /**
   * The major version number of this plugin
   */
  HtmlWebpackPlugin.version = 4;
  
  /**
   * A static helper to get the hooks for this plugin
   *
   * Usage: HtmlWebpackPlugin.getHooks(compilation).HOOK_NAME.tapAsync('YourPluginName', () => { ... });
   */
  HtmlWebpackPlugin.getHooks = getHtmlWebpackPluginHooks;
  HtmlWebpackPlugin.createHtmlTagObject = createHtmlTagObject;
  
  module.exports = HtmlWebpackPlugin;
  ```

有了理论与实践的加持，我们对知识的真伪进行了验证。接下来，就来简单写一个plugin吧。话不多说，直接上代码：

```js
const pluginName = 'ConsoleLogOnBuildWebpackPlugin';

class ConsoleLogOnBuildWebpackPlugin {
  apply(compiler) {
    compiler.hooks.run.tap(pluginName, compilation => {
      console.log('The webpack build process is starting!!!');
    });
  }
}

module.exports = ConsoleLogOnBuildWebpackPlugin;
```

当webpack在初始化时，就会调用`apply` 方法，并传入一个参数 `compiler` 对象。对于插件来说，就是上面的 `compiler.hooks.<hooks-name>` 语法，可以进行一系列的操作。



#### hooks

* `compiler.hooks.compilation`：每次编译过程中都会新建一个`compilation`对象

  ```js
  // 在每次新建 Compilation 对象时触发
  compiler.hooks.compilation.tap('FirstPlugin', (compilation) => {
    // 这个钩子在 webpack 处理 Chunk ID 的阶段触发
    compilation.hooks.chunkIds.tap('SecondPlugin', () => {})
  });
  ```

* `compiler.hooks.emit`： *webpack* 即将生成文件（将要输出资源到输出目录）时，`compiler.hooks.emit` 钩子会被触发。

  ```js
  compiler.hooks.emit.tapAsync('HtmlWebpackPlugin',
        /**
         * Hook into the webpack emit phase
         * @param {WebpackCompilation} compilation
         * @param {(err?: Error) => void} callback
        */
        (compilation, callback) => {
    
  })                           
  ```

* `compiler.hooks.done`：当 *webpack* 完成编译、打包并且输出结果后触发。





### 常见plugin

#### html-webpack-plugin

* 功能：会自动生成一个HTML文件，并将打包后的脚本注入到这个文件中。

* 使用：

  ```js
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  
  module.exports = {
    entry: './src/index.js',
    plugins: [
      new HtmlWebpackPlugin({
        template: './examples/index.tpl',   // 使用自定义模板
        filename: './index.html',
        favicon: './examples/favicon.ico'
      })
    ]
  };
  
  ```

* 工作原理：

  * 模板处理：如果指定了`template`模板文件，插件会读取这个文件作为基础模板。
  * 添加资产：插件会自动将webpack编译后的所有资产添加到模板中，以确保资源总是最新的版本。
  * 文件生成：根据处理后的模板和注入的资产，插件会在输出目录中生成一个或多个HTML文件。
  * 与webpack整合：深度集成了webpack生命周期钩子，确保其处理过程能与其他插件和loader无缝协作。



#### webpack-dev-server

* 功能：它是一个小型的Node.js Express服务器。它利用webpack进行编译并提供一个开发服务器实时更新页面。

* 使用：

  ```js
  module.exports = {
    // ...
    devServer: {
      contentBase: './dist',
      open: true // 自动打开浏览器窗口
    }
  };
  ```

* 工作原理：作为一个开发服务器，它在内存中编译和保存webpack的输出文件。这样的好处是：加快编译和热更新的速度（访问内存远比访问磁盘要快）





* `copy-webpack-plugin`： 在构建的时候，复制静态资源到打包目录。

  ```js
  const CopyWebpackPlugin = require('copy-webpack-plugin');
   
  
    plugins: [
      new CopyWebpackPlugin([
        { from: 'examples/versions.json' }
      ]),
   ]
  ```

  

* `splitChunkPlugin`：用于代码分割

* `webpack-bundle-analyzer`: 可视化webpack输出文件大小的根据

* `webpack-dashboard`: 可以更友好地展示打包相关信息

* `webpack-merge`： 用来合并公共配置文件,常用（例如分别配置`webpack.common.config.js/ webpack.dev.config.js/webpack.production.config.js`并将其合并）

* `ignore-plugin`: 忽略指定的文件，可以加快构建速度

* `terser-webpack-plugin`：压缩ES6的代码（tree-shaking）

* `uglifyjs-webpack-plugin`: 压缩js代码

* `mini-css-extract-plugin`: 将CSS提取为独立文件，支持按需加载

* `css-minimize-webpack-plugin`：压缩CSS代码





### plugin与loader区别









*  [webpack plugins](https://v4.webpack.js.org/concepts/plugins/)

* [plugin hooks](https://webpack.docschina.org/api/compiler-hooks)
* [5分钟学会编写 webpack 插件](https://juejin.cn/post/7306716962138538036)