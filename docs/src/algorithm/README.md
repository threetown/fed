# 算法

js中算法是程序员之前的一道分水岭。



## 1. js中数据去重

```js
const arr = [1, 2, 3, 5, 3, 2];

// 方法一：
console.log(Array.form(new Set(arr)));

// 方法二：
const newArr = arr.filter((item, idx) => {
  return arr.indexOf(item, 0) === idx
})
console.log(newArr)

// 方法三：
let tempArr = []
arr.map((item, idx) => {
  if(!tempArr.includes(item)){
    tempArr.push(item)
  }
})
console.log(tempArr)

// 方法四：
console.log([...new Set(arr)])


```













