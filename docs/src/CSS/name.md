title: ClassName命名
---

ClassName的命名应当尽可能短，并且意义明确，必须以**字母开头命名**，且**全部字母为小写**，单词之间**统一使用中划线**“-” 连接。<br />避免过度任意的简写。`.btn` 代表 _button_，但是 `.t` 不能表达任何意思。

```css
/* 推荐 */
.wrapper { ... }
.tweet { ... }
.tweet-header { ... }

/* 不推荐 */
.t { ... }
.RED { ... }
.list_item { ... }
```

## 命名原则

基于最近的父 class 或基本（base） class 作为新 class 的前缀。<br />_推荐：_

```html
<div class="modulename">
  <div class="modulename-info">
    <div class="modulename-info-item"></div>
    <div class="modulename-info-item"></div>
    ...
  </div>
</div>
```

_不推荐：_

```html
<div class="modulename">
  <div class="info">
    <div class="item"></div>
    <div class="item"></div>
    ...
  </div>
</div>
```

当子孙模块**超过3级或以上**的时候，可以使用父模块具有辨识性的独立缩写作为新的前缀。<br />_推荐：_

```html
<div class="modulename">
  <div class="modulename-info">
    <div class="modulename-info-item">
      <!-- 这个时候 mii 为 modulename-info-item 首字母缩写 -->
    	<div class="mii-img">
    </div>
    <div class="modulename-info-item">
    	<div class="mii-img">  
    </div>
    ...
  </div>
</div>
```

_不推荐：_

```html
<div class="modulename">
  <div class="modulename-info">
    <div class="modulename-info-item">
    	<div class="modulename-info-item-img">
    </div>
    <div class="modulename-info-item">
    	<div class="modulename-info-item-img">
    </div>
    ...
  </div>
</div>
```

在为 Sass 和 Less 变量命名时也可以参考上面列出的各项规范。

## 常用命名推荐

**注意**：ad、banner、gg、guanggao 等有机会和广告挂勾的字眠不建议直接用来做ClassName，因为有些浏览器插件（Chrome的广告拦截插件等）会直接过滤这些类名，因此

```css
<div class="ad"></div>
```

这种广告的英文或拼音类名不应该出现<br />另外，**敏感不和谐字眼**也不应该出现，如：

```css
<div class="fuck"></div>
<div class="jer"></div>
<div class="sm"></div>
<div class="gcd"></div> 
<div class="ass"></div> 
<div class="KMT"></div> 
...
```

| **ClassName**          | **含义**                                 |
| ---------------------- | ---------------------------------------- |
| about                  | 关于                                     |
| account                | 账户                                     |
| arrow                  | 箭头图标                                 |
| article                | 文章                                     |
| aside                  | 边栏                                     |
| audio                  | 音频                                     |
| avatar                 | 头像                                     |
| bg,background          | 背景                                     |
| bar                    | 栏（工具类）                             |
| branding               | 品牌化                                   |
| crumb,breadcrumbs      | 面包屑                                   |
| btn,button             | 按钮                                     |
| caption                | 标题，说明                               |
| category               | 分类                                     |
| chart                  | 图表                                     |
| clearfix               | 清除浮动                                 |
| close                  | 关闭                                     |
| col,column             | 列                                       |
| comment                | 评论                                     |
| community              | 社区                                     |
| container              | 容器                                     |
| content                | 内容                                     |
| copyright              | 版权                                     |
| current                | 当前态，选中态                           |
| default                | 默认                                     |
| description            | 描述                                     |
| details                | 细节                                     |
| disabled               | 不可用                                   |
| entry                  | 文章，博文                               |
| error                  | 错误                                     |
| even                   | 偶数，常用于多行列表或表格中             |
| fail                   | 失败（提示）                             |
| feature                | 专题                                     |
| fewer                  | 收起                                     |
| field                  | 用于表单的输入区域                       |
| figure                 | 图                                       |
| filter                 | 筛选                                     |
| first                  | 第一个，常用于列表中                     |
| footer                 | 页脚                                     |
| forum                  | 论坛                                     |
| gallery                | 画廊                                     |
| group                  | 模块，清除浮动                           |
| header                 | 页头                                     |
| help                   | 帮助                                     |
| hide                   | 隐藏                                     |
| hightlight             | 高亮                                     |
| home                   | 主页                                     |
| icon                   | 图标                                     |
| info,information       | 信息                                     |
| last                   | 最后一个，常用于列表中                   |
| links                  | 链接                                     |
| login                  | 登录                                     |
| logout                 | 退出                                     |
| logo                   | 标志                                     |
| main                   | 主体                                     |
| menu                   | 菜单                                     |
| meta                   | 作者、更新时间等信息栏，一般位于标题之下 |
| module                 | 模块                                     |
| more                   | 更多（展开）                             |
| msg,message            | 消息                                     |
| nav,navigation         | 导航                                     |
| next                   | 下一页                                   |
| nub                    | 小块                                     |
| odd                    | 奇数，常用于多行列表或表格中             |
| off                    | 鼠标离开                                 |
| on                     | 鼠标移过                                 |
| output                 | 输出                                     |
| pagination             | 分页                                     |
| pop,popup              | 弹窗                                     |
| preview                | 预览                                     |
| previous               | 上一页                                   |
| primary                | 主要                                     |
| progress               | 进度条                                   |
| promotion              | 促销                                     |
| rcommd,recommendations | 推荐                                     |
| reg,register           | 注册                                     |
| save                   | 保存                                     |
| search                 | 搜索                                     |
| secondary              | 次要                                     |
| section                | 区块                                     |
| selected               | 已选                                     |
| share                  | 分享                                     |
| show                   | 显示                                     |
| sidebar                | 边栏，侧栏                               |
| slide                  | 幻灯片，图片切换                         |
| sort                   | 排序                                     |
| sub                    | 次级的，子级的                           |
| submit                 | 提交                                     |
| subscribe              | 订阅                                     |
| subtitle               | 副标题                                   |
| success                | 成功（提示）                             |
| summary                | 摘要                                     |
| tab                    | 标签页                                   |
| table                  | 表格                                     |
| txt,text               | 文本                                     |
| thumbnail              | 缩略图                                   |
| time                   | 时间                                     |
| tips                   | 提示                                     |
| title                  | 标题                                     |
| video                  | 视频                                     |
| wrap                   | 容器，包，一般用于最外层                 |
| wrapper                | 容器，包，一般用于最外层                 |
