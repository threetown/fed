# 流程

## package.json

* 增加 `sourcemap` 参数

  ```js
  "srcripts": {
    "debug": "rollup -w -c scripts/config.js --sourcemap --environment TARGET:web-full-dev",
  }
  ```

  根据命令行，找到 `scripts/config.js` 中 `TARGET` 为 `web-full-dev` 的信息：

  ```js
  const builds = {
    // ...省略代码...
    
    // Runtime+compiler development build (Browser)
    'web-full-dev': {
      entry: resolve('web/entry-runtime-with-compiler.js'),
      dest: resolve('dist/vue.js'),
      format: 'umd',
      env: 'development',
      alias: { he: './entity-decoder' },
      banner
    },
  }
  
  // 别名处理
  // web别名对应为：resolve('src/platforms/web')
  const aliases = require('./alias')
  const resolve = p => {
    const base = p.split('/')[0]
    if (aliases[base]) {
      return path.resolve(aliases[base], p.slice(base.length + 1))
    } else {
      return path.resolve(__dirname, '../', p)
    }
  }
  
  // 构造config信息
  function genConfig (name) {
    const opts = builds[name]
    const config = {
      input: opts.entry,      // 入口文件，resolve第一个参数取 alias里参数
      external: opts.external,
      plugins: [
        flow(),
        alias(Object.assign({}, aliases, opts.alias))
      ].concat(opts.plugins || []),
      output: {
        file: opts.dest,
        format: opts.format,
        banner: opts.banner,
        name: opts.moduleName || 'Vue'
      },
      onwarn: (msg, warn) => {
        if (!/Circular/.test(msg)) {
          warn(msg)
        }
      }
    }
    //
  }
  
  
  
  if (process.env.TARGET) {
    module.exports = genConfig(process.env.TARGET)
  } else {
    exports.getBuild = genConfig
    exports.getAllBuilds = () => Object.keys(builds).map(genConfig)
  }
  ```

  通过上面代码，我们可以知道入口文件指向为 `src/platforms/web/entry-runtime-with-compiler.js`

## entry-runtime-with-compiler

在开始阅读这部分源码时，我们先来补充几个知识点：`entry`（入口）、`runtime`（运行时）、`compiler`（编译器）。

* `src/platforms/web/entry-runtime-with-compiler.js`

```js
/**
 * 在下面代码中会用到 config.devtools
 * process.env.NODE_ENV !== 'production'，即 非生产环境开启devtools
 **/
import config from 'core/config'

// 引入 runtime/index中的Vue
import Vue from './runtime/index'


const mount = Vue.prototype.$mount
Vue.prototype.$mount = function (
  el?: string | Element,
  hydrating?: boolean
): Component {
  el = el && query(el)
  
  if (!options.render) {
    let template = options.template
    
    if(template){
		  template = idToTemplate(template)
		} else if(el) {
      template = getOuterHTML(el)
    }
    
    if (template) {
      mark('compile')
    }
    
    // 编译
		const { render, staticRenderFns } = compileToFunctions(template, {
        outputSourceRange: process.env.NODE_ENV !== 'production',
        shouldDecodeNewlines,
        shouldDecodeNewlinesForHref,
        delimiters: options.delimiters,
        comments: options.comments
      }, this)
      options.render = render
      options.staticRenderFns = staticRenderFns
    
    /* istanbul ignore if */
      if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
        mark('compile end')
        measure(`vue ${this._name} compile`, 'compile', 'compile end')
      }
    
    return mount.call(this, el, hydrating)
  }

```

* `src/platforms/web/runtime/index.js`

```js
import Vue from 'core/index'

/**
 * mountComponent安装组件，这里我们先只需要对它有个大概印象即可，后面会专门讲解
 * 1. 判断有没有 $options.render，
 *    a. 如果没有，则创建一个空的VNode虚拟节点：vm.$options.render = createEmptyVNode
 *    b. 如果有，则直接调用 beforeMount 钩子函数：callHook(vm, 'beforeMount')
 * 2. 没有 render，给render创建虚拟的空节点后，再判断有没有下面两种情况；如果没有，则报错；有则调用beforeMount
 *    a. 有没有 template 属性，即：vm.$options.template && vm.$options.template.charAt(0) !== '#'
 *    b. 或者，有没有 el 属性，即：vm.$options.el || el
 * 3. 接下来会调用 beforUpdate和mounted钩子函数
 **************************************************
 ** 总结：
 ** 根据源码，我们可以知道挂载组件时，会先判断render属性，如果有则调用beforeMount钩子函数；如果没有render，则找 template或el属性；（那么问题来了，render优先级高于template和el）
 ** 完成组件挂载，手动调用 mounted
 **/
import { mountComponent } from 'core/instance/lifecycle'

import { devtools, inBrowser } from 'core/util/index'

// 挂在指令和组件到options
import platformDirectives from './directives/index'
import platformComponents from './components/index'


// install platform runtime directives & components
extend(Vue.options.directives, platformDirectives)
extend(Vue.options.components, platformComponents)

// public mount method
Vue.prototype.$mount = function (
  el?: string | Element,
  hydrating?: boolean
): Component {
  // 浏览器环境下，查询节点
  el = el && inBrowser ? query(el) : undefined
  return mountComponent(this, el, hydrating)
}

// devtools global hook
/* istanbul ignore next */
if (inBrowser) {
  setTimeout(() => {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue)
      }
      // ...
    }
  }, 0)
}
```

* `src/core/index.js`

  ```js
  import Vue from './instance/index'
  import { initGlobalAPI } from './global-api/index'
  
  initGlobalAPI(Vue)
  
  export default Vue
  ```

* `src/core/instance/index.js`

  ```js
  import { initMixin } from './init'
  import { stateMixin } from './state'
  import { renderMixin } from './render'
  import { eventsMixin } from './events'
  import { lifecycleMixin } from './lifecycle'
  import { warn } from '../util/index'
  
  function Vue (options) {
    if (process.env.NODE_ENV !== 'production' &&
      !(this instanceof Vue)
    ) {
      warn('Vue is a constructor and should be called with the `new` keyword')
    }
    this._init(options)
  }
  
  initMixin(Vue) // Vue.prototype._init()
  stateMixin(Vue)
  eventsMixin(Vue)
  lifecycleMixin(Vue)
  renderMixin(Vue)
  
  export default Vue
  ```

  





# init

* `src/core/instance/index.js`

```JS
import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin} from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'

// 初始化 new Vue() 对象实例时，执行了 _init 方法
function Vue(options) {
  this._init(options) // Vue.prototype._init
}

initMixin(Vue) // Vue.prototype._init方法
stateMixin(Vue)
eventsMixin(Vue)
lifecycleMixin(Vue)
renderMixin(Vue)

export default Vue;
```



## initMixin

* `src/core/instance/init.js`

```js
export function initMixin(Vue){
  Vue.prototype._init = function(options) {
    const vm = this;
    
    /* istanbul ignore if,代码覆盖率 */
    
    vm_isVue = true;
    
    // merge options
    if(options && options._isComponent){
      // 优化内部组件实例化
      initInternalComponent(vm, options)
    } else {
      vm.$options = mergeOptions(
      	resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      )
    }
    // render proxy
    
    vm._self = vm;
    
    /**
     * 给实例初始化了一些属性，包括：
     *  1. 以$开头的供用户使用的外部属性，
     *  2. 以_开头的供内部使用的内部属性。
     **/
    initLifecycle(vm);
    
    /**
     * 事件系统
     **/
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate')
    
    /**
     * inject和provide成对出现
     **/
    initInjections(vm)
    
    /**
     * props、data、methods、computed、watch选项
     **/
    initState(vm)
    initProvide(vm)
    callHook(vm, 'created')
    
    formatComponentName(vm, false)
    
    if(vm.$options.el){
      vm.$mount(vm.$options.el)
    }
  }
}
```



## mergeOptions

```js
// src/core/util/options.js

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
export function mergeOptions (
  parent: Object,
  child: Object,
  vm?: Component
): Object {
  if (process.env.NODE_ENV !== 'production') {
    checkComponents(child)
  }

  if (typeof child === 'function') {
    child = child.options
  }

  normalizeProps(child, vm)
  normalizeInject(child, vm)
  normalizeDirectives(child)

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm)
    }
    if (child.mixins) {
      for (let i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm)
      }
    }
  }

  const options = {}
  let key
  for (key in parent) {
    mergeField(key)
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key)
    }
  }
  function mergeField (key) {
    const strat = strats[key] || defaultStrat
    options[key] = strat(parent[key], child[key], vm, key)
  }
  return options
}
```



### checkComponents

```js
/**
 * Validate component names
 */
function checkComponents (options: Object) {
  for (const key in options.components) {
    validateComponentName(key)
  }
}

export function validateComponentName (name: string) {
  if (!new RegExp(`^[a-zA-Z][\\-\\.0-9_${unicodeRegExp.source}]*$`).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    )
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    )
  }
}

// src/core/util/lang.js

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
export const unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/


// src/shared/util.js

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
export function makeMap (
  str: string,
  expectsLowerCase?: boolean
): (key: string) => true | void {
  const map = Object.create(null)
  const list: Array<string> = str.split(',')
  for (let i = 0; i < list.length; i++) {
    map[list[i]] = true
  }
  return expectsLowerCase
    ? val => map[val.toLowerCase()]
    : val => map[val]
}

/**
 * Check if a tag is a built-in tag.
 */
export const isBuiltInTag = makeMap('slot,component', true)

```



### normalizeProps

```js
// src/core/util/options.js

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 * 确保所有props选项语法都规范化为基于对象的格式。
 */
function normalizeProps (options: Object, vm: ?Component) {
  const props = options.props
  if (!props) return
  const res = {}
  let i, val, name
  if (Array.isArray(props)) {
    i = props.length
    while (i--) {
      val = props[i]
      if (typeof val === 'string') {
        name = camelize(val)
        res[name] = { type: null }
      } else if (process.env.NODE_ENV !== 'production') {
        warn('props must be strings when using array syntax.')
      }
    }
  } else if (isPlainObject(props)) {
    for (const key in props) {
      val = props[key]
      name = camelize(key)
      res[name] = isPlainObject(val)
        ? val
        : { type: val }
    }
  } else if (process.env.NODE_ENV !== 'production') {
    warn(
      `Invalid value for option "props": expected an Array or an Object, ` +
      `but got ${toRawType(props)}.`,
      vm
    )
  }
  options.props = res
}
```

从代码中可以看出，`props` 提供了 `Array` 和 `Object` 两种写法：

1. Array数组

   ```js
   props: ['message']
   
   // 规范化
   props: {
     message: {
       type: null
     }
   }
   ```

2. Object对象

   ```js
   props: {
     message: String,
     user: {
       type: String,
       default: ''
     }
   }
   
   // 规范化
   props: {
     message: {
       type: String
     },
     user: {
       type: String,
       default: ''
     }
   }
   ```

在代码中，对 `props` 驼峰化处理，使用变量 `cache` 做了缓存来保存；如果存在，则直接从 `cache` 获取且返回；否则，调用传入的回调函数进行处理并将其值缓存再返回。

```js
// src/shared/util.js

/**
 * Create a cached version of a pure function.
 * 创建一个纯函数的缓存版本。
 */
export function cached<F: Function> (fn: F): F {
  const cache = Object.create(null)
  return (function cachedFn (str: string) {
    const hit = cache[str]
    return hit || (cache[str] = fn(str))
  }: any)
}

/**
 * Camelize a hyphen-delimited string.
 */
const camelizeRE = /-(\w)/g
export const camelize = cached((str: string): string => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : '')
})

```



### normalizeInject

```js
/**
 * Normalize all injections into Object-based format
 * 将所有注入规范化为基于对象的格式
 */
function normalizeInject (options: Object, vm: ?Component) {
  const inject = options.inject
  if (!inject) return
  const normalized = options.inject = {}
  if (Array.isArray(inject)) {
    for (let i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] }
    }
  } else if (isPlainObject(inject)) {
    for (const key in inject) {
      const val = inject[key]
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val }
    }
  } else if (process.env.NODE_ENV !== 'production') {
    warn(
      `Invalid value for option "inject": expected an Array or an Object, ` +
      `but got ${toRawType(inject)}.`,
      vm
    )
  }
}
```



### normalizeDirectives

```js
/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options: Object) {
  const dirs = options.directives
  if (dirs) {
    for (const key in dirs) {
      const def = dirs[key]
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def }
      }
    }
  }
}
```







## initState

```js
// src/instance/state.js

export function initState (vm: Component) {
  vm._watchers = []
  const opts = vm.$options
  if (opts.props) initProps(vm, opts.props)
  if (opts.methods) initMethods(vm, opts.methods)
  if (opts.data) {
    initData(vm)
  } else {
    observe(vm._data = {}, true /* asRootData */)
  }
  if (opts.computed) initComputed(vm, opts.computed)
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch)
  }
}
```



## initProps

```js
function initProps (vm: Component, propsOptions: Object) {
  const propsData = vm.$options.propsData || {}
  const props = vm._props = {}
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  const keys = vm.$options._propKeys = []
  const isRoot = !vm.$parent
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false)
  }
  for (const key in propsOptions) {
    keys.push(key)
    const value = validateProp(key, propsOptions, propsData, vm)
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== 'production') {
      const hyphenatedKey = hyphenate(key)
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          `"${hyphenatedKey}" is a reserved attribute and cannot be used as component prop.`,
          vm
        )
      }
      defineReactive(props, key, value, () => {
        if (!isRoot && !isUpdatingChildComponent) {
          warn(
            `Avoid mutating a prop directly since the value will be ` +
            `overwritten whenever the parent component re-renders. ` +
            `Instead, use a data or computed property based on the prop's ` +
            `value. Prop being mutated: "${key}"`,
            vm
          )
        }
      })
    } else {
      defineReactive(props, key, value)
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, `_props`, key)
    }
  }
  toggleObserving(true)
}
```

props的处理逻辑是：

1. mergeOptions时，规范化 props
2. initProps时，校验validateProps、响应式 defineReactive、代理 proxy



### validateProp

```js
// src/core/util/props.js


type PropOptions = {
  type: Function | Array<Function> | null,
  default: any,
  required: ?boolean,
  validator: ?Function
};

export function validateProp (
  key: string,            // prop对应的键名key
  propOptions: Object,    // 规范后生成的 props 对象
  propsData: Object,      // 父组件传递 props 对象
  vm?: Component          // vue 实例
): any {
  const prop = propOptions[key]
  const absent = !hasOwn(propsData, key)
  let value = propsData[key]
  // boolean casting
  const booleanIndex = getTypeIndex(Boolean, prop.type)
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      const stringIndex = getTypeIndex(String, prop.type)
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key)
    // since the default value is a fresh copy,
    // make sure to observe it.
    const prevShouldObserve = shouldObserve
    toggleObserving(true)
    observe(value)
    toggleObserving(prevShouldObserve)
  }
  if (
    process.env.NODE_ENV !== 'production' &&
    // skip validation for weex recycle-list child component props
    !(__WEEX__ && isObject(value) && ('@binding' in value))
  ) {
    assertProp(prop, key, value, vm, absent)
  }
  return value
}


// src/core/util/props.js

const functionTypeCheckRE = /^\s*function (\w+)/

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  const match = fn && fn.toString().match(functionTypeCheckRE)
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes): number {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (let i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}


// src/shared/util.js
/**
 * Hyphenate a camelCase string.
 */
const hyphenateRE = /\B([A-Z])/g
export const hyphenate = cached((str: string): string => {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
})
```









* Code coverage 代码覆盖率

  [istanbul](https://istanbul.js.org/)，`babel-plugin-istanbul` ， 语句：`/* istanbul ignore if */` or `/* istanbul ignore else*/` or `/* istanbul ignore next */`

  karma-coverage

  Mocha



## props和data

data（组件内部使用）是组件的私有数据，只能在组件内部使用

props（模板中使用）是组件公有属性，从父组件传递给子组件，子组件只读不能修改



### props和data的优先级

Props->Methods->Data->Computed->Watch











## 源码精读

1. `src/core/instance/index.js`

   ```js
   import { initMixin } from './init'
   import { stateMixin } from './state'
   import { renderMixin } from './render'
   import { eventsMixin } from './events'
   import { lifecycleMixin } from './lifecycle'
   import { warn } from '../util/index'
   
   function Vue (options) {
     if (process.env.NODE_ENV !== 'production' &&
       !(this instanceof Vue)
     ) {
       warn('Vue is a constructor and should be called with the `new` keyword')
     }
     this._init(options)
   }
   
   initMixin(Vue)
   stateMixin(Vue)
   eventsMixin(Vue)
   lifecycleMixin(Vue)
   renderMixin(Vue)
   
   export default Vue
   
   ```

2. `src/core/instance/init.js`

   ```js
   export function initMixin (Vue: Class<Component>) {
     Vue.prototype._init = function (options?: Object) {
       const vm = this;
       // 忽略代码覆盖率
       
       // 1. merge options，合并options
       if(options && options._isComponents){
         // _isComponents，优化内部组件实例化
   			initInternalComponent(vm, options)
       } else {
         // 把构造函数上的options和实例化时传入的options进行合并操作并生成一个新的options
         vm.$options = mergeOptions(
           // 解析当前实例构造函数上的options  
         	resolveConstructorOptions(vm.constructor),
           options || {},
           vm
         )
       }
     }
   }
   ```

3. `src/core/util/options.js`

   ```js
   export function mergeOptions (
     parent: Object,
     child: Object,
     vm?: Component
   ): Object {
     if (process.env.NODE_ENV !== 'production') {
       // 非生产环境，检查组件名称是否合法
       checkComponents(child)
     }
   
     if (typeof child === 'function') {
       child = child.options
     }
   
     normalizeProps(child, vm)
     normalizeInject(child, vm)
     normalizeDirectives(child)
   ```

4. `src/core/util/options.js`

   ```js
   /**
    * Validate component names
    */
   function checkComponents (options: Object) {
     for (const key in options.components) {
       validateComponentName(key)
     }
   }
   
   export function validateComponentName (name: string) {
     if (!new RegExp(`^[a-zA-Z][\\-\\.0-9_${unicodeRegExp.source}]*$`).test(name)) {
       // 组件名称只能包含字母数字字符和连字符，并且必须以字母开头。
       warn(
         'Invalid component name: "' + name + '". Component names ' +
         'should conform to valid custom element name in html5 specification.'
       )
     }
     // 内置标签有 <slot>和<template>
     if (isBuiltInTag(name) || config.isReservedTag(name)) {
       warn(
         'Do not use built-in or reserved HTML elements as component ' +
         'id: ' + name
       )
     }
   }
   ```














参考文献

[汪图南 Vue 2.x源码分析](https://wangtunan.github.io/blog/vueAnalysis/introduction/)