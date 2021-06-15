# flex弹性布局

> 这年头要不会点 [flex](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex) 布局，你都不好意思跟人说你是枚切图仔。推荐两个学习网址
>
> * [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
> * [Flex布局教程：语法篇](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)、[Flex布局教程：实例篇](https://www.ruanyifeng.com/blog/2015/07/flex-examples.html)

* 水平、垂直居中

```css
div{
  display: flex;
  justify-content: center;
  align-items: center;
}
```

* 分栏布局

```css
div{
  display: flex;
}
.item_l{
  width: 200px;
}
.item_r{
  flex: 1;
}
```

