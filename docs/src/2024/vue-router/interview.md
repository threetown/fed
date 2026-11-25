



## 钩子函数

### 全局守卫

* 全局前置守卫

  ```js
  router.beforeEach((to, from, next) => {
    // ...
    next()
  })
  ```

* 全局解析守卫

  ```js
  router.beforeResolve((to, from, next) => {
    // ...
    next()
  })
  ```

* 全局后置钩子

  ```js
  router.afterEach((to, from) => {
    
  })
  ```

### 路由独享守卫

* `beforeEnter`

```js
const router = new VueRouter({
  routes: [
    {
      path: '/home',
      beforeEnter: (to, from, next) => {
        //...
      }
    }
  ]
})
```



### 组件内的守卫

```js
const Foo = {
  template: `...`,
  beforeRouteEnter(to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    next(vm => {
      // 通过 `vm` 访问组件实例
    })
  },
  beforeRouteUpdate(to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
  },
  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
  }
}
```





## 完整的导航解析流程

1. 导航被触发
2. 在失活的组件里调用 beforeRouteLeave 守卫
3. 调用全局的 beforeEach 守卫
4. 在重用的组件里调用 beforeRouteUpdate 守卫
5. 在路由配置里调用 beforeEnter 守卫
6. 解析异步路由组件
7. 在被激活的组件里调用 beforeRouteEnter
8. 在所有组件内守卫和异步路由被解析之后，调用全局的解析守卫 beforeResolve
9. 导航被确认
10. 调用全局后置钩子 afterEach
11. 触发 DOM 更新
12. 用创建好的组件实例，传给 beforeRouteEnter 中的 next 回调函数



## hash模式和history模式

### hash 模式

**优点**：

* hash 值会出现在 URL 中，但不会包含在 http 请求中，所以改变 hash 值时不会刷新页面，也不会向服务器发送请求

* hash 值的改变会触发 `hashchange` 事件，通过监听 hashChange 事件来完成操作实现前端路由
  兼容性比较好，能兼容 IE8

**缺点：**

* url 路径会出现”#“字符
* hash 有体积限制



### history 模式

**优点：**

* history 模式利用 HTML5 History Interface 中新增的 `pushState()`和 `replaceState()`方法，这两个方法应用于浏览器的历史记录栈，提供了对历史记录进行修改的功能，

* url 值不会出现“#”字符

**缺点：**

* url 的改变属于 http 请求，借助 `history.pushState` 实现页面的无刷新跳转，因此会重新请求服务器，所以需要**服务器的配置**，否则会 404
* 兼容性差，IE10，特定浏览器支持



## route 和 router 区别

- `this.$route` 是**当前路由**信息对象，包括 path、params、hash、query、fullPath、matched、name 等路由信息参数
- `this.$router` 是**路由实例**对象，包括了路由的跳转方式 push()、go()，钩子函数等
- `this.$routes` 是创建**路由实例的配置项**，用来配置多个 route 路由对象





## query 和 params 区别

- query 刷新页面参数不会消失，params 传参页面参数会消失，可以考虑本地存储解决
- query 传参会显示在 url 地址上，params 传参不会显示地址上





## 监听路由参数的变化

> 只能用在包含 `<router-view/>` 的组件内

* 通过`watch`监听 `$route`对象

  ```js
  watch: {
    $route(to, from) {
      console.log(to, from)
    }
  }
  ```

* 调用组件内守卫 `beforeRouteUpdate`

  ```js
  beforeRouteUpdate(to, from, next) {
    console.log(to, from)
    next()
  }
  ```



## router-link

router-link 是 vue-router 的内置组件，在具有路由功能的应用中，作为声明式导航使用，它有 8 个 props：

- to
  必填，标识目标路由的链接，当被点击后，内部会立刻把 to 的值传到 router.push()，所以这个值可以是一个字符串或者描述目标路由的对象
- repalce
  默认值 false，若设置的话，当点击时，会调用 `router.replace()`而不是 `router.push()`
- append
  设置 `append` 属性后，则在当前 (相对) 路径前添加基路径。例如，我们从 /a 导航到一个相对路径 b，如果没有配置 `append`，则路径为 /b，如果配了，则为 /a/b
- tag
  让`<router-link>`渲染成 `tag` 设置的标签，如 `tag="li"`，就会渲染成 `<li>跳转</li>`
- active-class
  默认值为 `router-link-acitve`，设置链接激活时使用的 CSS 类名，默认值可以通过路由的构造选项 `linkActiveClass` 来全局配置
- exact-active-class
  默认值为 `router-link-exact-active`，设置链接被精确匹配的时候应该激活的 class，默认值可以通过路由构造函数选项 `linkExactActiveClass` 进行全局配置
- exact
  是否精确匹配，默认为 false
- event
  声明可以用来触发导航的事件，可以是一个字符串或是一个包含字符串的数组，默认是 `click`

```vue
<router-link to="home">Home</router-link>
<router-link :to="'home'">Home</router-link>
<router-link :to="{ path: 'home' }">Home</router-link>
<router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link>
<router-link :to="{ path: 'user', query: { userId: 123 }}">User</router-link>
```





