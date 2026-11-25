# Typescript



​		TypeScript代码在编译时会被转换为普通的JavaScript代码，这样可以**在开发过程中捕获潜在的类型错误并提供更好的代码提示和编辑器支持**。

​		TypeScript是一种**静态类型语言**，意味着**在编译阶段会对类型进行检查**，要求变量和函数参数在声明时指定类型，并在编译时检查类型的正确性。

​		JavaScript是一种**动态类型语言**，变量和函数参数的类型**在运行时动态确定**，不需要在声明时指定类型。



## 类型

```ts
/**
 * 基本类型
 **/
// 定义一个变量，并指定其类型为 number
let num: number = 10;

// 定义一个变量，并指定其类型为 string
let message: string = "hello TypeScript";

// boolean
let flag: boolean = true;

// null，表示一个空值或者不存在的值。
let foo: number | null; // 类型为 number 或 null

// undefined，表示一个未定义的值
let bar: string | undefined; // 类型为 string 或 undefined

// void，表示没有返回值的函数类型
function log(): void {
  console.log("Hello");
}

// symbol，表示唯一的符号类型
const key: symbol = Symbol()

// 数组类型，type[] 或 Array<type>
let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["leon", "wik"];

// 元组类型，表示一个固定长度的数组，每个元素可以有不同的类型
let tuple: [number, string] = [1, 'hello'];

/**
 * 对象类型: interface 和 type
 **/
interface Person {
  name: string;
  age: number;
}

type Employee = {
  department: string;
  title: string;
}

// 函数，使用 `() => retureType`
const add = (a: number, b: number): number => a + b;

// 联合类型（Union Types），使用 '|' 表示一个变量可以且有多种类型
type ID = number | string;

// 交叉类型（Intersection Types），使用 '&' 表示一个变量具有多个类型的属性和方法
type Person = { name: string }
type Employee = { department: string }
type EmployeeWithPersonInfo = Person & Employee;

// 条件类型（Conditional Types）：根据一个条件来选择类型。
type Check<T> = T extends string ? true : false;
type Result = Check<string>; // true

// 可选属性（Optional Properties）：允许在类型中定义可选的属性。
type Person = {
  name: string;
  age?: number; // age属性为可选属性
};
const john: Person = {
  name: "John",
};

// 枚举（Enum）,用于定义一组命名常量的数据类型。
// 使用 enum 关键字来定义枚举，其中枚举成员默认从 0 开始递增，可以手动指定成员的值。
enum Color {
  Red,
  Green,
  Blue,
}

let color: Color = Color.Green;
console.log(color); // 输出 1

enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

let direction: Direction = Direction.Left;
console.log(direction); // 输出 "LEFT"


```



## type

`type` 是 TypeScript中用于自定义类型的一种机制。它可以用于定义原始类型、联合类型、交叉类型等，**不仅限于对象类型**。

```ts
type Age = number;
type Name = string;
```

1. 可以使用联合类型和交叉类型创建更复杂的类型
2. 不能扩展其它类型

```ts
type Age = number;
type Name = string;

type Person = {
  name: Name;
  age: Age;
}

type Employee = Person & {
  departemnt: string;
}

const john: Employee = {
  name: "John",
  age: 30,
  departemnt: "HR"
}
```



## 接口

接口是用于定义对象结构的类型，可以使用 `interface` 关键字定义一个接口。用于描述一个对象应该有哪些属性、方法和可能的类型。

```ts
// 定义接口
interface Person {
  name: string;
  age: number
}

// 使用接口
let person: Person = {
  name: 'leon',
  age: 18
}
```

1. 可能使用 `extends` 关键字来扩展其他接口
2. 一个接口，可以被多次声明，编译器会将它们合并为一个

```ts
interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  department: string;
}

const leon: Employee = {
  name: "leon",
  age: 30,
  department: "HR"
}
```







## 面试

1. 数据（Array）和元组（Tuple）

   * 数组，合并了相同类型的对象；

     * `type[]`: 表示元素类型为 `type` 的数组，例如：`let numbers: number[] = [1, 2, 3];`
     * `Array<type>`: 另一种表示数组的方式，例如：`let names: Array<string> = ["John", "Jane"];`

   * 元组，合并了不同类型的对象；

     表示一个固定长度的数组，每个元素可以有不同的类型。例如：

     `let tuple: [number, string] = [1, "hello"];`

2. 接口是什么？如何定义一个接口？

   接口是一种用于定义对象结构的类型，使用 `interface` 关键字定义接口

3. 如何定义对象类型？并说说他们之间的区别？

   > * 当需要描述一个对象类型时，优先考虑使用 `interface`，它在这方面更加直观和易读；
   > * 当需要创建复杂的类型或使用联合类型和交叉类型时，`type` 更加合适。

   可以使用 `interface` 和 `type` 来定义对象类型，语法如下：

   ```ts
   interface Person {
     name: string;
     age: number;
   }
   
   type Employee = {
   	department: string;
   }
   ```

   * `instrface` 可以使用 `extents` 来扩展其他接口；一个接口可以被多次声明，编译器最终会将它们合并成一个。

     ```ts
     interface Person {
       name: string;
       age: number;
     }
     
     interface Employee extends Person {
       department: string;
     }
     
     const leon: Employee = {
       name: 'leon',
       age: 18,
       department: 'HR'
     }
     ```

     

   * `type` 用于定义自定义类型的一种机制。它可以用于定义原始类型、联合类型、交叉类型等，**不仅限于对象类型**；**不能扩展其他类型**

     ```ts
     type Age = number;
     type Name = string;
     
     type Person = {
       name: Name;
       age: Age;
     }
     
     // 交叉类型
     type Employee = Person & {
       department: string;
     }
     
     const leon: Employee = {
       name: 'leon',
       age: 18,
       department: 'HR'
     }
     ```

     

4. 泛型是什么？如何使用？

   泛型（Generics）：允许在定义函数、接口或类时使用一个占位符类型，以便在使用时指定具体的类型。

   可以使用 `<T>` 来创建泛型，其中 `T` 可以是任意标识符。如下：

   ```ts
   function identity<T>(art: T): T {
     return arg;
   }
   
   let result = identity<number>(10); // 指定泛型类型为 number
   console.log(result)
   ```

5. 修饰符

   修饰符是用来限制类的成员（属性和方法）的访问权限的关键字。TypeScript 提供了三种常见的修饰符：

   1. `public`（默认修饰符）：
      - 在类中声明的成员默认是 `public` 修饰符，即可以在类内部和类外部访问。
      - 当成员没有显式指定修饰符时，默认为 `public`。
   2. `private`：
      - 使用 `private` 修饰符声明的成员只能在类的内部访问，不能在类的外部访问。
      - `private` 成员通常用于封装类的内部实现细节，防止外部直接访问和修改。
   3. `protected`：
      - 使用 `protected` 修饰符声明的成员可以在类的内部和子类中访问，但不能在类的外部访问。
      - `protected` 成员通常用于在继承关系中共享类的成员。



5. 类型推断是什么？有什么好处？

   typescript自动根据变量的值推导出其类型的能力。它可以减少显示类型注解的需求，使用代码更简洁和可读。

   使用尖括号 `<Type>` 或者 `值 as Type` 的语法进行类型断言。

   ```ts
   let num = 10; // TS会自动推断num的类型为number
   ```

6. 类型注解

   使用冒号 `:` 后跟类型名称来给变量或参数添加类型注解。

   ```ts
   // 变量类型注解
   let num: number;
   let str: string;
   let isActive: boolean;
   
   // 函数参数类型注解和返回值类型注解
   function add(a: number, b: number): number {
     return a + b;
   }
   ```

   

7. 模块化如何工作的，如何导入和导出模块？

​		ts支持使用ES6的模块化语法，使用： `export` 导出模块；使用 `import` 导入模块；



8. 















