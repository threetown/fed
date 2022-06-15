## 一、使用一个元素居中

### 1.1 position + margin(已知元素大小)

```css
.box{ position: relative; }

.child{
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -50px;
  margin-top: -50px;
  
  width: 100px;
  height: 100px;
  background: red;
}
```

### 1.2 position + margin

```css
.box{ position: relative; }

.child{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  
  background: red;
  width: 100px;
  height: 40px;
}
```

### 1.3 position + transform

```css
.box{ position: relative; }

.child{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

### 1.4 flex

```css
.box{
  display: flex;
  justify-content: center;
  align-items: center;
}
```

### 1.5 flex + margin

```css
.box{
    display: flex;
}
.child{
    margin: auto;
}
```

### 1.6 table-cell

```css
.box{
  display: table-cell;
  
  width: 300px;
  height: 200px;
  border: 1px solid #ccc;
  vertical-align: middle;
  text-align: center;
}
```

### 1.7 vertical-align

```css
.box{
  width: 300px;
  height: 200px;
  border: 1px solid #ccc;
  text-align: center;
}

.box:before{
  content: '';
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}

.box img{
  vertical-align: middle;
}
```

### 1.8 Grid布局居中

```css
.box{
  display: grid;
  align-items: center;
  justify-content: center; 
}
```

### 1.9 Grid与 margin

```css
.box{
	display: grid;
}
.child{
	margin: auto;
}
```



### 二、左右分栏或三栏布局



### 三、flex弹性布局



### 四、grid网络布局







二、浏览器
localStage、sessionStage、cookie
跨域（同源策略、解决跨域方法）
HTTP状态码（200、302、304、404、500等）
HTTP三次握手、四次挥手
浏览器缓存（协商缓存、强缓存及如果设置）

三、js
js数据类型及数据类型检测
this指向，改变this指向(call、apply、bind)
闭包（应用场景：防抖、节流；高阶函数、函数柯里化）
js中类的继承（ES5,构造函数+原型、原型链；ES6，class的extents）
Event loop事件循环（微任务 > DOM渲染 > 宏任务）

四、vue
1. 单向数据流
2. 双向数据绑定
3. vue响应式原理(obsever、dep、watcher、complie，Object.defineProperty()递归)
4. v-model
5. computed和watch
6. 生命周期
7. nextTick
8. vue.use() 【install函数或对象】

五、webpack或优化
1. 常用配置项
2. 优化（loader、resolve、webpack-dev-server自动编译代码、splitChunksPlugin代码分离、output输入文件 名配置，缓存、treeShaking、source-map源码映射、css压缩、CDN加速通过 externals）


六、算法和数据结构