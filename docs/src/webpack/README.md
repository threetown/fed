# Getting Started

:::tip webpack

**webpack** 是一个现代 JavaScript 应用程序的*静态模块打包工具*（module bundler）。

:::



## Installation

要安装最新版本或特定版本，请运行以下命令之一：

```bash
npm install --save-dev webpack
npm install --save-dev webpack@<version>
```

如果你使用 webpack v4+ 版本，你还需要安装 [CLI](https://v4.webpack.docschina.org/api/cli/)。

```bash
npm install --save-dev webpack-cli
```

对于大多数项目，我们建议本地安装。这可以在引入突破式变更(breaking change)版本时，更容易分别升级项目。通常会通过运行一个或多个 [npm scripts](https://docs.npmjs.com/misc/scripts) 以在本地 `node_modules` 目录中查找安装的 webpack，来运行 webpack：

```json
"scripts": {
    "build": "webpack --config webpack.config.js"
}
```





## 参考文献

* [webpack官方文档](https://webpack.js.org/)





webpack配置、使用、优化、源码（tapable）
webpack loader及plugins实现及源码

