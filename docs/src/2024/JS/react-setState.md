## setState执行机制

> 在react中，组件的显示形态可以由：数据状态（`state`）和外部参数所决定。

当需要修改组件值的状态时，需要通过调用 `setState` 来改变，从而达到更新组件内部数据的作用。然后重新执行`render`函数，来更新页面视图。

```js
import React, { Component } from 'react'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = { message: "Hello World"; }
    }

    render() {
        return (<div>
            <h2>{this.state.message}</h2>
            <button onClick={e => this.changeText()}>Change Text</button>
        </div>)
    }

    changeText() { this.setState({ message: "well Done"; }) }
}
```

* 如果直接修改 `state` 状态，会发现页面并不会有任何反应，但 `state` 的状态已经发生了改变。

```js
changeText() { 
  this.state.message = "good Job";
}
```

> React不像 `vue2` 中调用 `Object.defineProperty` 数据响应式 或 `vue3` 调用 `Proxy` 监听数据的变化。

必须通过 `setState` 来告知react组件`state`已经发生了改变

```js
Component.prototype.setState = function(partialState, callback) {
  invariant(
    typeof partialState === 'object' ||
      typeof partialState === 'function' ||
      partialState == null,
    'setState(...): takes an object of state variables to update or a ' +
      'function which returns an object of state variables.',
  );
  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};
```

从上面可以看到，setState`第一个参数可以是一个对象，或者是一个函数，而第二个参数是一个**回调函数**，用于可以实时的获取到更新之后的数。



## 更新类型

在使用`setState`更新数据的时候，`setState`的更新类型分成：

- 异步更新
- 同步更新

### 异步更新

```js
constructor(props) {
    super(props);
    this.state = { message: "Hello World"; }
}

changeText() {
  this.setState({
    message: "Are you OK?"
  })
  console.log(this.state.message); // output: Hello World
}
```

* 如果想要**立刻获取更新后的值**，在第二个参数的**回调**中更新后会执行

```diff
  this.setState({
    message: "Are you OK?"
+ }, () => {
    console.log(this.state.message); // output: Are you OK?
  })
```



### 同步更新

* 在 `setTimeout` 中更新：

```diff
+ setTimeout(() => {
    this.setState({
      message: "Are you OK?"
    })
    console.log(this.state.message); // output: Are you OK?
+ }, 0)
```

* 原生DOM事件更新：

```js
componentDidMount() {
  const btnEl = document.getElementById("btn");
  btnEl.addEventListener('click', () => {
    this.setState({
      message: "Are you OK?"
    });
    console.log(this.state.message); // output: Are you OK?
  })
}
```



### 小结

- 在组件生命周期或React合成事件中，setState是异步
- 在setTimeout或者原生dom事件中，setState是同步



## 批量更新

* 对同一个值进行多次 `setState`， `setState` 的批量更新策略会对其进行覆盖，取最后一次的执行结果。

```js
handleClick = () => {
    this.setState({
        count: this.state.count + 1,
    })
    console.log(this.state.count) // 1

    this.setState({
        count: this.state.count + 1,
    })
    console.log(this.state.count) // 1

    this.setState({
        count: this.state.count + 1,
    })
    console.log(this.state.count) // 1
}

// console打印的都是1；页面显示的为 2
```

* 如果是下一个`state`依赖前一个`state`的话，推荐给`setState`一个参数传入一个`function`，如下：

```js
onClick = () => {
    this.setState((prevState, props) => {
      return {count: prevState.count + 1};
    });
    this.setState((prevState, props) => {
      return {count: prevState.count + 1};
    });
}
```







### 参考资料

* [说说 React中的setState执行机制](https://vue3js.cn/interview/React/setState.html)

