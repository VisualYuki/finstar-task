(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{199:function(t,o,e){var content=e(281);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(84).default)("4db9d57e",content,!0,{sourceMap:!1})},201:function(t,o,e){var content=e(285);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(84).default)("65361735",content,!0,{sourceMap:!1})},220:function(t,o,e){"use strict";var n={name:"DefaultLayout"},r=(e(284),e(68)),component=Object(r.a)(n,(function(){var t=this._self._c;return t("div",{staticClass:"layout"},[t("div",{staticClass:"content"},[t("Nuxt")],1)])}),[],!1,null,null,null);o.a=component.exports},227:function(t,o,e){e(228),t.exports=e(229)},280:function(t,o,e){"use strict";e(199)},281:function(t,o,e){var n=e(83)(!1);n.push([t.i,"h1[data-v-6ffeedc3]{font-size:20px}",""]),t.exports=n},284:function(t,o,e){"use strict";e(201)},285:function(t,o,e){var n=e(83)(!1);n.push([t.i,".layout{width:100vw;padding:20px}.d-none{display:none}",""]),t.exports=n},54:function(t,o,e){"use strict";var n=e(323),r={name:"EmptyLayout",layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},c=(e(280),e(68)),component=Object(c.a)(r,(function(){var t=this,o=t._self._c;return o(n.a,{attrs:{dark:""}},[404===t.error.statusCode?o("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):o("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),o("NuxtLink",{attrs:{to:"/"}},[t._v(" Home page ")])],1)}),[],!1,null,"6ffeedc3",null);o.a=component.exports}},[[227,8,2,9]]]);