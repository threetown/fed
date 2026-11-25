# JavaScript Getter and Setter

https://www.programiz.com/javascript/getter-setter



在JavaScript中，有两种对象属性：

* Data properties（数据属性）
* Accessor properties（访问属性）



## Data Property

```js
const student = {

    // data property
    firstName: 'Monica';
};
```





## Accessor Property

访问器属性，是获取（get） 或 设置（set） 对象属性的方法。

* `get` - 定义getter方法以获取属性值
* `set` - 定义setter方法以设置属性值



### JavaScript Getter

getter方法用于访问对象的属性

```js
const student = {

    // data property
    firstName: 'Monica',
    
    // accessor property(getter)
    get getName() {
        return this.firstName;
    }
};

// accessing data property
console.log(student.firstName); // Monica

// accessing getter methods
console.log(student.getName); // Monica

// trying to access as a method
console.log(student.getName()); // error
```

在上面的程序中，一个getter方法 `getName()` 创建一个访问对象的属性。

```js
get getName() {
    return this.firstName;
}
```



### JavaScript Setter











**Note:** The syntax to add the property to an object constructor function is:

```
objectConstructorName.prototype.key = 'value';
```