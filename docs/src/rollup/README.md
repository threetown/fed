# rollup

[rollup.js](https://www.rollupjs.com)



### 命令行的参数(Command line flags)[#](https://www.rollupjs.com/guide/command-line-reference#命令行的参数command-line-flags)

配置文件中的许多选项和命令行的参数是等价的。如果你使用这里的参数，那么将重写配置文件。想了解更多的话，仔细查阅这个[包办大量选项的清单](https://www.rollupjs.com/guide/big-list-of-options)

```text
-i, --input <filename>      要打包的文件（必须）-o, --file <output>         输出的文件 (如果没有这个参数，则直接输出到控制台)-f, --format <format>       输出的文件类型 (amd, cjs, esm, iife, umd)-e, --external <ids>        将模块ID的逗号分隔列表排除-g, --globals <pairs>       以`module ID:Global` 键值对的形式，用逗号分隔开                               任何定义在这里模块ID定义添加到外部依赖-n, --name <name>           生成UMD模块的名字-h, --help                  输出 help 信息-m, --sourcemap             生成 sourcemap (`-m inline` for inline map)--amd.id                    AMD模块的ID，默认是个匿名函数--amd.define                使用Function来代替`define`--no-strict                 在生成的包中省略`"use strict";`--no-conflict               对于UMD模块来说，给全局变量生成一个无冲突的方法--intro                     在打包好的文件的块的内部(wrapper内部)的最顶部插入一段内容--outro                     在打包好的文件的块的内部(wrapper内部)的最底部插入一段内容--banner                    在打包好的文件的块的外部(wrapper外部)的最顶部插入一段内容--footer                    在打包好的文件的块的外部(wrapper外部)的最底部插入一段内容--interop                   包含公共的模块（这个选项是默认添加的）
```

复制

此外，还可以使用以下参数：

#### `-h`/`--help`[#](https://www.rollupjs.com/guide/command-line-reference#-h--help)

打印帮助文档。

#### `-v`/`--version`[#](https://www.rollupjs.com/guide/command-line-reference#-v--version)

打印已安装的Rollup版本号。

#### `-w`/`--watch`[#](https://www.rollupjs.com/guide/command-line-reference#-w--watch)

监听源文件是否有改动，如果有改动，重新打包

#### `--silent`[#](https://www.rollupjs.com/guide/command-line-reference#--silent)

不要将警告打印到控制台。