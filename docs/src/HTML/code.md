title: 代码规范
---

## DOCTYPE 声明

HTML文件必须加上 DOCTYPE 声明，并统一使用 HTML5 的文档声明：

```html
<!DOCTYPE html>
```

## 语言属性

根据 HTML5 规范：

> 强烈建议为 html 根元素指定 lang 属性，从而为文档设置正确的语言。这将有助于语音合成工具确定其所应该采用的发音，有助于翻译工具确定其翻译时所应遵守的规则等。

更多关于 `lang` 属性的知识可以从 [此规范](http://www.w3.org/html/wg/drafts/html/master/semantics.html#the-html-element) 中了解。Sitepoint 站点上 [给出了一份语言代码表](https://www.sitepoint.com/iso-2-letter-language-codes/)。

```javascript
<html lang="zh-CN">
  <!-- ... -->
</html>
```

## IE 兼容模式

IE 支持通过特定的 `<meta>` 标签来确定绘制当前页面所应该采用的 IE 版本。除非有强烈的特殊需求，否则最好是设置为 **edge mode**，从而通知 IE 采用其所支持的最新的绘制模式。

```html
<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
```

## 字符编码

通过明确声明字符编码，能够确保浏览器快速并容易的判断页面内容的渲染方式。这样做的好处是，可以避免在 HTML 中使用字符实体标记（character entity），从而全部与文档编码一致（一般采用 UTF-8 编码）。

```javascript
<head>
  <meta charset="UTF-8">
</head>
```

请尽量统一写成标准的 “UTF-8”，不要写成 “utf-8” 或 “utf8” 或 “UTF8”。根据[IETF对UTF-8的定义](http://www.ietf.org/rfc/rfc3629)，其编码标准的写法是 “UTF-8”；而 UTF8 或 utf8 的写法只是出现在某些编程系统中，如 .NET framework 的类 System.Text.Encoding 中的一个属性名就叫 UTF8。

## 减少标签的数量

编写 HTML 代码时，尽量避免多余的父元素。很多时候，这需要迭代和重构来实现。请看下面的案例：<br />_推荐：_

```html
<img class="avatar" src="...">
```

_不推荐：_

```html
<span class="avatar">
  <img src="...">
</span>
```

## 标签闭合

- 不要在自闭合（self-closing）元素的尾部添加斜线 — [HTML5 规范](http://dev.w3.org/html5/spec-author-view/syntax.html#syntax-start-tag) 中明确说明斜线是可忽略的。
- 不要省略可选的结束标签（closing tag）（例如，`</li>` 或 `</body>`）。

_推荐：_

```html
<img src="images/company-logo.png" alt="Company">

<ul>
  <li>test
  <li>test
</ul>
```

_不推荐：_

```html
<img src="images/company-logo.png" alt="Company" />

<ul>
  <li>test
  <li>test
</ul>
```

## 书写风格

### 代码大小写

HTML标签名、类名、标签属性和大部分属性值统一用小写。<br />_推荐：_

```html
<div class="demo"></div>
```

_不推荐：_

```html
<div class="DEMO"></div>
	
<DIV CLASS="DEMO"></DIV>
```

HTML文本、JavaScript、meta标签某些属性等内容可大小写混合。

```html
<!-- HTML文本内容 -->
<h1>I AM WHAT I AM </h1>

<!-- JavaScript 内容 -->
<script type="text/javascript">
	var demoName = 'demoName';
	...
</script>

<!-- 优先使用 IE 最新版本和 Chrome Frame -->
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
```

### 引入 CSS 和 JavaScript 文件

根据 HTML5 规范，在引入 CSS 和 JavaScript 文件时一般不需要指定 `type` 属性，因为 `text/css` 和 `text/javascript` 分别是它们的默认值。<br />_推荐：_

```html
<link rel="stylesheet" href="" >

<script src=""></script>
```

_不推荐：_

```html
<link rel="stylesheet" type="text/css" href="" >

<script type="text/javascript" src="" ></script>
```

### 元素属性

对于属性的定义，全部使用双引号，不要使用单引号。<br />_推荐：_

```html
<input type="text">
	
<input type="radio" name="name" checked="checked" >
```

_不推荐：_

```html
<input type=text>	
<input type='text'>
	
<input type="radio" name="name" checked >
```

布尔型属性可以在声明时不赋值。XHTML 规范要求为其赋值，但是 HTML5 规范不需要。

> 元素的布尔型属性如果有值，就是 true，如果没有值，就是 false。

```html
<input type="text" disabled>

<input type="checkbox" value="1" checked>

<select>
  <option value="1" selected>1</option>
</select>
```

### 代码缩进

统一使用两个空格进行代码缩进，这是唯一能保证在所有环境下获得一致展现的方法。

```html
<div class="jdc">
  <a href="#"></a>
</div>
```
