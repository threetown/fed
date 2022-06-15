​		任何实际项目的开发都不仅仅是完成编码，规范的开发流程和严谨的测试都是不可或缺的。合理使用各种工具来进行测试开发与调试，能够极大地提升编写代码的效率，使开发过程事半功倍、对于提高代码质量、稳定线上服务至关重要。

## 一、测试工具

### 1. ESLint

在日常的团队开发中，为了避免出现低级bug和统一代码风格，通常会在开发前约定一套编码规范。为了保证规范的执行，可以使用Lint工具和代码风格检测工具。

ESLint就是一个Lint工具，旨在为大家提供一个可扩展、每条规则独立、不内置编码风格的语法检查工具。ESLint有别于JSLint的地方就是，它被设计成完全可配置的，每一条规则都是一个插件，用户完全可以根据自己的需求来选择使用哪些规则。

比如，报错就可以设计为“警告”和“错误”两个等级，或者禁用。下面介绍一下ESLint的配置。

#### 1.1 配置ESLint

* 用JavaScript注解的方式，将配置信息直接加到文件里。
* 使用JavaScript、JSON或YAML文件为整个目录定义配置信息，文件格式可以是：`.eslintrc` 或 `package.json`。

ESLint会自动查找读取配置文件。

#### 1.2 ESLint规则

* Enviroments

  脚本将要运行的环境，每个环境都有自己预定义好的全局变量集合。通过 `env` 关键字配置 **Enviroments** 选项，下面的配置表示脚本将运行在浏览器和node环境，还可以配置Commonjs、jQuery等很多选项。

  ```json
  {
    "env": {
      "browser": true,
      "node": true
    }
  }
  ```

* Globals

  在脚本运行期间需要额外加入的全局变量。当变量在当前文件中未定义却被访问时，会触发未定义规则警告。因此，如果设置了一些全局变量，则需要在ESLint的配置文件中进行配置。

  ```json
  {
    "globals": {
      "varA": true,
      "varB": false
    }
  }
  ```

  上述配置表明 varA、varB都是全局变量，其中varB的值不可写（只读）。

* Rules

  ESLint提供了大量的规则，用户通过配置规则是否生效来定义自己的项目需要使用哪些规则。

  ```json
  “rules”: {
    "eqeqe": "off",
    "curly": "error"
  }
  ```

### 2. 工具包

#### 1.1 eslint-loader

配合webpack使用的ESLint loader

* 安装：

  ```bash
  yarn add eslint-loader
  ```

* 使用方法：

  ```js
  // webpack.config.js
  
  module.exports = {
    // ...
    module: {
      loaders: [
        { test: /\.js$/, loader: "eslint-loader", exclude: /node_modules/ }
      ]
    }
  }
  ```

  当使用编译类的loader（如：babel-loader）时，要确保处理顺序正确，从下到止为处理顺序，所以语法检查要放在最下面。

#### 1.2 eslint-friendly-formatter

​		这个组件可以友好地提示语法问题，并且支持点击错误提示直接打开iTem2文件。

#### 1.3 eslint-config-standard

​		如果觉得自己配置很麻烦，也可以使用这个组件，它为大家提供了一些可共享的JavaScript标准格式配置。它的用法也非常简单，在自己的工程中加入如下 `.eslintrc` 文件。

```json
{
  "extends": "standard"
}
```

#### 1.4 eslint-plugin-html

一个支持从HTML等文件的 `<script>` 标签中读取配置的插件。

