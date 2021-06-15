# Event Loop

事件循环机制(Event Loop)

:::tip 结论

* **微任务**执行时机比**宏任务**早
* 宏任务：`setTimeout`、`setInterval`、`DOM事件`、`Ajax请求`
* 微任务：`Promise`、`asycn/await`

:::



下面代码执行结果：

```js
console.log(1)

// 宏任务
setTimeout(() => {
	console.log(2)
}, 0)

// 微任务
Promise.resolve().then(() => {
  console.log(3)
})

console.log(4)

// 1 4 3 2

/**
 * 结论：微任务 执行时机比宏任务早！
 * 原因：微任务 > DOM渲染 > 宏任务
 **/
```



