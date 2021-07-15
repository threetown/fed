# asynchronous programming
异步（Asynchronous, async）是与同步（Synchronous, sync）相对的概念。

:boom: [异步编程](https://www.yuque.com/guoba7/mz70ea/igr91h)

## 异步编程
* callback
* 事件发布/订阅
* [Promises/A+](https://promisesaplus.com/)
* async/await
 * [async和await:让异步编程更简单](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Asynchronous/Async_await)
* generator



## Promises/A+

[Promises/A+](https://promisesaplus.com/)，An open standard for sound.

### 1. 概念

一个`promise`必须是三种状态之一：`pending`、`fulfilled` 或 `rejected`

#### 1.1 Promise状态

* When pending, a promise:

  may transition to either the fulfilled or rejected state.

* When fulfilled, a promise:

  * must not transition to any other state.

  * must have a value, which must not change.

* When rejected, a promise:
  * must not transition to any other state.
  * must have a reason, which must not change.

#### 1.2 `then`方法

一个Promise必须提供一个 `then` 方法去访问当前的最终值或reason，Promise的`then`方法接收两个参数：

```js
promise.then(onFulfilled, onRejected)
```





## async/await

:::tip 结论

* 执行 `async` 函数，返回的都是 `Promise` 对象
* `Promise.then` 成功的情况，对应 `await`
* `Promise.catch` 异常的情况，对应 `try...catch`

:::

https://www.bilibili.com/video/BV1mb4y1D7hH



