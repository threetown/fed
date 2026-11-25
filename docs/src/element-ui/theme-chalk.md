# Theme

elementUI中样式的处理，采用的是PostCss的[Post-salad](https://github.com/ElemeFE/postcss-salad)来编译



## Postcss-salad

Postcss-salad 是一个基于 [PostCSS](http://postcss.org/) 的 CSS 解决方案，它提供了一系列快捷的 `at-rule` 和默认语法声明来帮助你快速地搭建项目样式与类库，它只在调用时才输出代码，而不是直接提供 CSS 类库。
沙拉不仅提供了下一代css语法支持，还提供了基础的sass的语法、属性顺时针简写、rem填充、基础图形绘制、可定制样式的inline-svg以及bem类名自动转化等实用的功能。



## 打包

```bash
% yarn build
yarn run v1.22.10

$ gulp build
[16:00:24] Using gulpfile ~/theme-chalk/gulpfile.js
[16:00:24] Starting 'build'...
[16:00:24] Starting 'compile'...
[16:00:27] Finished 'compile' after 3.73 s
[16:00:27] Starting 'copyfont'...
[16:00:27] gulp-cssmin: Skipping unsupported css element-icons.ttf
[16:00:27] gulp-cssmin: Skipping unsupported css element-icons.woff
[16:00:27] Finished 'copyfont' after 16 ms
[16:00:27] Finished 'build' after 3.75 s
✨  Done in 5.16s.
```

* `gulpfile.js` 对外暴露了一个 **build** 任务，它做了2件事：

  * `compile`：编译 `.scss`文件到 `lib` 文件夹
  * `copyfile`：对`src/fonts/**`进行代码压缩，输出到`lib/fonts`

  ```js
  'use strict';
  
  const { series, src, dest } = require('gulp');
  const sass = require('gulp-sass');
  const autoprefixer = require('gulp-autoprefixer');
  const cssmin = require('gulp-cssmin');
  
  function compile() {
    return src('./src/*.scss')
      .pipe(sass.sync())
      .pipe(autoprefixer({
        browsers: ['ie > 9', 'last 2 versions'],
        cascade: false
      }))
      .pipe(cssmin())
      .pipe(dest('./lib'));
  }
  
  function copyfont() {
    return src('./src/fonts/**')
      .pipe(cssmin())
      .pipe(dest('./lib/fonts'));
  }
  
  exports.build = series(compile, copyfont);
  
  ```





## 目录结构

* `packages/theme-chalk`

```bash
% tree
.
├── README.md
├── gulpfile.js
├── lib
│   ├── fonts
│   │   ├── element-icons.ttf
│   │   └── element-icons.woff
│   └── ...
├── package.json
└── src
    ├── alert.scss
    ├── common
    │   ├── popup.scss
    │   ├── transition.scss
    │   └── var.scss
    ├── container.scss
    ├── date-picker
    │   └── ...
    ├── fonts
    │   ├── element-icons.ttf
    │   └── element-icons.woff
    ├── mixins
    │   ├── _button.scss
    │   ├── config.scss
    │   ├── function.scss
    │   ├── mixins.scss
    │   └── utils.scss
    └── ...
```



## 语法

* `src/mixins/config.scss`

```scss
$namespace: 'el';
$element-separator: '__';
$modifier-separator: '--';
$state-prefix: 'is-';
```

* `src/common/var`

```scss
/* Alert
-------------------------- */
$--alert-padding: 8px 16px !default;
/// borderRadius||Border|2
$--alert-border-radius: $--border-radius-base !default;
/// fontSize||Font|1
$--alert-title-font-size: 13px !default;
/// fontSize||Font|1
$--alert-description-font-size: 12px !default;
/// fontSize||Font|1
$--alert-close-font-size: 12px !default;
/// fontSize||Font|1
$--alert-close-customed-font-size: 13px !default;

```

* `src/mixins/alert.scss`

```scss
@import "mixins/mixins";
@import "common/var";

@include b(alert) {
  width: 100%;
  padding: $--alert-padding;

  @include when(light) {
    .el-alert__closebtn {
      color: $--color-text-placeholder;
    }
  }
  
  @include m(success) {
    &.is-light {
      background-color: $--alert-success-color;
    }
  }

  @include e(content) {
    display: table-cell;
    padding: 0 8px;
  }

  // ...
}

.el-alert-fade-enter,
.el-alert-fade-leave-active {
  opacity: 0;
}

```



### @b

`@b` 后面跟着的class会渲染（前缀为`el`，来自`$namespace: 'el'`）为：`el-class`。

```scss
@b(alert) {
    width:100%;
}
```

编译后：

```css
.el-alert{
  width:100%;
}
```



### @when

`@when`后面跟着的class会被渲染（前缀为 `is-`，来自`$state-prefix: is-`）为：`.is-class`。

```
@include b(alert) {
  @include when(light) {
    .el-alert__closebtn {
      color: $--color-text-placeholder;
    }
  }
}
```

渲染后：

```css
.el-alert.is-light .el-alert__closebtn{
  color:#C0C4CC
}
```



### @e

`@e` 后面跟着的class会被渲染（来自`$element-separator: '__'`）为：`__class`

```scss
@include b(alert) {

  @include e(content) {
    display: table-cell;
    padding: 0 8px;
  }
}
```

渲染后：

```css
.el-alert__content{
  display:table-cell;
  padding:0 8px;
}
```



### @m

`@modifier`或者`@m`后面跟着的class会被渲染（来自 `$modifier-separator: '--';`）为：`--class`


```scss
@include m(success) {
    &.is-light {
      background-color: $--alert-success-color;
    }
}
```

渲染后：

```css
.el-alert--success.is-light{
  background-color:#f0f9eb;
  color:#67C23A;
}
```







* [theme-chalk-default](https://github.com/threetowns/element-ui-theme-default)