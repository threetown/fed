Render



Vue.js 的 Render 函数就是将template 的内容改写成一个 JavaScript 对象。官网文档上有个极好的例子：[https://cn.vuejs.org/v2/guide/render-function.html](https://links.jianshu.com/go?to=https%3A%2F%2Fcn.vuejs.org%2Fv2%2Fguide%2Frender-function.html)



```jsx
Vue.component('my-component', {
  render: (h)=> {
    return h('div', {
            style: {
              color: 'red'
            }
          }, '自定义内容');
  }
})
```

应用场景：如果模板条件太多，用JS处理比HTML处理更加便利时，推荐使用`render`函数。

