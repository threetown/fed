## optimization





### webpack优化

#### Tree Shaking

Tree Shaking 把源代码里没用到的代码，不打包。（减少包体积，加快速度） 可以这么配置（usedExports和sideEffects，二选一）

```js
 // 优化项
optimization: {
  // 识别无用代码：未使用的导出内容不会被生成 usedExports 依赖于 terser 去检测语句中的副作用。
  usedExports: true,
    
  // 开启副作用标识功能：sideEffects更为有效，是因为它允许跳过整个模块/文件和整个文件子树。
  sideEffects: true,
 },

```

> 注意： **tree Shaking** 只支持 ES Module，不支持 Commonjs。vue 脚手架搭建的项目，默认已经给你配置好了 tree Shaking



#### 懒加载

```js
const Foo = () => import('./your-file');
```



#### 代码分割

##### js代码分割

* 手动分割：entry配置

  ```js
  module.exports = {
    entry: {
      main: './src/index.js',
      lodash: './src/lodash.js'
    }
  }
  ```

* **SplitChunksPlugin**

  ```js
  module.exports = {
    //...
    optimization: {
      splitChunks: {
        chunks: 'async',
        minSize: 20000,     // 最小
        minRemainingSize: 0,
        minChunks: 1,
        maxAsyncRequests: 30,
        maxInitialRequests: 30,
        enforceSizeThreshold: 50000,
        cacheGroups: {   // 分组
          defaultVendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            reuseExistingChunk: true,
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
        },
      },
    },
  };
  ```



##### css代码分割

**CSS in JS** ：没配置 css代码分割的话，css 代码会打包到 js 里去。

 我们并不希望 css 混入到 js 里，而是希望 **css 作为外链单独应用**，所以我们要做代码分割！

可以在生产环境使用`mini-css-extract-plugin`（开发环境问题不大）。

```js
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module: {
  rules: [
    {
      test: /\.(scss|css)$/,
      use: [
        isProd ? MiniCssExtractPlugin.loader : 'style-loader',
        'css-loader',
        'sass-loader'
      ]
    },
  ]
}

if (isProd) {
  webpackConfig.plugins.push(
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:7].css'
    })
  );
}
```



#### externals

**常用库替换成cdn文件**

`externals` 是常用优化手段。构建时，将依赖文件相关从 **node_modules** 导入改为外部链接引用(即：通过 script 标签，以 CDN 的方式加载)

你可以把常见的 libs 以 CDN 的方式导入，像 vue，react，jquery 等，他们的官方都提供了可靠的 CDN 服务。

```js
if (isProd) {
  webpackConfig.externals = {
    vue: 'Vue',
    'vue-router': 'VueRouter',
    axios: 'axios',
  };
}
```

模板文件中，需要按如下方式引用：

```html
<% if (process.env.NODE_ENV === 'production') { %>
  <script src="//shadow.elemecdn.com/npm/vue@2.5.21/dist/vue.runtime.min.js"></script>
  <script src="//shadow.elemecdn.com/npm/vue-router@3.0.1/dist/vue-router.min.js"></script>
  <script src="//shadow.elemecdn.com/app/element/highlight.pack.b1f71b31-3c07-11e9-ba1a-55bba1877129.js"></script>
<% } %>
```



#### IgnorePlugin

`ignorePlugin` 忽略某些模块下的某个文件夹。

例如：`moment` 依赖包，它包含了很多国家的**国际化**方面的东西，在实际项目中用不了那么多。

* 在需要引入国际化的地方，单独引用

  ```js
  import moment from 'moment'
  
  //手动引入所需要的语言包
  import 'moment/locale/zh-cn'
  
  // 指定使用的语言
  moment.locale('zh-cn')
  ```

* webpack配置

  ```js
  new webpack.IgnorePlugin({
    resourceRegExp: /^\.\/locale$/,
    contextRegExp: /moment$/,
  });
  ```

#### noParse

不做解析

```js
module.exports = {
  //...
  module: {
    noParse: /jquery|lodash/,
  },
};
```

- **ignorePlugin** 是忽略掉，最终生成的代码也**不会包括该代码**
- **noParse** 是不做打包，但是最后打包后的文件是**包含该代码**





#### babel-loader

`babel-loader` 编译过程中需要解析的路径，以及排除 node_modules 相关依赖

```js
const jsexclude = /node_modules/;

module: {
    rules: [
      {
        test: /\.(jsx?|babel|es6)$/,
        include: process.cwd(),
        exclude: jsexclude,
        loader: 'babel-loader'
      },
    ]
}
```



#### file-loader

file-loader 可以指定要复制和放置资源文件的位置，以及使用版本哈希命名以获得更好的缓存（hash值是根据文件内容算出来的，所以文件内容不变，hash值不变，浏览器就可以用缓存的内容。）。



#### url-loader

`url-loader` 文件大于该阈值交给 `file-loader` 去处理，小于阈值转成 base64，**减少 HTTP 请求数**



#### DllPlugin

如果你使用vue技术栈来开发，你改动了一行业务代码这势必不会影响vue源码，但是你构建的时候发现了所有的代码都被重新构建了。

这显然是不合理的，而 DllPlugin 就是解决这个问题的。

让我们将第三方库——这种无论我们怎么改业务代码，构建结果都不会发生改变的模块单独拆出来构建，下次只要不改变第三方库就直接引用现成的构建结果就可以了。

那我们要怎么使用呢？ 主要有两步

1. 通过 DllPlugin 打包出动态链接库
2. 用 DllReferencePlugin 在主构建中引入动态链接库就可以了







* [Webpack 面试题](https://juejin.cn/post/7157998164627161095)