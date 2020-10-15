(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{288:function(t,e,a){"use strict";a.r(e);var _=a(4),r=Object(_.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"新浪云服务器配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新浪云服务器配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 新浪云服务器配置")]),t._v(" "),a("p",[a("strong",[t._v("SAE 服务器的使用笔记")])]),t._v(" "),a("h2",{attrs:{id:"服务器环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务器环境","aria-hidden":"true"}},[t._v("#")]),t._v(" 服务器环境")]),t._v(" "),a("ul",[a("li",[t._v("CentOS-6.x")]),t._v(" "),a("li",[t._v("Apache-2.2.x")]),t._v(" "),a("li",[t._v("PHP-5.3.x / PHP-5.6.x")])]),t._v(" "),a("h2",{attrs:{id:"sae-设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sae-设置","aria-hidden":"true"}},[t._v("#")]),t._v(" sae 设置")]),t._v(" "),a("p",[t._v("支持的判断条件")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("比较符号")]),t._v(" "),a("th",[t._v("作用")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("==")]),t._v(" "),a("td",[t._v("比较变量和字符串相等")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("!=")]),t._v(" "),a("td",[t._v("比较变量和字符串不等")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v(">,>=,<,<=")])]),t._v(" "),a("td",[t._v("比较变量和数字")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("-f,！-f")])]),t._v(" "),a("td",[t._v("检查文件是否存在")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("-d,!-d")])]),t._v(" "),a("td",[t._v("检查目录是否存在")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("-e,!-e")])]),t._v(" "),a("td",[t._v("运算符检查文件或目录是否存在")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("~")]),t._v(" "),a("td",[t._v("大小写敏感")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("~*")]),t._v(" "),a("td",[t._v("大小写不敏感，运算符匹配变量和正则表达式，支持匹配组，利用 "),a("code",[t._v("%[1-9]")]),t._v(" 进行引用")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("%{REQ:HEADER_NAME}")])]),t._v(" "),a("td",[t._v("HTTP 请求头中的字段，如 %{REQ:HTTP_HOST}")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("%{RESP:HEADER_NAME}")])]),t._v(" "),a("td",[t._v("HTTP 响应头中的字段，如 %{RESP:CONTENT_ENCODING}")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("%{QUERY_STRING}")])]),t._v(" "),a("td",[t._v("查询串，一般是 url 中问号后面的内容")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("%{REQUEST_URI}")])]),t._v(" "),a("td",[t._v("请求路径，即用户请求的 url 去掉主机部分和查询串后剩下的部分")])])])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("设置访问没有指定文件的返回文件\n"),a("code",[t._v("- directoryindex: aaa.php")])])]),t._v(" "),a("li",[a("p",[t._v("定义错误返回文件名\n"),a("code",[t._v("- errordoc: 404 /404.html")])])])]),t._v(" "),a("h2",{attrs:{id:"url-重写举例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#url-重写举例","aria-hidden":"true"}},[t._v("#")]),t._v(" url 重写举例")]),t._v(" "),a("p",[t._v("修改 config.yaml 文件可以实现类似 .htaccess 文件格式的配置。\nURL 配置语法:")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("   - rewrite: if （CONDTIONs） goto target_url\n")])])]),a("p",[t._v("使用举例：")]),t._v(" "),a("ol",[a("li",[t._v("强制使用 https")])]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('   - rewrite: if (%{REQ:X-Forwarded-Protol} != "https") goto "https://%{HTTP_HOST}%{REQUEST_URI}" \n')])])]),a("h2",{attrs:{id:"sae-cdn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sae-cdn","aria-hidden":"true"}},[t._v("#")]),t._v(" sae cdn")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://lib.sinaapp.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("sae lib"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"共享型数据库区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#共享型数据库区别","aria-hidden":"true"}},[t._v("#")]),t._v(" 共享型数据库区别")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://www.sinacloud.com/home/index/faq_detail/doc_id/97.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("文档中心"),a("OutboundLink")],1)])])},[],!1,null,null,null);e.default=r.exports}}]);