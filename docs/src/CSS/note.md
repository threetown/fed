title: 注释规范
---

## 单行注释

注释内容前后各一个空格字符，且单独占一行，行与行之间相隔一行。<br />_推荐：_

```css
/* Comment Text */
.banner { ... }

/* Comment Text */
.banner { ... }
```

不推荐：

```css
/*Comment Text*/
.banner { ... }


.banner { ... } /* Comment Text */
```

## 模块注释

注释内容前后各一个空格字符，`/* S Comment Text */` 表示模块开始，`/* E Comment Text */` 表示模块结束，模块与模块之间相隔两行。<br />_推荐：_

```css
/* S Comment Text */
.banner { ... }
/* E Comment Text */


/* Comment Text */
.banner { ... }
/* E Comment Text */
```

不推荐：

```css
/* S Comment Text */
.banner { ... }
/* E Comment Text */
/* Comment Text */
.banner { ... }
/* E Comment Text */
```

## 文件信息注释

在样式文件编码声明@charset语句下面注明页面名称、作者、创建日期等信息。

```css
@charset "UTF-8";
/**
 * @desc File Info
 * @author Author Name
 * @date 2020-5-18
 */
```

更多关于CSS注释：[#Comments](http://www.w3.org/TR/2011/REC-CSS2-20110607/syndata.html#comments)。