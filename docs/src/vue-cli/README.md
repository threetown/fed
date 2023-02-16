# CLI
写一个CLI(Command Line Interface)，你需要具备以下基础知识：
* [inquirer.js](https://blog.csdn.net/qq_26733915/article/details/80461257) ——用户与命令行交互的工具，它可以简化以下流程：
  * 提供错误反馈
  * 询问问题
  * 解析输入
  * 验证结果
* commander —— 完整的 node.js 命令行解决方案
* download-git-repo：用来将相应的git库下载到指定的本地文件夹。
* ora：让我们在终端展示加载效果。
* chalk: 让我们的输出变得有色彩；
* clear: 清空终端屏幕；
* clui: 绘制命令行中的表格、仪表盘、加载指示器等；
* figlet: 生成基于ASCII的艺术字；
* minimist: 解析命令行参数；
* configstore: 轻松的加载和保存配置信息；



## 流程

* 创建一个项目，并初始化 `package.json`

  ```bash
  npm init -y
  ```

* 新建 `bin` 文件夹，并在 `package.json` 中提供一个 `bin` 字段并指向该文件夹

  ```diff
  + "bin": {
  +   "my-cli": "bin/my-cli"
  + }
  ```

* 在 `my-cli` 中，我们要在头部增加一句注释，用来**指定由哪个解释器来执行脚本**

  ```js
  #!/usr/bin/env node
  
  console.log("hello my cli")
  ```

* 通过 `npm link` 实现指令的软链

  ```bash
  npm link
  
  # 现在可以运行命令啦
  my-cli
  ```

* 开发cli

* 发布



## 参考

vue-cli、create-react-app

[vue源码](https://vue-js.com/learn-vue/)

[vuejs-templates webpack](http://vuejs-templates.github.io/webpack/)

[浅谈Node CLI](https://www.yuque.com/guoba7/mz70ea/vhsszg)

[vue-cli-analysis](https://kuangpf.com/vue-cli-analysis/)

[vue-cli](http://man.hubwiz.com/docset/VueJS.docset/Contents/Resources/Documents/vuejs.org/2015/12/28/vue-cli/index.html)

[vue-cli 3.0源码](https://juejin.cn/post/6844903775304433677)

[node开发脚手架](https://juejin.cn/post/6844903526947110919)

[搭建一个通用的脚手架](https://juejin.cn/post/6844903558639288333)

[vue-cli源码流程图](https://juejin.cn/post/6844903586929868813)

[@Vue/Cli 3.0.0 图形化项目管理](https://juejin.cn/post/6844903621276991496)

[从 vue-cli 源码学习如何写模板](https://juejin.cn/post/6844903488791511048)



:boom: [vue-cli-analysis](https://kuangpf.com/vue-cli-analysis/init/)





