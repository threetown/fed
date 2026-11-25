## 源码学习

### 一、调试

1. 项目结构：pacakge.json、入口文件
2. vscode调试



### 二、知识储备



* `main` ：定义了 npm 包的入口文件，browser 环境和 node 环境均可使用
* `module` ： 定义 npm 包的 ESM 规范的入口文件，browser 环境和 node 环境均可使用
* `unpkg`： 是一个用于开发和测试的 CDN





在了解一个项目的源码时，我们首页需要对项目的目录结构有所了解，就像我们读一本书一样，先要了解它的大纲。

## 目录结构

```bash
$ tree

.
├── LICENSE
├── README.md
├── bower.json
├── build
│   ├── build.js
│   ├── configs.js
│   ├── release.sh
│   ├── rollup.dev.config.js
│   └── update-docs.sh
├── circle.yml
├── dist
│   ├── vue-router.common.js
│   ├── vue-router.esm.js
│   ├── vue-router.js
│   └── vue-router.min.js
├── docs
│   └── ...
├── examples
│   └── ...
├── flow
│   └── declarations.js
├── package-lock.json
├── package.json
├── src
│   ├── components              # vue-link和vue-view组件
│   │   ├── link.js
│   │   └── view.js
│   ├── create-matcher.js
│   ├── create-route-map.js
│   ├── history
│   │   ├── abstract.js
│   │   ├── base.js
│   │   ├── hash.js
│   │   └── html5.js
│   ├── index.js
│   ├── install.js
│   └── util
│       ├── async.js
│       ├── dom.js
│       ├── location.js
│       ├── params.js
│       ├── path.js
│       ├── push-state.js
│       ├── query.js
│       ├── resolve-components.js
│       ├── route.js
│       ├── scroll.js
│       └── warn.js
├── test
│   └── ...
└── types
    ├── index.d.ts
    ├── router.d.ts
    ├── test
    │   ├── index.ts
    │   └── tsconfig.json
    ├── typings.json
    └── vue.d.ts
```



目录结构了解后，我们需要对入口文件有所了解：`package.json` 的入口信息。



## 使用

通过现象看本质，我们得知道它是怎么在应用层去使用或运行代码：

```js
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
```

这里，我们首先接触到的第一个方法是：`Vue.use()`。 下面是官方文档的解释：

> [Vue.use( plugin )](https://v2.cn.vuejs.org/v2/api/#Vue-use)
>
> - **参数**：
>
>   - `{Object | Function} plugin`
>
> - **用法**：
>
>   安装 Vue.js 插件。如果插件是一个对象，必须提供 `install` 方法。如果插件是一个函数，它会被作为 install 方法。install 方法调用时，会将 Vue 作为参数传入。
>
>   该方法需要在调用 `new Vue()` 之前被调用。
>
>   当 install 方法被同一个插件多次调用，插件将只会被安装一次。
>
> - **参考**：[插件](https://v2.cn.vuejs.org/v2/guide/plugins.html)



## 源码分析

* `src/index.js`

```js
import { install } from './install'

export default class VueRouter {
  static install: () => void;
  static version: string;
  
 // ... 
}


VueRouter.install = install
VueRouter.version = '__VERSION__'

if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter)
}

```

从`index.js` 代码中，我们可以看到 `VueRouter` 对象上挂载了一个 `install` 方法。

* `src/index.js`

```js
<!-- 路由组件 -->
import View from './components/view'
import Link from './components/link'

export let _Vue

<!-- 对外暴露 install方法 -->
export function install (Vue) {
  // 如果vue-router已挂载，则不执行；否则，标记为true表示已挂载
  if (install.installed && _Vue === Vue) return
  install.installed = true

  _Vue = Vue

  const isDef = v => v !== undefined

  const registerInstance = (vm, callVal) => {
    let i = vm.$options._parentVnode
    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal)
    }
  }

  Vue.mixin({
    beforeCreate () {
      // 如果有 router 参数，则执行 init()
      if (isDef(this.$options.router)) {
        this._routerRoot = this
        this._router = this.$options.router
        this._router.init(this)
        Vue.util.defineReactive(this, '_route', this._router.history.current)
      } else {
        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this
      }
      registerInstance(this, this)
    },
    destroyed () {
      registerInstance(this)
    }
  })

  // 在vue.prototype原型上定义只读属性 $router 和 $route
  Object.defineProperty(Vue.prototype, '$router', {
    get () { return this._routerRoot._router }
  })

  Object.defineProperty(Vue.prototype, '$route', {
    get () { return this._routerRoot._route }
  })

  Vue.component('router-view', View)
  Vue.component('router-link', Link)

  const strats = Vue.config.optionMergeStrategies
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created
}

```



### 路由模式

路由中三种模式（mode）：`hash`、`history`、`abstract`

* hash模式特点
  1. 指 url 尾巴后的 `#` 号以及后面的字符, 请求的时候不会被包含在 http 请求中 只会携带#之前的，所以每次改变hash不会重新请求加载页面
  2. hash 改变会触发 hashchange 事件
  3. hash变化会被浏览器记录，浏览器的前进和后退都能用。

* history模式特点

  页面请求时会带上整个链接，所以后台需要做相对处理，不然返回404

* abstract模式

  适用于所有JavaScript环境，例如服务器端和Node.js. 如果没有浏览器API，路由器将自动强制进入此模式。

```js
// src/index
export default class VueRouter {
  
constructor (options: RouterOptions = {}) {
    this.app = null
    this.apps = []
    this.options = options
    this.beforeHooks = []
    this.resolveHooks = []
    this.afterHooks = []
    this.matcher = createMatcher(options.routes || [], this)

    let mode = options.mode || 'hash'
    this.fallback = mode === 'history' && !supportsPushState && options.fallback !== false
    if (this.fallback) {
      mode = 'hash'
    }
    if (!inBrowser) {
      mode = 'abstract'
    }
    this.mode = mode

    switch (mode) {
      case 'history':
        this.history = new HTML5History(this, options.base)
        break
      case 'hash':
        this.history = new HashHistory(this, options.base, this.fallback)
        break
      case 'abstract':
        this.history = new AbstractHistory(this, options.base)
        break
      default:
        if (process.env.NODE_ENV !== 'production') {
          assert(false, `invalid mode: ${mode}`)
        }
    }
  }
}
```









## 总结

`vue-router` 它支持 `hash`、`history`、`abstract` 3 种路由方式，提供了 `<router-link>` 和 `<router-view>` 2 种组件，还提供了简单的路由配置和一系列好用的 API。

`vue-router` 是官方维护的路由插件。





`vue-router` 通过 `mixin` 方法给每个组件注入 `beforeCreate` 和 `destoryed` 钩子函数。





### window

```js
// 判断是否是浏览器环境
export const inBrowser = typeof window !== 'undefined'

// 用于检查浏览器是否支持HTML5的History API.
window.history && 'pushState' in window.history

// 使用用户计时api（如果存在）以获得更精确的密钥精度
const Time = inBrowser && window.performance && window.performance.now
  ? window.performance
  : Date

let _key: string = genKey()

function genKey (): string {
  return Time.now().toFixed(3)
}
```





| Web API                                          | 说明                                                         | 场景                   |
| ------------------------------------------------ | ------------------------------------------------------------ | ---------------------- |
| `window.navigator.userAgent`                     | 客户端浏览器                                                 |                        |
| `window.history.pushState()`                     | 每执行一次都会增加一条历史记录                               |                        |
| `window.history.repaceState()`                   | 用来修改当前历史记录，而不是创建一个新的历史记录             |                        |
| `window.performance.now()`                       | 一个精确到毫秒的 `DOMHighResTimeStamp`（代表 "高分辨率时间戳"） | 监控一段代码的执行时间 |
| `Date.now()`                                     | 返回一个与Unix时间有关的时间戳（从00:00:00 UTC，1970年1月1日开始的时间） |                        |
| `window.addEventListener('popstate', e => {})`   | 当活动历史记录条目更改时，将触发popstate事件。如果被激活的历史记录条目是通过对history.pushState（）的调用创建的，或者受到对history.replaceState（）的调用的影响，popstate事件的state属性包含历史条目的状态对象的副本。 需要注意的是调用history.pushState()或history.replaceState()不会触发popstate事件。只有在做出浏览器动作时，才会触发该事件，如用户点击浏览器的回退按钮（或者在Javascript代码中调用history.back()或者history.forward()方法） 不同的浏览器在加载页面时处理popstate事件的形式存在差异。页面加载时Chrome和Safari通常会触发(emit )popstate事件，但Firefox则不会。 |                        |
| `window.addEventListener('hashchange', e => {})` |                                                              |                        |
| `getBoundingClientRect()`                        |                                                              |                        |
|                                                  |                                                              |                        |





















