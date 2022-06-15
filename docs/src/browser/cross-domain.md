# 浏览器跨域

## 一、同源策略

> **同源策略**（Same Origin Policy）是一个重要的安全策略，它用于限制一个[origin](https://developer.mozilla.org/zh-CN/docs/Glossary/Origin)的文档或者它加载的脚本如何能与另一个源的资源进行交互。它能帮助阻隔恶意文档，减少可能被攻击的媒介。所谓"同源"指的是三个相同：
>
> * 协议相同：（如：HTTP、HTTPS等）
> * 域名相同：（如：`api.threetowns.cn`，`cdn.threetowns.cn` 域名相同，但它们属于不同子域名）
> * 端口相同：（如：HTTP端口为80、HTTPS端口为 443）



![url](./images/url.svg)



## 二、跨域解决方式

:::tip

* JSONP
* CORS跨域资源共享
* 基于http proxy实现跨域请求
* 基于postMessage实现跨域处理
* 基于iframe的跨域解决方案：window.name、document.domain、localtion.hash
* webScoket和nginx反向代理

:::

### 1. HTML特殊标签

`<link>`、`<script>`、`<img>`、`<iframe>`等这些标签具有跨域特性，可以直接访问。



### 2. JSONP

客户端告诉服务器一个回调函数的名称，服务器在返回script里调用这个回调函数，同时传进客户端需要的数据，这样返回的代码就在浏览器执行了。

它只能实现get请求，不安全，容易遭到XSS攻击

* 方法一：通过 `<script>` 具有跨域特性的标签，配合回调函数

  ```html
  <script src="http://api.threetowns.cn/getDate?callback=writeDate"></script>
  
  <script>
  function writeDate(date){
    console.log(date)
  }
  </script>
  ```

* 方法二：通过ajax的get请求

  ```js
  $.ajax({
    url: 'http://api.threetowns.cn/getDate',
    type: 'get',                      // 请求方式为：get
    dataType: 'jsonp',                // 数据类型为：jsonp
    jsonpCallback: 'handleCallback'   // 自定义回调函数
  }).then(res => {
    console.log(res)
  })
  ```

### 3. CORS

跨域资源共享（CORS）是一种机制，它使用额外的 HTTP 头来告诉浏览器，让运行在一个 origin (domain) 上的Web应用被准许访问来自不同源服务器上的指定的资源。

* 请求方法：以下三种方法之一：HEAD/GET/POST
* 实现方法：服务端在http响应头中添加 `Access-Control-Allow-origin`



### 4. postMessage

`window.postMessage(message, targetOrigin, [transfer]);` 方法是**html5新引进的特性**，不受同源策略限制，用于解决以下方面的问题：

1. 页面和其打开的新窗口的数据传递
2. 多窗口之间消息传递
3. 页面与嵌套的iframe消息传递



* 语法：
  * data：从其他 window 中传递过来的对象。
  * origin：调用 `postMessage` 时消息发送方窗口的 [origin](https://developer.mozilla.org/en-US/docs/Origin) . 
  * source：对发送消息的[窗口](https://developer.mozilla.org/en-US/docs/Web/API/Window)对象的引用; 您可以使用此来在具有不同origin的两个窗口之间建立双向通信。

```js
// 接收数据: 监听message事件的发生
addEventListener('message', event => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () =>
          replyPort.postMessage({
            error: null,
          }),
        error =>
          replyPort.postMessage({
            error,
          }),
      ),
    );
  }
});

```



### 5. WebSocket

HTTP协议有一个缺陷：通信只能由客户端发起，做不到服务器主动向客户端推送信息。

WebSocket最大特点是：服务器可以主动向客户端推送信息，客户端也可以主动向服务器发送信息。



### 6. http proxy

vue中使用了 `http-proxy-middleware` 进行反射代理

