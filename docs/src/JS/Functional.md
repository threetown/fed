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





https://www.bilibili.com/video/BV1ET4y1F7B9/?spm_id_from=autoNext





数组去重、多维数组