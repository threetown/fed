# CSS面试

:::tip 哎，就是玩...

本着出道既是巅峰，只学有用的原则。整理归类该知识点相关面试题，对所学知识进行巩固和深入。

:::



## 1. CSS盒模型(Box Model)

> 所有HTML元素可以看作盒子，在CSS中，**box model**这一术语是用来设计和布局时使用。

### a. CSS Box Model是什么？

1. 先来通过可视化直观的看下 css box model长啥样吧？

   打开 [google chrome 开发者工具](/chrome/) -> 选择 `Elements`(元素) -> 找到下面的 `Computed`(计算) 。呐，下面那些四环就是。

2. 环线的意义

* 一环（width、height）- 盒子的内容(自带宽度属性)，显示文本和图像。
* 二环（padding）- 清除内容周围的区域，内边距是透明的。
* 三环（border）- 围绕在内边距和内容外的边框。
* 四环（margin）- 清除边框外的区域，外边距是透明的。

3. CSS盒模型到底是什么？

   * css的盒模型由：content(内容)、padding(内边距)、border（边框）、margin（外边距）组成。
   * css的盒模型大小由：content + padding + border 决定

4. 盒模型的content（内容，即元素宽高）是如何计算的呢？

   盒模型的内容，当没有设置宽高属性时，会根据元素内容自动撑开。决定元素内容大小计算还与 css3中的 `box-sizing`属性有关

![CSS box model](./css_box_model.png)

### b. box-sizing属性的理解

 * 语法：

    ```css
    box-sizing: content-box | border-box | inherit
    ```

 * 属性：

   	* `content-box`：使得元素的宽高即为内容区的宽高(默认模式)
    * `border-box`：计算方式`content + padding + border` = 本身元素大小，即缩小了`content`大小
    * `inherit` ：指定 `box-sizing` 属性的值，应该从父元素继承

## 2. 清除浮动

> 连环三问：清除浮动是什么？什么时候需要清除浮动？清除浮动方法？

:::tip 清除浮动

浮动的元素是脱离文档标准流的，如果我不清楚浮动，那么就会造成**父元素高度塌陷**，影响页面布局。

:::

### a. 清除浮动方法

* 父元素设置高度 `height: <string>`

* 父元素添加 `overflow: hidden` 属性

* 父元素添加伪元素 `::after`

  ```css
  .clearfix::after{
    display: block;
    clear: both;
    content:"";
  }
  ```


### b. 哪种方法最好？

:::tip 推荐

推荐使用伪元素（`::after`），它的好处在于，不增加冗余的DOM节点，且符合结构语义化

:::

:::warning overflow:hidden

透过现象看本质！之所以，推荐伪元素的方式来清除浮动，并不是笔者主观个人习惯或倾向。

* `overflow: hidden` 会触发 **[BFC](/CSS/BFC/)** 机制

:::

## 3. 元素水平垂直居中

> 实际项目开发中，我们会经常遇到**让一个不定宽高的盒子水平垂直居中**

### a. 定位（position）方式

```css
.box {
    position: relative;
}
.item {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
}
```

### b. CSS3 transform属性

> [transform](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform)，通过修改CSS视觉格式化模型的坐标空间来实现

```css
.box {
    position: relative;
}
.item {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); /* 会开启GPU加速，推荐使用 */
}
```

### c. CSS3 flex布局

> 这年头要不会点 [flex](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex) 布局，你都不好意思跟人说你是枚切图仔。推荐两个学习网址
>
> * [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
> * [Flex布局教程：语法篇](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)、[Flex布局教程：实例篇](https://www.ruanyifeng.com/blog/2015/07/flex-examples.html)

```css
.box {
    display: flex;
    justify-content: center;
    align-items: center;
}
```

## 4. 重绘 和 回流

[重绘、回流](https://juejin.cn/post/6844903569087266823)

## 5. 图标字体

[icon](/css/icon/)

## 6. 响应式设计

响应式网站设计是一个网站能够兼容多个终端，而不是为每一个终端做一个特定的版本。基本原理是通过媒体查询检测不同的设备屏幕尺寸做处理

## 7. CSS3新特性

- 实现圆角`border-radius`，阴影`box-shadow`，边框图片`border-image`
- 对文字加特效`text-shadow`，强制文本换行`word-wrap`，线性渐变`linear-gradient`
- 实现旋转`transform:rotate(90deg)`,缩放`scale(0.85,0.90)`,`translate(0px,-30px)`定位,倾斜`skew(-9deg,0deg)`;
- 增加了更多的CSS选择器、多背景、`rgba()`
- 唯一引入的伪元素是`::selection`；
- 实现媒体查询`@media`，多栏布局`flex`
- 过渡`transition` 动画`animation`

## 8. 伪元素

* **::before 和 :after中双冒号和单冒号有什么区别？解释一下这2个伪元素的作用**

单冒号(:)用于`CSS3`伪类，双冒号(::)用于`CSS3`伪元素。（伪元素由双冒号和伪元素名称组成）,双冒号是在当前规范中引入的，用于区分伪类和伪元素

## 9. 为什么要初始化CSS样式

因为浏览器的兼容问题，不同浏览器对有些标签的默认值是不同的，如果没对 `CSS` 初始化往往会出现浏览器之间的页面显示差异初始化样式会对 `SEO` 有一定的影响

## 10. **display:none与visibility：hidden的区别**

区别display:nonevisibility：hidden的是否占据空间不占据任何空间，在文档渲染时，该元素如同不存在（但依然存在文档对象模型树中）该元素空间依旧存在是否渲染会触发reflow（回流），进行渲染只会触发repaint（重绘），因为没有发现位置变化，不进行渲染是否是继承属性不是继承属性，元素及其子元素都会消失是继承属性，若子元素使用了visibility:visible，则不继承，这个子孙元素又会显现出

## 11.CSS优化、提高性能的方法有哪些

- 移除空的`css`规则（Remove empty rules）
- 正确使用`display`的属性
- 不滥用浮动、`web`字体
- 不声明过多的`font-size`
- 不在选择符中使用`ID`标识符
- 遵守盒模型规则
- 尽量减少页面重排、重绘
- 抽象提取公共样式，减少代码量

## 12. CSS预处理器