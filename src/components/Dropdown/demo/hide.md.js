webpackJsonp([116,194],{420:function(n,a){"use strict";n.exports={content:{"zh-CN":[["p","\u4e0b\u62c9\u83dc\u5355\u9ed8\u8ba4\u5728\u70b9\u51fb\u83dc\u5355\u9879\u540e\u4f1a\u88ab\u9690\u85cf\uff0c\u5c06",["code","hide-on-click"],"\u5c5e\u6027\u9ed8\u8ba4\u4e3a",["code","false"],"\u53ef\u4ee5\u5173\u95ed\u6b64\u529f\u80fd\u3002"]],"en-US":[]},meta:{order:2,title:{"zh-CN":"\u83dc\u5355\u9690\u85cf\u65b9\u5f0f","en-US":"Type"},filename:"src/components/Dropdown/demo/hide.md",id:"src-components-Dropdown-demo-hide"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-dropdown</span> <span class="token attr-name">:hide-on-click</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    \u70b9\u51fb\u663e\u793a\u83dc\u5355 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>down<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>icon</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>dropdown-menu<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span><span class="token punctuation">></span></span>\u9009\u9879\u4e00<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span><span class="token punctuation">></span></span>\u9009\u9879\u4e8c<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span><span class="token punctuation">></span></span>\u9009\u9879\u4e09<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>separator<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>atui-dropdown-divider<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u5176\u5b83<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-dropdown</span><span class="token punctuation">></span></span>'}],preview:'<v-dropdown :hide-on-click="false">\n  <div>\n    \u70b9\u51fb\u663e\u793a\u83dc\u5355 <icon type="down"></icon>\n  </div>\n  <ul slot="dropdown-menu">\n    <li><a>\u9009\u9879\u4e00</a></li>\n    <li><a>\u9009\u9879\u4e8c</a></li>\n    <li><a>\u9009\u9879\u4e09</a></li>\n    <li role="separator" class="atui-dropdown-divider"></li>\n    <li><a href="#">\u5176\u5b83</a></li>\n  </ul>\n</v-dropdown>',vueScript:"new Vue({\n  el: 'body',\n  components: {\n    vDropdown: atui.Dropdown,\n    icon: atui.Icon\n  },\n  data: {\n    \n  },\n  methods: {\n    closeDropdown () {\n    }\n  }\n})"}}});