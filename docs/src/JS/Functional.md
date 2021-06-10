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



## Higher-order，高阶函数(AOP)

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





* filter
* map【forEach与map区别：forEach没有返回值，操作的原数组 ；map有返回值】
* reduce

### 高阶函数之AOP切片编程

> AOP切片，不修改原来的功能，在原有的基础上去添加新的功能。

```js
function Say() {
  console.log('say Hello')
}

Function.prototype.before = function(cb){
  const self = this;
  return function(){
    cb()
    self()
  }
}

const newSay = Say.before(function(){
  console.log('leon')
})

newSay();
```



## 闭包（Closures）

* 概念

  闭包让你可以在一个内层函数中访问到其外层函数的作用域。闭包的意思是“封闭外部状态”

* 作用

  * 可以读取函数内部的变量
  * 让这些变量的值始终保持在内存中

* 场景

* 案例

  * 防抖函数（debounce）与节流函数（throttle）

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





## 说说bind、call、apply 区别？



`call` 和 `apply` 都是为了解决改变 `this` 的指向。作用都是相同的，只是传参的方式不同。

除了第一个参数外，`call` 可以接收一个参数列表，`apply` 只接受一个参数数组。

```js
let a = {
    value: 1
}
function getValue(name, age) {
    console.log(name)
    console.log(age)
    console.log(this.value)
}
getValue.call(a, 'yck', '24')
getValue.apply(a, ['yck', '24'])
```

`bind`和其他两个方法作用也是一致的，只是该方法会返回一个函数。并且我们可以通过 `bind`实现柯里化。

*（下面是对这三个方法的扩展介绍）*

**如何实现一个 bind 函数**

https://mp.weixin.qq.com/s/HPOUy8K8qnWpfSJzxDl6_w

对于实现以下几个函数，可以从几个方面思考

- 不传入第一个参数，那么默认为 `window`
- 改变了 this 指向，让新的对象可以执行该函数。那么思路是否可以变成给新的对象添加一个函数，然后在执行完以后删除？

```
Function.prototype.myBind = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }
  var _this = this
  var args = [...arguments].slice(1)
  // 返回一个函数
  return function F() {
    // 因为返回了一个函数，我们可以 new F()，所以需要判断
    if (this instanceof F) {
      return new _this(...args, ...arguments)
    }
    return _this.apply(context, args.concat(...arguments))
  }
}
```

**如何实现一个call函数**

```
Function.prototype.myCall = function (context) {
  var context = context || window
  // 给 context 添加一个属性
  // getValue.call(a, 'yck', '24') => a.fn = getValue
  context.fn = this
  // 将 context 后面的参数取出来
  var args = [...arguments].slice(1)
  // getValue.call(a, 'yck', '24') => a.fn('yck', '24')
  var result = context.fn(...args)
  // 删除 fn
  delete context.fn
  return result
}
```

**如何实现一个apply函数**

```
Function.prototype.myApply = function (context) {
  var context = context || window
  context.fn = this

  var result
  // 需要判断是否存储第二个参数
  // 如果存在，就将第二个参数展开
  if (arguments[1]) {
    result = context.fn(...arguments[1])
  } else {
    result = context.fn()
  }

  delete context.fn
  return result
}
```









https://www.bilibili.com/video/BV1ET4y1F7B9/?spm_id_from=autoNext





数组去重、多维数组