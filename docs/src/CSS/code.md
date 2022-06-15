title: 代码规范
---

## 编码规范

### 样式表编码

- 样式文件必须写上 @charset 规则，并且一定要在样式文件的第一行首个字符位置开始写，编码名用 “UTF-8”。
- 字符 @charset “”; 都用小写字母，不能出现转义符。
- 考虑到在使用“UTF-8”编码情况下 BOM 对代码的污染和编码显示的问题，在可控范围下，坚决不使用 BOM。

> 更多关于 BOM 可参考[BOM的介绍](https://zh.wikipedia.org/wiki/%E4%BD%8D%E5%85%83%E7%B5%84%E9%A0%86%E5%BA%8F%E8%A8%98%E8%99%9F)和[「带 BOM 的 UTF-8」和「无 BOM 的 UTF-8」有什么区别？](http://www.zhihu.com/question/20167122)

_推荐：_

```css
@charset "UTF-8";

.banner { ... }
```

*不推荐：*

```css
/**
 * @desc File Info
 * @author Author Name
 * @date 2015-10-10
 */
 
/* @charset规则不在文件首行首个字符开始 */
@charset "UTF-8";

.banner { ... }
```

```css
@CHARSET "UTF-8";
/* @charset规则没有用小写 */

.banner { ... }
```

```css
/* 无@charset规则 */
.banner { ... }
```

## 书写风格

### 代码格式化

统一使用展开格式书写样式。

```css
/* 推荐 */
.banner {
  display: block;
  width: 50px;
}
	
/* 不推荐 */
. banner{display: block;width: 50px;}
```

### 代码大小写

样式选择器，属性名，属性值全部使用小写字母书写。

```css
/* 推荐 */
.banner {
  display:block;
}
	
/* 不推荐 */
. BANNER {
  DISPLAY: BLOCK;
}
```

### 选择器

- 尽量少用通用选择器*
- 选择器要尽可能短，建议不要超过 3 个（浏览器读取选择器，遵循的原则是从选择器的右边到左边读取）

```css
/* 推荐 */
.banner {}
.banner li {}
.banner li p {}

/* 不推荐 */
* {}
.banner .title p img {}
```

### 代码缩进

统一使用两个空格进行代码缩进，这是唯一能保证在所有环境下获得一致展现的方法。

```css
.banner-header {
  width: 100%;
  height: 100%;
}
```

### 分号

每个属性声明末尾都要加分号。

```css
.banner {
  width: 100%;
  height: 100%;
}
```

### 代码易读性

左括号与类名之间添加一个空格，冒号与属性值之间添加一个空格。

```css
/* 推荐 */
.banner { 
  width: 100%; 
}

/* 不推荐 */
..banner{ 
  width:100%;
}
```

以逗号分隔的属性值，每个逗号后面都应该插入一个空格（例如，`box-shadow`）。

```css
/* 推荐 */
.banner {
  box-shadow: 1px 1px 1px #333, 2px 2px 2px #ccc;
}

/* 不推荐 */
.banner {
  box-shadow: 1px 1px 1px #333,2px 2px 2px #ccc;
}
```

选择器分组时，将单独的选择器单独放在一行。

```css
/* 推荐 */
.header, 
.header_logo, 
.header_hd {
  color: #ff0;
}
.nav {
  color: #fff;
}

/* 不推荐 */
.header,.header_logo,.header_hd {
  color: #ff0;
}.nav {
  color: #fff;
}
```

不要在 `rgb()`、`rgba()`、`hsl()`、`hsla()` 或 `rect()` 值的_内部_的逗号后面插入空格，且取值不要带有不必要的 0。

```css
/* 推荐 */
.banner {
  color: rgba(255,255,255,.5);
}

/* 不推荐 */
color: rgba( 255, 255, 255, 0.5 );
```

尽量使用简写形式的十六进制值。

```css
/* 推荐 */
.banner {
  color: #fff;
}

/* 不推荐 */
.banner {
  color: #ffffff;
}

```

避免为 0 值指定单位。

```css
/* 推荐 */
.banner {
  margin: 0 10px;
}

/* 不推荐 */
.banner {
  margin: 0px 10px;
}

```

### 属性值引号

css属性值需要用到引号时，统一使用单引号

```css
/* 推荐 */
.banner {
  font-family: 'Hiragino Sans GB';
}

/* 不推荐 */
.banner {
  font-family: "Hiragino Sans GB";
}

```

### 属性书写顺序

相关的属性声明应当归为一组，建议遵循以下顺序：

1. Positioning：定位样式
1. Box model：盒模型
1. Typographic：排版样式
1. Visual：视觉样式
1. Animation： 动画
1. Misc： 其他

由于定位（positioning）可以从正常的文档流中移除元素，并且还能覆盖盒模型（box model）相关的样式，因此排在首位。盒模型排在第二位，因为它决定了组件的尺寸和位置。<br />其他属性只是影响组件的内部（inside）或者是不影响前两组属性，因此排在后面

```css
.declaration-order {
  /* Positioning */
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  
  /* Box-model */
  display: block;
  float: right;
  width: 100px;
  height: 100px;
  
  /* Typography */
  font: normal 13px "Helvetica Neue", sans-serif;
  line-height: 1.5;
  color: #333;
  text-align: center;
  
  /* Visual */
  background-color: #f5f5f5;
  border: 1px solid #e5e5e5;
  border-radius: 3px;
  
  /* Animation */
  animation: slide-up 1s;
  transition: all 1s;
  
  
  /* Misc */
  opacity: 1;
}
```

### 带私有前缀的属性

私有前缀属性在前，标准属性在后。

```css
.lls {
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -o-border-radius: 10px;
  -ms-border-radius: 10px;
  border-radius: 10px;
}
```
