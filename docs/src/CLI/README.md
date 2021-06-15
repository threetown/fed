# CLI
写一个CLI(Command Line Interface)，你需要具备以下基础知识：
* [inquirer.js](https://blog.csdn.net/qq_26733915/article/details/80461257) ——用户与命令行交互的工具
* commander —— 完整的 node.js 命令行解决方案
* download-git-repo
* ora
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













