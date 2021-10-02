(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{614:function(t,e,n){"use strict";n.r(e);var a=n(8),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"定义"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#定义"}},[t._v("#")]),t._v(" 定义")]),t._v(" "),n("blockquote",[n("p",[t._v("跨站请求伪造（英语：Cross-site request forgery），也被称为 one-click attack 或者 session riding，通常缩写为 CSRF 或者 XSRF， 是一种挟制用户在当前已登录的Web应用程序上执行非本意的操作的攻击方法。跟跨网站脚本（XSS）相比，XSS 利用的是用户对指定网站的信任，CSRF 利用的是网站对用户网页浏览器的信任。")])]),t._v(" "),n("h2",{attrs:{id:"例子"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#例子"}},[t._v("#")]),t._v(" 例子")]),t._v(" "),n("p",[t._v("通常这些普通的方案浏览器的安全策略就阻止了")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('<img src="www.demo.com:8081/h" >\n\n<table background="javascript:alert(/xss/)"></table>\n\n')])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br")])]),n("h2",{attrs:{id:"预防"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#预防"}},[t._v("#")]),t._v(" 预防")]),t._v(" "),n("ul",[n("li",[t._v("referer")]),t._v(" "),n("li",[t._v("cors\n客户端")])]),t._v(" "),n("blockquote",[n("p",[t._v("GET /cors HTTP/1.1\nOrigin: http://api.bob.com\nHost: api.alice.com\nAccept-Language: en-US\nConnection: keep-alive\nUser-Agent: Mozilla/5.0...")])]),t._v(" "),n("p",[t._v("服务端")]),t._v(" "),n("blockquote",[n("p",[t._v("Access-Control-Allow-Origin: http://api.bob.com\nAccess-Control-Allow-Credentials: true\nAccess-Control-Expose-Headers: FooBar\nContent-Type: text/html; charset=utf-8")])]),t._v(" "),n("p",[t._v("springboot有"),n("code",[t._v("CrossOrigin")]),t._v("注解可以控制cors。")]),t._v(" "),n("ul",[n("li",[t._v("jsonp\nJSONP只支持GET请求，CORS支持所有类型的HTTP请求。JSONP的优势在于支持老式浏览器，以及可以向不支持CORS的网站请求数据。")])]),t._v(" "),n("p",[t._v("代码见 "),n("a",{attrs:{href:"https://github.com/limuyan44/java-interview",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github"),n("OutboundLink")],1)]),t._v(" "),n("h2",{attrs:{id:"预检请求"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#预检请求"}},[t._v("#")]),t._v(" 预检请求")]),t._v(" "),n("p",[t._v("在真正的请求发送出去之前，浏览器会先发送一个options请求向服务询问此接口是否允许我访问\n浏览器在当前真实请求是非简单请求且跨域的情况下会发起options预检请求\n什么是简单请求\n1.请求方法为get，post，head\n2.Content-Type限于(application/x-www-form-urlencoded,mutipart/form-data,text/plain)\n3.不可以有自定义请求头如xxx-token等")]),t._v(" "),n("p",[t._v("什么是复杂请求\n非简单请求即为复杂请求\n1.常见请求方法为 put delete\n2.Content-Type为application/json\n3.添加自定义http header")])])}),[],!1,null,null,null);e.default=s.exports}}]);