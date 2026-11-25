# package.json

```json
{
  "name": "element-ui",
  "version": "2.15.13",
  "description": "A Component Library for Vue.js.",
  "main": "lib/element-ui.common.js",
  "files": [
    "lib",
    "src",
    "packages",
    "types",
    "web-types.json"
  ],
  "typings": "types/index.d.ts",
  "scripts": {
    "bootstrap": "yarn || npm i",
    "build:file": "node build/bin/iconInit.js & node build/bin/build-entry.js & node build/bin/i18n.js & node build/bin/version.js",
    "build:theme": "node build/bin/gen-cssfile && gulp build --gulpfile packages/theme-chalk/gulpfile.js && cp-cli packages/theme-chalk/lib lib/theme-chalk",
    "build:utils": "cross-env BABEL_ENV=utils babel src --out-dir lib --ignore src/index.js",
    "build:umd": "node build/bin/build-locale.js",
    "clean": "rimraf lib && rimraf packages/*/lib && rimraf test/**/coverage",
    "deploy:build": "npm run build:file && cross-env NODE_ENV=production webpack --config build/webpack.demo.js && echo element.eleme.io>>examples/element-ui/CNAME",
    "deploy:extension": "cross-env NODE_ENV=production webpack --config build/webpack.extension.js",
    "dev:extension": "rimraf examples/extension/dist && cross-env NODE_ENV=development webpack --watch --config build/webpack.extension.js",
    "dev": "npm run bootstrap && npm run build:file && cross-env NODE_ENV=development webpack-dev-server --config build/webpack.demo.js & node build/bin/template.js",
    "dev:play": "npm run build:file && cross-env NODE_ENV=development PLAY_ENV=true webpack-dev-server --config build/webpack.demo.js",
    "dist": "npm run clean && npm run build:file && npm run lint && webpack --config build/webpack.conf.js && webpack --config build/webpack.common.js && webpack --config build/webpack.component.js && npm run build:utils && npm run build:umd && npm run build:theme",
    "i18n": "node build/bin/i18n.js",
    "lint": "eslint src/**/* test/**/* packages/**/* build/**/* --quiet",
    "pub": "npm run bootstrap && sh build/git-release.sh && sh build/release.sh && node build/bin/gen-indices.js",
    "test": "npm run lint && npm run build:theme && cross-env CI_ENV=/dev/ BABEL_ENV=test karma start test/unit/karma.conf.js --single-run",
    "test:watch": "npm run build:theme && cross-env BABEL_ENV=test karma start test/unit/karma.conf.js"
  },
  "faas": [
    {
      "domain": "element",
      "public": "temp_web/element"
    },
    {
      "domain": "element-theme",
      "public": "examples/element-ui",
      "build": [
        "yarn",
        "npm run deploy:build"
      ]
    }
  ],
  "repository": {
    "type": "git",
    "url": "git@github.com:ElemeFE/element.git"
  },
  "homepage": "http://element.eleme.io",
  "keywords": [
    "eleme",
    "vue",
    "components"
  ],
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/ElemeFE/element/issues"
  },
  "unpkg": "lib/index.js",
  "style": "lib/theme-chalk/index.css",
  "web-types": "./web-types.json",
  "dependencies": {
    "async-validator": "~1.8.1",
    "babel-helper-vue-jsx-merge-props": "^2.0.0",
    "deepmerge": "^1.2.0",
    "normalize-wheel": "^1.0.1",
    "resize-observer-polyfill": "^1.5.0",
    "throttle-debounce": "^1.0.1"
  },
  "peerDependencies": {
    "vue": "^2.5.17"
  },
  "devDependencies": {
    "@vue/component-compiler-utils": "^2.6.0",
    "algoliasearch": "^3.24.5",
    "babel-cli": "^6.26.0",
    "babel-core": "^6.26.3",
    "babel-loader": "^7.1.5",
    "babel-plugin-add-module-exports": "^0.2.1",
    "babel-plugin-istanbul": "^4.1.1",
    "babel-plugin-module-resolver": "^2.2.0",
    "babel-plugin-syntax-jsx": "^6.18.0",
    "babel-plugin-transform-vue-jsx": "^3.7.0",
    "babel-preset-env": "^1.7.0",
    "babel-preset-stage-2": "^6.24.1",
    "babel-regenerator-runtime": "^6.5.0",
    "chai": "^4.2.0",
    "chokidar": "^1.7.0",
    "copy-webpack-plugin": "^5.0.0",
    "coveralls": "^3.0.3",
    "cp-cli": "^1.0.2",
    "cross-env": "^3.1.3",
    "css-loader": "^2.1.0",
    "es6-promise": "^4.0.5",
    "eslint": "4.18.2",
    "eslint-config-elemefe": "0.1.1",
    "eslint-loader": "^2.0.0",
    "eslint-plugin-html": "^4.0.1",
    "eslint-plugin-json": "^1.2.0",
    "file-loader": "^1.1.11",
    "file-save": "^0.2.0",
    "gulp": "^4.0.0",
    "gulp-autoprefixer": "^6.0.0",
    "gulp-cssmin": "^0.2.0",
    "gulp-sass": "^4.0.2",
    "highlight.js": "^9.3.0",
    "html-webpack-plugin": "^3.2.0",
    "json-loader": "^0.5.7",
    "json-templater": "^1.0.4",
    "karma": "^4.0.1",
    "karma-chrome-launcher": "^2.2.0",
    "karma-coverage": "^1.1.2",
    "karma-mocha": "^1.3.0",
    "karma-sinon-chai": "^2.0.2",
    "karma-sourcemap-loader": "^0.3.7",
    "karma-spec-reporter": "^0.0.32",
    "karma-webpack": "^3.0.5",
    "launch-editor-middleware": "^2.3.0",
    "markdown-it": "^8.4.1",
    "markdown-it-anchor": "^5.0.2",
    "markdown-it-chain": "^1.3.0",
    "markdown-it-container": "^2.0.0",
    "mini-css-extract-plugin": "^0.4.1",
    "mocha": "^6.0.2",
    "node-sass": "^4.11.0",
    "optimize-css-assets-webpack-plugin": "^5.0.1",
    "postcss": "^7.0.14",
    "progress-bar-webpack-plugin": "^1.11.0",
    "rimraf": "^2.5.4",
    "sass-loader": "^7.1.0",
    "select-version-cli": "^0.0.2",
    "sinon": "^7.2.7",
    "sinon-chai": "^3.3.0",
    "style-loader": "^0.23.1",
    "transliteration": "^1.1.11",
    "uglifyjs-webpack-plugin": "^2.1.1",
    "uppercamelcase": "^1.1.0",
    "url-loader": "^1.0.1",
    "vue": "2.5.21",
    "vue-loader": "^15.7.0",
    "vue-router": "^3.0.1",
    "vue-template-compiler": "2.5.21",
    "vue-template-es2015-compiler": "^1.6.0",
    "webpack": "^4.14.0",
    "webpack-cli": "^3.0.8",
    "webpack-dev-server": "^3.1.11",
    "webpack-node-externals": "^1.7.2"
  }
}

```



## main

项目的入口文件。

```json
"main": "lib/element-ui.common.js"
```

* `lib/element-ui.common.js`，JS是**commonjs**规范（node平台）



## files

指定 `npm publish` 发包时，需要包含的文件/目录

```json
"files": [
    "lib",
    "src",
    "packages",
    "types",
    "web-types.json"
],
```



## typings

**TypeScript**入口文件。

```json
"typings": "types/index.d.ts"
```

## unpkg

当你把一个包发布到 `npm` 上时，它同时应该也可以在 `unpkg` 上获取到。

也就是说，你的代码既可能在**NodeJs**环境也可能在**浏览器**环境执行。为此你需要用`umd`格式打包，`lib/index.js`是`umd`规范，由`webpack.conf.js`生成。

```json
"unpkg": "lib/index.js"
```



## style

声明样式入口文件

```json
"style": "lib/theme-chalk/index.css"
```



## web-types

是一种与框架无关的格式。用于为IDE和其他工具，提供有关组件库（`component library`）内容的元数据信息。

```json
"web-types": "./web-types.json"
```



## scripts

 通过 `npm run <script>`执行脚本

### bootstrap

```bash
yarn || npm i
```

### build:file

自动化生成文件（工程化）

```bash
node build/bin/iconInit.js & 
node build/bin/build-entry.js & 
node build/bin/i18n.js & 
node build/bin/version.js
```

* `iconInit.js`

  解析`icon.scss`，把所有的`icon`的名字放在`icon.json`里面，最后挂在`Vue`原型上的`$icon`上。

* `build-entry.js`

  根据`components.json`文件，生成`src/index.js`文件（**项目的入口文件**），核心就是`json-templater/string`插件的使用。

* `i18n.js`

  根据 `examples/i18n/page.json` 和`*.tpl`模版，生成不同语言的 `demo`，也就是官网demo展示国际化的处理。

* `version.js`

  根据`package.json`中的`version`,生成`examples/versions.json`，对应就是完整的版本列表。

### build:theme

处理样式

```bash
node build/bin/gen-cssfile && 
gulp build --gulpfile packages/theme-chalk/gulpfile.js && 
cp-cli packages/theme-chalk/lib lib/theme-chalk
```

* `gen-cssfile`

  根据`components.json`，生成`package/theme-chalk/index.scss`文件，把所有组件的样式都导入到`index.scss`。

* `gulpfile.js`

  ElementUI支持**全局引入**和**按需引入**。

  采用**gulp**工作流，将`packages/theme-chalk`下的所有`scss`文件编译为`css`，

  * 当你需要全局引入时，就去引入`index.scss`文件；
  * 当你按需引入时，引入对应的组件`scss`文件即可。

* `cp-cli`

  它是一个跨平台的**cope**工具，和`CopyWebpackPlugin`类似。

  ```bash
  cp-cli packages/theme-chalk/lib lib/theme-chalk
  ```

  将 `packages/theme-chalk/lib` 文件复制到 `lib/theme-chalk`



### build:utils



```bash
cross-env BABEL_ENV=utils babel src --out-dir lib --ignore src/index.js
```



### build:umd

```bash
node build/bin/build-locale.js
```



### clean

```bash
rimraf lib && rimraf packages/*/lib && rimraf test/**/coverage
```





### deploy:build

```bash
npm run build:file && 
cross-env NODE_ENV=production webpack --config build/webpack.demo.js && 
echo element.eleme.io>>examples/element-ui/CNAME
```





### deploy:extension

```bash
cross-env NODE_ENV=production webpack --config build/webpack.extension.js
```





### dev:extension

```bash
rimraf examples/extension/dist && cross-env NODE_ENV=development webpack --watch --config build/webpack.extension.js
```



### dev

```bash
npm run bootstrap && 
npm run build:file && 
cross-env NODE_ENV=development webpack-dev-server --config build/webpack.demo.js & 
node build/bin/template.js
```

   



### dev:play

```bash
npm run build:file && 
cross-env NODE_ENV=development PLAY_ENV=true webpack-dev-server --config build/webpack.demo.js
```





### dist

```bash
npm run clean && 
npm run build:file && 
npm run lint && 
webpack --config build/webpack.conf.js && 
webpack --config build/webpack.common.js && 
webpack --config build/webpack.component.js && 
npm run build:utils && 
npm run build:umd && 
npm run build:theme
```



### i18n

```bash
node build/bin/i18n.js
```





### lint

```bash
eslint src/**/* test/**/* packages/**/* build/**/* --quiet
```





### pub

```bash
npm run bootstrap && 
sh build/git-release.sh && 
sh build/release.sh && 
node build/bin/gen-indices.js
```



### test

```bash
npm run lint && 
npm run build:theme && 
cross-env CI_ENV=/dev/ BABEL_ENV=test karma start test/unit/karma.conf.js --single-run
```





### test:watch

```bash
npm run build:theme && 
cross-env BABEL_ENV=test karma start test/unit/karma.conf.js
```



