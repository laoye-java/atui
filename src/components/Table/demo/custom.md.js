webpackJsonp([46,194],{490:function(n,a){"use strict";n.exports={content:{"zh-CN":[["p","\u53ef\u4ee5\u901a\u8fc7vue2.1.0\u540e\u65b0\u589e\u7684Scoped Slots\u7279\u6027\u6765\u81ea\u5b9a\u4e49\u5217\u7684\u5c55\u793a\uff0cslot\u7684\u547d\u540d\u683c\u5f0f\u4e3a (column.dataIndex || column.key)\n\u5982\u679c\u67d0\u4e00\u5217\u4e0d\u5bf9\u5e94\u6570\u636e\u6e90\u4e2d\u7684\u4efb\u4f55\u4e00\u5217\uff0c\u6bd4\u5982'\u64cd\u4f5c'\u8fd9\u4e00\u5217\uff0c\u90a3\u4e48\u9700\u8981\u5728\u5217\u914d\u7f6e\u4e2d\u65b0\u589e\u4e00\u4e2akey\u5b57\u6bb5\u6765\u6807\u8bb0\u8fd9\u4e00\u5217\uff0c\u901a\u8fc7props.record\u6765\u83b7\u53d6\u5230\u5f53\u524d\u884c\u7684\u8bb0\u5f55"]],"en-US":[]},meta:{order:1,title:{"zh-CN":"\u81ea\u5b9a\u4e49\u5217\u5c55\u793a","en-US":"Type"},filename:"src/components/Table/demo/custom.md",id:"src-components-Table-demo-custom"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-table</span> <span class="token attr-name">:data-source</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>gridData<span class="token punctuation">"</span></span> <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>gridColumns<span class="token punctuation">"</span></span> <span class="token attr-name">row-key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>key<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>noDataTip<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token keyword">if</span> dataSource is <span class="token keyword">null</span><span class="token punctuation">,</span> i will displayed<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">scope</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>props<span class="token punctuation">"</span></span> <span class="token attr-name">:slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>age<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>\u5e74\u9f84\uff1a<span class="token punctuation">{</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>record<span class="token punctuation">.</span>age<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">scope</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>props<span class="token punctuation">"</span></span> <span class="token attr-name">:slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>operation<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token operator">&lt;</span>v<span class="token operator">-</span>button @click<span class="token punctuation">.</span>native<span class="token operator">=</span><span class="token string">"onBtnClick(props.record)"</span><span class="token operator">></span>\u64cd\u4f5c<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-button</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-table</span><span class="token punctuation">></span></span>'}],preview:'<v-table :data-source="gridData" :columns="gridColumns" row-key="key">\n  <div slot="noDataTip">if dataSource is null, i will displayed</div>\n  <template scope="props" :slot="age">\n    <span>\u5e74\u9f84\uff1a{{props.record.age}}</span>\n  </template>\n  <template scope="props" :slot="operation">\n    <v-button @click.native="onBtnClick(props.record)">\u64cd\u4f5c</v-button>\n  </template>\n</v-table>',vueScript:"var columns = [{\n  title: '\u59d3\u540d<img src=\"//img.alicdn.com/tps/i2/TB1nff4IpXXXXc1XVXX.7lBQXXX-380-54.png\" width=\"50px\">',\n  dataIndex: 'name',\n  width:150,\n  className: 'name'\n}, {\n  title: '\u5e74\u9f84',\n  dataIndex: 'age',\n  width:250,\n  className: 'age'\n}, {\n  title: '\u5730\u5740',\n  dataIndex: 'address',\n  filterMultiple: false,\n  width:250\n},{\n    title: '\u64cd\u4f5c',\n    key: 'operation'\n  }\n];\n\nvar data = [{\n  key: '1',\n  name: '-1\u6761',\n  age: 32,\n  address: '\u5357\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7<img src=\"//img.alicdn.com/tps/i2/TB1nff4IpXXXXc1XVXX.7lBQXXX-380-54.png\" width=\"50px\">',\n}, {\n  key: '2',\n  name: '\u80e1\u5f66\u7956',\n  age: 42,\n  address: '\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed12\u53f7',\n}, {\n  key: '3',\n  name: '\u674e\u5927\u5634',\n  age: 32,\n  address: '\u5357\u6e56\u533a\u6e56\u5e95\u516c\u56ed123\u53f7',\n}, {\n  key: '4',\n  name: '\u674e\u79c0\u83b2\u5927\u5634\u54e5',\n  age: 32,\n  address: '\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed123\u53f7',\n},\n{\n  key: '5',\n  name: '\u5218\u5fb7\u534e',\n  age: 54,\n  address: '\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed999\u53f7',\n},\n{\n  key: '6',\n  name: '\u6d2a\u91d1\u5b9d',\n  age: 66,\n  address: '\u9999\u6e2f\u5f25\u6566\u90531',\n}]\n\nnew Vue({\n  el: 'body',\n  components: {\n    vTable: atui.Table,\n    icon: atui.Icon,\n    vButton: atui.Button\n  },\n  data () {\n    return {\n      gridData: data,\n      gridColumns: columns\n    }\n  },\n  methods: {\n    onBtnClick (record) {\n      console.log(record)\n    },\n    getData () {\n      let self = this\n      setTimeout(function(){\n        self.gridData = data\n      }) \n    }\n  }\n})"}}});