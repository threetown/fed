# 基础

具体内容包括：

- [原始数据类型](https://ts.xcatliu.com/basics/primitive-data-types.html)
- [任意值](https://ts.xcatliu.com/basics/any.html)
- [类型推论](https://ts.xcatliu.com/basics/type-inference.html)
- [联合类型](https://ts.xcatliu.com/basics/union-types.html)
- [对象的类型——接口](https://ts.xcatliu.com/basics/type-of-object-interfaces.html)
- [数组的类型](https://ts.xcatliu.com/basics/type-of-array.html)
- [函数的类型](https://ts.xcatliu.com/basics/type-of-function.html)
- [类型断言](https://ts.xcatliu.com/basics/type-assertion.html)
- [声明文件](https://ts.xcatliu.com/basics/declaration-files.html)
- [内置对象](https://ts.xcatliu.com/basics/built-in-objects.html)



## 一、原始数据类型（Primitive data types）

:::tip 数据类型

JavaScript的数据类型分为两种：

* **原始数据类型**（Primitive data types）：string、number、boolean、null、undefined、symbol、BigInt
* **对象类型**（Object types）

:::

### 1. 字符串（string）

```tsx
let myName: string = 'leon';
```

### 2. 数值（number）

```ts
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
// ES6 中的二进制表示法
let binaryLiteral: number = 0b1010;
// ES6 中的八进制表示法
let octalLiteral: number = 0o744;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;
```

### 3. 布尔值（boolean）

```ts
let isDone: boolean = false;
```

### 4. 空值（void）

在 TypeScript 中，可以用 `void` 表示**没有任何返回值的函数**：

```tsx
function logName(): void {
    console.log('My name is Tom');
}
```

声明一个 `void` 类型的变量没有什么用，因为你只能将它赋值为 `undefined` 和 `null`

```tsx
let unusable: void = undefined;
```

### 5. Null和Undefined

在 TypeScript 中，可以使用 `null` 和 `undefined` 来定义这两个原始数据类型：

```tsx
let u: undefined = undefined;
let n: null = null;
```

:::warning void与undefined和unll的区别

与 `void` 的区别是，**`undefined` 和 `null` 是所有类型的子类型**。也就是说 `undefined` 类型的变量，可以赋值给 `number` 类型的变量：

```tsx
// 这样不会报错
let num: number = undefined;

// 这样也不会报错
let u: undefined;
let num: number = u;
```

而 `void` 类型的变量不能赋值给 `number` 类型的变量：

```tsx
let u: void;
let num: number = u;

// Type 'void' is not assignable to type 'number'.
```

:::



## 二、任意值（any）

任意值（Any）用来表示允许赋值为任意类型。

:::tip 什么是任意值类型

如果是一个普通类型，在赋值过程中改变类型是不被允许的；但，如果是 `any` 类型，则允许被赋值为任意类型。

```tsx
let myFavoriteNumber: any = 'seven';
myFavoriteNumber = 7;
```

可以认为，**声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值**。

:::

**变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型**：

```tsx
let something;
something = 'seven';
something = 7;

something.setName('Tom');
```



## 三、类型推论（type inference）

如果没有明确的指定类型，那么 TypeScript 会依照类型推论（Type Inference）的规则推断出一个类型。

:::warning

TypeScript 会在没有明确的指定类型的时候推测出一个类型，这就是类型推论。

```tsx
let myFavoriteNumber = 'seven';
myFavoriteNumber = 7;

// index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.
```

事实上，它等价于：

```tsx
let myFavoriteNumber: string = 'seven';
myFavoriteNumber = 7;

// index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.
```

:::



## 四、联合类型（Union Types）

联合类型（Union Types）表示取值可以为多种类型中的一种。

:::tip

* 联合类型使用 `|` 分隔每个类型。

```tsx
// 允许 `myFavoriteNumber` 的类型是 `string` 或者 `number`，但是不能是其他类型。
let myFavoriteNumber: string | number;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
```

:::



## 五、对象的类型 —— 接口

在 TypeScript 中，我们使用接口（`Interfaces`）来定义对象的类型。

:::tip 什么是接口

* 在面向对象语言中，接口（`Interfaces`）是一个很重要的概念，它是**对行为的抽象**，而具体如何行动需要由类（`classes`）去实现（`implement`）。
* 除了可用于[对类的一部分行为进行抽象](https://ts.xcatliu.com/advanced/class-and-interfaces.html#类实现接口)以外，也常用于对「对象的形状（Shape）」进行描述。

:::

### 5.1 例子

:::warning

* 接口一般首字母大写。
* 定义的变量比接口少了一些属性是不允许的
* 多一些属性也是不允许的

可见，**赋值的时候，变量的形状必须和接口的形状保持一致**

:::

```tsx
interface Person {
    name: string;
    age: number;
}

let tom: Person = {
    name: 'Tom',
    age: 25
};
```



### 5.2 可选属性

可选属性的含义是该属性可以不存在。

```tsx
interface Person {
    name: string;
    age?: number;   // 在 : 前加上 ？
}

let tom: Person = {
    name: 'Tom'
};
```

### 5.3 任意属性

使用 `[propName: string]` 定义了任意属性取 `string` 类型的值。

```tsx
interface Person {
    name: string;
    age?: number;
    [propName: string]: any;
}

let tom: Person = {
    name: 'Tom',
    gender: 'male'
};
```



### 5.4 只读属性

希望对象中的一些字段只能在创建的时候被赋值，那么可以用 `readonly` 定义只读属性：

```tsx
interface Person {
    readonly id: number;
    name: string;
    age?: number;
    [propName: string]: any;
}

let tom: Person = {
    id: 89757,
    name: 'Tom',
    gender: 'male'
};

tom.id = 9527;

// index.ts(14,5): error TS2540: Cannot assign to 'id' because it is a constant or a read-only property.
```



## 六、数组的类型

:::tip

在 TypeScript 中，数组类型有多种定义方式，比较灵活。有以下两种方式：

* 「类型 + 方括号」表示法
* 数组泛型
* 用接口表示数组

:::

### 6.1 「类型 + 方括号」表示法

最简单的方法表示数组：

```tsx
let fibonacci: number[] = [1, 1, 2, 3, 5];
```

### 6.2 数组泛型（Array Generic）

使用数组泛型（Array Generic） `Array<elemType>` 来表示数组：

```ts
let fibonacci: Array<number> = [1, 1, 2, 3, 5];
```

### 6.3 用接口表示数组

接口也可以用来描述数组：

```ts
interface NumberArray {
    [index: number]: number;
}
let fibonacci: NumberArray = [1, 1, 2, 3, 5];
```

`NumberArray` 表示：只要索引的类型是数字时，那么值的类型必须是数字。



## 七、函数的类型

:::tip 函数声明

在 JavaScript 中，有两种常见的定义函数的方式：

* 函数声明（**Function Declaration**）
* 函数表达式（**Function Expression**）

```js
// 函数声明（Function Declaration）
function sum(x, y) {
    return x + y;
}

// 函数表达式（Function Expression）
let mySum = function (x, y) {
    return x + y;
};
```

:::



### 7.1 函数声明

一个函数有**输入**和**输出**，要在 TypeScript 中对其进行约束，需要把输入和输出都考虑到，其中函数声明的类型定义较简单：

```tsx
function sum(x: number, y: number): number {
    return x + y;
}
```

:::warning

注意，**输入多余的（或者少于要求的）参数，是不被允许的！**

:::



### 7.2 函数表达式

写一个对函数表达式（Function Expression）的定义，可能会写成这样：

```js
let mySum = function (x: number, y: number): number {
    return x + y;
};
```

这是可以通过编译的:tada:。不过事实上，上面的代码**只对等号右侧的匿名函数进行了类型定义**，而**等号左边的 `mySum`，是通过赋值操作进行类型推论**而推断出来的。

如果需要我们手动给 `mySum` 添加类型，则应该是这样：

```tsx
let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
};
```

:::warning

注意不要混淆了 TypeScript 中的 `=>` 和 ES6 中的 `=>`。

* 在 TypeScript 的类型定义中，`=>` 用来表示函数的定义，**左边是输入类型**，需要用括号括起来，**右边是输出类型**。

* 在 ES6 中，`=>` 叫做箭头函数，应用十分广泛，可以参考 [ES6 中的箭头函数](http://es6.ruanyifeng.com/#docs/function#箭头函数)。

:::



### 7.3 用接口定义函数的形状

我们也可以使用**接口**的方式来定义一个函数需要符合的形状：

```ts
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    return source.search(subString) !== -1;
}
```

采用**函数表达式**或**接口定义函数**的方式时，对等号左侧进行类型限制，可以保证以后对函数名赋值时保证参数个数、参数类型、返回值类型不变。

### 7.4 可选参数

我们用 `?` 表示可选的参数：

```tsx
function buildName(fristName: string, lastName?: string) {
  return lastName ? firstName + ' ' + lastName : firstName
}

let tomcat = buildName('Tom', 'Cat')
let tom = buildName('Tom')
```

:::warning

需要注意的是，可选参数必须接在必需参数后面。换句话说，**可选参数后面不允许再出现必需参数了！**

:::



### 7.5 重载

**[重载](https://ts.xcatliu.com/basics/type-of-function.html#%E9%87%8D%E8%BD%BD)**，允许一个函数接受不同数量或类型的参数时，作出不同的处理。



## 八、类型断言





## 九、声明文件













