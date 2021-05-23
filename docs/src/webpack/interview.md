# 面试题

## webpack是什么？说下基本用法？
> webpack是一个js应用程序的静态资源打包工具，它默认只能处理js和json资源

**webpack基本用法**

* 安装依赖
```bash
# 初始化项目创建 package.json
npm init -y
# 安装 webpack 依赖
npm i webpack -D
# webpack 4+以上需要安装webpack-cli
npm i webpack-cli -D
```

* 使用配置文件

  > 项目根目录下，创建一个 `webpack.config.js` 文件

```diff
  webpack-demo
  |- package.json
+ |- webpack.config.js
  |- /dist
    |- index.html
  |- /src
    |- index.js
```

* 配置webpack.config.js
  * entry，入口文件，默认路径为：`src/index.js`
  * output，输出文件，默认路径为：`dist/main.js`
  * loader，处理非js静态资源。
  * plugin，打包优化等

## 用过哪些loader和plugin？

