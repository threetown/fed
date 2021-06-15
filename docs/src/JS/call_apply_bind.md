# call、apply、bind
:::tip

* 它们的作用都是改变 `this` 的指向
* 第一个参数，都是**指向this绑定的对象**；第二个参数，是**传参**
  * `call` 和 [`bind`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)，第二个参数是**参数列表**
  * [`apply`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)，第二个参数是**参数数组**
* `apply` 和 `call`，都是**立即执行**函数；`bind` 不会立即执行，而是**返回新的函数**

:::



## 应用

* 获取一个数组中最大值

  ```js
  // Math.max(value1[, value2, ...])
  console.log(Math.max(1, 3, 2)) // 3
  
  // 解构赋值
  const arr = [1, 3, 2]
  console.log(Math.max(...arr)) // 3
  
  // apply方法
  function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
  }
  getMaxOfArray(arr)
  ```

  



* [原生JavaScript实现call、apply和bind](https://www.bilibili.com/video/BV1m54y1q7hc)





`call` 和 `apply` 都是为了解决改变 `this` 的指向。作用都是相同的，只是传参的方式不同。

除了第一个参数外，`call` 可以接收一个参数列表，`apply` 只接受一个参数数组。

```js
let a = {
    value: 1
}
function getValue(name, age) {
    console.log(name)
    console.log(age)
    console.log(this.value)
}
getValue.call(a, 'yck', '24')
getValue.apply(a, ['yck', '24'])
```

`bind`和其他两个方法作用也是一致的，只是该方法会返回一个函数。并且我们可以通过 `bind`实现柯里化。

*（下面是对这三个方法的扩展介绍）*

## 如何实现一个 bind 函数

https://mp.weixin.qq.com/s/HPOUy8K8qnWpfSJzxDl6_w

对于实现以下几个函数，可以从几个方面思考

- 不传入第一个参数，那么默认为 `window`
- 改变了 this 指向，让新的对象可以执行该函数。那么思路是否可以变成给新的对象添加一个函数，然后在执行完以后删除？

```js
Function.prototype.myBind = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }
  var _this = this
  var args = [...arguments].slice(1)
  // 返回一个函数
  return function F() {
    // 因为返回了一个函数，我们可以 new F()，所以需要判断
    if (this instanceof F) {
      return new _this(...args, ...arguments)
    }
    return _this.apply(context, args.concat(...arguments))
  }
}
```

## 如何实现一个call函数

```js
Function.prototype.myCall = function (context) {
  var context = context || window
  // 给 context 添加一个属性
  // getValue.call(a, 'yck', '24') => a.fn = getValue
  context.fn = this
  // 将 context 后面的参数取出来
  var args = [...arguments].slice(1)
  // getValue.call(a, 'yck', '24') => a.fn('yck', '24')
  var result = context.fn(...args)
  // 删除 fn
  delete context.fn
  return result
}
```

## 如何实现一个apply函数

```js
Function.prototype.myApply = function (context) {
  var context = context || window
  context.fn = this

  var result
  // 需要判断是否存储第二个参数
  // 如果存在，就将第二个参数展开
  if (arguments[1]) {
    result = context.fn(...arguments[1])
  } else {
    result = context.fn()
  }

  delete context.fn
  return result
}
```



