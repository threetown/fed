# vue-cli@4.x

## 一、准备工作

### 1.1 monorepo

* monorepo，是将所有的模块统一的放在一个主干分支之中管理
* multirepo，是将项目分化成为多个模块，并针对每一个模块单独的开辟一个repo来进行管理

![mono_multi_repo.png](./img/mono_multi_repo.png)



### 1.2 lerna

lerna是一个管理多个 npm 模块的工具，优化维护多包的工作流，解决多个包互相依赖，且发布需要手动维护多个包的问题。

#### 1.2.1 安装

```bash
npm i lerna -g
```

#### 1.2.2 初始化

```bash
lerna init
```

| 命令               | 功能                                                     |
| ------------------ | -------------------------------------------------------- |
| `lerna bootstrap ` | 安装依赖                                                 |
| `lerna clean`      | 删除各个包下的node_modules                               |
| `lerna init`       | 创建新的lerna库                                          |
| `lerna list`       | 查看本地包列表                                           |
| `lerna changed`    | 显示自上次 release tag以来有修改的包，选项通 list        |
| `lerna diff`       | 显示自上次release tag以来有修改的包的差异，执行 git diff |
| `lerna exec`       | 在每个包目录下执行任意命令                               |
|                    |                                                          |
|                    |                                                          |

