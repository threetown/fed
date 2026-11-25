# 目录结构

* 源码 [Element](https://github.com/ElemeFE/element)
* 发布版（项目的`node_modules`下的`element-ui`）

## 源码

```bash
% tree -L 1
.
├── .github   # Element UI贡献指南、issue和PR模板
├── .babelrc
├── .eslintignore
├── .eslintrc
├── .gitattributes
├── .gitignore
├── .travis.yml         # 持续集成(CI)的配置文件
├── CHANGELOG.zh-CN.md  # 更新日志
├── LICENSE   # 开源许可证
├── Makefile  # 输入make命令将会执行 Makefile 文件中的某个目标命令
├── README.md
├── build     # 打包相关的配置文件
│   ├── bin
│   ├── config.js
│   ├── deploy-ci.sh
│   ├── deploy-faas.sh
│   ├── gen-single-config.js
│   ├── git-release.sh
│   ├── md-loader
│   ├── release.sh
│   ├── webpack.common.js
│   ├── webpack.component.js
│   ├── webpack.conf.js
│   ├── webpack.demo.js
│   ├── webpack.extension.js
│   └── webpack.test.js
├── components.json       # 标明了组件的文件路径（方便webpack打包时，获取组件的文件路径）
├── element_logo.svg
├── examples  # 组件示例demo
├── package.json
├── packages  # 组件源码
├── src       # 存放入口文件和一些工具辅助函数
│   ├── directives
│   ├── index.js
│   ├── locale
│   ├── mixins
│   ├── transitions
│   └── utils
├── test      # 单元测试相关文件（这是一个优秀的开源项目必备的）
│   ├── ssr
│   └── unit
├── types     # 类型声明文件
├── web-types.json
└── yarn.lock
```



## 发布版

来自于`package.json` 中的 **files**：`lib`、`src`、`packages`、`types`、`web-types.json`

```bash
.
├── CHANGELOG.en-US.md
├── CHANGELOG.es.md
├── CHANGELOG.fr-FR.md
├── CHANGELOG.zh-CN.md
├── LICENSE
├── README.md
├── lib
│   ├── ...
│   ├── directives
│   │   ├── mousewheel.js
│   │   └── repeat-click.js
│   ├── locale
│   │   ├── format.js
│   │   ├── index.js
│   │   └── lang
│   │       ├── ...
│   │       ├── zh-CN.js
│   │       └── zh-TW.js
│   ├── main.js
│   ├── mixins
│   │   ├── emitter.js
│   │   ├── focus.js
│   │   ├── locale.js
│   │   └── migrating.js
│   ├── theme-chalk
│   │   ├── ...
│   │   ├── fonts
│   │   │   ├── element-icons.ttf
│   │   │   └── element-icons.woff
│   │   └── upload.css
│   ├── umd
│   │   └── locale
│   │       ├── ...
│   │       ├── zh-CN.js
│   │       └── zh-TW.js
│   └── utils
│       ├── after-leave.js
│       ├── aria-dialog.js
│       ├── aria-utils.js
│       ├── clickoutside.js
│       ├── date-util.js
│       ├── date.js
│       ├── dom.js
│       ├── menu
│       │   ├── aria-menubar.js
│       │   ├── aria-menuitem.js
│       │   └── aria-submenu.js
│       ├── merge.js
│       ├── popper.js
│       ├── popup
│       │   ├── index.js
│       │   └── popup-manager.js
│       ├── resize-event.js
│       ├── scroll-into-view.js
│       ├── scrollbar-width.js
│       ├── shared.js
│       ├── types.js
│       ├── util.js
│       ├── vdom.js
│       └── vue-popper.js
├── node_modules
├── package.json
├── packages
│   ├── alert
│   │   ├── index.js
│   │   └── src
│   │       └── main.vue
│   ├── ...
│   ├── theme-chalk
│   │   ├── README.md
│   │   ├── lib
│   │   │   ├── ...
│   │   │   ├── fonts
│   │   │   │   ├── element-icons.ttf
│   │   │   │   └── element-icons.woff
│   │   │   └── upload.css
│   │   ├── package.json
│   │   └── src
│   │       ├── ...
│   │       ├── common
│   │       │   ├── popup.scss
│   │       │   ├── transition.scss
│   │       │   └── var.scss
│   │       ├── container.scss
│   │       ├── fonts
│   │       │   ├── element-icons.ttf
│   │       │   └── element-icons.woff
│   │       ├── mixins
│   │       │   ├── _button.scss
│   │       │   ├── config.scss
│   │       │   ├── function.scss
│   │       │   ├── mixins.scss
│   │       │   └── utils.scss
│   │       ├── tree.scss
│   │       └── ...
│   └── ...
├── src
│   ├── directives
│   │   ├── mousewheel.js
│   │   └── repeat-click.js
│   ├── index.js
│   ├── locale
│   │   ├── format.js
│   │   ├── index.js
│   │   └── lang
│   │       ├── ...
│   │       └── zh-TW.js
│   ├── mixins
│   │   ├── emitter.js
│   │   ├── focus.js
│   │   ├── locale.js
│   │   └── migrating.js
│   ├── transitions
│   │   └── collapse-transition.js
│   └── utils
│       ├── after-leave.js
│       ├── aria-dialog.js
│       ├── aria-utils.js
│       ├── clickoutside.js
│       ├── date-util.js
│       ├── date.js
│       ├── dom.js
│       ├── menu
│       │   ├── aria-menubar.js
│       │   ├── aria-menuitem.js
│       │   └── aria-submenu.js
│       ├── merge.js
│       ├── popper.js
│       ├── popup
│       │   ├── index.js
│       │   └── popup-manager.js
│       ├── resize-event.js
│       ├── scroll-into-view.js
│       ├── scrollbar-width.js
│       ├── shared.js
│       ├── types.js
│       ├── util.js
│       ├── vdom.js
│       └── vue-popper.js
└── types
    ├── ...
    └── upload.d.ts
```





## package.json

详情见[package.json](./package.json.md)



## components.json

记录了组件的路径，在自动化生成文件以及入口时会用到：

```json
{
  "pagination": "./packages/pagination/index.js",
  "dialog": "./packages/dialog/index.js",
  "autocomplete": "./packages/autocomplete/index.js",
  // ...
  "avatar": "./packages/avatar/index.js",
  "drawer": "./packages/drawer/index.js",
  "popconfirm": "./packages/popconfirm/index.js"
}
```



## Makefile

详情见 [Makefile](./makefile.md)

## packages

存放着组件库的源码和组件样式(`packages/theme-chalk`)文件。以 **alert**组件为例：

```bash
packages      
└── alert
    ├── index.js
    └── src
        └── main.vue
        
166 directories, 373 files
```

* `main.vue`对应就是**组件源码**，`index.js`就是**入口文件**。

```js
// packages/alert/index.js

// 1. 引入组件
import Alert from './src/main';

/* istanbul ignore next */
// 2. 为组件提供install方法
//    让Vue可以通过Vue.use(Alert)去使用。
Alert.install = function(Vue) {
  Vue.component(Alert.name, Alert);
};

export default Alert;

```



## src

* **packages** 文件夹，分开处理每个组件

* **src** 文件夹，把所有的组件做一个统一处理

  ```bash
  src
  ├── directives                  # 自定义指令
  │   ├── mousewheel.js
  │   └── repeat-click.js
  ├── index.js                   # 项目整体入口
  ├── locale                     # 组件国际化
  │   ├── format.js
  │   ├── index.js
  │   └── lang
  │       ├── ...
  │       ├── zh-CN.js
  │       └── zh-TW.js
  ├── mixins                    # 组件mixins
  │   ├── emitter.js
  │   ├── focus.js
  │   ├── locale.js
  │   └── migrating.js
  ├── transitions               # 动画封装
  │   └── collapse-transition.js
  └── utils                     # 公共方法
      ├── after-leave.js
      ├── aria-dialog.js
      ├── aria-utils.js
      ├── clickoutside.js
      ├── date-util.js
      ├── date.js
      ├── dom.js
      ├── lodash.js
      ├── menu
      │   ├── aria-menubar.js
      │   ├── aria-menuitem.js
      │   └── aria-submenu.js
      ├── merge.js
      ├── popper.js
      ├── popup
      │   ├── index.js
      │   └── popup-manager.js
      ├── resize-event.js
      ├── scroll-into-view.js
      ├── scrollbar-width.js
      ├── shared.js
      ├── types.js
      ├── util.js
      ├── vdom.js
      └── vue-popper.js
      
  8 directories, 91 files
  ```

### src/index.js

> `src/index.js`是由`./build/bin/build-entry.js`脚本自动生成的

这个文件主要做了3件事情：

- 导入了 `packages` 下的所有组件（根据`components.json`配置而来，注意没有`theme-chalk`）
- 对外暴露了`install`方法（把组件注册到`Vue`上面，并在`Vue`原型上挂载了一些全局变量和方法）
- 最终将`install`方法、变量、方法导出

```js
/* Automatically generated by './build/bin/build-entry.js' */

import Loading from '../packages/loading/index.js';
import Icon from '../packages/icon/index.js';

const components = [
  Pagination,
  Dialog,
  // ...
];

const install = function(Vue, opts = {}) {
  locale.use(opts.locale);
  locale.i18n(opts.i18n);

  components.forEach(component => {
    Vue.component(component.name, component);
  });

  Vue.use(InfiniteScroll);
  Vue.use(Loading.directive);

  Vue.prototype.$ELEMENT = {
    size: opts.size || '',
    zIndex: opts.zIndex || 2000
  };

  Vue.prototype.$loading = Loading.service;
  Vue.prototype.$msgbox = MessageBox;
  Vue.prototype.$alert = MessageBox.alert;
  Vue.prototype.$confirm = MessageBox.confirm;
  Vue.prototype.$prompt = MessageBox.prompt;
  Vue.prototype.$notify = Notification;
  Vue.prototype.$message = Message;

};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '2.15.13',
  locale: locale.use,
  i18n: locale.i18n,
  install,
  Loading,
  Icon,
  // ...
};

```



## examples

这是一个完整独立的Vue项目。存放了 `ElementUI`的组件示例，主要用于官网文档的展示。

```bash
examples
├── app.vue
├── assets
│   ├── images
│   │   ├── ...
│   │   └── web.png
│   └── styles
│       ├── common.css
│       └── fonts
│           ├── icomoon.eot
│           ├── icomoon.svg
│           ├── icomoon.ttf
│           ├── icomoon.woff
│           └── style.css
├── bus.js
├── color.js
├── components
│   ├── demo-block.vue
│   ├── footer-nav.vue
│   ├── footer.vue
│   ├── header.vue
│   ├── search.vue
│   ├── side-nav.vue
│   ├── theme
│   │   ├── basic-tokens-preview.vue
│   │   ├── components-preview.vue
│   │   ├── constant.js
│   │   ├── loader
│   │   │   ├── ajax.js
│   │   │   ├── api.js
│   │   │   ├── docStyle.vue
│   │   │   ├── index.vue
│   │   │   └── loading
│   │   │       ├── index.vue
│   │   │       ├── progress.js
│   │   │       └── progress.vue
│   │   ├── localstorage.js
│   │   ├── theme-card.vue
│   │   ├── theme-list.js
│   │   └── utils.js
│   ├── theme-configurator
│   │   ├── action.vue
│   │   ├── editor
│   │   │   ├── borderRadius.vue
│   │   │   ├── boxShadow.vue
│   │   │   ├── color-picker
│   │   │   │   ├── index.js
│   │   │   │   └── src
│   │   │   │       ├── color.js
│   │   │   │       ├── components
│   │   │   │       │   ├── alpha-slider.vue
│   │   │   │       │   ├── color-list.vue
│   │   │   │       │   ├── hue-slider.vue
│   │   │   │       │   ├── picker-dropdown.vue
│   │   │   │       │   ├── predefine.vue
│   │   │   │       │   └── sv-panel.vue
│   │   │   │       ├── draggable.js
│   │   │   │       └── main.vue
│   │   │   ├── color.vue
│   │   │   ├── fontLineHeight.vue
│   │   │   ├── fontSize.vue
│   │   │   ├── fontWeight.vue
│   │   │   ├── input.vue
│   │   │   ├── mixin.vue
│   │   │   └── simpleText.vue
│   │   ├── index.vue
│   │   ├── main.vue
│   │   ├── shortcut.vue
│   │   └── utils
│   │       ├── boxShadow.js
│   │       └── utils.js
│   └── theme-picker.vue
├── demo-styles
│   ├── alert.scss
│   ├── ...
│   └── upload.scss
├── docs
│   ├── en-US
│   │   └── ...
│   ├── es
│   │   └── ...
│   └── zh-CN
│       ├── alert.md
│       ├── ...
│       └── upload.md
├── dom
│   └── class.js
├── entry.js
├── extension
│   └── src
│       ├── app.js
│       ├── background.js
│       ├── editor
│       │   ├── editor.vue
│       │   ├── gallery.vue
│       │   ├── icon-close.png
│       │   ├── icon-entrance.png
│       │   ├── index.vue
│       │   └── utils.js
│       ├── entry.js
│       ├── icon.png
│       └── manifest.json
├── favicon.ico
├── i18n
│   ├── component.json
│   ├── page.json
│   ├── route.json
│   ├── theme-editor.json
│   └── title.json
├── icon.json
├── index.tpl
├── nav.config.json
├── pages
│   ├── en-US
│   │   └── ...
│   ├── es
│   │   └── ...
│   ├── fr-FR
│   │   └── ...
│   ├── template
│   │   ├── changelog.tpl
│   │   ├── component.tpl
│   │   ├── design.tpl
│   │   ├── guide.tpl
│   │   ├── index.tpl
│   │   ├── nav.tpl
│   │   ├── resource.tpl
│   │   ├── theme-nav.tpl
│   │   ├── theme-preview.tpl
│   │   └── theme.tpl
│   └── zh-CN
│       ├── changelog.vue
│       ├── component.vue
│       ├── design.vue
│       ├── guide.vue
│       ├── index.vue
│       ├── nav.vue
│       ├── resource.vue
│       ├── theme-nav.vue
│       ├── theme-preview.vue
│       └── theme.vue
├── play
│   └── index.vue
├── play.js
├── route.config.js
├── util.js
└── versions.json

32 directories, 500 files
```

