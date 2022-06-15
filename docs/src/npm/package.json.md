# package.json

:::tip 目标

* 掌握 `npm init` 命令，创建 **package.json**
* 修改 package.json 默认配置
* 运行多个 npm script命令：串行 `&&` 、并行 `&`
* `npm script`的钩子：`pre`和`post`

:::

## 一、创建 package.json

```bash
npm init

# 或

npm init -y
```



### 1.1 修改默认配置

```bash
# 作者邮箱
npm config set init.author.email "threetowns@163.com"

# 作者姓名
npm config set init.author.name "leon"

# 作者网址
npm config set init.author.url "https://hi.threetowns.cn"

# 许可证（MIT 或 ISC）
npm config set init.license "MIT"

# 版本
npm config set init.version "0.0.1"
```



### 1.2 完整的package.json

```json
{
  "name": "",
  "version": "",
  "description": "",
  "main": "",
  "module": "",
  "unpkg": "",
  "jsdelivr": "",
  "typings": "",
  "sideEffects": false,
  "scripts": {
    "commit": "git-cz"
  },
  "gitHooks": {
    "pre-commit": "lint-staged",
    "commit-tag": "node scripts/verify-commit-msg.js"
  },
  "lint-staged": {
    "*.js": [
      "eslint --fix",
      "git add"
    ]
  },
  "repository": {
    "type": "git",
    "url": ""
  },
  "author": "",
  "license": "MIT",
  "bugs": {
    "url": "<>/issues"
  },
  "homepage": "",
  "devDependencies": {
    
  },
  "dependencies": {
    
  },
  "config": {
    "commitizen": {
      "path": "./node_modules/cz-conventional-changelog"
    }
  }
}
```



## 二、npm script传参和注释

* `--` 分隔符

### 2.2 注释

* `//` 为键名

  ```diff
  + "//": "添加注释"
  ```

* `#`

  注释后面的换行符 `\n` 和多余的空格，换行符是用于将注释和命令分隔开，这样命令就相当于微型的 shell 脚本，多余的空格是为了控制缩进，也可以用制表符 `\t` 替代。

  ```diff
  + "test": "# 添加注释 \n test script"
  ```

  

### 2.3 调整 npm script 运行时日志输出

结合其他工具调用 npm script 的时候比较有用，需要使用 `--loglevel silent`，或者 `--silent`，或者更简单的 `-s` 来控制，这个日志级别的输出实例如下（只有命令本身的输出，读起来非常的简洁）：

```bash
npm run test -s
```





## 三、npm script的钩子

为了方便开发者自定义，npm script 的设计者为命令的执行增加了类似生命周期的机制，具体来说就是 `pre` 和 `post` 钩子脚本。这种特性在某些操作前需要做检查、某些操作后需要做清理的情况下非常有用。

举例来说，运行 npm run test 的时候，分 3 个阶段：

1. 检查 scripts 对象中是否存在 pretest 命令，如果有，先执行该命令；
2. 检查是否有 test 命令，有的话运行 test 命令，没有的话报错；
3. 检查是否存在 posttest 命令，如果有，执行 posttest 命令；

到目前为止我们所覆盖的前端工作流包含了代码检查和测试自动化运行环节，**衡量测试效果的重要指标是测试覆盖率**，而收集覆盖率也非常的简单，**下面逐步讲解如何把代码检查、测试运行、覆盖率收集这些步骤串起来**。

```diff
  scripts: {
+    "precover": "rm -rf coverage",
+    "cover": "nyc --reporter=html npm test",
+    "postcover": "rm -rf .nyc_output && opn coverage/index.html"
  },
```



## 四、npm script环境变量

* 预定义环境变量

```bash
npm run env
```

* 部分排序后的预定义环境变量

```bash
npm run env | grep npm_package | sort
```

* 自定义变量

```diff
  {
+   "config": {
+     "port": 3000
+   }
  }
```

使用方式，如：`http://localhost:$npm_package_config_port`



## 五、git hooks





# 参考文献

* [用npm script打造超溜的前端工作流](https://www.kancloud.cn/@sllyli)

