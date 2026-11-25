## test

> `Karma` + `Mocha` + `Chai` + `sinon`

### Karma

* install

  ```bash
  yarn add -D karma
  ```

* init `karma.conf.js`

  ```bash
  $ ./node_modules/karma/bin/karma init ./test/unit/karma.conf.js
  
  Which testing framework do you want to use ?
  Press tab to list possible options. Enter to move to the next question.
  > jasmine
  > nunit
  > nodeunit
  > quint
  > mocha
  
  Do you want to use Require.js ?
  This will add Require.js plugin.
  Press tab to list possible options. Enter to move to the next question.
  > no
  
  Do you want to capture any browsers automatically ?
  Press tab to list possible options. Enter empty string to move to the next question.
  > Chrome
  > ChromeHeadless
  > ChromeCanary
  > Firefox
  > Safari
  > PhantomJS
  > Opera
  > IE
  
  What is the location of your source and test files ?
  You can use glob patterns, eg. "js/*.js" or "test/**/*Spec.js".
  Enter empty string to move to the next question.
  >
  
  Should any of the files included by the previous patterns be excluded ?
  You can use glob patterns, eg. "**/*.swp".
  Enter empty string to move to the next question.
  >
  
  Do you want Karma to watch all the files and run the tests on change ?
  Press tab to list possible options.
  > no
  
  Config file generated at "/Users/.../test/unit/karma.conf.js".
  ```

* install testing framework -  mocha（用descibe和it方法，为不同的测试分组。它本身并不提供assert断言，所以要提供更加有表现力的断言，可以搭配chai使用）, and chrome-launcher

  ```bash
  yarn add -D mocha@^6.0.2 karma-mocha@^1.3.0 karma-chrome-launcher@^2.2.0
  ```

* Include webpack add add `webpack.test.js`

  ```bash
  yarn add -D karma-webpack@^3.0.5 progress-bar-webpack-plugin@^1.11.0
  ```

* Include sourcemap

  ```bash
  yarn add -D karma-sourcemap-loader@^0.3.7
  ```

* include bable-loader 

  ```bash
  yarn add -D babel-loader@^7.1.5 babel-core@^6.26.3 babel-preset-env@^1.7.0
  ```

* babel preset and `.babelrc`

  ```bash
  yarn add -D babel-preset-env@^1.7.0 babel-preset-stage-2@^6.24.1
  ```

* istanbul（以土耳其最大城市伊斯坦布尔命名），显示未通过webpack打包的源码的JS**代码覆盖率**工具

  ```bash
  yarn add -D babel-plugin-istanbul@^4.1.1
  ```

  `.babelrc`配置如下：

  ```js
  {
      "presets":["es2015","stage-2"],
      "plugins": ["istanbul"] //这句话是重点
  }
  ```

* chai 和 chai-sinon断言库

  ```bash
  yarn add -D chai@^4.2.0 karma-sinon-chai@^2.0.2 sinon@^7.2.7 sinon-chai@^3.3.0
  ```

* spec和coverage代码覆盖

  ```bash
  yarn add -D karma-spec-reporter@^0.0.32 karma-coverage@^1.1.2
  ```

  















## sence

代码测试是有成本的，如果编写测试用例用在每一个业务需求中去跑自动化测试是没有必要的，维护业务代码同时还需要去维护一套测试用例代码。

最佳场景肯定是用在**基础组件、基础架构**代码之类的大家都不敢轻易动的模块上，有了复用性就有了一旦出现问题你的影响业务是成片的，质量要求是更高的。

自动化的好处就是用工程化的手段解决人肉的问题，能够保证每次的上线代码都能依靠体系服务生成一套测试报告，可以让你的心惊胆战程度降到最低，也是以最优雅的方式解决问题

















`.test.js`：测试

`.spec.js`：规格





```bash
$ yarn test
 karma start ./karma.conf.js
ℹ ｢wdm｣: Hash: 3879665b411e2fff46cc
Version: webpack 4.47.0
Time: 51ms
Built at: 2024/05/29 17:14:06
ℹ ｢wdm｣: Compiled successfully.
ℹ ｢wdm｣: Compiling...
ℹ ｢wdm｣: Hash: 9330a0f050510fb9b47a
Version: webpack 4.47.0
Time: 52ms

｢wdm｣: Compiled successfully.
29 05 2024 17:14:07.777:WARN [karma]: No captured browser, open http://localhost:9876/
29 05 2024 17:14:07.780:INFO [karma-server]: Karma v4.4.1 server started at http://0.0.0.0:9876/
29 05 2024 17:14:07.780:INFO [launcher]: Launching browsers Chrome with concurrency unlimited
29 05 2024 17:14:07.785:INFO [launcher]: Starting browser Chrome
29 05 2024 17:14:10.030:INFO [Chrome 125.0.0 (Mac OS X 10.15.7)]: Connected on socket KaSyTzRgiJkCwL4RAAAA with id 63249637
Chrome 125.0.0 (Mac OS X 10.15.7): Executed 2 of 2 SUCCESS (0.011 secs / 0.006 secs)
TOTAL: 2 SUCCESS
```













## Karma

Karma是由Google团队开发的一套前端测试**运行框架**，它的主要作用是将项目运行在各种主流Web浏览器进行测试。



一个开源的测试运行器（**Test Runner**），它的最大优势是：允许你在多种真实的浏览器环境中测试代码。能够和主流的测试框架（Mocha, Jasmine, QUnit）很好的结合，并且支持 webpack 和 Babel 的使用。



### Karma运行流程

1. 启动一个web服务器，包含js源代码和js测试脚本页面。
2. 运行浏览器，加载页面、显示测试结果
3. 如果开启检测，则当文件有修改时，执行继续执行上面的过程。



### Karma语法

```js
describe('index.js', function(){
  it("isNum() should work fine.", function(){
    expect(isNum(1)).toBe(true);
    expect(isNum("1")).toBe(true);
  })
})
```



## Mocha

> 它运行在Karma这样的测试框架之上。
>
> ```js
> config.set({
> 	// frameworks to use
>   frameworks: ['mocha'],
>   
> })
> ```

`mocha`是JS的一种单元测试（unit test）框架，它可以在Node.js和浏览器环境下运行。

通常，测试脚本与所要测试的源码脚本同名，但是后缀名为`.test.js`（表示测试）或者`.spec.js`（表示规格）。比如，`add.js`的测试脚本名字就是`add.test.js`。

```js
describe('hooks', function() {

  before(function() {
    
  });

  after(function() {
    
  });

  beforeEach(function() {
    
  });

  afterEach(function() {
    
  });

  
  it('should ...', function() {
    
  });
});
```



### hooks

它有4个钩子函数，可以用来初始化代码：

* `before`：在该区块的所有测试用例之前执行
* `after`：在该区块的所有测试用例之后执行
* `beforeEach`：在每个单元测试前执行
* `afterEach`：在每个单元测试后执行

#### before()

> In a test file, the function `before()` will be executed first, regardless of it’s placement in the code block.
>
>  `before()` is often used to set up code, like variables and values, for other function calls to use in their execution.

```js
before(() => {
  path = './message.txt';
});
```



#### beforeEach()

> In a test file, the function `beforeEach()` will be executed before each test.
>
>  `beforeEach()` is often used to set up or reset code, like variables and values, for other function calls to use in their execution.

```js
beforeEach(() => {
   testCounter++;
 });
```



#### after()

> In a test file, the function `after()` will be executed last, regardless of its placement in the code block.
>
>  `after()` is often used to print out results from the tests that were run in the suite or to reset variables and values.

```js
after(() => {
   console.log(""number of tests: "" + testCounter);
 });
```



#### afterEach()

> In a test file, the function `afterEach()` will be executed after each test.
>
>  `afterEach()` is often used to print out results from a particular test that was run in the suite or to reset variables and values.

```js
afterEach(() => {
  path = './message.txt';
});
```



### block

测试脚本里面应该包括一个或多个`describe-block`，每个`describe-block`应该包括一个或多个`it-block`。

#### describe()

> In Mocha, the `describe()` function is used to group tests. 
>
> It accepts a string to describe the group of tests and a callback function which contains `it()` tests. 
>
> Calls to `describe()` are commonly nested to resemble the structure of the code being tested.

`describe-block`称为**测试套件（test suite）**，表示一组相关的测试。

```js
describe('group of tests', () => {
  // Write it functions here
  
})
```



#### it()

> In Mocha, the `it()` function is used to execute individual tests（单项测试）. 
>
> It accepts a string to describe the test and a callback function to execute assertions. Calls to `it()` are commonly nested within `describe()` blocks.

`it-block`称为**测试用例（test case）**，表示一个单独的测试，是测试的最小单位。

```js
describe('+', () => {
  it('returns the sum of its arguments', () => {
    // Write assertions here
    
  });
});
```



#### describe.skip()

`describe.skip`：可以跳过测试，而不用注释大块代码。



#### done()

`done`：只需要在函数中增加它，就可以实现异步。

```js
import { add } from '../src/utils';

var foo = false;

describe.skip('async beforEach test', function() {
  beforeEach(function (done) {
    setTimeout(function () {
      foo = true;
      done();
    }, 50);
  });
});

describe('utils::add test', function() {
  it('should 3 when add(1, 2) return', function() {
    expect(add(1, 2)).to.equal(3);
  });
});

```



### assert

> The `assert` library is used to make assertions. 
>
> It contains numerous functions that enable the tester to write easily readable assertions and throw `AssertionError`s within a test.

mocha默认使用nodejs内置的断言库`assert`，但更好的选择是使用第三方的断言库，根据单元测试和业务的需要，如：`chai`

```js
describe('+', () => {
  it('returns the sum of its arguments', () => {
    // Write assertion here
    assert.ok(3 + 4 === 7)
  });
});
```



#### assert.ok()

> The `assert.ok()` function is be used to evaluate a boolean expression within a test.
>
> If the expression evaluates to `false`, an `AssertionError` is thrown.

```js
describe('+', () => {
  it('returns the sum of its arguments', () => {
    // Write assertion here
    assert.ok(3 + 4 === 7)
  });
});
```



#### assert.equal()

> `assert.equal()` verifies a loose equality (`==`) comparison. 
>
> Using `assert.equal()` is more expressive, it’s more clear that it’s verifying equality than `assert.ok()`.

```js
const landAnimals = ['giraffe', 'squirrel'];
const waterAnimals = ['shark', 'stingray'];
 
landAnimals.push('frog');
waterAnimals.push('frog');
 
assert.equal(landAnimals[2], waterAnimals[2]);
```



#### assert.strictEqual()

> `assert.strictEqual()` verifies a strict equality (`===`) comparison.

```js
const a = 3;
const b = '3';
assert.equal(a, b);
assert.strictEqual(a, b);
```



#### assert.deepEqual()

> `assert.deepEqual()` compares values within two objects. 
>
> It will compare the values using loose (`==`) equality.

```js
const a = {relation: 'twin', age: '17'};
const b = {relation: 'twin', age: '17'};

assert.deepEqual(a, b);
```



## Chai

> **Chai** is a BDD / TDD `assertion library（断言库）` for node and the browser that can be delightfully paired with any javascript testing framework.

**Assertion library（断言库）**，是一种判断工具，**验证执行结果是否符合预期**，若实际结果与预期不同，就是没到bug了。它支持各种断言风格： `expect`、`assert`、`should`，主要使用的是`expect`方式。



### expect



```js
const { expect } = chai;

describe('ExpectTest', function() {
  it('should be equal', function() {
    expect(3).to.equal(2);
  });
});
```



### assert

语法：`assert(expression, message)`

```js
const { assert } = chai;

describe('AssertTest', function() {
  var foo = 'Hello';
  var bar = 'World';

  it('should be equal', function() {
    assert('foo' === 'bar', 'foo is not bar');
  });
});
```



### should

- Should会修改 Object.prototype
- Should 在浏览器环境下，对 IE 有兼容问题
- Should 无法自定义错误信息







## sinon

`Mocha`和`Chai`是nodejs应用程序的测试运行器和断言库的流行组合。如果需要对函数进行断言，sinon是不错的选择。

> Standalone test `spies`, `stubs` and `mocks` for JavaScript. 
>
> Works with any unit testing framework.

用来产生 `test-doubles（测试替身）`即：在测试中替换某部分代码。`test-doubles`有三类：spies、stubs和mocks。

- [Spies](https://sinonjs.org/docs#spies)，提供了函数调用的信息，但不会改变其行为（译者注：类似动态代理）
- [Stubs](http://sinonjs.org/docs/#stubs)，类似Spies，但是是完全替换目标函数。这可以让你随心所欲的控制函数–抛异常，返回指定结果等
- [Mocks](http://sinonjs.org/docs/#mocks)，提供了替换整个对象的能力

此外，Sinon还提供了其他的辅助功能，本文不包含下面的范围：

- [Fake timers](http://sinonjs.org/docs/#clock)，用来控制时间，例如触发一个`setTimeout`
- [Fake XMLHttpResquest and server](http://sinonjs.org/docs/#clock)，可以用来伪造Ajax请求和响应



### spy





### stub

取代 function。与 Spy 不同的是，Spy 依然会执行真的 function，但 Stub 并不会。它适用于 Ajax 和 Timer。

```js
const { expect } = require('chai');
const sinon = require('sinon');
const uuid = require('node-uuid');

describe('stub example', () => {
  it('check length of uuid ', () => {
    var stub = sinon.stub(uuid, 'v4');
    var mockId = stub.v4();
    expect(mockId.length).to.equal(36);
    uuid.v4.restore();
  });
});
```



### mock



```js
var opts = {
  call: function(msg) {
    console.log(msg);
  },
};

describe('Mock', () => {
  it('should pass Hello World to run call()', function() {
    var mock = sinon.mock(opts);
    mock
      .expects('call')
      .once()
      .withExactArgs('Hello World');
    opts.call('Hello World');
    mock.restore();
    mock.verify();
  });
});

```













## Jest

[Jest](https://jestjs.io/) 是 Facebook 开源的测试框架。

它使用了 **JSDOM 模拟浏览器环境**来支持测试，提高了性能，但是也带来了 JSDOM 的局限性，最大的问题是：**不能方便的在真实的浏览器中测试**。因此难免会使得测试结果不那么准确，毕竟模拟环境无法媲美真实环境。

如果项目涉及 DOM，BOM 相关的一些测试，就不必浪费时间在 Jest 上折腾了

如果只运行在node端，可以使用jest。









* [什么是BBD](https://blog.51cto.com/u_7305072/1215246)
* [使用 Karma + Mocha + Chai 搭建 Web 单元测试环境](https://liuyib.github.io/2020/03/20/use-karma-mocha-chai-to-test/)
* Selenium
* [Write Good Tests with Mocha](https://www.codecademy.com/learn/fscp-test-driven-development-with-javascript/modules/fecp-write-good-tests-with-mocha/cheatsheet)

