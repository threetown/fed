(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{323:function(s,t,e){s.exports=e.p+"assets/img/hooks.e3aa3e38.jpg"},493:function(s,t,e){s.exports=e.p+"assets/img/trees.a4d03258.png"},623:function(s,t,e){"use strict";e.r(t);var a=e(44),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"git提交规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git提交规范"}},[s._v("#")]),s._v(" git提交规范")]),s._v(" "),a("p",[s._v("本文将从以下三个维度剖析git提交规范，并拓展git原理")]),s._v(" "),a("blockquote",[a("ul",[a("li",[s._v("使用工具生成message —— "),a("code",[s._v("commitizen")])]),s._v(" "),a("li",[s._v("代码提交时检查 —— "),a("code",[s._v("husky")]),s._v(" （或  "),a("code",[s._v("yorkie")]),s._v(" ）和 "),a("code",[s._v("lint-staged")])]),s._v(" "),a("li",[s._v("发布新版本时，自动生成changelog —— "),a("code",[s._v("conventional-changelog")])])])]),s._v(" "),a("h2",{attrs:{id:"一、为什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、为什么"}},[s._v("#")]),s._v(" 一、为什么？")]),s._v(" "),a("blockquote",[a("p",[s._v("在多人协作项目中，如果代码风格统一、代码提交信息的说明准确，那么在后期协作以及Bug处理时，会更加方便。")])]),s._v(" "),a("ol",[a("li",[a("p",[s._v("制定规范后，可能会引起一些不适，诸如：")]),s._v(" "),a("ul",[a("li",[s._v("用户推送的提交遭到拒绝后无法避免的抱怨")]),s._v(" "),a("li",[s._v("辛辛苦苦写成的代码在最后时刻惨遭拒绝是十分让人沮丧且具有迷惑性的")])])]),s._v(" "),a("li",[a("p",[s._v("规范（时机、方案）")]),s._v(" "),a("ul",[a("li",[a("p",[a("code",[s._v("pre-commit")]),s._v("，从"),a("strong",[s._v("暂存区获取被修改文件")]),s._v("列表：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("files_modified "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" diff-index --cached --name-only HEAD"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n")])])])]),s._v(" "),a("li",[a("p",[s._v("每次提交前，核查你的提交信息："),a("code",[s._v("commit-msg")]),s._v(" Hooks，脚本位于"),a("code",[s._v(".git/hooks/commit-msg")])])])])])]),s._v(" "),a("h2",{attrs:{id:"二、生成message"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、生成message"}},[s._v("#")]),s._v(" 二、生成message")]),s._v(" "),a("h3",{attrs:{id:"_2-1-项目中commitizen"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-项目中commitizen"}},[s._v("#")]),s._v(" 2.1 项目中commitizen")]),s._v(" "),a("p",[s._v("在仓库中使用 "),a("a",{attrs:{href:"https://github.com/commitizen/cz-cli",target:"_blank",rel:"noopener noreferrer"}},[a("code",[s._v("commitizen")]),a("OutboundLink")],1),s._v("命令行，在commit时系统会提示您填写任何必填字段，并且您的提交信息将根据项目维护者定义的标准进行格式化。")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("安装 "),a("strong",[s._v("commitizen")]),s._v(" 工具")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在本地安装和运行 commitizen 可以确保开发人员在每台机器上运行完全相同版本的commitize")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" commitizen -D\n")])])])]),s._v(" "),a("li",[a("p",[s._v("初始化项目使用 "),a("strong",[s._v("cz-conventional-changelog")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("commitizen init cz-conventional-changelog --save-dev --save-exact\n")])])]),a("p",[s._v("或使用 "),a("code",[s._v("yarn")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("commitizen init cz-conventional-changelog --yarn --dev --exact\n")])])]),a("p",[a("strong",[s._v("注意：")]),s._v(" 如果已经安装过 "),a("code",[s._v("cz-conventional-changelog")]),s._v("，可以使用 "),a("code",[s._v("--force")]),s._v(" 参数！【"),a("code",[s._v("--exact")]),s._v("，表示确保不会安装任何滑动版本（带有**〜**或^）】")]),s._v(" "),a("p",[s._v("上面的命令，为您做了两件事：")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("安装"),a("code",[s._v("commitizen")]),s._v("、 "),a("code",[s._v("cz-conventional-changelog")]),s._v(" 的npm模块，并将其保存在 "),a("code",[s._v("dependencies")]),s._v(" 或 "),a("code",[s._v("devDependencies")]),s._v("中")])]),s._v(" "),a("li",[a("p",[s._v("将 "),a("code",[s._v("config.commitizen")]),s._v(" 添加到 "),a("strong",[s._v("package.json")]),s._v(" 根目录中")]),s._v(" "),a("div",{staticClass:"language-diff extra-class"},[a("pre",{pre:!0,attrs:{class:"language-diff"}},[a("code",[a("span",{pre:!0,attrs:{class:"token unchanged"}},[a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(' "devDependencies": {\n')])]),a("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[a("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v('   "commitizen": "^4.2.4"\n')]),a("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v('   "cz-conventional-changelog": "3.3.0"\n')])]),a("span",{pre:!0,attrs:{class:"token unchanged"}},[a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(" },\n")])]),a("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[a("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(' "config": {\n')]),a("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v('   "commitizen": {\n')]),a("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v('     "path": "./node_modules/cz-conventional-changelog"\n')]),a("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   }\n")]),a("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(" }\n")])])])])])])])]),s._v(" "),a("li",[a("p",[s._v("提交时只需要使用 "),a("code",[s._v("git cz")]),s._v(" 或 "),a("code",[s._v("cz")]),s._v(" 代替 "),a("code",[s._v("git commit")]),s._v("，作为npm脚本：")]),s._v(" "),a("div",{staticClass:"language-diff extra-class"},[a("pre",{pre:!0,attrs:{class:"language-diff"}},[a("code",[a("span",{pre:!0,attrs:{class:"token unchanged"}},[a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(' "scripts": {\n')])]),a("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[a("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v('   "commit": "git cz"\n')])]),a("span",{pre:!0,attrs:{class:"token unchanged"}},[a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(" }\n")])])])])])])]),s._v(" "),a("h3",{attrs:{id:"_2-2-全局-commitizen"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-全局-commitizen"}},[s._v("#")]),s._v(" 2.2 全局 commitizen")]),s._v(" "),a("p",[s._v("我们也可以把 "),a("code",[s._v("commitizen")]),s._v(" 作为全局程序。")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -g commitizen\n")])])]),a("p",[a("code",[s._v("commitizen")]),s._v("例如，全局安装您的首选适配器"),a("a",{attrs:{href:"https://www.npmjs.com/package/cz-conventional-changelog",target:"_blank",rel:"noopener noreferrer"}},[a("code",[s._v("cz-conventional-changelog")]),a("OutboundLink")],1)]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -g cz-conventional-changelog\n")])])]),a("p",[a("code",[s._v(".czrc")]),s._v("在您的"),a("code",[s._v("home")]),s._v("目录中创建一个文件，并"),a("code",[s._v("path")]),s._v("引用首选的、全局安装的"),a("code",[s._v("commitizen")]),s._v("适配器")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'{ "path": "cz-conventional-changelog" }\'')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" ~/.czrc\n")])])]),a("p",[s._v("你都准备好了！现在"),a("code",[s._v("cd")]),s._v("进入任何"),a("code",[s._v("git")]),s._v("存储库并使用"),a("code",[s._v("git cz")]),s._v("代替，"),a("code",[s._v("git commit")]),s._v("您将找到"),a("code",[s._v("commitizen")]),s._v("提示。")]),s._v(" "),a("h3",{attrs:{id:"_2-3-配置commitizen类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-配置commitizen类型"}},[s._v("#")]),s._v(" 2.3 配置commitizen类型")]),s._v(" "),a("p",[s._v("在源码 "),a("a",{attrs:{href:"https://github.com/commitizen/cz-cli/blob/master/src/commitizen/configLoader.js",target:"_blank",rel:"noopener noreferrer"}},[a("code",[s._v("cz-cli/src/commitizen/configLoader.js")]),a("OutboundLink")],1),s._v(" 中发现，"),a("strong",[s._v("Commitizen")]),s._v(" 默认加载根目录下的配置文件：")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Configuration sources in priority order.")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" configs "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'.czrc'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'.cz.json'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'package.json'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("h2",{attrs:{id:"三、commit提交校验"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、commit提交校验"}},[s._v("#")]),s._v(" 三、commit提交校验")]),s._v(" "),a("p",[s._v("我们已经可以通过工具格式化git commit信息了。但每次提交commit时，我们需要做一些校验【通过触发"),a("strong",[s._v("git hooks")]),s._v("钩子】，我们有以下方案：")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("husky")])]),s._v(" "),a("li",[a("code",[s._v("yorkie")])]),s._v(" "),a("li",[a("code",[s._v("lint-staged")]),s._v("——检测暂存区的代码是否符合规范。")])]),s._v(" "),a("h3",{attrs:{id:"_3-1-git-hooks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-git-hooks"}},[s._v("#")]),s._v(" 3.1 git hooks")]),s._v(" "),a("p",[s._v("gitHooks是用来控制git的工作流程。我们期望在 commit时，能对我们的message进行校验或者做一些其它的事，可以通过 gitHooks来触发。更多见"),a("a",{attrs:{href:"https://git-scm.com/book/zh/v2/ch00/ch10-git-internals",target:"_blank",rel:"noopener noreferrer"}},[s._v("Git 内部原理"),a("OutboundLink")],1)]),s._v(" "),a("h4",{attrs:{id:"_3-1-1-安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-1-安装"}},[s._v("#")]),s._v(" 3.1.1 安装")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init\n")])])]),a("p",[s._v("仓库 "),a("code",[s._v("git init")]),s._v(" 初始化时，产生 "),a("strong",[s._v(".git")]),s._v(" 文件夹。")]),s._v(" "),a("h4",{attrs:{id:"_3-1-2-git目录结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-2-git目录结构"}},[s._v("#")]),s._v(" 3.1.2 .git目录结构")]),s._v(" "),a("p",[s._v("下面是一个全新的"),a("code",[s._v("git init")]),s._v("版本库，你可以看到默认结构。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v(".git\n├── config                         "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 包含项目特有的配置选项")]),s._v("\n├── description                    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 仅供 GitWeb 程序使用，无需关心")]),s._v("\n├── HEAD                           "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 【重要】指向目前被检出的分支（如：ref: refs/heads/master）")]),s._v("\n├── hooks/                         "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 包含客户端或服务端的钩子脚本（hook scripts）")]),s._v("\n│   ├── applypatch-msg.sample\n│   ├── commit-msg.sample\n│   ├── fsmonitor-watchman.sample\n│   ├── post-update.sample\n│   ├── pre-applypatch.sample\n│   ├── pre-commit.sample\n│   ├── pre-merge-commit.sample\n│   ├── pre-push.sample\n│   ├── pre-rebase.sample\n│   ├── pre-receive.sample\n│   ├── prepare-commit-msg.sample\n│   ├── push-to-checkout.sample\n│   └── update.sample\n├── info/                         "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 用来放置不希望被记录在 .gitignore文件的忽略模式")]),s._v("\n│   └── exclude                   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 包含一个全局排除（global exclude）文件，")]),s._v("\n├── objects/                      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 【重要】存储所有数据内容")]),s._v("\n│   ├── info/\n│   └── pack/\n└── refs/                         "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 【重要】存储指向数据（分支、远程仓库和标签等）的提交对象的指针")]),s._v("\n    ├── heads/\n    └── tags/\n")])])]),a("p",[s._v("接下来，我们创建文件并将改动后的"),a("strong",[s._v("把文件添加到暂存区")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" README.md\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])])]),a("p",[s._v("相比之前，多了index")]),s._v(" "),a("div",{staticClass:"language-diff extra-class"},[a("pre",{pre:!0,attrs:{class:"language-diff"}},[a("code",[a("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[a("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(" index\n")])])])])]),a("p",[s._v("接着，把暂存区（stage）保存到本地，并生成一个HASH，保存在 "),a("code",[s._v("refs/heads/master")]),s._v("  中")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('":tada: init project"')]),s._v("\n")])])]),a("p",[s._v("当我们切换分支时，"),a("strong",[s._v("HEAD")]),s._v(" 会指向当前分支，如："),a("code",[s._v("ref: refs/heads/dev")]),s._v("，如果是新建分支，则在 "),a("strong",[s._v("refs/heads/"),a("strong",[s._v("下会生成一个该")]),s._v("分支同名")]),s._v("的文件")]),s._v(" "),a("div",{staticClass:"language-diff extra-class"},[a("pre",{pre:!0,attrs:{class:"language-diff"}},[a("code",[a("span",{pre:!0,attrs:{class:"token unchanged"}},[a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(" .git\n")])]),a("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[a("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(" ├── COMMIT_EDITMSG\n")])]),a("span",{pre:!0,attrs:{class:"token unchanged"}},[a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(" ├── config\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(" ├── description\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(" ├── HEAD\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(" ├── hooks/\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(" │   └── ...\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(" ├── info/\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(" │   └── exclude\n")])]),a("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[a("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(" ├── logs/\n")]),a("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(" │   ├── HEAD\n")]),a("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(" │   └── refs\n")])]),a("span",{pre:!0,attrs:{class:"token unchanged"}},[a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(" ├── objects/\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(" │   ├── info/\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(" │   └── pack/\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(" └── refs/\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("     ├── heads/\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("     └── tags/\n")])])])])]),a("h4",{attrs:{id:"_3-1-3-git工作流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-3-git工作流"}},[s._v("#")]),s._v(" 3.1.3 git工作流")]),s._v(" "),a("blockquote",[a("p",[s._v("工作区、暂存区（Index）、HEAD")])]),s._v(" "),a("p",[a("img",{attrs:{src:e(493),alt:"git workflow"}})]),s._v(" "),a("h4",{attrs:{id:"_3-1-4-hooks文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-4-hooks文件"}},[s._v("#")]),s._v(" 3.1.4 hooks文件")]),s._v(" "),a("p",[s._v("在 "),a("code",[s._v(".git/hooks")]),s._v(" 目录生成一系列的hooks脚本，用来控制git工作的流程。")]),s._v(" "),a("blockquote",[a("ul",[a("li",[s._v("hooks文件中的 "),a("code",[s._v(".sample")]),s._v(" 结尾的"),a("strong",[s._v("示例脚本")]),s._v("默认不会执行，只要把它正确命令（不带 "),a("code",[s._v(".sample")]),s._v(" 放到 "),a("code",[s._v(".git/hooks")]),s._v(" 中，才会激活该钩子脚本）")]),s._v(" "),a("li",[s._v("git的hooks钩子脚本可以为分：客户端hooks和服务端hooks。需要重点了解"),a("code",[s._v("pre-commit")]),s._v("和"),a("code",[s._v("commit-msg")])])])]),s._v(" "),a("p",[a("img",{attrs:{src:e(323),alt:"git hooks"}})]),s._v(" "),a("h4",{attrs:{id:"_3-1-5-本地hooks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-5-本地hooks"}},[s._v("#")]),s._v(" 3.1.5 本地hooks")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("缺陷")]),s._v("：由于 "),a("code",[s._v(".git")]),s._v(" 文件夹是不会被git跟踪的，所以 "),a("code",[s._v(".git/hooks")]),s._v(" 目录下的hooks钩子无法提交，因为无法和他人共享hooks脚本。")]),s._v(" "),a("li",[a("strong",[s._v("解决方案")]),s._v("：我们想共享hooks脚本，有两种解决方案："),a("code",[s._v("husky")]),s._v("、"),a("code",[s._v("yorkie")])])]),s._v(" "),a("h3",{attrs:{id:"_3-2-husky"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-husky"}},[s._v("#")]),s._v(" 3.2 husky")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("husky")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/typicode/husky",target:"_blank",rel:"noopener noreferrer"}},[s._v("husky"),a("OutboundLink")],1),s._v("（发音：哈士奇🐶）,Modern native Git hooks made easy")])]),s._v(" "),a("h4",{attrs:{id:"_3-2-1-安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-1-安装"}},[s._v("#")]),s._v(" 3.2.1 安装")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" husky lint-staged -D\n")])])]),a("p",[a("strong",[s._v("package.json")]),s._v("中配置：")]),s._v(" "),a("div",{staticClass:"language-diff extra-class"},[a("pre",{pre:!0,attrs:{class:"language-diff"}},[a("code",[a("span",{pre:!0,attrs:{class:"token unchanged"}},[a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("{\n")])]),a("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[a("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v('  "husky": {\n')]),a("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v('    "hooks": {\n')]),a("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v('      "pre-commit": "lint-staged"\n')]),a("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("    }\n")]),a("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("  },\n")]),a("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v('  "lint-staged": {\n')]),a("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v('    "*.js": "eslint --fix"\n')]),a("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("  }\n")])]),a("span",{pre:!0,attrs:{class:"token unchanged"}},[a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("}\n")])])])])]),a("h3",{attrs:{id:"_3-3-yorkie"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-yorkie"}},[s._v("#")]),s._v(" 3.3 yorkie")]),s._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://github.com/yyx990803/yorkie",target:"_blank",rel:"noopener noreferrer"}},[s._v("yorkie"),a("OutboundLink")],1),s._v("，fork of "),a("a",{attrs:{href:"https://github.com/typicode/husky",target:"_blank",rel:"noopener noreferrer"}},[s._v("husky"),a("OutboundLink")],1),s._v(".")])]),s._v(" "),a("h4",{attrs:{id:"_3-3-1-安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-1-安装"}},[s._v("#")]),s._v(" 3.3.1 安装")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" yorkie --dev\n")])])]),a("h4",{attrs:{id:"_3-3-2-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-2-配置"}},[s._v("#")]),s._v(" 3.3.2 配置")]),s._v(" "),a("p",[s._v("在"),a("strong",[s._v("package.json")]),s._v("中配置信息如下：(配合 "),a("code",[s._v("lint-staged")]),s._v(" 使用)")]),s._v(" "),a("div",{staticClass:"language-diff extra-class"},[a("pre",{pre:!0,attrs:{class:"language-diff"}},[a("code",[a("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[a("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(' "gitHooks": {\n')]),a("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v('   "pre-commit": "lint-staged",\n')]),a("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v('   "commit-msg": "node scripts/verify-commit-msg.js"\n')]),a("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(" },\n")]),a("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(' "lint-staged": {\n')]),a("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v('   "*.js": [\n')]),a("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v('     "eslint --fix",\n')]),a("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v('     "git add"\n')]),a("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   ]\n")]),a("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(" },\n")])])])])]),a("h2",{attrs:{id:"四、生成changelog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、生成changelog"}},[s._v("#")]),s._v(" 四、生成changelog")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/conventional-changelog/conventional-changelog",target:"_blank",rel:"noopener noreferrer"}},[s._v("conventional-changelog"),a("OutboundLink")],1),s._v("，如果你的所有commit都符合 "),a("a",{attrs:{href:"https://www.conventionalcommits.org/",target:"_blank",rel:"noopener noreferrer"}},[a("code",[s._v("Angular commit规范")]),a("OutboundLink")],1),s._v("，那么发布新版本时，就可以通过脚本自动生成changelog。")]),s._v(" "),a("h3",{attrs:{id:"_4-1-changelog文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-changelog文档"}},[s._v("#")]),s._v(" 4.1 changelog文档")]),s._v(" "),a("p",[a("strong",[s._v("生成的changelog文档包括以下几个部分：")])]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("Features")]),s._v("（对应type: feat）")]),s._v(" "),a("li",[a("strong",[s._v("Bug Fixes")]),s._v("（对应type: fix）")]),s._v(" "),a("li",[a("strong",[s._v("Code Refactoring")]),s._v(" (对应type: refactor且breaking changes为y)")]),s._v(" "),a("li",[a("strong",[s._v("Performance Improvements")]),s._v("（对应type: perf）")]),s._v(" "),a("li",[a("strong",[s._v("Reverts")]),s._v(" (对应type: revert)")]),s._v(" "),a("li",[a("strong",[s._v("BREAKING CHANGES")]),s._v(" (显示body中为BREAKING CHANGES的内容)")])]),s._v(" "),a("p",[a("em",[s._v("每个部分都会罗列相关的 commit ，并且有指向这些 commit 的链接。当然，生成的文档允许手动修改，所以发布前，你还可以添加其他内容。")])]),s._v(" "),a("h3",{attrs:{id:"_4-2-生成changelog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-生成changelog"}},[s._v("#")]),s._v(" 4.2 生成changelog")]),s._v(" "),a("p",[s._v("使用下述命令可生成changelog：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("conventional-changelog -p angular -i CHANGELOG.md -s\n")])])]),a("p",[s._v("上面命令不会覆盖以前的 Change log，只会在CHANGELOG.md的头部加上自从上次发布以来的变动。")]),s._v(" "),a("p",[s._v("如果你想生成所有发布的 Change log，需要运行下面的命令：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("conventional-changelog -p angular -i CHANGELOG.md -s -r "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n")])])]),a("p",[s._v("为了方便使用，可以将其写入"),a("code",[s._v("package.json")]),s._v("的"),a("code",[s._v("scripts")]),s._v("字段。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"changelog"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"conventional-changelog -p angular -i CHANGELOG.md -s -r 0"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("以后，直接运行下面的命令即可。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run changelog\n")])])]),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://commitlint.js.org",target:"_blank",rel:"noopener noreferrer"}},[s._v("commitlint"),a("OutboundLink")],1),s._v("，是一个校验信息的工具，可以结合husky实现对 "),a("code",[s._v("commit-msg")]),s._v(" 的检测。")]),s._v(" "),a("li",[a("a",{attrs:{href:""}},[s._v("lint-staged")]),s._v("，只检测暂存区（staged）的文件")]),s._v(" "),a("li",[s._v("项目总结："),a("a",{attrs:{href:"https://gitlab.com/ttflowerboys/git-hooks",target:"_blank",rel:"noopener noreferrer"}},[s._v("git-hooks"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://itxiaohao.github.io/passages/git-commit/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Git 提交规范、发布及生成 CHANGELOG"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://www.conventionalcommits.org/en/v1.0.0/#specification",target:"_blank",rel:"noopener noreferrer"}},[s._v("Conventional Commits"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"知识拓展"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#知识拓展"}},[s._v("#")]),s._v(" 知识拓展")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Commit message 和 Change log 编写指南"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.cn/post/6976891381914533918",target:"_blank",rel:"noopener noreferrer"}},[s._v("详解如何使得代码提交更规范（lint-staged、commitlint、commitizen、conventional-changelog-cli）"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=n.exports}}]);