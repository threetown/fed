(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{530:function(t,s,a){"use strict";a.r(s);var n=a(44),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"title-代码规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#title-代码规范"}},[t._v("#")]),t._v(" title: 代码规范")]),t._v(" "),a("h2",{attrs:{id:"编码规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编码规范"}},[t._v("#")]),t._v(" 编码规范")]),t._v(" "),a("h3",{attrs:{id:"样式表编码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#样式表编码"}},[t._v("#")]),t._v(" 样式表编码")]),t._v(" "),a("ul",[a("li",[t._v("样式文件必须写上 @charset 规则，并且一定要在样式文件的第一行首个字符位置开始写，编码名用 “UTF-8”。")]),t._v(" "),a("li",[t._v("字符 @charset “”; 都用小写字母，不能出现转义符。")]),t._v(" "),a("li",[t._v("考虑到在使用“UTF-8”编码情况下 BOM 对代码的污染和编码显示的问题，在可控范围下，坚决不使用 BOM。")])]),t._v(" "),a("blockquote",[a("p",[t._v("更多关于 BOM 可参考"),a("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E4%BD%8D%E5%85%83%E7%B5%84%E9%A0%86%E5%BA%8F%E8%A8%98%E8%99%9F",target:"_blank",rel:"noopener noreferrer"}},[t._v("BOM的介绍"),a("OutboundLink")],1),t._v("和"),a("a",{attrs:{href:"http://www.zhihu.com/question/20167122",target:"_blank",rel:"noopener noreferrer"}},[t._v("「带 BOM 的 UTF-8」和「无 BOM 的 UTF-8」有什么区别？"),a("OutboundLink")],1)])]),t._v(" "),a("p",[a("em",[t._v("推荐：")])]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@charset")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"UTF-8"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".banner")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ... "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("em",[t._v("不推荐：")])]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @desc File Info\n * @author Author Name\n * @date 2015-10-10\n */")]),t._v("\n \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* @charset规则不在文件首行首个字符开始 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@charset")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"UTF-8"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".banner")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ... "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@CHARSET")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"UTF-8"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* @charset规则没有用小写 */")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".banner")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ... "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 无@charset规则 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".banner")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ... "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"书写风格"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#书写风格"}},[t._v("#")]),t._v(" 书写风格")]),t._v(" "),a("h3",{attrs:{id:"代码格式化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码格式化"}},[t._v("#")]),t._v(" 代码格式化")]),t._v(" "),a("p",[t._v("统一使用展开格式书写样式。")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 推荐 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".banner")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" block"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 不推荐 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(". banner")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" block"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"代码大小写"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码大小写"}},[t._v("#")]),t._v(" 代码大小写")]),t._v(" "),a("p",[t._v("样式选择器，属性名，属性值全部使用小写字母书写。")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 推荐 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".banner")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("block"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 不推荐 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(". BANNER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("DISPLAY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" BLOCK"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"选择器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选择器"}},[t._v("#")]),t._v(" 选择器")]),t._v(" "),a("ul",[a("li",[t._v("尽量少用通用选择器*")]),t._v(" "),a("li",[t._v("选择器要尽可能短，建议不要超过 3 个（浏览器读取选择器，遵循的原则是从选择器的右边到左边读取）")])]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 推荐 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".banner")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".banner li")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".banner li p")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 不推荐 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".banner .title p img")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"代码缩进"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码缩进"}},[t._v("#")]),t._v(" 代码缩进")]),t._v(" "),a("p",[t._v("统一使用两个空格进行代码缩进，这是唯一能保证在所有环境下获得一致展现的方法。")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".banner-header")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"分号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分号"}},[t._v("#")]),t._v(" 分号")]),t._v(" "),a("p",[t._v("每个属性声明末尾都要加分号。")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".banner")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"代码易读性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码易读性"}},[t._v("#")]),t._v(" 代码易读性")]),t._v(" "),a("p",[t._v("左括号与类名之间添加一个空格，冒号与属性值之间添加一个空格。")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 推荐 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".banner")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 不推荐 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("..banner")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("100%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("以逗号分隔的属性值，每个逗号后面都应该插入一个空格（例如，"),a("code",[t._v("box-shadow")]),t._v("）。")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 推荐 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".banner")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("box-shadow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1px 1px 1px #333"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 2px 2px 2px #ccc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 不推荐 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".banner")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("box-shadow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1px 1px 1px #333"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("2px 2px 2px #ccc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("选择器分组时，将单独的选择器单独放在一行。")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 推荐 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".header, \n.header_logo, \n.header_hd")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #ff0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".nav")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #fff"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 不推荐 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".header,.header_logo,.header_hd")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #ff0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".nav")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #fff"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("不要在 "),a("code",[t._v("rgb()")]),t._v("、"),a("code",[t._v("rgba()")]),t._v("、"),a("code",[t._v("hsl()")]),t._v("、"),a("code",[t._v("hsla()")]),t._v(" 或 "),a("code",[t._v("rect()")]),t._v(" 值的_内部_的逗号后面插入空格，且取值不要带有不必要的 0。")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 推荐 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".banner")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rgba")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("255"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("255"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("255"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(".5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 不推荐 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rgba")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" 255"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 255"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 255"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0.5 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("尽量使用简写形式的十六进制值。")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 推荐 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".banner")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #fff"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 不推荐 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".banner")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #ffffff"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("p",[t._v("避免为 0 值指定单位。")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 推荐 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".banner")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0 10px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 不推荐 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".banner")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0px 10px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("h3",{attrs:{id:"属性值引号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#属性值引号"}},[t._v("#")]),t._v(" 属性值引号")]),t._v(" "),a("p",[t._v("css属性值需要用到引号时，统一使用单引号")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 推荐 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".banner")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-family")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hiragino Sans GB'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 不推荐 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".banner")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-family")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hiragino Sans GB"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("h3",{attrs:{id:"属性书写顺序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#属性书写顺序"}},[t._v("#")]),t._v(" 属性书写顺序")]),t._v(" "),a("p",[t._v("相关的属性声明应当归为一组，建议遵循以下顺序：")]),t._v(" "),a("ol",[a("li",[t._v("Positioning：定位样式")]),t._v(" "),a("li",[t._v("Box model：盒模型")]),t._v(" "),a("li",[t._v("Typographic：排版样式")]),t._v(" "),a("li",[t._v("Visual：视觉样式")]),t._v(" "),a("li",[t._v("Animation： 动画")]),t._v(" "),a("li",[t._v("Misc： 其他")])]),t._v(" "),a("p",[t._v("由于定位（positioning）可以从正常的文档流中移除元素，并且还能覆盖盒模型（box model）相关的样式，因此排在首位。盒模型排在第二位，因为它决定了组件的尺寸和位置。"),a("br"),t._v("其他属性只是影响组件的内部（inside）或者是不影响前两组属性，因此排在后面")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".declaration-order")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Positioning */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" absolute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("top")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("right")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("bottom")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("left")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("z-index")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Box-model */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" block"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("float")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Typography */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" normal 13px "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Helvetica Neue"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sans-serif"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("line-height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1.5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #333"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("text-align")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" center"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Visual */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #f5f5f5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1px solid #e5e5e5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-radius")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 3px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Animation */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("animation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" slide-up 1s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("transition")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" all 1s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \n  \n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Misc */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("opacity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"带私有前缀的属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#带私有前缀的属性"}},[t._v("#")]),t._v(" 带私有前缀的属性")]),t._v(" "),a("p",[t._v("私有前缀属性在前，标准属性在后。")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".lls")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-border-radius")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("-moz-border-radius")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("-o-border-radius")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("-ms-border-radius")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-radius")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);