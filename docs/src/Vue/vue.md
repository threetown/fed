# Vue

* 开发插件如：vue-router、vuex等



## Vue双向数据绑定

* 设计模式：发布-订阅模式
* Obsever
* Wacth
* Dep
* Compile(模板编译)：
  * document.createDocumentFragment()：创建一个新的空白的文档片段，因为文档片段存在于**内存中**，并不在DOM树中，所以将子元素插入到文档片段时不会引起页面[回流](https://developer.mozilla.org/zh-CN/docs/Glossary/Reflow)（对元素位置和几何上的计算）。因此，使用文档片段通常会带来更好的性能。



## Vue源码

* rollup打包





## Mixins

混入 ([mixin](https://cn.vuejs.org/v2/guide/mixins.html)) 提供了一种非常灵活的方式，来分发 Vue 组件中的可复用功能。

一个混入对象可以包含任意组件选项。当组件使用混入对象时，所有混入对象的选项将被“混合”进入该组件本身的选项。



## Plugins

:::tip

开始接触插件概念之前，我们先来回顾一下，在vue开发中使用过UI组件库，如：`ant-design-vue` 、`element-ui`

```js {2,3,5}
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
```

亦或，使用过 `vue-router` 管理路由或 `Vuex` 状态管理：

```js {2,4}
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
```

细心的你，一定发现了它们之后有一个共性，那就是必须要通过 `Vue.use()` 明确地安装该功能。

:::

插件通常用来为 **Vue** 添加全局功能。

:::warning 插件

插件的功能范围没有严格的限制——一般有下面几种：

1. 添加全局方法或者 property。如：[vue-custom-element](https://github.com/karol-f/vue-custom-element)
2. 添加全局资源：指令/过滤器/过渡等。如 [vue-touch](https://github.com/vuejs/vue-touch)
3. 通过全局混入来添加一些组件选项。如 [vue-router](https://github.com/vuejs/vue-router)
4. 添加 Vue 实例方法，通过把它们添加到 `Vue.prototype` 上实现。
5. 一个库，提供自己的 API，同时提供上面提到的一个或多个功能。如 [vue-router](https://github.com/vuejs/vue-router)

:::



在深入剖析vue插件之前，我们先来回顾一下，插件的使用和开发吧！

### 使用插件

通过全局方法 `Vue.use()` 使用插件。它需要在你调用 `new Vue()` 启动应用之前完成：

```js
// 调用 `MyPlugin.install(Vue)`
Vue.use(MyPlugin)

new Vue({
  // ...组件选项
})
```

也可以传入一个可选的选项对象：

```js
Vue.use(MyPlugin, { someOption: true })
```

`Vue.use` 会自动阻止多次注册相同插件，届时即使多次调用也只会注册一次该插件。

Vue.js 官方提供的一些插件 (例如 `vue-router`) 在检测到 `Vue` 是可访问的全局变量时会自动调用 `Vue.use()`。然而在像 `CommonJS` 这样的模块环境中，你应该始终显式地调用 `Vue.use()`：

```js
// 用 Browserify 或 webpack 提供的 CommonJS 模块环境时
var Vue = require('vue')
var VueRouter = require('vue-router')

// 不要忘了调用此方法
Vue.use(VueRouter)
```

### 开发插件

Vue.js 的插件应该暴露一个 `install` 方法。这个方法的第一个参数是 `Vue` 构造器，第二个参数是一个可选的选项对象：

```js
MyPlugin.install = function (Vue, options) {
  // 1. 添加全局方法或 property
  Vue.myGlobalMethod = function () {
    // 逻辑...
  }

  // 2. 添加全局资源
  Vue.directive('my-directive', {
    bind (el, binding, vnode, oldVnode) {
      // 逻辑...
    }
    ...
  })

  // 3. 注入组件选项
  Vue.mixin({
    created: function () {
      // 逻辑...
    }
    ...
  })

  // 4. 添加实例方法
  Vue.prototype.$myMethod = function (methodOptions) {
    // 逻辑...
  }
}
```

### 开发操作(按钮)权限插件

:::tip 需求分析

在实际的业务场景中，一个完整的操作应该包含但不限于：增（`add`）、删（`delete`）、改（`edit`）、查（`list`，一般由菜单权限控制）。

我们期望能根据用户的角色，赋予不同用户不同的操作权限，怎么实现这一需求呢？

🤔 只有当该用户有某些操作权限时，才显示相应的操作按钮。如此，对于没有权限的用户，是**完全无感知**的。

:::

:::warning 权限

一般情况下，我们会把用户权限分为两大类：

* 菜单权限：通过addRouter来组装用户菜单权限
* 按钮权限：通过指令来控制按钮显示与否

:::

本章节，我们只讨论操作（按钮）权限 🎉🎉🎉

* 自定义一个指定（用于扩展元素属性），如：`src/directive/permission/hasPermi.js`

```JS
 /**
 * 操作权限处理
 * vuex中获取 permissions: []
 * 自定义指令：https://cn.vuejs.org/v2/guide/custom-directive.html#钩子函数参数
 */
 
import store from '@/store'

export default {
  inserted(el, binding, vnode) {
    const { value } = binding
    const all_permission = "*:*:*";
    const permissions = store.getters && store.getters.permissions

    if (value && value instanceof Array && value.length > 0) {
      const permissionFlag = value

      const hasPermissions = permissions.some(permission => {
        return all_permission === permission || permissionFlag.includes(permission)
      })

      if (!hasPermissions) {
        el.parentNode && el.parentNode.removeChild(el)
      }
    } else {
      throw new Error(`请设置操作权限标签值`)
    }
  }
}
```

* 统一管理指令（directive），如：`src/directive/permission/index.js`

```js
import hasPermi from './hasPermi'

# 插件是一个函数，它会被作为 install 方法。install 方法调用时，会将 Vue 作为参数传入。
const install = function(Vue) {
  Vue.directive('hasPermi', hasPermi)
}

if (window.Vue) {
  window['hasPermi'] = hasPermi
  Vue.use(install); // eslint-disable-line
}

export default install
```

* 使用，我们习惯在主入口文件中引用它，如：`src/main.js`

```js
import permission from './directive/permission'

Vue.use(permission)
```



