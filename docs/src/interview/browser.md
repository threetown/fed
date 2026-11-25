# browser

JS engine:

1. Taking your ~~fuel~~ source code
2. The parser is generating an abstract syntax tree from the source
3. V8's interpreter is generating a bytecode from the syntax tree that a compiler can understand
4.  V8's compiler is generating a [graph](https://freshcodeit.com/freshcode-post/graphcool-framework-analysis-and-its-use-case) from bytecode (replacing bytecode sections with optimized machine code)
5.  And, ta-dah – executing!

![How v8 JS works](https://thumb.tildacdn.com/tild3533-6537-4639-b961-393433393837/-/format/webp/1_GuWInZljjvtDpdeT6O.png)



![img](https://i0.wp.com/codemacaw.com/wp-content/uploads/2022/04/Screenshot-4.png?resize=803%2C451&ssl=1)



https://v8.dev/blog/ignition-interpreter



https://mathiasbynens.be/notes/shapes-ics

![img](https://mathiasbynens.be/_img/js-engines/js-engine-pipeline.svg)





:tada: 详细查看

https://cabulous.medium.com/how-v8-javascript-engine-works-5393832d80a7

![img](./img/js-engine/v8_jengine-step-by-step.png)