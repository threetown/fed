### DOM

首页，渲染引擎开始解析HTML文档（parsing the HTML），并将元素转换成 内容树（content tree）中的DOM节点。——整个过程最终输出为文档对象模型DOM。

* Convert bytes to characters（将字节转换为字符）：浏览器读取HTML的原始字节并将其转换为单个字符。
* Identify tokens（识别标记）：将字符串转换为不同的标记，例如：＜html＞、＜body＞等。
* Convert tokens to nodes（将标记转换为节点）：标记被转换为对象，对象定义了它们的属性和规则。
* Build the DOM tree（构建DOM树）：最后，将创建的对象链接到树数据结构中，该结构捕获原始标记中定义的父子关系。

当浏览器构建DOM时，它可能会在文档的头部分遇到一个链接标记，引用外部CSS样式表。浏览器会立即发送一个对此资源的请求，该请求会返回以下内容：

```css
body { font-size: 16px }
p { font-weight: bold }
span { color: red }
p span { display: none }
img { float: right }
```



### CSSOM

与HTML一样，我们需要将收到的CSS规则转换为浏览器可以理解和使用的规则，因此浏览器重复相同的过程：

`Bytes -> Characters -> Tokens -> Nodes -> CSSOM`



> 每个浏览器都提供了一组默认样式，称为：**user agent styles（用户代理样式）**



### render tree

> render tree = DOM + CSSOM

要构建渲染树，浏览器将执行以下操作：

* 从DOM树的根开始，遍历每个**visible node（可见节点）**
  * 省略不可见的节点（如：`script`、`meta`等），它们不反映渲染的输出。
  * CSS隐藏的节点也从渲染树中省略：例如：`span{ display:none; }` 。
* 对于每个可见节点，找到适当的匹配CSSOM规则并应用它们。
* 发射具有content（内容）及其computed styles(计算样式)的可见节点。



### layout stage

创建渲染树时，不会指定位置和大小值，还需要经过**layout stage(布局阶段)，为每个元素计算其坐标。

布局是一个**recursive process(递归过程)**。

它从根呈现器开始，根呈现器对应于html文档的`＜html＞`元素。布局在部分或全部层次结构中递归地继续，为每个需要它的渲染器计算几何信息。

> 根的位置为0,0，其尺寸为viewport(视口)-浏览器窗口的可见部分

最后，现在我们知道了***哪些节点是可见的，以及它们的计算样式和几何体***，我们可以将这些信息传递到最后阶段——painting(绘制)





### painting

该阶段将内容和可见元素的每个节点，使用**UI backend layer（UI后端层）**转换为屏幕上的**actual pixels(实际像素)**。此步骤通常被称为“painting(绘制)”或“resterizing(光栅化)”：

最终输出是包含屏幕上所有可见内容的内容和样式信息的渲染。

![reflow-visualization](/Users/leon/Home/girl/fed/docs/src/2024/browser/img/reflow-visualization.gif)



## scripts and style sheets

在脚本执行前，文档的解析将停止。

如果js脚本是外部的，则必须先从网络中获取资源——这是同步完成的，并且在获取资源之前，解析将停止。

* 可以使用`defer` 属性添加到脚本中，这样就不会停止文档解析，而是在文档解析后执行。



在执行脚本时，另一个线程（thread）可以解析文档的其余部分，并找出需要从网络加载的其它资源并加载它们。——这被称为推测解析（speculative parsing）。

推测解析器，只解析对脚本、样式表和图像等外部资源的引用。



由于style sheets(样式表)不会更改DOM树，因此没有理由等待它们并停止文档解析。





## reflow

当浏览器为了重新呈现部分或全部文档而必须重新计算文档中元素的位置和几何图形时，就会发生reflow(回流)。



* 减少不必要的DOM深度。
* 最小化CSS规则并删除未使用的CSS规则
* 避免不必要的复杂CSS选择器——例如子代选择器，它们需要更多的CPU功率来进行选择器匹配。
* 如果进行复杂的渲染更改（如animations动画），请在流之外进行。







## JavaScript Engine

Parser 解析器

当代码成功地从服务器获取到客户端时，JS引擎立即开始获取代码并将其提供给引擎的解析器。解析器在代码中寻找模式，将其转换为机器能够理解的代表性对象。因此，当解析器看到括号之类的东西时，它就知道有一块代码要求值。类似地，如果它看到var或let，它就知道应该为变量及其相应的值分配空间。

存储解析器所有翻译的对象，称为抽象语法树（Abstract Syntax Tree ，AST）。



Interpreter 解释器

接下来，所有组织的对象都从AST提供给引擎的解释器(engine’s interpreter)，后者将这些对象转换为字节码(bytecode)。字节码步骤非常有用，因为它是我们的机器运行代码的第一次机会。如果解释器包含一个虚拟机（V8和其他JavaScript引擎都有），我们可以立即执行字节码形式的代码，而不必再次将其翻译成更高度优化的机器代码。

什么时候是运行字节码的好时机？正如Mathias Bynens（Google V8的开发者倡导者）所指出的，字节码非常适合运行一次性代码。初始化(Initialization)和设置(setup)等序列非常适合这一步，因为您可以生成字节码，运行一次，再也不用处理它了。但是如果你不得不继续使用这些代码呢？





Compiler 编译器

这就是优化步骤的开始.

当解释器(interpreter)将AST翻译成字节码(bytecode)时，它会跟踪代码的所有各种特性。你是不是用数字一遍又一遍地调用同一个函数？像这样的代码被称为热代码(hot code)，这些类型的场景为引擎提供了一个很好的机会，可以将代码进一步转换为高度优化( highly-optimized)的机器代码(machine code)。此机器代码可以跨多个指令集快速访问和执行。最后一步由引擎的编译器运行，以发送要直接在CPU上运行的机器代码。

> 需要注意的是：所有代码最终都必须作为机器代码运行。
>
> Interpreter 解释器 ——> bytecode字符码 ——>机器代码(machine code) 
>
> Compiler 编译器 ——> 机器代码(machine code) 【运行在CPU上】
>
> * 解释器的机器代码，不受引擎控制；
> * 优化后编译器的机器代码，会经过非常仔细的检查，而运行在CUP上



JavaScript引擎是浏览器的组件，用于获取、优化（optimizes）和执行（executes）您的JavaScript代码。也称为虚拟机（virtual machines），JavaScript引擎在独立于平台的环境中执行您的代码，如：Electron、nodejs等。





* Rendering Engine
* JavaScript Engine
  * 充当解释器interpreter
  * 如：V8 — Used with Blink

渲染引擎和JS引擎，最主要的区别在于对浏览器的依赖。

* 渲染引擎，与浏览器引擎紧密耦合
* JS引擎，可以单独使用（如nodejs内核就是V8引擎）



只有HTML转换成DOM后，JS才能形如工作。







* [how browsers work and render pages](https://kleopetrov.me/2018/03/19/how-browsers-work-and-render-pages/)
* [JavaScript and the Inner Workings of your Browser](https://softwareengineeringdaily.com/2018/10/03/javascript-and-the-inner-workings-of-your-browser/)
* [JavaScript engine fundamentals: Shapes and Inline Caches](https://mathiasbynens.be/notes/shapes-ics)



