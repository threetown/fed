## layout

> * row
> * col



### row

* props

  ```js
  props: {
    // 自定义元素标签
    tag: {
      type: String,
      default: 'div'
    },
    // 栅格间隔
    gutter: Number,
    // 布局模式，可选flex（配合justify和align使用）
    type: String,
    // flex布局下的水平排列方式：start/end/center/space-around/space-between
    justify: {
      type: String,
    	default: 'start'
    },
    // flex布局下的垂直排列方式：top/middle/bottom	
    align: String
  },
  ```

* 代码实现

  ```js
  computed: {
    style() {
      const ret = {};
  
      if (this.gutter) {
        ret.marginLeft = `-${this.gutter / 2}px`;
        ret.marginRight = ret.marginLeft;
      }
  
      return ret;
    }
  },
  
  render(h) {
    return h(this.tag, {
      class: [
        'tt-row',
        this.justify !== 'start' ? `is-justify-${this.justify}` : '',
        this.align ? `is-align-${this.align}` : '',
        { 'tt-row--flex': this.type === 'flex' }
      ],
      style: this.style
    }, this.$slots.default);
  }
  ```

  

### col

* props

  ```js
  props: {
    // 栅格占据列数
    span: {
      type: Number,
      default: 24
    },
    // 自定义元素标签
    tag: {
      type: String,
      default: 'div'
    },
    // 栅格左侧间隔格数
    offset: Number,
    // 栅格左移格数
    pull: Number,
    // 栅格右移格数
    push: Number,
    // <768px
    xs: [Number, Object],
    // ≥768px
    sm: [Number, Object],
    // ≥992px
    md: [Number, Object],
    // ≥1200px
    lg: [Number, Object],
    // ≥1920px
    xl: [Number, Object]
  },
  ```

* 代码实现

  ```js
  computed: {
    gutter() {
      // col通过嵌套在row使用
      let parent = this.$parent;
      while (parent && parent.$options.componentName !== 'TtRow') {
        parent = parent.$parent;
      }
      return parent ? parent.gutter : 0;
    }
  },
  render(h) {
    let classList = [];
    let style = {};
  
    // 通过gutter来设计col的padding-left和padding-right
    if (this.gutter) {
      style.paddingLeft = this.gutter / 2 + 'px';
      style.paddingRight = style.paddingLeft;
    }
  
    ['span', 'offset', 'pull', 'push'].forEach(prop => {
      if (this[prop] || this[prop] === 0) {
        classList.push(
          prop !== 'span'
            ? `tt-col-${prop}-${this[prop]}`
            : `tt-col-${this[prop]}`
        );
      }
    });
  
    ['xs', 'sm', 'md', 'lg', 'xl'].forEach(size => {
      if (typeof this[size] === 'number') {
        classList.push(`tt-col-${size}-${this[size]}`);
      } else if (typeof this[size] === 'object') {
        let props = this[size];
        Object.keys(props).forEach(prop => {
          classList.push(
            prop !== 'span'
              ? `tt-col-${size}-${prop}-${props[prop]}`
              : `tt-col-${size}-${props[prop]}`
          );
        });
      }
    });
  
    return h(this.tag, {
      class: ['tt-col', classList],
      style
    }, this.$slots.default);
  }
  ```

  