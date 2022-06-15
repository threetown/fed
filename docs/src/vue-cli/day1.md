# day1

:::tip 今日目标
熟悉整体流程搭建，整理package.json文件

**⚠️** 开始之前，请认真阅读 [vue-cli#README](https://github.com/vuejs/vue-cli/tree/v2#vue-cli--) 和

:::



> 第一天，以vue-cli v2为基准，下载源码并阅读文档；项目结构；

### 准备工作

* 源码下载

```bash
git clone https://github.com/vuejs/vue-cli.git -b v2 vue-cli@2.x
```

* 阅读文档
  * vue-cli指令
    * `vue init <template-name> <project-name>`
    * `vue list`
  * 官方模板
    * 必须有 `template`目标
    * 一些metadata元数据，包含在 `meta.js`或`meta.json`文件。可以包含以下字段：
      * `prompts`：收集用户选项数据
      * `filters`：用于对要渲染的文件进行条件筛选
      * `metalsmith`：用于在链中添加自定义metalsmith插件
      * `completeMessage`：生成模板时向用户显示的消息。你可以在这里加入自定义说明
      * `complete`:在生成模板时，可以使用函数来运行Stuff，而不是使用“completeMessage”。

	### prompts

元数据文件中的`prompts`字段，应该是包含用户提示的对象哈希。对于每个条目的`key`是变量名，值是一个 [Inquirer.js 问题对象](https://github.com/SBoudrias/Inquirer.js/#question). 

```json
{
  "prompts": {
    "name": {
      "type": "string",
      "required": true,
      "message": "Project name"
    }
  }
}
```

完成所有提示(prompts)后，`template`中的所有文件都将使用[Handlebar](http://handlebarsjs.com/)进行渲染，并将提示结果作为数据。



### 条件提示

可以通过添加一个`when`字段来设置提示条件，该字段应该是一个JavaScript表达式，使用从以前的提示中收集的数据进行计算。例如：

```json
{
  "prompts": {
    "lint": {
      "type": "confirm",
      "message": "Use a linter?"
    },
    "lintConfig": {
      "when": "lint",
      "type": "list",
      "message": "Pick a lint config",
      "choices": [
        "standard",
        "airbnb",
        "none"
      ]
    }
  }
}
```

只有当用户对 `lint` 提示回答 `yes` 时，才会触发`lintConfig`提示。



### 预先注册 Handlebars助手

两个常用的 Handlebars 助手，`if_eq`和`unless_eq`是预先注册的：

```handlebars
{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
```

### 自定义handlebars助手

您可能希望使用元数据文件中的`helpers`属性注册其他handlebars助手。对象的键key是helper的名称：

```js
module.exports = {
  helpers: {
    lowercase: str => str.toLowerCase()
  }
}
```

注册后，可按如下方式使用：

```handlebars
{{ lowercase name }}
```



### 文件过滤器

在metadata文件中的`filters`字段应该是一个对象hash包含文件过滤规则。每个























































