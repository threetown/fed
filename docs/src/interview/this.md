## this关键字

在JavaScript中，`this` 关键字指向 对象。

The `this` keyword refers to different objects depending on how it is used:

| In an object method, `this` refers to the **object**.        |
| ------------------------------------------------------------ |
| Alone, `this` refers to the **global object**.               |
| In a function, `this` refers to the **global object**.  `function myFunction() { return this; }` |
| In a function, in strict mode, `this` is `undefined`.  `"use strict"; function myFunction() { return this; }` |
| In an event, `this` refers to the **element** that received the event.  `<button onclick="this.style.display='none'"> Click to Remove Me! </button>` |
| Methods like `call()`, `apply()`, and `bind()` can refer `this` to **any object**. |

![img](https://www.tutorialsteacher.com/Content/images/oo-js/this-global.png)







https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/this







在非严格模式下使用 `call` 和 `apply` 时，如果用作 `this` 的值不是对象，则会被尝试转换为对象。`null` 和 `undefined` 被转换为全局对象。





