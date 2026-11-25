## JavaScript Constructor Function

https://www.programiz.com/javascript/constructor-function

In JavaScript, a constructor function is used to create objects. For example,

```js
// constructor function
function Person () {
    this.name = 'John',
    this.age = 23
}

// create an object
const person = new Person();
```

In the above example, `function Person()` is an object constructor function.

To create an object from a constructor function, we use the `new` keyword.



**Note**: It is considered a good practice to capitalize the first letter of your constructor function.



### JavaScript this Keyword

In JavaScript, when `this` keyword is used in a constructor function, `this` refers to the object when the object is created. For example,

```js
// constructor function
function Person () {
    this.name = 'John',
}

// create object
const person1 = new Person();

// access properties
console.log(person1.name);  // John
```



### JavaScript Constructor Function Parameters

You can also create a constructor function with parameters. For example,

```js
// constructor function
function Person (person_name, person_age, person_gender) {

   // assigning  parameter values to the calling object
    this.name = person_name,
    this.age = person_age,
    this.gender = person_gender,

    this.greet = function () {
        return ('Hi' + ' ' + this.name);
    }
}


// creating objects
const person1 = new Person('John', 23, 'male');
const person2 = new Person('Sam', 25, 'female');

// accessing properties
console.log(person1.name); // "John"
console.log(person2.name); // "Sam"
```



### Create Objects: Constructor Function Vs Object Literal

- Object Literal(对象字面量) is generally used to create a single object. The constructor function（构造函数） is useful if you want to create multiple objects. For example,

```js
// using object literal
let person = {
    name: 'Sam'
}


// using constructor function
function Person () {
    this.name = 'Sam'
}

let person1 = new Person();
let person2 = new Person();
```

* Each object created from the constructor function is unique. You can have the same properties as the constructor function or add a new property to one particular object.

```js
// using constructor function
function Person () {
    this.name = 'Sam'
}

let person1 = new Person();
let person2 = new Person();

// adding new property to person1
person1.age = 20;

```

Now this `age` property is unique to `person1` object and is not available to `person2` object.

However, if an object is created with an object literal, and if a variable is defined with that object value, any changes in variable value will change the original object. For example,

```js
// using object lateral
let person = {
    name: 'Sam'
}

console.log(person.name); // Sam

let student = person;

// changes the property of an object
student.name = 'John';

// changes the origins object property
console.log(person.name); // John
```



## JavaScript Built-in Constructors

JavaScript also has built-in constructors. Some of them are:

```js
let a = new Object();    // A new Object object
let b = new String();    // A new String object
let c = new Number();    // A new Number object
let d = new Boolean();   // A new Boolean object
```

In JavaScript, strings can be created as objects by:

```js
const name = new String ('John');
console.log(name); // "John"
```





**Note**: In JavaScript, the keyword `class` was introduced in ES6 (ES2015) that also allows us to create objects. Classes are similar to constructor functions in JavaScript. To learn more, visit [JavaScript Classes](https://www.programiz.com/javascript/ES6#class).