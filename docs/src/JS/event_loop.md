# Event Loop

事件循环机制(Event Loop)

:boom: [Event Loop机制](https://www.yuque.com/guoba7/mz70ea/nw3k1g)

[浏览器和Node.js中的Event Loop](https://fynn90.github.io/2019/07/13/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9A%84Even%20Loop%E5%92%8CNode.JS%E7%9A%84Even%20Loop/)

![](./images/event_loop.gif)



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



