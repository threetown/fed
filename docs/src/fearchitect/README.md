# 前端架构师之路

> * 工程化

![architect](./main.png)



## 工程化

> * vue源码
> * vue-cli
> * vue-router源码
> * vuex源码
> * axios源码
> * 封装vue组件库



* vue源码（2.x and 3.x）
  * rollup配置
  * [手写Vue源码-这可能是你目前见过最完整的](https://www.bilibili.com/video/BV1qt4y1y7e8?p=6)
  * 表单生成器（若依）
* CLI 脚手架
  * vue-cli
    * vue-cli@3.x 使用 `lerna`
    * 基础：[脚手架的工作原理](https://www.bilibili.com/video/BV1ih411a7B8?p=15)
  * create-react-app
    * 入门：[从零实现React官方脚手架create-react-app](https://www.bilibili.com/video/BV1xa4y1n7EM)
  * umi及区块
  * [管理多个小程序](https://fynn90.github.io/2018/10/07/%E7%AE%A1%E7%90%86%E5%A4%9A%E4%B8%AA%E5%B0%8F%E7%A8%8B%E5%BA%8F/)
* npm依赖
  * commander
  * inquirer
* vscode插件
* source-map
 * [An Introduction to Source Maps](https://blog.teamtreehouse.com/introduction-source-maps)



## 微前端

BFF - Backend For Frontend(服务于前端的后端):

:::tip 微前端架构

目前较流行的 **微前端** 架构技术方案有：

- [single-spa](https://single-spa.js.org/)
- [qiankun](https://github.com/umijs/qiankun) - 基于 `single-spa`，蚂蚁金服。
- [mooa](https://github.com/phodal/mooa) - 基于 `single-spa`的 `Angular` 微前端

:::



* [微前端的前世今生](https://fynn90.github.io/2020/12/20/%E5%BE%AE%E5%89%8D%E7%AB%AF%E7%9A%84%E5%89%8D%E4%B8%96%E4%BB%8A%E7%94%9F/)

## Low Code低代码

* [花椒低代码可视化编辑平台的设计与实践](https://mp.weixin.qq.com/s/1uLxT2Ub_hoYqjXS7DjYLw)



## 设计模式





## UglifyJS

常用的javascript parser有:

- [Esprima](https://github.com/jquery/esprima)
- [UglifyJS2](https://github.com/mishoo/UglifyJS2)
- [Traceur](https://github.com/google/traceur-compiler)
- [Acorn](https://github.com/acornjs/acorn)
- [Espree](https://github.com/eslint/espree)
- [Shfit](https://github.com/shapesecurity/shift-parser-js)

在整个解析过程分为两部分:

- 分词: 将整个代码字符串分割成最小**语法单元**数组
- 语法分析: 在分词基础上建立分析语法单元之间的关系

其它

* [UglifyJS](http://lisperator.net/uglifyjs/)
* [Source Maps Revision 3 Proposal](https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit)
* [Source Maps Demo](http://demos.mattwest.io/source-maps/)

http://rapheal.sinaapp.com/category/js/uglify%E6%BA%90%E7%A0%81/

## jQuery源码

* [jQuery源码剖析](http://rapheal.sinaapp.com/2013/01/17/jquery-src-util/)



## 大神

* [拉风的博客](http://rapheal.sinaapp.com/)

