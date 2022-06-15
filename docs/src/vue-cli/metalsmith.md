# Metalsmith

> An extremely simple, pluggable static site generator. You can see [metalsmith.io](https://metalsmith.io)

## 一、Usage

> We can use either a JSON file ( `metalsmith.json` ) or  Node

### 1. JSON file

创建一个 `metalsmith.json`，内容如下：

```json
{
  "source": "src",
  "destination": "build",
  "plugins": {
    "metalsmith-markdown": true,
    "metalsmith-layouts": {
        "engine": "handlebars",
        "partials": "partials"
      }
  }
}
```

### 2. Node

```js
const Metalsmith  = require('metalsmith'),
    markdown    = require('@metalsmith/markdown'),
    layouts     = require('@metalsmith/layouts');

Metalsmith(__dirname)
  .use(markdown())
	.use(layouts({
  		engine: 'handlebars',
  }))
  .build(function(err) {
    if (err) throw err;
  });
```



## 二、写一个CMS

* [Creating static sites with Metalsmith](https://www.petermorlion.com/creating-static-sites-with-metalsmith/)

* [Make a Simple CMS with Metalsmith](https://css-tricks.com/how-to-make-a-simple-cms-with-cloudflare-github-actions-and-metalsmith)



## 三、writing a Metalsmith plugin

> As everything is a plugin in Metalsmith, it's really useful to understand them a bit.

Eg:

```js
// pulugin/my_plugin.js

const my_plugin = function (options) {
    return function (files, metalsmith, done) {
        // Does nothing and calls done() to tell Metalsmith it has finished
        setImmediate(done);
        Object.keys(files).forEach(function(file) {
            var file_data = files[file];
        }    
    };
};

// Expose the plugin
module.exports = my_plugin;
```

Metalsmith需要一个对函数的引用，它可以将三个参数传递给该函数:

* **files**: 一个Object对象，它包含作为键的文件路径（file paths），以及作为其中对象的文件元数据(metadata)、文件内容(file contents)等。
* **metalsmith**：一个对Metalsmith实例的引用。大多数时候，我们不需要它，但在某些情况下，它是有用的。
* **done**：让Metalsmith知道插件已完成其任务的回调。





## 参考文献

* [awesome-metalsmith](https://github.com/metalsmith/awesome-metalsmith)

* [Writing your first metalsmith plugin](https://www.petermorlion.com/writing-your-first-metalsmith-plugin/)

* [Everything's a plugin](https://github.com/metalsmith/awesome-metalsmith/blob/master/tutorials/js/plugins.md)

