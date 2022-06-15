# vue-cli 2.0

:::tip 背景
经过一段时间的vue源码学习，收效甚微。总结原因有以下：
* 【主观因素】方法不对（只看源码、文档或视频，没有打调试、敲代码）
* 【主观因素】没有验收标准和成果输出，时间长了会迷茫或有挫败感
* 【客观因素】源码学习是枯燥的、有一定坡度的

所以，目前制定一个阶段性目标，即：5月15日~5月30日，阅读并开发vue-cli 2.x.
:::



## 技术栈

| 依赖名                                                       | 功能说明                                                     | 示例                                                   |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------ |
| [download-git-repo](https://www.npmjs.com/package/download-git-repo) | 下载并提取git仓库（GitHub、GitLab、Bitbucket）               | `download(repository, destination, options, callback)` |
| [commander](https://github.com/tj/commander.js)              | 提供了用户命令行输入和参数解析强大功能                       |                                                        |
| [inquirer](https://github.com/SBoudrias/Inquirer.js)         | 交互式命令行工具                                             |                                                        |
| [metalsmith](https://github.com/segmentio/metalsmith)        | 一个静态网站生成器，可以用在批量处理模板的场景.<br>它最大的特点就是**EVERYTHING IS PLUGIN**，所有的逻辑都是由插件处理，你只需要将这些插件用 metalsmith 连接起来使用即可 |                                                        |
| handlebars                                                   | 一个 javascript 语义模版库，而且与 Mustache 模板 是兼容的    |                                                        |
| consolidate                                                  | 是一个模板引擎的结合体。包括了常用的jade和ejs                |                                                        |
|                                                              |                                                              |                                                        |
|                                                              |                                                              |                                                        |
|                                                              |                                                              |                                                        |





## 文档

* [vue-cli@v2.9](https://github.com/vuejs/vue-cli/tree/v2)，源码及README

* [vuejs-templates/webpack](https://github.com/vuejs-templates/webpack)，官方模板

* [vuejs-templates/webpack](http://vuejs-templates.github.io/webpack/)，模板文档：目录结构、命令行、linter、预处理css、处理静态资源、环境变量、整合后端框架、开发时的API代理、单元测试、e2e测试、SEO优化等



## 其它脚手架

1. [vue-cli](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fvuejs%2Fvue-cli)

`vue-cli`提供利用vue开发`webpack`, `pwa`等模板，本文脚手架参考了`vue-cli`的实现。

1. [dva-cli](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fdvajs%2Fdva-cli)

`dva-cli`主要针对[dva](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fdvajs%2Fdva)开发使用的脚手架

1. [labrador](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fmaichong%2Flabrador)

`labrador`是一种`微信小程序`组件化开发框架, 虽说小程序目前已经支持组件，但该脚手架的其他特性，也很赞。

