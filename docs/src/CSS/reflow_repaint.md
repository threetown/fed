# 重绘和回流

> * 回流 —— 将DOM节点和CSS样式结合准确的计算出DOM节点的表现形式（位置、形状），计算的过程就是回流
> * 重绘 —— 经过了回流计算之后，就了解到哪些DOM显示（如何显示）和不显示，将DOM显示到浏览器中的过程就是重绘



**回流必将引起重绘，重绘不一定会引起回流。**

:::tip 浏览器使用流式布局模型 (Flow Based Layout)。

* 浏览器会把`HTML`解析成`DOM`，把`CSS`解析成`CSSOM`，`DOM`和`CSSOM`合并就产生了`Render Tree`。

* 有了`RenderTree`，我们就知道了所有节点的样式，然后计算他们在页面上的大小和位置，最后把节点绘制到页面上。

* 由于浏览器使用流式布局，对`Render Tree`的计算通常只需要遍历一次就可以完成，但`table`及其内部元素除外，他们可能需要多次计算，通常要花3倍于同等元素的时间，这也是为什么要避免使用`table`布局的原因之一。

:::

### a. 回流（Reflow）

当`Render Tree`中部分或全部元素的尺寸、结构、或某些属性发生改变时，**浏览器重新渲染部分或全部文档的过程**称为回流。

会导致回流的操作：

- 页面首次渲染
- 浏览器窗口大小发生改变
- 元素尺寸或位置发生改变
- 元素内容变化（文字数量或图片大小等等）
- 元素字体大小变化
- 添加或者删除**可见**的`DOM`元素
- 激活`CSS`伪类（例如：`:hover`）
- 查询某些属性或调用某些方法

一些常用且会导致回流的属性和方法：

- `clientWidth`、`clientHeight`、`clientTop`、`clientLeft`
- `offsetWidth`、`offsetHeight`、`offsetTop`、`offsetLeft`
- `scrollWidth`、`scrollHeight`、`scrollTop`、`scrollLeft`
- `scrollIntoView()`、`scrollIntoViewIfNeeded()`
- `getComputedStyle()`
- `getBoundingClientRect()`
- `scrollTo()`

### b. 重绘 (Repaint)

当页面中**元素样式的改变并不影响它在文档流中的位置**时（例如：`color`、`background-color`、`visibility`等），浏览器会将新样式赋予给元素并重新绘制它，这个过程称为重绘。



## 如何减少回流和重绘

1. 尽量一次修改所有样式属性

   ```diff
     const el = document.getElementById('app');
   - el.style.padding = '5px';
   - el.style.borderLeft = '1px';
   
   + el.style.cssText += 'padding: 5px; border-left: 1px;'
   ```

2. 批量修改DOM

   即使元素脱离文档流，在脱离文档流的元素中修改完成，然后最后一次插入到DOM文档流中

   有三种方式可以让DOM脱离文档流：

   * 隐藏元素，应用修改，重新显示

   * 使用文档片段(document fragment)在当前DOM之外构建一个子树，再把它拷贝回文档。

     ```diff
       var ul = document.getElementById("ul");
     + var fragment = document.createDocumentFragment();
       for (var i = 0; i < 20; i++) {
         var li = document.createElement("li");
         li.innerHTML = "index: " + i;
     -   ul.appendChild(li);
     +   fragment.appendChild(li);
       }
     + ul.appendChild(fragment);
     ```

   * 将原始元素拷贝到一个脱离文档的节点中，修改节点后，再替换原始的元素。

3. 避免触发同步布局事件

4. 对于复杂动画效果,使用绝对定位让其脱离文档流

5. css3硬件加速（GPU加速）





## 参考文献

* [浏览器渲染之回流重绘](https://www.zoo.team/article/browser-redraw)

