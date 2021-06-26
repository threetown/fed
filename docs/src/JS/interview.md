# JS面试题

## 1. onclick和addEventListener绑定单击事件的区别

* `onclick` 可以写在标签上，`addEventListener` 只能在js代码中
* `onclick` 只能绑定点击事件，`addEventListener` 可以绑定多种事件（有点类型于`$(selector).on(<event>, callback)`）
* `onclick`后面的事件会覆盖前面的事件，`addEventListener`则不会
* `addEventListener`可以精确控制事件触发的阶段，通过第三个参数控制【默认为`false`，也就是 **冒泡阶段**；如果为 `true` 时，则在**捕获阶段**触发事件】
* `onclick`只对html元素起作用，`addEventListener` 对任何DOM元素都有用

:::warning 兼容

```js
if (el.addEventListener) {
  el.addEventListener('click', modifyText, false);
} else if (el.attachEvent)  {
  el.attachEvent('onclick', modifyText);
}
```

:::



## 2.DOM事件流

W3C规范中定义了3个事件阶段，依次是**捕获阶段**、**目标阶段**、**冒泡阶段**。

- **捕获阶段**：在**事件对象到达事件目标之前**，事件对象必须**从window经过目标的祖先节点传播到事件目标**。 这个阶段被我们称之为捕获阶段。在这个阶段注册的事件监听器在事件到达其目标前必须先处理事件。
- **目标阶段**：事件对象到达其事件目标。 这个阶段被我们称为目标阶段。一旦事件对象到达事件目标，该阶段的事件监听器就要对它进行处理。如果一个事件对象类型被标志为不能冒泡。那么对应的事件对象在到达此阶段时就会终止传播。
- **冒泡阶段**：事件对象以一个与捕获阶段相反的方向**从事件目标传播经过其祖先节点传播到window**。这个阶段被称之为冒泡阶段。在此阶段注册的事件监听器会对相应的冒泡事件进行处理。



## 3. 手写 Ajax请求

* XMLHttpRequest



## 4. 三次握手、四次挥手

* 三次握手：
  1. 客户端 向 服务器发送请求：SYN,synchronize，客户端有发送能力
  2. 服务器向客户端发送请求：ACK,acknowledeg 和 SYN，服务器有接收能力和发送能力
  3. 客户端向服务器返回ACK：客户端有接收能力

* 四次挥手
  1. 客户端 向 服务器发送请求：FIN，我要断开连接
  2. 服务器 向 客户端发送请求：ACK，好的我有空了就断开连接
  3. 服务器向客户端发送请求：FIN，现在断开连接
  4. 客户端向服务器发送请求： 我断开连接

## 5. 浏览器缓存

* **强缓存**（304）
  * Expires，响应头，代表该资源的过期时间（HTTP/1.0）。如：`expires: Wed, 16 Jun 2021 06:51:47 GMT`
  * Cache-Control，请求/响应头，缓存控制字段，精确控制缓存策略（HTTP/1.1）。如：`cache-control: max-age=600 `
* **协商缓存**：强缓存失效后，浏览器携带缓存标识向服务器发起请求，由服务器根据缓存标识决定是否使用缓存的过程。**返回200和请求结果**。如：`Status Code:  200  (from disk cache)`
* * Last-Modified【响应头，资源最近修改时间，由服务器告诉浏览器。如：`last-modified: Tue, 15 Jun 2021 15:21:08 GMT`】 和 If-Modified-Since【请求头，资源最近修改时间，由浏览器告诉服务器】（HTTP/1.0）
  * ETag 和 If-None-Match（HTTP/1.1）
* 刷新对于强缓存和协商缓存的影响
  1. 当`ctrl+f5`强制刷新网页时，直接从服务器加载，**跳过强缓存和协商缓存**。

  2. 当`f5`刷新网页时，**跳过强缓存**，但是会检查协商缓存。

  3. 浏览器地址栏中写入URL，回车 浏览器发现缓存中有这个文件了，不用继续请求了，直接去缓存拿。



## 6. 节流、防抖

* 防抖：在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时。

  ```js
  /**
   * 思路： 每次触发事件时都取消之前的延时调用方法
   **/
  function debounce(fn, delay) {
      var timer; // 维护一个 timer
      return function () {
          var _this = this; // 取debounce执行作用域的this
          var args = arguments;
          if (timer) {
              clearTimeout(timer);
          }
          timer = setTimeout(function () {
              fn.apply(_this, args); // 用apply指向调用debounce的对象，相当于_this.fn(args);
          }, delay);
      };
  }
  
  // 测试用例
  // test
  function testDebounce(e, content) {
      console.log(e, content);
  }
  var testDebounceFn = debounce(testDebounce, 1000); // 防抖函数
  document.onmousemove = function (e) {
      testDebounceFn(e, 'debounce'); // 给防抖函数传参
  }
  ```

  

* 节流：高频事件触发，但在n秒内只会执行一次，所以节流会稀释函数的执行频率

  ```js
  /**
   * 思路：每次触发事件时都判断当前是否有等待执行的延时函数
   **/
  function throttle(fn, delay) {
      var timer;
      return function () {
          var _this = this;
          var args = arguments;
          if (timer) {
              return;
          }
          timer = setTimeout(function () {
              fn.apply(_this, args);
              timer = null; // 在delay后执行完fn之后清空timer，此时timer为假，throttle触发可以进入计时器
          }, delay)
      }
  }
  
  // 测试用例
  function testThrottle(e, content) {
      console.log(e, content);
  }
  var testThrottleFn = throttle(testThrottle, 1000); // 节流函数
  document.onmousemove = function (e) {
      testThrottleFn(e, 'throttle'); // 给节流函数传参
  }
  ```
  
  **相同点**：
  
  - 都可以通过使用 `setTimeout` 实现。
  - 目的都是，降低回调执行频率。节省计算资源。
  
  **不同点**：
  
  - 函数防抖，在一段连续操作结束后，处理回调，**利用clearTimeout 和 setTimeout实现**。
  - 函数节流，在一段连续操作中，**每一段时间只执行一次**，频率较高的事件中使用来提高性能。
  - 函数防抖关注**一定时间连续触发的事件只在最后执行一次**，而函数节流侧重于**一段时间内只执行一次**。

### 函数防抖的应用场景

连续的事件，只需触发一次回调的场景有：

- 搜索框搜索输入。只需用户最后一次输入完，再发送请求
- 手机号、邮箱验证输入检测
- 窗口大小Resize。只需窗口调整完成后，计算窗口大小。防止重复渲染。

### 函数节流的应用场景

间隔一段时间执行一次回调的场景有：

- 滚动加载，加载更多或滚到底部监听
- 谷歌搜索框，搜索联想功能
- 高频点击提交，表单重复提交





[面试](https://www.bilibili.com/video/BV1Eb4y1f7Qv)
