# ES6

:::tip ES6不为人知的小技巧
学习使我快乐，妳信不？
:::

## 1. const、Object.freeze()有啥区别？

* `const` 的行为类型于 `let`，唯一的区别是：`const` 定义了一个无法重新分配的变量。且它们声明的都是块作用域（不会像`var`存在变量提升）
* `Object.freeze()` 将一个对象作为参数，并返回与不可变对象相同的对象。这意味着你**不能添加、删除或更改对象的属性。**

### a. const

* const声明一个变量

  ```js
  // 1. 使用 const 关键字声明一个变量user，并给它赋值
  const user = 'leon';
  
  // 2. 如果再给 user 赋值，则会报错：Uncaught TypeError
  user = 'aurora'
  
  /**
   * 结论：const 仅阻止重新分配，即：变量名不可重复定义！
   **/
  ```

* const声明一个对象

  使用对象时，const 仅**阻止重新分配**，而**不是不可变性**（不能够阻止更改其属性）。

  ```js
  const user = {
    name: 'leon',
    email: 'ttflowerboys@gmail.com'
  }
  
  // below would work, user is still mutable!
  user.name = 'aurora';
  
  // output
  console.log(user)
  ```

### b. Object.freeze()

当我们定义一个对象时，希望该**对象具有无法修改或删除的属性**。通过上面的例子得知，`const`做不到。那么，这就是`Object.freeze()` 存在的意义啦！

```js
const user = {
  name: 'leon',
  email: 'ttflowerboys@gmail.com'
}
Object.freeze(user);

// below won't work, user is still immutable!
user.name = 'aurora';

// output
console.log(user); // user is immutated
```

实际上，当对象具有**嵌套属性时，并不会完全冻结对象**。

```js
const user = {
  name: 'leon',
  contact: {
    email: 'ttflowerboys@gmail.com'
  }
}
Object.freeze(user);

// below won't work, user is still immutable!
user.name = 'aurora';

// this will work because the nested object is not frozen
user.contact.email = 'threetowns@163.com'

// output
console.log(user);
```

















