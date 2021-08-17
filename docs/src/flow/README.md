# flow

:::tip

flow是javascript静态类型检测工具

:::



* vs code， 偏好设置，设置，`javascript validate` ，关闭 javascript语法检测



## 一、安装并使用

### 1.1 安装

```bash
yarn add flow-bin -D
```

### 1.2 初始化

* 创建 `.flowconfig`文件

```bash
yarn flow init
```

生成文件内容：

```json
[ignore]

[include]

[libs]

[lints]

[options]

[strict]

```



### 1.3 demo

1. 在文件开头添加一个 `@flow` 注释，表示会进行flow静态语法检测：

2. 为成员添加 类型注解：

```js
/* @flow */

/* 类型注解 */
function square(n: number): number {
    return n * n;
}

square(2)
```



### 1.4 开启检测

执行以下命令，会开启一个 flow的后台进程，会帮我们找到错误

```bash
yarn flow
```

我们还可以通过：`flow status`、`flow start`、`flow stop`，分别查看 **flow** 的进程、开启或关闭。



## 二、编译移除注解

### 2.1 方法一：flow-remove-types

* 安装：`yarn add flow-remove-types --dev`

* 执行：`yarn flow-remove-types . -d dist`

### 2.2 方法二：使用babel

* 安装依赖

  * `@babel/core`：babel的核心
  * `@babel/cli`：babel脚手架，方便在命令行直接执行 babel命令
  * `@babel/preset-flow`：转换flow注解的插件

  ```bash
  yarn add @babel/core @babel/cli @babel/preset-flow -D
  ```

* 配置 `.babelrc`

  ```json
  {
    "presets": ["@babel/preset-flow"]
  }
  ```

* 在 `package.json` 中增加 `build` 命令

  将 **src/** 目录下文件，编译转换到 **lib/** 目录

  ```diff
   "scripts": {
  +  "build": "babel src/ -d lib/",
   }
  ```

  

## 三、flow开发工具插件

:::tip

[Flow integrations for code editors](https://flow.org/en/docs/editors)

:::

* Visual Studio Code插件：[flow Language Support](https://marketplace.visualstudio.com/items?itemName=flowtype.flow-for-vscode)



## 四、flow类型检测

### 4.1 类型推断

根据代码中使用情况，推断出变量类型，就叫 类型推断。如下：

```js
/* @flow */

function square(n) {
  return n * n;
}

square('100') // Error
square(100) //
```

一般情况下，建议给代码中每个成员，添加注解！



### 4.2 类型注解

```js
/* @flow */

// 变量注解
let num: number = 100;

// 联合类型，用 | 隔开
let bar: string | number = 100; // or '100'

// 函数参数注解【有返回值时】
function square(n: number): number{
  return n * n
}

// 函数注解【没有返回值时】
function foo(): void{
  
}
```



### 4.3 原始类型

:::tip Primitive Types

原始类型：string、number、boolean、null、undefined、symbol

:::

```js
/* @flow */

const a: string  = 'hello'
const b: number  = 1
const c: boolean = true
const d: null    = null
const e: void    = undefined;  // 注意这里比较特殊
const f: symbol  = Symbol()
```

### 4.4 数组类型

* 方法一：**Array**

  ```js
  /* @flow */
  
  // 通过 Array 注解时，需要通过泛型如：<number> 指定元素类型
  const arr: Array<number> = [1, 2, 3]
  ```

* 方法二：在元素后使用 `[]`

  ```js
  /* @flow */
  const arr: number[] = [1, 2, 3]
  ```

* 方法三：对于固定长度的数组 —— **元组**

  ```js
  /* @flow */
  const foo: [string, number] = ['foo', 100]
  ```

### 4.5 对象类型

```js
/* @flow */

const obj1: { foo: string, bar: number } = { foo: 'string', bar: 100 }

// 对于可选元素，使用 ?:
const obj2: { foo?: string, bar: number } = { bar: 100 }

// 使用索引器，设置键值（以下设置 键名和键值都为string）
const obj3: { [string]: string } = {}
obj3.key1 = 'v1'
obj3.key2 = 'v2'
```

### 4.6 函数类型

```js
/* @flow */

// 使用限制回调函数的参数，可以使用函数签名的方式
// 如下：回调函数有 string和number两个参数，值没有返回值
function foo(callback: (string, number) => void){
 callback() 
}

foo(function(str, num) {
  // str => string
  // num => number
})
```

### 联合类型（ [union types](https://flow.org/en/docs/types/unions/)）

### 有可能类型（Maybe Types）

### 元组类型（Tuple Types）

### Type别名（Type Aliases）

### 接口类型（Interface Types）

### 4.7 特殊类型

* 字面量 + 联合类型（又叫，或类型）

  ```js
  /* @flow */
  
  // 字面量类型，a的值只能是 foo
  const a: 'foo' = 'foo'
  
  // 字面量 + 联合类型，type的值只是能下面三种之一
  const type: 'success' | 'warning' | 'danger' = 'success'
  
  // 对于联合类型，可以使用 type 关键字做单独的声明或别名
  type statusType = 'success' | 'warning' | 'danger'
  const type2: statusType = 'success'
  
  // maybe，有可能的类型
  const gender: ?number = undefined
  // 等价于
  const gender: number | null | void = undefined
  ```

### 4.8 Mixed和Any

* mixed，所有类型的联合类型（强类型）

  ```js
  /* @flow */
  
  function passMixed(value: mixed) {
    // 会提示语法错误
    value.substr(1) 
    value * value
  }
  
  passMixed('string')
  passMixed(100)
  ```

* any，任意类型（弱类型）

  ```js
  /* @flow */
  
  function passAny(value: any){
    value.substr(1) // 当成 string
    value * value   // 当成 number
  }
  
  passAny('string')
  passAny(100)
  ```



## 五、运行环境API

* [core.js](https://github.com/facebook/flow/blob/master/lib/core.js)
* [dom.js](https://github.com/facebook/flow/blob/master/lib/dom.js)
* [bom.js](https://github.com/facebook/flow/blob/master/lib/bom.js)
* [cssom.js](https://github.com/facebook/flow/blob/master/lib/cssom.js)
* [node.js](https://github.com/facebook/flow/blob/master/lib/node.js)

```js
/* @flow */

const element: HTMLElement | null = document.getElementById('app')
```



## 六、小结

* [flow类型的官方文档](https://flow.org/en/docs/types)
* [flow-type手册](https://www.saltycrane.com/cheat-sheets/flow-type/latest/)













