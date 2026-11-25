## loader

**Loader**主要负责将代码转译为**webpack** 可以处理的JavaScript代码。（webpack默认只能处理`.js`和`.json`文件）。





### 常用loader

* `babel-loader`：将ES6转译为ES5
* `file-loader`：指定要复制和放置资源文件的位置
* `url-loader`：通过指定阈值，来根据文件大小使用不同的处理方式（如：小于阈值，则返回base64格式编码，并将文件的`data-url`内联到`bundle`中）
* `raw-loader`：加载文件原始内容
* `image-webpack-loader`： 加载并压缩图片资源
* `sass-loader`: 将SCSS/SASS代码转换为CSS

*  `css-loader`: 加载CSS代码 支持模块化、压缩、文件导入等功能特性

* `style-loader`: 把CSS代码注入到js中，通过`DOM` 操作去加载CSS代码
* `source-map-loader`: 加载额外的`Source Map`文件

* `eslint-loader`: 通过ESlint 检查js代码

> `less`或`scss`预处理器，通过需要多个`loader`配合使用。从下到上，从右到左。



#### babel-loader

babel-loader、babel/preset-env、babel-polyfill、babel-transform-runtime 什么区别？

- **babel-loader** 把babel跟webpack连接上。相当于是桥梁。实际上还不能把es6转成es5

- **babel/preset-env** 预设，能把let语句等翻译成es5（但是promise、generator等语法不行）

- **babel-polyfill** 才真正的支持Promise等语法

  *@babel-polyfill包 = corejs包 + regenerator包*

> **corejs** 少了 **generator**语法， 但支持其它es6甚至更高版本的 js. 

> **regenerator** 支持 generator. 补充了corejs!

- **babel-transform-runtime** 为代码提供了一个沙盒环境，所以不会像 **babel-polyfill**一样污染全局变量，因此适用于开发组件库。

  注意：**babel-polyfill**会污染全局变量。在开发业务代码的时候，无需考虑该问题。





### loader分类

- `pre`： 前置 loader
- `normal`： 普通 loader
- `inline`： 内联 loader
- `post`： 后置 loader

```js
module: {
  rules: [
    {
      enforce: "pre",
      test: /\.js$/,
      loader: "loader1",
    },
    {
      // 没有enforce就是normal
      test: /\.js$/,
      loader: "loader2",
    },
    {
      enforce: "post",
      test: /\.js$/,
      loader: "loader3",
    },
  ],
},
```









### 开发一个loader

loader特征：

* loader支持链式调用：上一个loader的执行结果会作为下一个loader的入参。

* 接收三个参数：

  * `source`： 资源输入 对于第一个执行的loader为资源文件的内容 后续执行的loader则为前一个loader的执行结果 也可能是字符串 或者是代码的`AST`结构

  * `sourceMap`： 可选参数 代码的`sourcemap`结构

  * `data`： 可选参数 其他需要在`Loader`链中传递的信息

    ```js
    module.exports = function (content, map, meta) {
      return content;
    };
    ```

    

* 返回

  - loader内部一般需要通过`return / this.callback`来返回转换后的结果

    ```js
    module.exports = function (content, map, meta) {
      // 传递map，让source-map不中断
      // 传递meta，让下一个loader接收到其他参数
      this.callback(null, content, map, meta);
      return; // 当调用 callback() 函数时，总是返回 undefined
    };
    ```

    