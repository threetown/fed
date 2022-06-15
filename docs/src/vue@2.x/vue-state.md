# 响应式原理

:::tip 目标

* 深入理解Vue数据响应原理
* 理解 `methods`、`computed` 和 `watch` 的区别？

:::



**响应式原理** 源码入口位置：`src/core/instance/init.js` 中的 `initState` 方法。



## 一、initState

* `src/core/instance/state.js`

```js
/**
 * 1. 处理：props、methods、data、computed、watch
**/
export function initState (vm: Component) {
  vm._watchers = []
  const opts = vm.$options
  if (opts.props) initProps(vm, opts.props)
  if (opts.methods) initMethods(vm, opts.methods)
  if (opts.data) {
    initData(vm)
  } else {
    observe(vm._data = {}, true /* asRootData */)
  }
  if (opts.computed) initComputed(vm, opts.computed)
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch)
  }
}
```

















