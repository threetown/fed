title: 目录结构
---

此目录为src文件下的目录结构

```yaml
├── api
│   ├── apiUser.js
│   ├── apiOrder.js
│   └── apiRequest.js( 封装 axios )
├── assets
│   ├── images
│   ├── iconfont
│   ├── styles
│       ├── reset.scss
│       ├── common.scss
│       └── variable.scss
├── components
│   ├── CNoData.vue
│   └── CCopy.vue
├── mixins(非必须)
│   └── index.js
├── directives(非必须)
│   └── index.js
├── mock(非必须)
│   └── data.js
├── plugins
│   ├── linkui.js
│   └── index.js
├── router
│   ├── modules
│       ├── app.js
│       ├── user.js
│   └── index.js
├── store
│   ├── modules
│       ├── app.js
│       ├── user.js
│       ├── common.js
│       └── index.js
│   └── index.js
├── utils
│   ├── constants.js
│   └── tools.js
├── views
│   ├── home
│       ├── components
│           ├── BlockData.vue
│           └── UserBar.vue
│       └── index.vue
│   ├── transaction
│       ├── components
│           └── TransactionList.vue
│       └── index.vue
│   ├── login
│       └── index.vue
│   └── layout
│       └── index.vue
├── App.vue
└── main.js
```

## api

api 目录用于存放api请求，即所有的api都放在这个目录下进行管理。根据业务模块，对 api 进行模块划分，如用户相关的 api 统一写在 apiUser.js 中，订单统一写在 apiOrder.js 中。

## assets

assets 目录主要存放样式、图片、字体图标等文件。

## components

放置的都是全局公用的一些组件，文件夹内的组件都需**以”C“开头**，**类似CNoData.vue**，表示 customized 定制化的意思。

## plugins

此文件夹用来注册第三方插件，如：linkui、number-precision等，里面的 index.js 文件会自定注册其他的插件，在 main.js 中只需引入 plugins/index.js 一个文件。

## store

store文件夹中的modules文件夹需要有一个 index.js 文件，用来汇总其他所有模块的内容，这样在store/index.js文件中只需引入一个 modules/index.js 文件，不用一个个引入其他的模块。

通常 modules/index.js 内容如下：

```javascript
/**
 * The file enables `@/store/index.js` to import all vuex modules
 * in a one-shot manner. There should not be any reason to edit this file.
 */

const files = require.context('.', false, /\.js$/)
const modules = {}

files.keys().filter(ele => !ele.includes('common')).forEach(key => {
  if (key === './index.js') return
  modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
})

export default modules
```

## utils

utils里面是一些工具类的方法、全局变量。

## views

一些页面级的组件建议还是放在各自views文件下，方便管理。

![](http://jty-common.oss-cn-beijing.aliyuncs.com/nrsc/156743499388684264752?1567406221424#id=QfZmt&margin=%5Bobject%20Object%5D&originHeight=479&originWidth=668&originalType=binary&status=done&style=none)