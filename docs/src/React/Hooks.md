# React HooK

:::tip Hook简介
React 的核心是组件。v16.8 版本之前，组件的标准写法是类（class）。

Hook 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。
:::

## 类和函数的差异

* **类（class）是数据和逻辑的封装。** 也就是说，组件的状态和操作方法是封装在一起的。如果选择了类的写法，就应该把相关的数据和操作，都写在同一个 class 里面。
* **函数一般来说，只应该做一件事，就是返回一个值。** 如果你有多个操作，每个操作应该写成一个单独的函数。而且，数据的状态应该与操作方法分离。根据这种理念，React 的函数组件只应该做一件事情：返回组件的 HTML 代码，而没有其他的功能。



## 常用钩子函数

下面介绍 React 默认提供的四个最常用的钩子。

:::tip React Hooks

- useState()：用于为函数组件引入状态（state）。
- useContext()：在组件之间共享状态。
- useReducer()
- useEffect()：来引入具有副作用的操作，最常见的就是向服务器请求数据。

:::



```react {1,4-7}
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]); // 仅在 count 更改时更新
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

### State Hook

:::tip
 * useState 就是一个 Hook，Hook 不能在 class 组件中使用。
 * useState, 通过在函数组件里调用它来给组件添加一些内部 state
 * useState 会返回一对值：当前状态和一个让你更新它的函数，你可以在事件处理函数中或其他一些地方调用这个函数。
 * 它类似 class 组件的 this.setState，但是它不会把新的 state 和旧的 state 进行合并。
 * const [count, setCount] = useState(0);
 * useState 唯一的参数就是初始 state（如上面的计数器是从零开始的）。这个初始 state 参数只有在第一次渲染时会被用到。
 * 数组解构的语法让我们在调用 useState 时可以给 state 变量取不同的名字。

:::



### Effect Hook

:::tip

 * 🔴 useEffect 就是一个 Effect Hook，给函数组件增加了操作副作用（数据获取、订阅或者手动修改过 DOM）的能力。
 * 它跟 class 组件中的 componentDidMount、componentDidUpdate 和 componentWillUnmount 具有相同的用途，只不过被合并成了一个 API。
 * 👍 如果某些特定值在两次重渲染之间没有发生变化，你可以通知 React 跳过对 effect 的调用，只要传递数组作为 useEffect 的第二个可选参数即可

:::



## 自定义Hook





***

## 参考文献

https://zh-hans.reactjs.org/docs/hooks-intro.html