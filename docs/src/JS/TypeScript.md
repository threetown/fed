# TypeScript准备工作

TypeScript 是一个开源的编程语言，通过在 JavaScript（世界上最常用的语言之一） 的基础上添加静态类型定义构建而成。

## 安装

```bash
yarn add typescript -g
```

## 运行

```bash
npx tsc demo.ts
```

## 配置

```bash
touch tsconfig.json
```

* tsconfig.json

  ```json
  {
      "compilerOptions": {
          "outDir": "./dist/",
          "sourceMap": true,
          "noImplicitAny": true,
          "module": "commonjs",
          "target": "es5",
          "jsx": "react"
      },
      "include": [
          "./src/**/*"
      ]
  }
  ```

  

# TS基本类型

* 布尔型：`let isDone: boolean = false`

* 数值型：`let decLiteral : number = 1 `

* 字符串：`let name: string = 'leon'`

* 数组：`let list: number[] = [1, 2, 3];` or 数组泛型 `let list: Array<number> = [1, 2, 3];`

* 元组Tuple
  元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。 

  ```tsx
  // Declare a tuple type
  let x: [string, number];
  // Initialize it
  x = ['hello', 10]; // OK
  ```

* 枚举
  enum类型是对JavaScript标准数据类型的一个补充。

  ```tsx
  enum Color {Red, Green, Blue}
  let c: Color = Color.Green;
  ```

* 任意值
  有时候，我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型。

  ```tsx
  let notSure: any = 4;
  notSure = "maybe a string instead";
  notSure = false; // okay, definitely a boolean
  
  let list: any[] = [1, true, "free"];
  list[1] = 100;
  ```

* 空值
  某种程度上来说，void类型像是与any类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是void：

  ```tsx
  function warnUser(): void {
      alert("This is my warning message");
  }
  ```

  声明一个`void`类型的变量没有什么大用，因为你只能为它赋予`undefined`和`null`：

  ```tsx
  let unusable: void = undefined;
  ```

* `Null` 和 `Undefined`
  TypeScript里，`undefined` 和 `null` 两者各自有自己的类型分别叫做 `undefined` 和`null`。 和void相似，它们的本身的类型用处不是很大：

  ```tsx
  // Not much else we can assign to these variables!
  let u: undefined = undefined;
  let n: null = null;
  ```

  默认情况下null和undefined是所有类型的子类型。 就是说你可以把null和undefined赋值给number类型的变量。

* Never
  never类型表示的是那些永不存在的值的类型。

* 类型断言

  类型断言有两种形式。 其一是“尖括号”语法：

  ```tsx
  let someValue: any = "this is a string";
  
  let strLength: number = (<string>someValue).length;
  ```

  另一个为as语法：

  ```tsx
  let someValue: any = "this is a string";
  
  let strLength: number = (someValue as string).length;
  ```


  两种形式是等价的。 至于使用哪个大多数情况下是凭个人喜好；然而，当你在TypeScript里使用JSX时，只有as语法断言是被允许的。



## 参考文献

* [TypeScript](https://www.typescriptlang.org/)