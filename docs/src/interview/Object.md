# JavaScript Object

In the [JavaScript data types](https://www.programiz.com/javascript/data-types) tutorial, you learned about 7 different primitive data types. And here, you are going to learn about the eighth data-type (JavaScript object).



JavaScript object is a non-primitive data-type that allows you to store multiple collections of data.



## JavaScript Object Declaration

对象声明，The syntax to declare an object is:

```js
const object_name = {
   key1: value1,
   key2: value2
}
```

Here, an object `object_name` is defined. Each member of an object is a **key: value** pair separated by commas and enclosed in curly braces `{}`.



## JavaScript Object Properties

对象属性，In JavaScript, `key: value` pairs are called **properties**. For example,

```js
let person = { 
    name: 'John',
    age: 20
};

```

![Example of JavaScript object properties](https://cdn.programiz.com/sites/tutorial2program/files/javascript-object-properties.png)



## Accessing Object Properties

访问对象属性，You can access the **value** of a property by using its **key**.

### 1. Using dot Notation

使用点符号，Here's the syntax of the dot notation.

```js
objectName.key
```



### 2. Using bracket Notation

使用括号符号，Here is the syntax of the bracket notation.

```js
objectName["propertyName"]
```



## JavaScript Nested Objects

嵌套对象，An object can also contain another object. For example,

```js
// nested object
const student = { 
    name: 'John', 
    age: 20,
    marks: {
        science: 70,
        math: 75
    }
}

// accessing property of student object
console.log(student.marks); // {science: 70, math: 75}

// accessing property of marks object
console.log(student.marks.science); // 70
```



## JavaScript Object Methods

对象方法，In JavaScript, an object can also contain a function. For example,

```js
const person = {
    name: 'Sam',
    age: 30,
    // using function as a value
    greet: function() { console.log('hello') }
}

person.greet(); // hello
```

Here, a function is used as a value for the greet key. That's why we need to use `person.greet()` instead of `person.greet` to call the function inside the object.







In JavaScript, `this` keyword when used with the object's method refers to the object. `this` is bound to an object.









https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

### Object.defineProperty()

可以枚举时，可使用 `for...in` 或`Object.keys` 方法



#### 属性描述符

* 数据描述符：一个具有值的属性，该值可以是可写的，也可以是不可写的。
* 存取描述符：由 `getter` 函数和 `setter` 函数所描述的属性。

一个描述符，只能是两者其中之一。这两种描述符都是对象，它们共享以下可选键值：

​		

- `configurable`

  当且仅当该属性的 `configurable` 键值为 `true` 时，该属性的描述符才能够被改变，同时该属性也能从对应的对象上被删除。 **默认为** **`false`**。

- `enumerable`

  当且仅当该属性的 `enumerable` 键值为 `true` 时，该属性才会出现在对象的枚举属性中。 **默认为 `false`**。

数据描述符还具有以下可选键值：

- `value`

  该属性对应的值。可以是任何有效的 JavaScript 值（数值，对象，函数等）。 **默认为 [`undefined`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)**。

- `writable`

  当且仅当该属性的 `writable` 键值为 `true` 时，属性的值，也就是上面的 `value`，才能被[`赋值运算符` (en-US)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#assignment_operators)改变。 **默认为 `false`。**



**存取描述符**还具有以下可选键值：

- `get`

  属性的 getter 函数，如果没有 getter，则为 `undefined`。当访问该属性时，会调用此函数。执行时不传入任何参数，但是会传入 `this` 对象（由于继承关系，这里的`this`并不一定是定义该属性的对象）。该函数的返回值会被用作属性的值。 **默认为 [`undefined`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)**。

- `set`

  属性的 setter 函数，如果没有 setter，则为 `undefined`。当属性值被修改时，会调用此函数。该方法接受一个参数（也就是被赋予的新值），会传入赋值时的 `this` 对象。 **默认为 [`undefined`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)**。