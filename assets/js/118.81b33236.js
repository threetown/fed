(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{620:function(e,_,a){"use strict";a.r(_);var t=a(44),v=Object(t.a)({},(function(){var e=this,_=e.$createElement,a=e._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓存"}},[e._v("#")]),e._v(" 缓存")]),e._v(" "),a("p",[e._v("缓存有哪些好处？")]),e._v(" "),a("ol",[a("li",[e._v("缓解服务器压力，不用每次都去请求某些数据了。")])]),e._v(" "),a("p",[e._v("2.提升性能，打开本地资源肯定会比请求服务器来的快。")]),e._v(" "),a("p",[e._v("3.减少带宽消耗，当我们使用缓存时，只会产生很小的网络消耗，至于为什么打开本地资源也会产生网络消耗，下面会有说明。")]),e._v(" "),a("p",[e._v("Web缓存种类： 数据库缓存，CDN缓存，代理服务器缓存，浏览器缓存。")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Web缓存类型")]),e._v(" "),a("th",[e._v("描述")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("数据库缓存")]),e._v(" "),a("td")]),e._v(" "),a("tr",[a("td",[e._v("CDN缓存")]),e._v(" "),a("td")]),e._v(" "),a("tr",[a("td",[e._v("代理服务器缓存")]),e._v(" "),a("td")]),e._v(" "),a("tr",[a("td",[e._v("浏览器缓存")]),e._v(" "),a("td",[e._v("每个浏览器都实现了HTTP缓存，我们通过浏览器使用HTTP协议与服务器交互的时候，浏览器就会根据一套与服务器约定的规则进行缓存工作。"),a("br"),e._v("当我们在浏览器中点击 "),a("strong",[e._v("前进")]),e._v(" 或 "),a("strong",[e._v("后退")]),e._v(" 按钮时，利用的便是浏览器的缓存机制。")])])])]),e._v(" "),a("h1",{attrs:{id:"浏览器缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器缓存"}},[e._v("#")]),e._v(" 浏览器缓存")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("ul",[a("li",[e._v("浏览器缓存过程：强缓存、协商缓存")]),e._v(" "),a("li",[e._v("浏览器缓存分类：Service Worker、Memory Cache、Disk Cache、Push Cache")])])]),e._v(" "),a("h2",{attrs:{id:"_1-强缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-强缓存"}},[e._v("#")]),e._v(" 1. 强缓存")]),e._v(" "),a("p",[e._v("强缓存是当我们访问URL的时候，不会向服务器发送请求，直接"),a("strong",[e._v("从缓存中读取资源")]),e._v("，但是会返回"),a("strong",[e._v("200")]),e._v("的状态码。")]),e._v(" "),a("p",[a("strong",[e._v("如何设置强缓存？")])]),e._v(" "),a("p",[e._v("我们第一次进入页面，请求服务器，然后服务器进行应答，浏览器会根据response Header来判断是否对资源进行缓存，如果响应头中 "),a("code",[e._v("expires")]),e._v("、"),a("code",[e._v("pragma")]),e._v("或者"),a("code",[e._v("cache-control")]),e._v("字段，代表这是强缓存，浏览器就会把资源缓存在"),a("code",[e._v("memory cache")]),e._v(" 或 "),a("code",[e._v("disk cache")]),e._v(" 中。")]),e._v(" "),a("p",[e._v("第二次请求时，浏览器判断请求参数，如果符合强缓存条件就直接返回状态码200，从本地缓存中拿数据。否则把响应参数存在"),a("code",[e._v("request header")]),e._v("请求头中，看是否符合"),a("strong",[e._v("协商缓存")]),e._v("，符合则返回状态码 "),a("strong",[e._v("304")]),e._v("，不符合则服务器会返回全新资源。")]),e._v(" "),a("h3",{attrs:{id:"expires"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#expires"}},[e._v("#")]),e._v(" expires")]),e._v(" "),a("p",[e._v("是HTTP1.0控制网页缓存的字段，值为一个时间戳，准确来讲是格林尼治时间，服务器返回该请求结果缓存的到期时间，意思是，再次发送请求时，如果未超过过期时间，直接使用该缓存，如果过期了则重新请求。")]),e._v(" "),a("p",[e._v("有个缺点，就是它判断是否过期是用本地时间来判断的，本地时间是可以自己修改的。")]),e._v(" "),a("h3",{attrs:{id:"cache-control"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cache-control"}},[e._v("#")]),e._v(" Cache-Control")]),e._v(" "),a("p",[e._v("是HTTP1.1中控制网页缓存的字段，当Cache-Control都存在时，Cache-Control优先级更高，主要取值为：")]),e._v(" "),a("p",[e._v("public：资源客户端和服务器都可以缓存。")]),e._v(" "),a("p",[e._v("privite：资源只有客户端可以缓存。")]),e._v(" "),a("p",[e._v("no-cache：客户端缓存资源，但是是否缓存需要经过协商缓存来验证。")]),e._v(" "),a("p",[e._v("no-store：不使用缓存。")]),e._v(" "),a("p",[e._v("max-age：缓存保质期。")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz/pfCCZhlbMQTa3jqibNjSs3IyOFcZc7w4GBicZrW6HHJGOdmHPhxFibaog60ufRBbIXwN3USoEncTxpaBhPoYiaHZrQ/640",alt:"图片"}})]),e._v(" "),a("p",[e._v("Cache-Control使用了max-age相对时间，解决了expires的问题。")]),e._v(" "),a("h3",{attrs:{id:"pragma"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pragma"}},[e._v("#")]),e._v(" pragma")]),e._v(" "),a("p",[e._v("这个是HTTP1.0中禁用网页缓存的字段，其取值为no-cache，和Cache-Control的no-cache效果一样。")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/pfCCZhlbMQTa3jqibNjSs3IyOFcZc7w4GD80NuS66ZINhYHTwHdF20nwMboibG50j5dSOzwuzHHlyicoeOSvXiaXLg/640",alt:"图片"}})]),e._v(" "),a("h2",{attrs:{id:"_2-缓存位置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-缓存位置"}},[e._v("#")]),e._v(" 2. 缓存位置")]),e._v(" "),a("p",[e._v("上面我们说，强缓存我们会把资源房放到memory cache 和 disk cache中，那什么资源放在memory cache，什么资源放在disk cache中？")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz/pfCCZhlbMQTa3jqibNjSs3IyOFcZc7w4GKjyyCnwZaHUpfzHqNLpG5uNKZGeRRDtLt7r6icyKdHGBiadPnkTFibhKw/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),e._v(" "),a("p",[e._v("存存储图像和网页等资源主要缓存在disk cache，操作系统缓存文件等资源大部分都会缓存在memory cache中。具体操作浏览器自动分配，看谁的资源利用率不高就分给谁。")]),e._v(" "),a("p",[e._v("可以看到memory cache请求时间都是0ms，这个是不是太神奇了，这方面我来梳理下。")]),e._v(" "),a("p",[e._v("查找浏览器缓存时会按顺序查找: Service Worker--\x3eMemory Cache--\x3eDisk Cache--\x3ePush Cache。")]),e._v(" "),a("h3",{attrs:{id:"_1-service-worker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-service-worker"}},[e._v("#")]),e._v(" 1. Service Worker")]),e._v(" "),a("p",[e._v("是运行在浏览器背后的独立线程，一般可以用来实现缓存功能。使用 Service Worker的话，传输协议必须为 HTTPS。因为 Service Worker 中涉及到请求拦截，所以必须使用 HTTPS 协议来保障安全。Service Worker 的缓存与浏览器其他内建的缓存机制不同，它可以让我们自由控制缓存哪些文件、如何匹配缓存、如何读取缓存，并且缓存是持续性的。")]),e._v(" "),a("h3",{attrs:{id:"_2-memory-cache"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-memory-cache"}},[e._v("#")]),e._v(" 2. Memory Cache")]),e._v(" "),a("p",[e._v("内存中的缓存，主要包含的是当前中页面中已经抓取到的资源，例如页面上已经下载的样式、脚本、图片等。读取内存中的数据肯定比磁盘快，内存缓存虽然读取高效，可是缓存持续性很短，会随着进程的释放而释放。一旦我们关闭 Tab 页面，内存中的缓存也就被释放了。")]),e._v(" "),a("h3",{attrs:{id:"_3-disk-cache"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-disk-cache"}},[e._v("#")]),e._v(" 3. Disk Cache")]),e._v(" "),a("p",[e._v("存储在硬盘中的缓存，读取速度慢点，但是什么都能存储到磁盘中，比之 Memory Cache 胜在容量和存储时效性上。")]),e._v(" "),a("p",[e._v("在所有浏览器缓存中，Disk Cache 覆盖面基本是最大的。它会根据 HTTP Herder 中的字段判断哪些资源需要缓存，哪些资源可以不请求直接使用，哪些资源已经过期需要重新请求。并且即使在跨站点的情况下，相同地址的资源一旦被硬盘缓存下来，就不会再次去请求数据。绝大部分的缓存都来自 Disk Cache。")]),e._v(" "),a("p",[e._v("memory cache 要比 disk cache 快的多。举个例子：从远程 web 服务器直接提取访问文件可能需要500毫秒(半秒)，那么磁盘访问可能需要10-20毫秒，而内存访问只需要100纳秒，更高级的还有 L1缓存访问(最快和最小的 CPU 缓存)只需要0.5纳秒。")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/pfCCZhlbMQTa3jqibNjSs3IyOFcZc7w4GULShqbbJp7kswIj1OnPub7ib0CZZZ2j2hPdNmXXdNYw4WwI1ZVca2wA/640",alt:"图片"}})]),e._v(" "),a("p",[e._v("很神奇的，我们又看到了一个prefetch cache，这个又是什么呢?")]),e._v(" "),a("p",[a("strong",[e._v("prefetch cache(预取缓存)")])]),e._v(" "),a("p",[e._v("link标签上带了prefetch，再次加载会出现。")]),e._v(" "),a("p",[e._v("prefetch是预加载的一种方式，被标记为prefetch的资源，将会被浏览器在空闲时间加载。")]),e._v(" "),a("h3",{attrs:{id:"_4-push-cache"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-push-cache"}},[e._v("#")]),e._v(" 4. Push Cache")]),e._v(" "),a("p",[e._v("Push Cache（推送缓存）是 HTTP/2 中的内容，当以上三种缓存都没有命中时，它才会被使用。它只在会话（Session）中存在，一旦会话结束就被释放，并且缓存时间也很短暂，在Chrome浏览器中只有5分钟左右，同时它也并非严格执行HTTP头中的缓存指令。")]),e._v(" "),a("h3",{attrs:{id:"_5-cpu、内存、硬盘"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-cpu、内存、硬盘"}},[e._v("#")]),e._v(" 5. CPU、内存、硬盘")]),e._v(" "),a("p",[e._v("这里提到了硬盘，内存，可能有些小伙伴对硬盘，内存没什么直观的概念。")]),e._v(" "),a("p",[e._v("CPU、内存、硬盘都是计算机的主要组成部分。")]),e._v(" "),a("p",[e._v("CPU：中央处理单元(CntralPocessingUit)的缩写，也叫处理器，是计算机的运算核心和控制核心。电脑靠CPU来运算、控制。让电脑的各个部件顺利工作，起到协调和控制作用。")]),e._v(" "),a("p",[e._v("硬盘：存储资料和软件等数据的设备，有容量大，断电数据不丢失的特点。")]),e._v(" "),a("p",[e._v("内存：负责硬盘等硬件上的数据与CPU之间数据交换处理。特点是体积小，速度快，有电可存，无电清空，即电脑在开机状态时内存中可存储数据，关机后将自动清空其中的所有数据。")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s/gV5CA96hsYNPBBn9iRcheg",target:"_blank",rel:"noopener noreferrer"}},[e._v("浏览器缓存的力量"),a("OutboundLink")],1),e._v("\nhttps://mp.weixin.qq.com/s/y-yajw1GaWLKUdOJo3cbew")])])}),[],!1,null,null,null);_.default=v.exports}}]);