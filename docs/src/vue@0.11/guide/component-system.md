# 组件系统

在Vue中，要创建一个组件，只需调用 `Vue.extend()` 来生成一个 Vue 的子类构造函数：

```js
// Extend Vue to get a reusable constructor
var MyComponent = Vue.extend({
  template: '<p>A custom component!</p>'
})
```

接下来，就可以用 `Vue.component()` 来**注册**这个构造函数了：

```js
// Register the constructor with id: my-component
Vue.component('my-component', MyComponent)
```



为了更简单，也可以直接传入 option 对象来代替构造函数。如果接收到的是一个对象，`Vue.component()` 会为你隐式调用 `Vue.extend()`：

```js
// Note: this method returns the global Vue,
// not the registered constructor.
Vue.component('my-component', {
  template: 'A custom component!'
})
```

之后就能在父级实例的模板中使用注册过的组件了 (务必在初始化根实例**之前**注册组件) ：

```html
<!-- inside parent template -->
<my-component></my-component>
```

Vue.js 支持两种不同风格的调用组件的 API：过程式的**基于构造函数**的 API，以及**基于模板**的声明式的 Web Components 风格 API。



## Vue.component() VS Vue.extend()

由于 `Vue` 本身是一个构造函数， `Vue.extend()` 是一个**类继承方法**。它用来创建一个 `Vue` 的子类并返回其构造函数。

而另一方面，`Vue.component()` 是一个类似 `Vue.directive()` 和 `Vue.filter()` 的**资源注册方法**。它作用是建立指定的构造函数与 ID 字符串间的关系，从而让 Vue.js 能在模板中使用它。直接向 `Vue.component()` 传递 options 时，它会在内部调用 `Vue.extend()`。





### 参考文档

* [vue 0.12](https://012-cn.vuejs.org/guide/components.html)