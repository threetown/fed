# 函数式编程

:::tip Functional Programming
函数式编程（Functional Programming）
:::

composition 可组合



### 找出dog

```js
var animals = [
  { name: 'Fluffykins', species: 'rabbit' },
  { name: 'Caro', species: 'dog' },
  { name: 'Hamilton', species: 'dog' },
  { name: 'Harold', species: 'fish' },
]
```

#### 方法一：for

```js
var dogs = []
for(var i = 0; i < animals.length; i++){
  if(animals[i].species === 'dog')
    dogs.push(animals[i])
}
```

#### 方法二：filter

```js
var dogs = alimals.filter((animal) => animal.species === 'dog')

# or
var isDog = (animal) => animal.species === 'dog'
var dogs = animals.filter(isDog)
```

```bash
node --harmony_arrow_functions example.js
```



## Higher-order，高阶函数

> 把一个函数当成参数传递给另一个函数
>
> 一个函数返回了一个函数（柯理化）

```js
function fn(cb) {
  cb()
}

// usage
fn(function() { console.log(1) })

function Fn(x) {
  return function(y) {
    return x + y;
  }
}
Fn(1)(2)
```

### 应用场景

* 判断类型

  ```js
  const types = ['String', 'Number', 'Boolean', 'Undefined', 'Null', 'Object', 'Array'];
  
  let fns = {};
  types.forEach(type => {
    fns[`is${type}`] = isType(type)
  })
  
  function isType(type){
    return function(obj){
      return Object.prototype.toString.call(obj).includes(type);
    }
  }
  
  // demo
  const a = true;
  console.log(fns.isBoolean(a))
  ```

  

* filter
* map【forEach与map区别：forEach没有返回值，操作的原数组 ；map有返回值】
* reduce

### 高阶函数之AOP切片编程

> AOP切片，不修改原来的功能，在原有的基础上去添加新的功能。
>
> AOP（面向切面编程）的主要作用是把一些跟核心业务逻辑模块无关的功能抽离出来，这些跟业务逻辑无关的功能通常包括**日志统计**、**安全控制**、异常处理等。
>
> loadsh.after()...

```js
function Say(who) {
  console.log(who + ' say Hello!')
}

Function.prototype.before = function(cb){
  const self = this;
  return function(){
    cb();
    self(...arguments);
  }
}

const newSay = Say.before(function(){
  console.log('Hi~');
})

newSay('leon');
```



## 闭包（Closures）

* 概念

  闭包让你可以在一个内层函数中访问到其外层函数的作用域。闭包的意思是“封闭外部状态”

* 作用

  * 可以读取函数内部的变量
  * 让这些变量的值始终保持在内存中

### 防抖函数（debounce）与节流函数（throttle）

>* 防抖函数：只有当**鼠标停止**移动时，才会执行一次。
>  * 搜索框搜索输入。只需要用户最后一次输入完再发送请求
>  * 手机号、邮箱格式的输入验证检测
>  * 窗口大小的 resize 。只需窗口调整完成后，计算窗口的大小，防止重复渲染。
>* 节流函数：分布的较为均匀，**每过一段时间**就会执行一次。
>  * 滚动加载，加载更多或滚动到底部监听
>  * 谷歌搜索框，搜索联想功能
>  * 高频点击提交，表单重复提交
>  * 省市信息对应字母快速选择

**防抖**

> 触发高频事件后n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间

- 思路：

> 每次触发事件时都取消之前的延时调用方法

```js
function debounce(fn) {
      let timeout = null; // 创建一个标记用来存放定时器的返回值
      return function () {
        clearTimeout(timeout); // 每当用户输入的时候把前一个 setTimeout clear 掉
        timeout = setTimeout(() => { // 然后又创建一个新的 setTimeout, 这样就能保证输入字符后的 interval 间隔内如果还有字符输入的话，就不会执行 fn 函数
          fn.apply(this, arguments);
        }, 500);
      };
    }
    function sayHi() {
      console.log('防抖成功');
    }

    var inp = document.getElementById('inp');
    inp.addEventListener('input', debounce(sayHi)); // 防抖
```

**节流**

> 高频事件触发，但在n秒内只会执行一次，所以节流会稀释函数的执行频率

- **思路**：每次触发事件时都判断当前是否有等待执行的延时函数

```js
function throttle(fn) {
      let canRun = true; // 通过闭包保存一个标记
      return function () {
        if (!canRun) return; // 在函数开头判断标记是否为true，不为true则return
        canRun = false; // 立即设置为false
        setTimeout(() => { // 将外部传入的函数的执行放在setTimeout中
          fn.apply(this, arguments);
          // 最后在setTimeout执行完毕后再把标记设置为true(关键)表示可以执行下一次循环了。当定时器没有执行的时候标记永远是false，在开头被return掉
          canRun = true;
        }, 500);
      };
    }
    function sayHi(e) {
      console.log(e.target.innerWidth, e.target.innerHeight);
    }
    window.addEventListener('resize', throttle(sayHi));
```

* 输出1~10

```js
for (var i = 0; i < 10; i++) {
    // capture the current state of 'i'
    // by invoking a function with its current value
    (function(i) {
        setTimeout(function() { console.log(i); }, 100 * i);
    })(i);
}

for (let i = 0; i < 10; i++) {
		setTimeout(function() { console.log(i); }, 100 * i);
}
```



## 柯理化（Currying）

[leetcode - 闭包与柯里化](https://leetcode-cn.com/circle/discuss/8wmW55/)

柯里化（Currying）是把接受多个参数的函数转变为单一参数的函数，并且返回接受余下的参数且返回结果的新函数的技术。

1. 通过闭包管理
2. 支持链式调用
3. 每次运行返回一个 `function`

即：通过将多个参数换成一个参数，每次运行返回新函数的技术

* 普通的 add 函数

```js
function add (a, b) {
  return a + b;
}
add(1, 2);

* 柯里化函数

​```js
function curryingAdd (x) {
  return function(y) {
    return x + y;
  }
}
curryingAdd(x)(y);
```

**实现 add(1)(2)(3)**

```js
// 实现一个 add 方法，使计算结果能够满足以下预期
add(1)(2)(3) = 6;
add(1, 2, 3)(4) = 10;
add(1)(2)(3)(4)(5) = 15;
```

答：

```js
function add () {
  const numberList = Array.from(arguments);

  // 进一步收集剩余参数
  const calculate = function() {
    numberList.push(...arguments);
    return calculate;
  }

  // 利用 toString 隐式转换，最后执行时进行转换
  calculate.toString = function() {
    return numberList.reduce((a, b) => a + b, 0);
  }

  return calculate;
}

// 实现一个 add 方法，使计算结果能够满足以下预期
console.log(add(1)(2)(3)); // 6
console.log(add(1, 2, 3)(4)); // 10;
console.log(add(1)(2)(3)(4)(5)); // 15;
```



## 高阶函数（HOF）

高阶函数（high-order function 简称：HOF），满足了以下两点就可以称作高阶函数了:

- 函数可以**作为参数被传递**
- 函数可以**作为返回值输出**



## 观察者和发布订阅模式

* 观察者模式

```js
/**
 * 观察者模式：观察者和被观察者，如果被观察都数据变化了，通知观察者
 **/
function Events() {
  this.callbacks = [];
  this.results = [];
}

// 订阅
Events.prototype.on = function(callback) {
  this.callbacks.push(callback)
}

// 发布
Events.prototype.emit = function(data) {
  this.results.push(data)
  this.callbacks.forEach(c => c(this.results));
}

// demo
let e = new Events();
e.on(function(arr) {
  if(arr.length === 3){
    console.log(arr)
  }
})

fs.readFile('./a.txt', 'utf-8', function(err, data){
  e.emit(data)
})
fs.readFile('./b.txt', 'utf-8', function(err, data){
  e.emit(data)
})
fs.readFile('./c.txt', 'utf-8', function(err, data){
  e.emit(data)
})
```

* 发布订阅模式

```js
// 被观察者
class Subject {
  constructor(name){
    this.name = name;
    this.observers = [];
  }
  
  // 被观察者要提供一个接受观察者的方法
  attach(){
    
  }
}
```




https://www.bilibili.com/video/BV1ET4y1F7B9/?spm_id_from=autoNext


数组去重、多维数组

### 参考文献
* [深入理解javascript函数进阶系列第一篇——高阶函数](https://www.xiaohuochai.cc/posts/5afa86b6002834409838bd2f)
* [深入理解闭包系列第一篇——到底什么才是闭包](https://www.xiaohuochai.cc/posts/5afaa7e6002834409838bd3b)
* [深入理解this机制系列第一篇——this的4种绑定规则](https://www.xiaohuochai.cc/posts/5afaaabe002834409838bd40)
* [一张图理解prototype、proto和constructor的三角关系](https://www.xiaohuochai.cc/posts/5afaac67002834409838bd43)
* [this 的工作原理](http://bonsaiden.github.io/JavaScript-Garden/zh/#function.this)
