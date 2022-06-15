# 浏览器中存储数据

:::tip

* Cookie，docuement.cookie
* LocalStorage，sessionStorage
* IndexedDB

:::

https://zh.javascript.info/data-storage

## Cookie，docuemnt.cookie

:::tip 概要

Cookie 是直接存储在浏览器中的一小串数据。它们是 <u>HTTP 协议的一部分</u>，由 [RFC 6265](https://tools.ietf.org/html/rfc6265) 规范定义。

Cookie 通常是由 Web 服务器使用响应 `Set-Cookie` HTTP-header 设置的。然后浏览器使用 `Cookie` HTTP-header 将它们自动添加到（几乎）每个对相同域的请求中。

最常见的用处之一就是身份验证：

1. 登录后，服务器在响应中使用 `Set-Cookie` HTTP-header 来设置具有唯一“会话标识符（session identifier）”的 cookie。
2. 下次如果请求是由相同域发起的，浏览器会使用 `Cookie` HTTP-header 通过网络发送 cookie。
3. 所以服务器知道是谁发起了请求。

我们还可以使用 `document.cookie` 属性从浏览器访问 cookie。

:::





## LocalStorage、sessionStorage

Web 存储对象 `localStorage` 和 `sessionStorage` 允许我们在浏览器中保存键/值对。

- `key` 和 `value` 都必须为字符串。
- 存储大小限制为 5MB+，具体取决于浏览器。
- 它们不会过期。
- 数据绑定到源（域/端口/协议）。

| `localStorage`                       | `sessionStorage`                                       |
| :----------------------------------- | :----------------------------------------------------- |
| 在同源的所有标签页和窗口之间共享数据 | 在当前浏览器标签页中可见，包括同源的 iframe            |
| 浏览器重启后数据仍然保留             | 页面刷新后数据仍然保留（但标签页关闭后数据则不再保留） |

API：

- `setItem(key, value)` —— 存储键/值对。
- `getItem(key)` —— 按照键获取值。
- `removeItem(key)` —— 删除键及其对应的值。
- `clear()` —— 删除所有数据。
- `key(index)` —— 获取该索引下的键名。
- `length` —— 存储的内容的长度。
- 使用 `Object.keys` 来获取所有的键。
- 我们将键作为对象属性来访问，在这种情况下，不会触发 `storage` 事件。