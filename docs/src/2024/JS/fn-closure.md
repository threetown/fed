## closure闭包



闭包的概念，晦涩难懂，只能强行记忆。

咱们换个打开方式，从实践使用反推得到理论。那咱们就先来看一下，所谓“闭包”的应用场景。



## 模块化 + IIEF自执行函数

Immediately Invoked Function Expression





## 节流防抖

* [Debounce and Throttling: What They Are and When to Use Them](https://medium.com/@bs903944/debounce-and-throttling-what-they-are-and-when-to-use-them-eadd272fe0be)



### 链式调用





### jquery源码实现







## 经典面试题

```js
for (var id = 0; id < 3; id++) {
  // The setTimeout function uses a callback, and by the time the callback is executed,
  // the loop has already completed, so 'id' will always be 3 in all setTimeout callbacks.
  setTimeout(function () {
    console.log('seconds: ' + id);
  }, id * 1000);
}
// output: 3,3,3
```

### output: 1,2,3

```js
// ES6 let keyword
for (let i = 1; i <= 3; i++) {
  // The use of 'let' creates a block-scoped variable, fixing the closure issue.
  // Now each setTimeout callback captures the correct value of 'id'.
  setTimeout(function () {
    console.log('seconds: ' + i);
  }, i * 1000);
}

```







```js
for (var i = 1; i <= 3; i++) {
  // Using an immediately-invoked function expression (IIFE) to create a new scope for each iteration.
  // This helps avoid the closure issue with setTimeout.
  (function (i) {
    setTimeout(function () {
      console.log('seconds: ' + i);
    }, i * 1000);
  })(i);
}

```







### 柯理化





## 函数式编辑



### 纯函数

