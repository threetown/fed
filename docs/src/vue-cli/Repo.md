# 项目管理

:::tip MonoLith、MultiRepo、MonoRepo

- MonoLith：一个项目，一个Git仓库。
  - 优点：实现简单，一库到底。
  - 缺点：复杂项目代码复用性低，且不利于团队协作。

- Multi-Repo：划分为多个模块，一个模块一个Git仓库
  - 优点：模块划分清晰，每个模块都是独立的repo，利于团队协作
  - 缺点：代码管理复杂增加。比如：
    - 1.某个模块出现bug 相就模块都需要编译、上线、涉及到手动控制版本非常繁琐。
    - 2.issue 管理十分麻烦。

- Mono-Repo：划分为多个模块，所有模块放在一个Git仓库
  - 优点：代码结构清晰，利于团队协作，同时一个库降低了项目管理、代码管理以及代码高度难度。
  - 缺点：項目变得庞大，模块变多后同样会遇到各种问题。所以需要有更好的构建工具支持。例如: `Lerna`

:::



![](./img/monorepo.jpeg)