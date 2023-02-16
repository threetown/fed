(window.webpackJsonp=window.webpackJsonp||[]).push([[163],{677:function(e,r,t){"use strict";t.r(r);var o=t(44),n=Object(o.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"web安全"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#web安全"}},[e._v("#")]),e._v(" Web安全")]),e._v(" "),t("ul",[t("li",[t("p",[t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/conflicting/Web/HTTP/CSP",target:"_blank",rel:"noopener noreferrer"}},[e._v("CSP (内容安全策略)"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("strong",[e._v("内容安全策略")]),e._v("（CSP）是一个附加的安全层，有助于探测和减轻某些类型的攻击，包括"),t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Glossary/Cross-site_scripting",target:"_blank",rel:"noopener noreferrer"}},[e._v("跨站脚本攻击（XSS）"),t("OutboundLink")],1),e._v("和数据注入攻击。这些攻击被广泛使用，从数据窃取到网站污损亦或是恶意软件的分发。")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/orphaned/Web/Security/Information_Security_Basics",target:"_blank",rel:"noopener noreferrer"}},[e._v("信息安全基本原理"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("了解安全基本原理会帮助你理解在 web 开发生命周期中安全的角色和重要性。它将帮助你避免使用不必要的、允许攻击者利用缺陷获得经济收益或其他恶意目的非完全软件。以下文章提供了一些基本的 web 安全理论和定义。")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/Security/Insecure_passwords",target:"_blank",rel:"noopener noreferrer"}},[e._v("不安全的密码 (en-US)"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("a",{attrs:{href:"https://en.wikipedia.org/wiki/HTTP_Secure",target:"_blank",rel:"noopener noreferrer"}},[e._v("HTTPS"),t("OutboundLink")],1),e._v(" 协议旨在保护用户数据在网络上不被窃听（机密性） 和不被篡改（完整性）。处理用户数据的网站应该使用 HTTPS 协议保护他们的用户不受黑客的侵害。如果网站使用 HTTP 协议而不是 HTTPS 协议，窃取用户信息（比如他们的登录凭证）将会轻而易举。这曾经被 "),t("a",{attrs:{href:"https://codebutler.github.io/firesheep/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Firesheep"),t("OutboundLink")],1),e._v(" 很好地演示过。")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/Security/Mixed_content",target:"_blank",rel:"noopener noreferrer"}},[e._v("混合内容 (en-US)"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("当用户访问通过 "),t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Glossary/https",target:"_blank",rel:"noopener noreferrer"}},[e._v("HTTPS"),t("OutboundLink")],1),e._v(" 协议传输的页面时，他们与 web 服务器的连接被 "),t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Glossary/TLS",target:"_blank",rel:"noopener noreferrer"}},[e._v("TLS"),t("OutboundLink")],1),e._v(" 加密保护，因而免受嗅探器和中间人攻击。如果这个通过 HTTPS 访问的页面包含通过定期的明文 HTTP 获取的内容，那么该连接就只是部分加密；没有加密的内容可以被嗅探器获取、被中间人攻击篡改，因此该连接不受安全保证。当网页表现出这样的行为，就称为混合内容页面。")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Public_Key_Pinning",target:"_blank",rel:"noopener noreferrer"}},[e._v("公钥固定 (en-US)"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("strong",[e._v("HTTP 公钥固定扩展")]),e._v(" (HPKP) 是一种安全功能，用来告诉 web 客户端与一些 web 服务器关联特定的加密公钥来阻止 "),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Man-in-the-middle_attack",target:"_blank",rel:"noopener noreferrer"}},[e._v("MITM"),t("OutboundLink")],1),e._v(" 伪造证书攻击。")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/Security/Same-origin_policy",target:"_blank",rel:"noopener noreferrer"}},[e._v("同源策略"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("同源策略限制了一个源（origin）中加载的文档或脚本与其他源（origin）中的资源交互的方式。这是一种用来隔离潜在恶意文档的关键安全机制。")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/Security/Secure_Contexts",target:"_blank",rel:"noopener noreferrer"}},[e._v("安全环境"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("当浏览器满足安全的最低要求时将进入一种安全环境。安全环境允许浏览器暴露那些只有在被安全地传输给用户时才被允许的 APIs。")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/Security/Securing_your_site",target:"_blank",rel:"noopener noreferrer"}},[e._v("保护你的网站"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("有很多你可以做的事情能够保护你的网站安全。本文提出了各种各样的建议，还有其他提供了更多有用信息文章的链接。")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/Security/Site_Identity_Button",target:"_blank",rel:"noopener noreferrer"}},[e._v("网站身份按钮"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("编辑审核完成。")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/Security/Subresource_Integrity",target:"_blank",rel:"noopener noreferrer"}},[e._v("子资源完整性"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("子资源完整性 (SRI) 是一种安全功能，允许浏览器验证所获取的文件 (比如，从一个 "),t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Glossary/CDN",target:"_blank",rel:"noopener noreferrer"}},[e._v("CDN"),t("OutboundLink")],1),e._v(" 内容分发网络) 是无意外操作而交付的。它的工作原理是允许你提供一个获取文件必须匹配的加密哈希。")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/Security/Transport_Layer_Security",target:"_blank",rel:"noopener noreferrer"}},[e._v("传输层安全协议"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("在传输层安全协议中选择合适的密码套件和参数是必要且重要的。它有助于维护客户端和服务器之间通信的机密性和完整性。Mozilla 操作安全团队（OpSec）参考传输层安全协议配置维护着 "),t("a",{attrs:{href:"https://developer.mozilla.org/docs/Security/Server_Side_TLS",target:"_blank",rel:"noopener noreferrer"}},[e._v("一条 wiki 条目"),t("OutboundLink")],1),e._v("。")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/Security/Weak_Signature_Algorithm",target:"_blank",rel:"noopener noreferrer"}},[e._v("弱签名算法 (en-US)"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("编辑审核完成。")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/Security/Same-origin_policy",target:"_blank",rel:"noopener noreferrer"}},[e._v("浏览器的同源策略"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("strong",[e._v("同源策略")]),e._v("是一个重要的安全策略，它用于限制一个origin的文档或者它加载的脚本如何能与另一个源的资源进行交互。它能帮助阻隔恶意文档，减少可能被攻击的媒介。")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/Security/Securing_your_site",target:"_blank",rel:"noopener noreferrer"}},[e._v("确保你的站点安全"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("你可以采取一些措施来确保你的网站安全。本文提供了各种建议，以及提供更多有用信息的其他文章的链接。")])])])])}),[],!1,null,null,null);r.default=n.exports}}]);