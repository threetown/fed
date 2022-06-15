title: 注释规范
---
## 单行注释

一般用于简单的描述，如某些状态描述、属性描述等。<br />注释内容前后各一个空格字符，且位于要注释代码的上面，单独占一行。<br />_推荐：_

```html
<!-- Comment Text -->
<div>...</div>
```

_不推荐：_

```html
<div>...</div><!-- Comment Text -->	
	
<div><!-- Comment Text -->
    ...
</div>
```

## 模块注释

一般用于描述模块的名称以及模块开始与结束的位置。<br />注释内容前后各一个空格字符，<!-- S Comment Text -->表示模块开始，<!-- E Comment Text -->表示模块结束，模块与模块之间相隔一行。<br />_推荐写法：_

```html
<!-- S Comment Text A -->	
<div class="mod_a">
    ...
</div>
<!-- E Comment Text A -->
	
<!-- S Comment Text B -->	
<div class="mod_b">
    ...
</div>
<!-- E Comment Text B -->
```

_不推荐写法：_

```html
<!-- S Comment Text A -->
<div class="mod_a">
    ...
</div>
<!-- E Comment Text A -->
<!-- S Comment Text B -->	
<div class="mod_b">
    ...
</div>
<!-- E Comment Text B -->
```