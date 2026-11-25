# index.js

> `src/index.js` 入口文件



```js
const install = function(Vue, opts = {}) {
  locale.use(opts.locale);
  locale.i18n(opts.i18n);

  // 通过forEach循环遍历进行大部分组件的注册
  components.forEach(component => {
    Vue.component(component.name, component);
  });

  /** 
   * InfiniteScroll和Loading，全局注册指令
   * 通过v-infinite-scroll和v-loading等指令式来调用
   **/
  Vue.use(InfiniteScroll);
  Vue.use(Loading.directive);
  
  Vue.prototype.$ELEMENT = {
    size: opts.size || '',
    zIndex: opts.zIndex || 2000
  };
  
  /**
   * msgbox、alert等在全局Vue.prototype添加方法
   * 通过函数进行调用
   **/
  Vue.prototype.$loading = Loading.service;
  Vue.prototype.$msgbox = MessageBox;
  Vue.prototype.$alert = MessageBox.alert;
  Vue.prototype.$confirm = MessageBox.confirm;
  Vue.prototype.$prompt = MessageBox.prompt;
  Vue.prototype.$notify = Notification;
  Vue.prototype.$message = Message;
  
}
```

对 `opts` 配置

```js
import Element from 'element-ui';
Vue.use(Element, { size: 'small', zIndex: 3000 });
```

