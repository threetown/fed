## dialog 对话框

在实现一个dialog对话框之前，我们需要了解它大概功能点及核心逻辑。



### transition

* `transition` ：使组件具备过渡效果，它是vue内置组件。具体可以见[transition](https://v2.cn.vuejs.org/v2/api/#transition)。

  这里，我们重点看一下它的两个钩子函数：`after-entry`、`after-leave`：

```vue
<template>
  <transition
    name="dialog-fade"
    @after-enter="afterEnter"
    @after-leave="afterLeave">
    // ...
  </transition>
</template>

<script>
export default {
  methods: {
    afterEnter() {
      this.$emit('opened');
    },
    afterLeave() {
      this.$emit('closed');
    }
  }
}
</script>

<style lang="scss">

.dialog-fade-enter-active {
  animation: dialog-fade-in .3s;
}

.dialog-fade-leave-active {
  animation: dialog-fade-out .3s;
}

@keyframes dialog-fade-in {
  0% {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

@keyframes dialog-fade-out {
  0% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  100% {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
}
</style>
```

通过源码，我们可以得知：

* `transition` 的`name`属性可以添加样式；
* `after-enter`钩子函数对外暴露`opened`事件。
* `after-leave`钩子函数对外暴露`closed`事件。



### dialog

这里涉及到几个html5中的 `dialog` 属性：

* `role="dialog"`
* `aria-modal="true"`
* `:aria-label="title || 'dialog'"`：给当前元素加上的标签描述

#### ARIA

Accessible Rich Internet Applications（**ARIA**，无障碍富互联网应用）是一组角色（role）和属性(attribule)。为不方便的人士提供的功能，比如屏幕阅读器。

```vue
<template>
  <div
    v-show="visible"
    class="tt-dialog__wrapper"
    @click.self="handleWrapperClick">
    <div
      role="dialog"
      :key="key"
      aria-modal="true"
      :aria-label="title || 'dialog'"
      :class="['tt-dialog', { 'is-fullscreen': fullscreen, 'tt-dialog--center': center }, customClass]"
      ref="dialog"
      :style="style">
      <div class="tt-dialog__header">
        <slot name="title">
          <span class="tt-dialog__title">{{ title }}</span>
        </slot>
        <button
          type="button"
          class="tt-dialog__headerbtn"
          aria-label="Close"
          v-if="showClose"
          @click="handleClose">
          <i class="tt-dialog__close tt-icon tt-icon-close"></i>
        </button>
      </div>
      <div class="tt-dialog__body" v-if="rendered"><slot></slot></div>
      <div class="tt-dialog__footer" v-if="$slots.footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  import Popup from 'threetowns-ui/src/utils/popup';
  import Migrating from 'threetowns-ui/src/mixins/migrating';
  import emitter from 'threetowns-ui/src/mixins/emitter';

  export default {
    mixins: [Popup, emitter, Migrating],
 
    data() {
      return {
        closed: false,
        key: 0
      };
    },
 
    watch: {
      visible(val) {
        if (val) {
          this.closed = false;
          this.$emit('open');
          this.$el.addEventListener('scroll', this.updatePopper);
          this.$nextTick(() => {
            this.$refs.dialog.scrollTop = 0;
          });
          if (this.appendToBody) {
            document.body.appendChild(this.$el);
          }
        } else {
          this.$el.removeEventListener('scroll', this.updatePopper);
          if (!this.closed) this.$emit('close');
          if (this.destroyOnClose) {
            this.$nextTick(() => {
              this.key++;
            });
          }
        }
      }
    },
    
    methods: {
      getMigratingConfig() {
        return {
          props: {
            'size': 'size is removed.'
          }
        };
      },
      handleWrapperClick() {
        if (!this.closeOnClickModal) return;
        this.handleClose();
      },
      handleClose() {
        if (typeof this.beforeClose === 'function') {
          this.beforeClose(this.hide);
        } else {
          this.hide();
        }
      },
      hide(cancel) {
        if (cancel !== false) {
          this.$emit('update:visible', false);
          this.$emit('close');
          this.closed = true;
        }
      },
      updatePopper() {
        this.broadcast('TtSelectDropdown', 'updatePopper');
        this.broadcast('TtDropdownMenu', 'updatePopper');
      },
    }
  }
</script>
```

从代码中，我们可以看到以下信息：

* `key`：在 `watch.visible` 中销毁组件时，通过 `key++` 改变`key`的值。
* 组件插槽：
  * `dialog__header` 包含：`dialog__title` 标题和`dialog__headerbtn`关闭按钮。
  * `dialog__body`：默认slot
  * `dialog__footer`

#### mixins

代码中主要涉及3个外部引入的mixins：

```js
import Popup from 'element-ui/src/utils/popup';
import Migrating from 'element-ui/src/mixins/migrating';
import emitter from 'element-ui/src/mixins/emitter';

export default {
  mixins: [Popup, emitter, Migrating],
}
```





`import emitter from 'element-ui/src/mixins/emitter'`

```js
function broadcast(componentName, eventName, params) {
  this.$children.forEach(child => {
    var name = child.$options.componentName;

    if (name === componentName) {
      child.$emit.apply(child, [eventName].concat(params));
    } else {
      broadcast.apply(child, [componentName, eventName].concat([params]));
    }
  });
}
export default {
  methods: {
    dispatch(componentName, eventName, params) {
      var parent = this.$parent || this.$root;
      var name = parent.$options.componentName;

      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent;

        if (parent) {
          name = parent.$options.componentName;
        }
      }
      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params));
      }
    },
    broadcast(componentName, eventName, params) {
      broadcast.call(this, componentName, eventName, params);
    }
  }
};

```



PopupManager，采用栈结构来存储弹窗实例

