# jquery源码设计思路

> 关于学习开源框架的一些想法：
> 1. 设计思路
> 2. 实现技巧
>
> 很多时候，我们只关注了实现技巧，只是形似。
> 就像劳斯莱斯（Rolls-Royce）车门上有放雨伞的地方...有些车厂学过去了，结果雨伞时间长了积水、发霉。那是因为劳斯莱斯对放雨伞的地方，进行了精心的设计：自带一套完整的风干和排水系统。



## 版本选择

* 版本为：[2.0.3](https://cdn.bootcdn.net/ajax/libs/jquery/2.0.3/jquery.js) （不支持IE7及以下浏览器）
* GitHub仓库：[jquery-2.0.3](https://github.com/jquery/jquery/tree/2.0.3)
* [jQuery source viewer](https://j11y.io/jquery/)



## 目录结构

```bash
$ tree -l
.
├── AUTHORS.txt
├── CONTRIBUTING.md
├── Gruntfile.js               # grunt配置信息
├── MIT-LICENSE.txt
├── README.md
├── bower.json
├── build                      # 构建流程
│   ├── release-notes.js
│   └── release.js
├── component.json
├── composer.json
├── jquery-migrate.js
├── jquery-migrate.min.js
├── jquery.js                  # jquery非压缩
├── jquery.min.js              # jquery压缩文件
├── jquery.min.map             # source-map
├── package.json
├── speed
│   └── ...
├── src                             # 源码
│   ├── ajax
│   │   ├── jsonp.js
│   │   ├── script.js
│   │   └── xhr.js
│   ├── ajax.js
│   ├── attributes.js
│   ├── callbacks.js
│   ├── core.js
│   ├── css.js
│   ├── data.js
│   ├── deferred.js
│   ├── deprecated.js
│   ├── dimensions.js
│   ├── effects.js
│   ├── event-alias.js
│   ├── event.js
│   ├── exports.js
│   ├── intro.js
│   ├── manipulation.js
│   ├── offset.js
│   ├── outro.js
│   ├── queue.js
│   ├── selector-native.js
│   ├── serialize.js
│   ├── sizzle
│   ├── sizzle-jquery.js
│   ├── support.js
│   ├── traversing.js
│   └── wrap.js
└── test                               # 测试相关
    └── ...

17 directories, 148 files
```



## 源码查看流程

> 可能根据 `Gruntfile.js` 中的 `build` 配置项，作为我们阅读源码的流程。

```js
build: {
			all: {
				dest: "dist/jquery.js",
				src: [
					"src/intro.js",
					"src/core.js",
					{ flag: "sizzle", src: "src/selector-sizzle.js", alt: "src/selector-native.js" },
					"src/callbacks.js",
					"src/deferred.js",
					"src/support.js",
					"src/data.js",
					"src/queue.js",
					"src/attributes.js",
					"src/event.js",
					"src/traversing.js",
					"src/manipulation.js",
					{ flag: "wrap", src: "src/wrap.js" },
					{ flag: "css", src: "src/css.js" },
					"src/serialize.js",
					{ flag: "event-alias", src: "src/event-alias.js" },
					{ flag: "ajax", src: "src/ajax.js" },
					{ flag: "ajax/script", src: "src/ajax/script.js", needs: ["ajax"]  },
					{ flag: "ajax/jsonp", src: "src/ajax/jsonp.js", needs: [ "ajax", "ajax/script" ]  },
					{ flag: "ajax/xhr", src: "src/ajax/xhr.js", needs: ["ajax"]  },
					{ flag: "effects", src: "src/effects.js", needs: ["css"] },
					{ flag: "offset", src: "src/offset.js", needs: ["css"] },
					{ flag: "dimensions", src: "src/dimensions.js", needs: ["css"] },
					{ flag: "deprecated", src: "src/deprecated.js" },

					"src/exports.js",
					"src/outro.js"
				]
			}
		},
```



## 源码主体实现

> * 如何下手？无所适从
>
> ​        我们习惯性的打开  `jquery.js` 文件，惊奇的发现源码居然有 `8830` 行。我原来并不坚定（学习源码）的意志，打起了退堂鼓...而且，我们在互联网上也会发现很多分析源码的教程，也是从该文件入手。此时，你是否觉得：难得自己突破心理防线，来挑战学习源码...此时，已不战而降了呢？
>
> * 寻找正确的打开方式
>
>   我们可以思考一下：如果让我去开发这样一个库，你会如何组织代码？然后，对源码的设计思路是怎样的？
>
> * 正确的打开方式
>
>   我们会通过源码的 **目录结构** 观察，从中获取了一些关键、有用的信息：`Gruntfile.js`、`build`以及核心文件 `src`。
>
> * 根据构建文件反推源码组织方式
>
>   从 `Gruntfile.js`和`src`相结合，我们可以梳理出源码最终的组织方式。



```js
/******************************
 ******   1. intro.js    ******
 ******************************/
(function( window, undefined ) {
  
/******************************
 ******  4. src/core.js  ******
 ******************************/
var
  // A central reference to the root jQuery(document)
	rootjQuery,
	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,
	// Map over the $ in case of overwrite
	_$ = window.$,

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {
		// The jQuery object is actually just the init constructor 'enhanced'
		return new jQuery.fn.init( selector, context, rootjQuery );
	},
    // Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	},

	// The ready event handler and self cleanup method
	completed = function() {
		document.removeEventListener( "DOMContentLoaded", completed, false );
		window.removeEventListener( "load", completed, false );
		jQuery.ready();
	};
  
jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {}
};
  
// Give the init function the jQuery prototype for later instantiation
jQuery.fn.init.prototype = jQuery.fn;
jQuery.extend = jQuery.fn.extend = function() {};
jQuery.extend({});
jQuery.ready.promise = function( obj ) {};

// All jQuery objects should point back to these
rootjQuery = jQuery(document);
  

/******************************
 ******  3. exports.js   ******
 ******************************/
if ( typeof module === "object" && module && typeof module.exports === "object" ) {
	// Expose jQuery as module.exports in loaders that implement the Node
	// module pattern (including browserify). Do not create the global, since
	// the user will be storing it themselves locally, and globals are frowned
	// upon in the Node module world.
	module.exports = jQuery;
} else {
	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.
	if ( typeof define === "function" && define.amd ) {
		define( "jquery", [], function () { return jQuery; } );
	}
}

// If there is a window object, that at least has a document property,
// define jQuery and $ identifiers
if ( typeof window === "object" && typeof window.document === "object" ) {
	window.jQuery = window.$ = jQuery;
}

/******************************
 ******   the others...  ******
 ******************************/  

  
/******************************
 ******   2. outro.js    ******
 ******************************/
})( window );
```

上面我们整理了部分代码，相信大家此时已经有了方向，知道该从何入手了。（这就是我们的初衷：授人以鱼，不如授人以渔。）

遇到问题时，先分析问题是怎么产生的？目前的问题焦点是什么？我如何解决当前问题？解决不了，我是否可以遵循第一性原理来设计。



后面，我们会针对每个功能模块逐一分析，并提取、归纳、反哺面试。



## jquery特征

* **无new构建**
* **链式调用**
* **插件接口**





### jquery功能

* 选择器 - sizzle引擎
* 回调对象 - Callback
* 延时对象 - Deferred
* 数据缓存 - Cache
* 回溯 - end、pushStack
* 钩子机制
* 事件绑定
* DOM操作方法
* 样式操作
* Ajax
* 队列操作
* 动画队列









### jQuery中ready与load事件

**DOM文档加载的步骤：**
要想理解为什么ready先执行，load后执行就要先了解下DOM文档加载的步骤：

```
(1) 解析HTML结构。
(2) 加载外部脚本和样式表文件。
(3) 解析并执行脚本代码。
(4) 构造HTML DOM模型。//ready
(5) 加载图片等外部文件。
(6) 页面加载完毕。//load
```

从上面的描述中大家应该已经理解了吧，ready在第（4）步完成之后就执行了，但是load要在第（6）步完成之后才执行。

**结论：**

ready与load的区别就在于资源文件的加载，ready构建了基本的DOM结构，所以对于代码来说应该越快加载越好。在一个高速浏览的时代，没人愿意等待答案。假如一个网站页面加载超过4秒，不好意思，你1/4的用户将面临着流失，所以对于框架来说用户体验是至关重要的，我们应该越早处理DOM越好，我们不需要等到图片资源都加载后才去处理框架的加载，图片资源过多load事件就会迟迟不会触发。



```js
jQuery.ready.promise = function( obj ) {
    if ( !readyList ) {
        readyList = jQuery.Deferred();
        if ( document.readyState === "complete" ) {
            // Handle it asynchronously to allow scripts the opportunity to delay ready
            setTimeout( jQuery.ready );
        } else {
            document.addEventListener( "DOMContentLoaded", completed, false );
            window.addEventListener( "load", completed, false );
        }
    }
    return readyList.promise( obj );
};
```

jQuery的ready是通过promise给包装过的，这也是jQuery擅长的手法，统一了回调体系，以后我们会重点谈到。
可见jQuery兼容的具体策略**：针对高级的浏览器，我们当前很乐意用DOMContentLoaded事件了，省时省力。**



**那么旧的IE如何处理呢？**



继续看jQuery的方案：

```js
// Ensure firing before onload, maybe late but safe also for iframes
document.attachEvent( "onreadystatechange", completed );
// A fallback to window.onload, that will always work
window.attachEvent( "onload", completed );
// If IE and not a frame
// continually check to see if the document is ready
var top = false;
try {
    top = window.frameElement == null && document.documentElement;
} catch(e) {}
if ( top && top.doScroll ) {
    (function doScrollCheck() {
        if ( !jQuery.isReady ) {
            try {
                // Use the trick by Diego Perini
                // http://javascript.nwbox.com/IEContentLoaded/
                top.doScroll("left");
            } catch(e) {
                return setTimeout( doScrollCheck, 50 );
            }
            // detach all dom ready events
            detach();

            // and execute any waiting functions
            jQuery.ready();
        }
    })();
}
```

  如果浏览器存在 `document.onreadystatechange` 事件，当该事件触发时，如果 `document.readyState=complete` 的时候，可视为 DOM 树已经载入。不过，这个事件不太可靠，比如当页面中存在图片的时候，可能反而在 onload 事件之后才能触发，换言之，它只能正确地执行于页面不包含二进制资源或非常少或者被缓存时作为一个备选吧。

**针对IE的加载检测**

Diego Perini 在 2007 年的时候，报告了一种检测 IE 是否加载完成的方式，使用 doScroll 方法调用，详情可见http://javascript.nwbox.com/IEContentLoaded/。
原理就是对于 IE 在非 iframe 内时，只有不断地通过能否执行 doScroll 判断 DOM 是否加载完毕。在上述中间隔 50 毫秒尝试去执行 doScroll，注意，由于页面没有加载完成的时候，调用 doScroll 会导致异常，所以使用了 try -catch 来捕获异常。
结论：所以总的来说当页面 DOM 未加载完成时，调用 doScroll 方法时，会产生异常。那么我们反过来用，如果不异常，那么就是页面DOM加载完毕了。

这都是我们在第一时间内处理ready加载的问题，如果ready在页面加载完毕后呢？

jQuery就必须针对这样的情况跳过绑定了：

```
if ( document.readyState === "complete" ) {
     // Handle it asynchronously to allow scripts the opportunity to delay ready
     setTimeout( jQuery.ready );
 }
```

直接通过查看readyState的状态来确定页面的加载是否完成了。这里会给一个定时器的最小时间后去执行，主要保证执行的正确。





### 链式调用

如果需要链式的处理，只需要在方法内部方法当前的这个实例对象this就可以了，因为返回当前实例的this，从而又可以访问自己的原型了，这样的就节省代码量，提高代码的效率，代码看起来更优雅。但是这种方法有一个问题是：所有对象的方法返回的都是对象本身，也就是说没有返回值，所以这种方法不一定在任何环境下都适合。

   虽然Javascript是无阻塞语言，但是他并不是没阻塞，而是不能阻塞，所以他需要通过事件来驱动，异步来完成一些本需要阻塞进程的操作，这样处理只是**同步链式**，除了同步链式还有**异步链式**，异步链式jQuery从1.5开始就引入了Promise，`jQuery.Deferred`后期再讨论。











## jQuery source viewer

* [jQuery source viewer](https://j11y.io/jquery/)

![jquery source viewer](./img/jquery-source-viewer.png)







## jquery源码学习讨巧

1. （3天）单次大量的输入：对源码有个全面的了解。
2. （2天）提取关键知识点：无new构建、callbacks、deferred...
3. （2天）以面试为结果导向：以面试题的形式作为切入点，根据面试题去反推学习更具体的知识点，绝不仅限于应对面试，要真真切切在学习过程中得到蜕变。
4. （1个月时间）深刻理解，并成体系的输出：









### 参考资料

* [jQuery 源码系列](https://segmentfault.com/a/1190000008365621)
