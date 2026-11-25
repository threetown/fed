## JavaScript Function

函数是**头等 (\**first-class\**)\**对象，因为它们可以像任何其他\**对象**一样具有属性和方法。

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function



https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions





https://www.programiz.com/javascript/function



![Working of JavaScript function](https://www.programiz.com/sites/tutorial2program/files/javascript-function-example1.png)

![Working of JavaScript Function with parameter](https://www.programiz.com/sites/tutorial2program/files/javascript-function-with-parameter.png)

When a value is passed when declaring a function, it is called **parameter**. 

And when the function is called, the value passed is called **argument**.

当声明函数时传递值时，它被称为parameter。

当调用函数时，传递的值称为参数。

### Function Return

The `return` statement can be used to return the value to a function call.

The `return` statement denotes that the function has ended. Any code after `return` is not executed.

If nothing is returned, the function returns an `undefined` value.

![Working of JavaScript Function with return statement](https://www.programiz.com/sites/tutorial2program/files/javascript-return-statement.png)

## Arrow Function

In ES2015, JavaScript expressions are written as arrow functions. You will learn about them in later tutorials.





## Variable Scope

作用域







## JavaScript Hoisting

提升

**Hoisting** in JavaScript is a behavior in which a function or a variable can be used before declaration. 

```js
// using test before declaring
console.log(test);   // undefined
var test;
```



```js
// using test before declaring
var test;
console.log(test); // undefined
```



### Variable Hoisting

In terms of variables and constants, keyword `var` is hoisted and `let` and `const` does not allow hoisting.



### Function Hoisting

A function can be called before declaring it. 

```js
// program to print the text
greet();

function greet() {
    console.log('Hi, there.');
}

```

In the above program, the function `greet` is called before declaring it and the program shows the output. This is due to hoisting.



However, when a function is used as an **expression**, an error occurs because only declarations are hoisted. For example;

```js
// program to print the text
greet();

let greet = function() {
    console.log('Hi, there.');
}
```

代码报错：

```bash
Uncaught ReferenceError: greet is not defined
```

If `var` was used in the above program, the error would be:

```js
Uncaught TypeError: greet is not a function
```







## JavaScript Recursion

Recursion(递归) is a process of calling itself. A function that calls itself is called a recursive function.

The syntax for recursive function is:

```js
function recurse() {
    // function code
    recurse();
    // function code
}

recurse();
```



![Working of recursion in JavaScript](https://cdn.programiz.com/sites/tutorial2program/files/javascript-recursion.png)





## call、apply、bind

https://juejin.cn/post/6941194115392634888



## 高阶函数

https://cloud.tencent.com/developer/article/1621572







内置函数



To learn more about built-in methods, visit [JavaScript Built-In Methods](https://www.programiz.com/javascript/library).