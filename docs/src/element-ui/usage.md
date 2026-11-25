# usage

> 组件的使用
>
> * 全局引入：
>
>   ```js
>   import ElementUI from 'element-ui';
>   
>   Vue.use(ElementUI)
>   ```
>
>   全局引入，是因为入口文件`src/index.js` 对外提供了`install()`
>
>   ```js
>   import Button from '../packages/button/index.js';
>   
>   const components = [
>     Button
>   ];
>   
>   const install = (Vue) => {
>     components.forEach(component => {
>       Vue.component(component.name, component);
>     })
>   }
>   
>   export default {
>     install,
>     Button
>   }
>   
>   ```
>
>   
>
> * 按需引入（也叫：局部引入）
>
>   ```JS
>   import { Button, Select } from 'element-ui';
>   
>   Vue.use(Button);
>   ```
>
>   之所以组件可以按需要引入，是因为每个组件自身挂载了`install()`
>
>   ```js
>   Button.install = function (Vue) {
>     Vue.component(Demo.name, Demo);
>   };
>   ```
>
> * 局部组件
>
>   ```js
>   import { Button } from 'element-ui';
>   
>   export default {
>     components: {
>       ElButton: Button,
>     },
>   };
>   ```
>
>   或
>
>   ```js
>   import { Button, Select } from 'element-ui';
>   
>   Vue.component(Button.name, Button);
>   ```



## 引入样式

样式需要额外引入：

```js
import 'element-ui/lib/theme-chalk/index.css';
```



