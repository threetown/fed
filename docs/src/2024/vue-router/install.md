## install



在分析vue源码之前时，需要具备几个Vue相关的基础知识点

* 方法：`Vue.mixin()`、`Vue.util.defineReactive()`
* 生命周期：`beforeCreate()`
* 以 `$` 开头的，如：`$options`、`$parent`
* 以`_` 开头的，如：`_routerRoot`、`_router`
* 订阅-发布









### registerInstance

#L14

```js
const registerInstance = (vm, callVal) => {
  let i = vm.$options._parentVnode
  if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
    i(vm, callVal)
  }
}
```

`registerRouteInstance`，只有 router-view 组件定义了`data.registerRouteInstance`函数，用来执行`render`操作，创建router-view组件的VNode

src/components/view.js#72

```js
// attach instance registration hook
// this will be called in the instance's injected lifecycle hooks
data.registerRouteInstance = (vm, val) => {
  // val could be undefined for unregistration
  const current = matched.instances[name]
  if (
    (val && current !== vm) ||
    (!val && current === vm)
  ) {
    matched.instances[name] = val
  }
}
```

