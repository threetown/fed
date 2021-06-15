# CSS

:::tip

CSS， **C**ascading **S**tyle **S**heets（层叠样式表），用来给HTML添加样式语言

:::



## 1. 清除浮动

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

## 2. 元素水平垂直居中

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

```css
.box {
    display: flex;
    justify-content: center;
    align-items: center;
}
```

## 3. 两列布局（左侧固定宽度、右侧自适应）

* 浮动布局

  ```css
  .left{
    width:200px; height:300px; background:#5A6A94;
    float:left;
  }
  .right{
    height:300px; background:#BE4F4F;
    margin-left:200px;
  }
  ```

* 绝对定位

  ```css
  left{
    position: absolute;
    left:0;
  }
  .right{
    position: absolute;
    left:200px;
    width:100%
  }
  ```

* flex布局

  ```css
  .box{ display: flex; }
  .left{ width: 200px; }
  .right{ flex:1 }
  ```

* table布局

  ```css
  .box{ display: table; width:100%; }
  .left{ width: 200px; display: table-cell; }
  .right{ display: table-cell; }
  ```



## 4. 文字超出显示 ...

### a. css 一行文本超出...

```css
.text{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
```

### b. 多行文本超出显示...

```css
.text{
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
```



## 5. 响应式设计

响应式网站设计是一个网站能够兼容多个终端，而不是为每一个终端做一个特定的版本。基本原理是通过媒体查询检测不同的设备屏幕尺寸做处理

* `@media`媒体查询
* `rem`，rem单位无论嵌套层级如何，都只相对于浏览器的根元素（HTML元素）的`font-size`
* `vw/vh`，vw表示相对于视图窗口的宽度，vh表示相对于视图窗口高度，除了vw和vh外，还有vmin和vmax两个相关的单位
* `rem2px`和`px2rem`

## 6. 伪元素

* **::before 和 :after中双冒号和单冒号有什么区别？解释一下这2个伪元素的作用**

单冒号(:)用于`CSS3`伪类，双冒号(::)用于`CSS3`伪元素。（伪元素由双冒号和伪元素名称组成）,双冒号是在当前规范中引入的，用于区分伪类和伪元素

## 7. 为什么要初始化CSS样式

因为浏览器的兼容问题，不同浏览器对有些标签的默认值是不同的，如果没对 `CSS` 初始化往往会出现浏览器之间的页面显示差异初始化样式会对 `SEO` 有一定的影响

## 8. 隐藏页面元素

* `display: none`：元素不存在，从 `dom` 中删除，会引发 回流
* `visibility: hidden`：元素隐藏，但元素仍旧存在，页面中无法触发该元素的事件。
* `opacity: 0`：元素透明度将为 0，但元素仍然存在，绑定的事件仍旧有效仍可触发执行。



## 9.CSS优化、提高性能的方法有哪些

- 移除空的`css`规则（Remove empty rules）
- 正确使用`display`的属性
- 不滥用浮动、`web`字体
- 不声明过多的`font-size`
- 不在选择符中使用`ID`标识符
- 遵守盒模型规则
- 尽量减少页面重排、重绘
- 抽象提取公共样式，减少代码量

## 10. CSS预处理器