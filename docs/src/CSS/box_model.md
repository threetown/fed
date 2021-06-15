# CSS盒模型(Box Model)

> 所有HTML元素可以看作盒子，在CSS中，**box model**这一术语是用来设计和布局时使用。

## a. CSS Box Model是什么？

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

## b. box-sizing属性的理解

 * 语法：

   ```css
   box-sizing: content-box | border-box | inherit
   ```

 * 属性：

   * `content-box`：使得元素的宽高即为内容区的宽高(默认模式)
   * `border-box`：计算方式`content + padding + border` = 本身元素大小，即缩小了`content`大小
   * `inherit` ：指定 `box-sizing` 属性的值，应该从父元素继承

## c. 应用：CSS画一个三角形

> 元素宽高设置为 0，通过 `border` 属性来设置，让其它三个方向的 `border` 颜色为透明或者和背景色保持一致，剩余一条 `border` 的颜色设置为需要的颜色。

```css
div {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-top-color: red;
}
```

