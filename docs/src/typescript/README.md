# TypeScript

:::tip 与标准同步发展

TypeScript 的另一个重要的特性就是坚持与 ECMAScript 标准同步发展。

ECMAScript 是 JavaScript 核心语法的标准，自 2015 年起，每年都会发布一个新版本，包含一些新的语法。

一个新的语法从提案到变成正式标准，需要经历以下几个阶段：

- Stage 0：展示阶段，仅仅是提出了讨论、想法，尚未正式提案。
- Stage 1：征求意见阶段，提供抽象的 API 描述，讨论可行性，关键算法等。
- Stage 2：草案阶段，使用正式的规范语言精确描述其语法和语义。
- Stage 3：候选人阶段，语法的设计工作已完成，需要浏览器、Node.js 等环境支持，搜集用户的反馈。
- Stage 4：定案阶段，已准备好将其添加到正式的 ECMAScript 标准中。

一个语法进入到 Stage 3 阶段后，TypeScript 就会实现它。一方面，让我们可以尽早的使用到最新的语法，帮助它进入到下一个阶段；另一方面，处于 Stage 3 阶段的语法已经比较稳定了，基本不会有语法的变更，这使得我们能够放心的使用它。

除了实现 ECMAScript 标准之外，TypeScript 团队也推进了诸多语法提案，比如可选链操作符（`?.`）、空值合并操作符（`??`）、Throw 表达式、正则匹配索引等。

:::

## 安装

```bash
yarn add typescript -D
```

## tsconfig.js

```bash
yarn tsc --init
```

## Hello TypeScript

* 创建一个以 ***.ts** 为后缀的文件

  ```bash
  touch hello.ts
  ```

* 编写代码

  ```tsx
  function foo(person: string){
    return `Hello, ${person}`
  }
  
  console.log(foo('leon'))
  ```

* 手动编译

  ```bash
  tsc hello.ts
  ```

* 编译后，会生成一个 `hello.js`

  ```js
  function foo(person) {
      return 'Hello, ' + person;
  }
  console.log(foo('leon'));
  ```



:::warning 小结

* 在 TypeScript 中，我们使用 `:` **指定变量类型**，`:`的前后**有没有空格都可以**。
* TypeScript 只会在**编译时对类型进行静态检查**，如果发现有错误，编译的时候就会报错。
* TypeScript 编译的时候即使**报错**了，还是**会生成编译结果**。

:::