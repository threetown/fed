# bin





## 写一个CLI

* [Commander.js](https://github.com/tj/commander.js) node.js命令行界面的完整解决方案



## 1. 创建一个bin文件

* `bin/leon`可执行文件（executable）

```js
#!/usr/bin/env node

const program = require('commander')

program
  .version(require('../package').version)
  .usage('<command> [options]')
  .command('init', 'generate a new project from a template')
  .command('list', 'list available official templates')
  .command('build', 'prototype a new project')
  .command('create', '(for v3 warning only)')

program.parse(process.argv)

```

* 输出一下结果

```bash
leon@Leon-Aurora % node bin/index -V
1.0.0
leon@Leon-Aurora % node index.js -v       
Usage: index <command> [options]

Options:
  -V, --version   output the version number
  -h, --help      display help for command

Commands:
  init            generate a new project from a template
  list            list available official templates
  build           prototype a new project
  create          (for v3 warning only)
  help [command]  display help for command
```

## 2. 通过npm link关联bin

* `package.json` 提供了一个映射到本地本地文件名的 `bin` 字段，一旦被引入后,npm将软链接这个文件到prefix/bin里面，以便于全局引入，或者在./node_modules/.bin/目录里

  ```diff
  {
    "name": "bin",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
  +  "bin": {
  +    "leon": "bin/leon"
  +  },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "devDependencies": {
      "commander": "^7.2.0"
    }
  }
  
  ```

* npm link

  ```bash
  # 关联一下bin
  $ npm link
  
  # 执行一个bin命令
  $ leon
  ```

## 原理分析

### 1. 第一行

我们经常会在一些脚本文件的最开头，看到这样一段代码：`#!/usr/bin/env`，如：

* node：`#!/usr/bin/env node`（脚本会在Node环境下执行）
* shell：`#!/usr/bin/env sh`（脚本会在Shell环境下执行）







## 参考文献

* [vue-cli 2.x](https://blog.csdn.net/ABAP_Brave/article/details/84930286)

