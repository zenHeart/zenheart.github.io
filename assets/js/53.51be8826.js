(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{329:function(e,r,v){"use strict";v.r(r);var _=v(4),a=Object(_.a)({},function(){var e=this,r=e.$createElement,v=e._self._c||r;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h1",{attrs:{id:"performance"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#performance","aria-hidden":"true"}},[e._v("#")]),e._v(" performance")]),e._v(" "),v("p",[v("strong",[e._v("详细讲解 chrome tools 性能工具的使用")])]),e._v(" "),v("h2",{attrs:{id:"面板概览"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#面板概览","aria-hidden":"true"}},[e._v("#")]),e._v(" 面板概览")]),e._v(" "),v("ol",[v("li",[e._v("打开控制台,点击 "),v("code",[e._v("Performance")])]),e._v(" "),v("li",[e._v("访问 "),v("a",{attrs:{href:"https://googlechrome.github.io/devtools-samples/jank/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://googlechrome.github.io/devtools-samples/jank/"),v("OutboundLink")],1),e._v(" 点击 "),v("code",[e._v("add 10")]),e._v(" 有明显的变慢")])]),e._v(" "),v("p",[e._v("整个面板功能分为四块")]),e._v(" "),v("ul",[v("li",[e._v("控制面板\n"),v("ul",[v("li",[v("code",[e._v("Disable javascript samples")])]),e._v(" "),v("li",[v("code",[e._v("Network")]),e._v(" 显示网络速率")]),e._v(" "),v("li",[v("code",[e._v("Enable advanced paint")]),e._v(" 不清楚")]),e._v(" "),v("li",[v("code",[e._v("Cpu 限速")]),e._v(" 原理?")])])]),e._v(" "),v("li",[e._v("概览面板\n"),v("ul",[v("li",[v("code",[e._v("FPS")]),e._v(" 显示帧每秒")]),e._v(" "),v("li",[v("code",[e._v("CPU")]),e._v(" 显示 cpu 运行情况")]),e._v(" "),v("li",[v("code",[e._v("Net")]),e._v(" 显示网络资源加载情况")])])]),e._v(" "),v("li",[e._v("描述面板\n"),v("ul",[v("li",[v("code",[e._v("Network")]),e._v(" 显示详细网络信息")]),e._v(" "),v("li",[v("code",[e._v("Frames")]),e._v(" 显示每帧的绘制信息")]),e._v(" "),v("li",[v("code",[e._v("Timings")]),e._v(" 显示时间线")]),e._v(" "),v("li",[v("code",[e._v("Main")]),e._v(" 显示主线程信息")]),e._v(" "),v("li",[v("code",[e._v("Raster")]),e._v(" 不清楚")]),e._v(" "),v("li",[v("code",[e._v("GPU")]),e._v(" gpu 绘制时间")]),e._v(" "),v("li",[v("code",[e._v("Chrome_ChildIOThread")]),e._v(" IO 子线程")]),e._v(" "),v("li",[v("code",[e._v("Compositor/43011")]),e._v(" 不清楚")]),e._v(" "),v("li",[v("code",[e._v("ThreadPoolServiceThread")]),e._v(" 线程池服务线程")])])]),e._v(" "),v("li",[e._v("详情面板\n"),v("ul",[v("li",[v("code",[e._v("Summary")]),e._v(" 汇总信息")]),e._v(" "),v("li",[v("code",[e._v("Bottom-up")]),e._v(" 不清楚")]),e._v(" "),v("li",[v("code",[e._v("Call Tree")]),e._v(" 调用树")]),e._v(" "),v("li",[v("code",[e._v("Event Log")]),e._v(" 事件日志")])])])]),e._v(" "),v("p",[e._v("每个面板功能如下")]),e._v(" "),v("h2",{attrs:{id:"控制面板"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#控制面板","aria-hidden":"true"}},[e._v("#")]),e._v(" 控制面板")]),e._v(" "),v("h2",{attrs:{id:"概览面板"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#概览面板","aria-hidden":"true"}},[e._v("#")]),e._v(" 概览面板")]),e._v(" "),v("h2",{attrs:{id:"fps"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#fps","aria-hidden":"true"}},[e._v("#")]),e._v(" FPS")]),e._v(" "),v("p",[e._v("这里需要理解如下基本概念:")]),e._v(" "),v("ul",[v("li",[v("strong",[e._v("FPS")]),e._v(" 每秒帧数是一个数值,为整数,越高说明绘制越有效")])]),e._v(" "),v("p",[e._v("绿线就是在时间轴上每个时刻对应的 fps 数量。理论上该值越高越好.最好超过 60fps.该值的深层次原理来源于视觉暂留现象。")]),e._v(" "),v("h2",{attrs:{id:"范例"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#范例","aria-hidden":"true"}},[e._v("#")]),e._v(" 范例")]),e._v(" "),v("ol",[v("li",[v("code",[e._v("⌘⇧n")]),e._v(" 打开无痕模式浏览页面(排出插件的干扰),详见 "),v("a",{attrs:{href:"https://support.google.com/chrome/answer/95464",target:"_blank",rel:"noopener noreferrer"}},[e._v("无痕浏览"),v("OutboundLink")],1)])]),e._v(" "),v("h2",{attrs:{id:"参考资料"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[e._v("#")]),e._v(" 参考资料")]),e._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"https://developers.google.cn/web/tools/chrome-devtools/evaluate-performance/",target:"_blank",rel:"noopener noreferrer"}},[e._v("performance"),v("OutboundLink")],1)])])])},[],!1,null,null,null);r.default=a.exports}}]);