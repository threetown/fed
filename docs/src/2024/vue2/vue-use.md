## Vue.use()

**Vue.use实际上就是Vue实例与插件的一座桥梁。**

> `vue.use` 是用来使用插件的，我们可以**在插件中扩展全局组件、指令、原型方法**等。

`Vue.use( plugin )`

* 参数：`{Object | Function} plugin`

* 用法：安装 Vue.js 插件。
  * 如果插件是一个对象，必须提供 install 方法。
  * 如果插件是一个函数，它会被作为 install 方法。
  * install 方法调用时，会将 Vue 作为参数传入。

该方法需要在调用 **new Vue()** 之前被调用。

当 **install** 方法被同一个插件多次调用，插件将只会被安装一次。



### vue.use(plugin) 源码

```js
// src/core/global-api/use.js
export function initUse (Vue: GlobalAPI) {
  // plugin应该为Function或Object
  Vue.use = function (plugin: Function | Object) {
    // 获取已经安装的插件
    const installedPlugins = (this._installedPlugins || (this._installedPlugins = []))
    // 判断是否注册过插件，如果注册过，则跳出
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    /**
     * 功能：处理 Vue.use 的入参
     * 1. 将第一个参数之后的参数归集
     * 2. 并在首部插入this上下文（从而保证第一个参数是Vue实例）
     **/
    const args = toArray(arguments, 1)
    args.unshift(this)
    /**
     * 功能：是否有 install 方法
     * a. 如果插件plugin是一个包含install方法的对象，则：
     *    调用插件的install方法
     * b. 如果插件plugin是一个函数，则：
     *    把plugin当install执行
     */
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args)
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args)
    }
    // 缓存插件
    installedPlugins.push(plugin)
    return this
  }
}

// toArray 方法源码
export function toArray (list: any, start?: number): Array<any> {
    start = start || 0
    let i = list.length - start
    const ret: Array<any> = new Array(i)
    while (i--) {
        ret[i] = list[i + start]
    }
    return ret
}
```

* 防止plugin重新加载：

  ```js
  const installedPlugins = (this._installedPlugins || (this._installedPlugins = []))
  
  if (installedPlugins.indexOf(plugin) > -1) {
    return this
  }
  ```

* 保证 `this` 是 `Vue`

  ```js
   const args = toArray(arguments, 1)
   args.unshift(this)
  ```

* 如果插件是一个对象，则它必须有用一个`install`方法；如果插件是一个函数，则把它当成`install`执行

  ```js
  if (typeof plugin.install === 'function') {
    plugin.install.apply(plugin, args)
  } else if (typeof plugin === 'function') {
    plugin.apply(null, args)
  }
  ```

* 缓存插件

  ```js
  installedPlugins.push(plugin)
  ```

  





### 封装插件



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





### 插件为什么不会重新加载

源码中开头处，通过 `installedPlugins`来判断是否注册过插件

```js
// 获取已经安装的插件
const installedPlugins = (this._installedPlugins || (this._installedPlugins = []))
// 判断是否注册过插件，如果注册过，则跳出
if (installedPlugins.indexOf(plugin) > -1) {
  return this
}
```

