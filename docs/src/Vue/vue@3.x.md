# vue@3.x

:::tip vue@2.x 和 vue@3.x区别

* `vue@3.x` 源码采用 `monorepo` 方式进行管理，将模块拆分到 `package` 目录中
* `vue@3.x` 采用 `ts `开发，增强类型检测；vue@2.x采用 `flow`
* `vue@3.x` 性能优化，支持 `tree-shaking`
* `vue@2.x` 后期引入`RFC`，使每个版本改动可控 rfcs
* `vue@3.x` 数据劫持采用 `proxy`；`vue@2.x` 数据劫持采用 `defineProperty`
* `vue@3.x` 中对模板编译进行了优化，编译时生成 **Block tree**，可以对子节点的动态节点进行收集，可以减少比较，并且采用了 `patchFlag` 标记动态节点
* `vue@3.x` 采用 `compositionApi`进行组织功能，解决反复横跳，优化复用逻辑（mixin带来的数据来源不清晰、命名冲突等），相比 `optionsApi` 类型推断更加方便
* `vue@3.x` 增加了 `Fragment`、`Teleport`、`Suspense`组件

:::

## 一、vue@3.x架构分析

### 1. Monorepo介绍

`Monorepo` 是**管理项目代码的一个方式**，指：在一个项目仓库中管理多个模块/包(package)

**优化：**

* 一个仓库可维护多个模块，不用到处找仓库
* 方便版本管理和依赖管理，模块之间的引用，调用都非常方便

**缺点：**

* 仓库体积会变大



### 2. vue@3.x 项目结构

```bash
.
├── packages/                # packages
│   ├── compiler-core        # 与平台无关的编译核心
│   ├── compiler-dom         # 针对浏览器的编译模块
│   ├── compiler-sfc         # 针对单文件解析
│   ├── compiler-ssr         # 针对服务器端渲染的模块
│   ├── reactivity           # 响应式系统
│   ├── runtime-core         # 与平台无关的运行时核心（可以创建针对特定平台的运行时 - 自定义渲染器）
│   ├── runtime-dom          # 针对浏览器的运行时，包括 DOM API、属性、事件处理等
│   ├── runtime-test         # 用于测试
│   ├── server-renderer      # 用于服务器端渲染
│   ├── sfc-playground
│   ├── shared               # 多个包之间共享的内容
│   ├── size-check           # 用来测试代码体积
│   ├── template-explorer    # 用于调试编译器输出的开发工具
│   ├── vue                  # 完整版本，包括运行时和编译器
│   └── vue-compat 
├── scripts
│   ├── 
│   └── 
├── package.json
└── ...
```



### 3. 安装依赖

| 依赖                        | 功能描述                 |
| --------------------------- | ------------------------ |
| typescript                  | 支持typescript           |
| rollup                      | 打包工具                 |
| rollup-plugin-typescript2   | rollup和ts的桥梁         |
| @rollup/plugin-node-resolve | 解析node第三方模块       |
| @rollup/plugin-json         | 支持引入json             |
| execa                       | 开启子进程，方便执行命令 |

#### package.json

<div class="vueschool"><a href="https://www.bilibili.com/video/BV1KB4y1g7jb?p=3" target="_blank" rel="sponsored noopener" title="根据需要打包的信息进行打包">珠峰架构Vue3.0课程（第一期） - 根据需要打包的信息进行打包</a></div>

```json
{
  "private": true,
  "version": "3.1.3",
  "workspaces": [
    "packages/*"
  ],
  "scripts": {
  },
  "types": "test-dts/index.d.ts",
  "tsd": {
    "directory": "test-dts"
  },
  "gitHooks": {
    "pre-commit": "lint-staged",
    "commit-msg": "node scripts/verifyCommit.js"
  },
  "lint-staged": {
    "*.js": [
      "prettier --write"
    ],
    "*.ts?(x)": [
      "eslint",
      "prettier --parser=typescript --write"
    ]
  },
  "engines": {
    "node": ">=10.0.0"
  },
  "devDependencies": {}
}
```



## 视频教程

* [珠峰架构Vue3.0课程（第一期）](https://www.bilibili.com/video/BV1KB4y1g7jb)
* [珠峰架构Vue3.0课程（第二期）](https://www.bilibili.com/video/BV1Sf4y1h7A1)
* [珠峰架构Vue3.0课程（第三期）](https://www.bilibili.com/video/BV1xh411a7ux)
* [珠峰架构Vue3.0课程（第四期）](https://www.bilibili.com/video/BV1N5411u7YU)
* [珠峰架构Vue3.0课程（第五期）](https://www.bilibili.com/video/BV1664y1r7Qx)
* [珠峰架构Vue3.0课程（第六期）](https://www.bilibili.com/video/BV1t44y1B7K8)
* [珠峰架构Vue3.0课程（第七期）](https://www.bilibili.com/video/BV1Bo4y1k77S)