[Vue源码学习（一）env.js](https://blog.csdn.net/qs8lk88/article/details/79177738)

## hasProto

```js
// can we use __proto__?
// 是否能够使用__proto__ 代表原型对象

export const hasProto = '__proto__' in {}
```



## Browser environment sniffing

```js
// 运行环境，是否是浏览器
export const inBrowser = typeof window !== 'undefined'

// 判断代码是否运行在weex环境中（weex是阿里推出的一个库，可以用前端的js、html、css写移动端的项目）
export const inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform

// 判断是weex下的移动端的哪种环境
export const weexPlatform = inWeex && WXEnvironment.platform.toLowerCase()

// BOM中的navigation
export const UA = inBrowser && window.navigator.userAgent.toLowerCase()

// 判断是否是IE，通过正则匹配看有没有IE的前缀
export const isIE = UA && /msie|trident/.test(UA)

// 判断是否是IE9，通过indexOf来判断有没有IE9的前缀
export const isIE9 = UA && UA.indexOf('msie 9.0') > 0

// 判断是否是Edge
export const isEdge = UA && UA.indexOf('edge/') > 0

// 判断是否运行在Android下的默认浏览器中
export const isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android')

// 判断是否运行在IOS下的默认浏览器中
export const isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios')

// 判断是否运行在Chrome浏览器
export const isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge

export const isPhantomJS = UA && /phantomjs/.test(UA)
```



## watch

```js
// Firefox has a "watch" function on Object.prototype...
// Firfox 对象中有个watch方法，即将被废弃，别的浏览器也没有实现这个方法
export const nativeWatch = ({}).watch
```



## supportsPassive

> 下面这项代码，是为了查看浏览器addEventListener的第三个参数是支持布尔值还是对象（布尔值是旧版规范，对象是新版规范） 
>
> * 当addEventListener接口的第三个参数（Object类型）中支持passive 属性时，传入passive为true值
>
> * 否则，表示浏览器还不支持新特性，做兼容性处理,依旧按照旧版规范传入布尔值。
>
>   
>
> passive属性是为了在移动端，避免页面卡顿而退出的接口。 
>
> 相关资料：http://blog.csdn.net/shenlei19911210/article/details/70198771



```js
// 判断是否支持passive属性
// supportsPassive变量表示是否支持passive属性，默认为否
export let supportsPassive = false

// 用来检查浏览器是否支持passive属性的
if (inBrowser) {
  try {
    //我们会尝试通过传递一个带有passive属性的对象，给addEventListener，如果执行顺利，则可以放心使用passive属性，supportsPassive也会被修改成true，表示支持这个属性
		// 如果报错的话，则通过catch，捕获了这个异常，只会什么都不做，只不过supportsPassive依旧是false，表示浏览器不支持这一属性
    const opts = {}
    // 定义opts对象的‘passive’属性为一个对象，对象中含有get方法，方法将supportsPassive定义为true
		// 给opts对象定义passive属性，get访问得到结果是true，（同时也是supportsPassive的值）
    Object.defineProperty(opts, 'passive', ({
      get () {
        /* istanbul ignore next */
        supportsPassive = true
      }
    }: Object)) // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts)
  } catch (e) {}
}
```





## isServerRendering

```js
// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
let _isServer
export const isServerRendering = () => {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server'
    } else {
      _isServer = false
    }
  }
  return _isServer
}
```



## devtools

```js
// detect devtools
export const devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__
```



## isNative

```js
// 判断一个函数是否为 JavaScript 内置方法的方法
export function isNative (Ctor: any): boolean {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}
```



## hasSymbol

```js
export const hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys)
```

