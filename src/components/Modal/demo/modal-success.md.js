webpackJsonp([80,194],{456:function(n,s){"use strict";n.exports={content:{"zh-CN":[["p","\u53ef\u4ee5\u4f7f\u7528atui.Modal.success\u65b9\u6cd5\u65b9\u4fbf\u7684\u663e\u793a\u786e\u8ba4\u64cd\u4f5c\u6210\u529f\u63d0\u793a\u5bf9\u8bdd\u6846,\u5e76\u5728\u7528\u70b9\u51fb\u786e\u8ba4\u540e\u6267\u884c\u56de\u8c03\u51fd\u6570"]],"en-US":[]},meta:{order:5,title:{"zh-CN":"Modal.success({title,content,onOk}) \u663e\u793a\u64cd\u4f5c\u6210\u529f\u63d0\u793a\u5bf9\u8bdd\u6846","en-US":"Type"},filename:"src/components/Modal/demo/modal-success.md",id:"src-components-Modal-demo-modal-success"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token operator">&lt;</span>v<span class="token operator">-</span>button @click<span class="token punctuation">.</span>native<span class="token operator">=</span><span class="token string">"showSuccess"</span><span class="token operator">></span>\u663e\u793a\u64cd\u4f5c\u6210\u529f\u63d0\u793a\u5bf9\u8bdd\u6846<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-button</span><span class="token punctuation">></span></span>'}],preview:'<v-button @click.native="showSuccess">\u663e\u793a\u64cd\u4f5c\u6210\u529f\u63d0\u793a\u5bf9\u8bdd\u6846</v-button>',vueScript:"new Vue({\n  el: 'body',\n  data () {\n    return {\n    }\n  },\n  methods: {\n    showSuccess () {\n      atui.Modal.success({\n        title: '\u64cd\u4f5c\u6210\u529f', \n        content: '\u4fdd\u5b58\u6210\u529f,\u70b9\u51fb\u786e\u8ba4\u8fd4\u56de\u5217\u8868\u9875\u9762?', \n        onOk () {\n          console.log('\u5373\u5c06\u8fd4\u56de\u5217\u8868\u9875\u9762!')\n        }})\n    }\n  },\n  components: {\n    vButton: atui.Button\n  }\n})"}}});