webpackJsonp([1],{"8b4D":function(t,e){},ATN2:function(t,e){},H82U:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("/5sW"),s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"topBar clearfix"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("nav",[a("ol",t._l(t.navList,function(e){return a("li",[a("a",{attrs:{href:"#"}},[t._v(t._s(e.text))])])}),0)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("a",{attrs:{href:"#"}},[e("img",{attrs:{src:"https://static2.cnodejs.org/public/images/cnodejs_light.svg",alt:""}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"searchBox "},[e("input",{attrs:{type:"text"}})])}]};var i={name:"App",components:{TopBar:a("VU/8")({name:"topBar",data:function(){return{navList:[{text:"首页"},{text:"新手入门"},{text:"API"},{text:"关于"},{text:"注册"},{text:"登陆"}]}}},s,!1,function(t){a("d2QV")},"data-v-ca473fe2",null).exports}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("top-bar"),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var c=a("VU/8")(i,r,!1,function(t){a("8b4D")},null,null).exports,o=a("/ocq"),l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"topBar"},[a("ol",{staticClass:"clearfix"},t._l(t.navList,function(e){return a("li",[a("a",{class:{topBarActive:t.active==e.id},attrs:{href:"#"},on:{click:function(a){t.changeNav(e)}}},[t._v(t._s(e.text))])])}),0)]),t._v(" "),a("section",[a("ol",t._l(t.topicList,function(e){return a("li",{staticClass:"clearfix"},[a("div",{staticClass:"portrai"},[a("a",{attrs:{href:"#"}},[a("img",{attrs:{src:e.author.avatar_url,alt:""}})])]),t._v(" "),a("div",{staticClass:"content"},[a("span",{staticClass:"leftCount"},[t._v(t._s(e.reply_count))]),a("span",{staticClass:"count_seperator"},[t._v("/")]),a("span",{staticClass:"rightCount"},[t._v(t._s(e.visit_count))]),t._v(" "),e.top?a("span",{staticClass:"tab top"},[t._v("置顶")]):t._e(),t._v(" "),e.top?t._e():a("span",{staticClass:"tab topic "},[t._v("\n             "+t._s(t.getTab(e.tab))+"\n\n          ")]),t._v(" "),a("a",{staticClass:"title",attrs:{href:"#",title:e.title}},[t._v(t._s(e.title))])])])}),0)]),t._v(" "),a("el-pagination",{attrs:{background:"",layout:"prev, pager, next","page-size":20,total:100},on:{"current-change":t.changePage}})],1)},staticRenderFns:[]};var u=a("VU/8")({name:"MainContent",methods:{changePage:function(t){this.loadData(t)},loadData:function(t){var e=this;this.axiosGet("topics?pageNumber="+t+"&limit=20",function(t){e.topicList=t.data.data})},changeNav:function(t){this.active=t.id},getTab:function(t){switch(t){case"ask":return"问答";case"share":return"共享";case"good":return"精华";case"job":return"招聘"}}},mounted:function(){this.loadData(1)},data:function(){return{active:0,navList:[{text:"全部",id:0},{text:"精华",id:1},{text:"分享",id:2},{text:"问答",id:3},{text:"招聘",id:4},{text:"客户端测试",id:5}],topicList:[]}}},l,!1,function(t){a("NpQV")},"data-v-2b794570",null).exports,v={name:"pagination",props:["curren","pageCount","totalElements"],data:function(){return{totalPages:0,numbers:[1,2,3,4,5,6,7,8],start:1,end:this.pageCount}},methods:{},created:function(){},computed:{resetPageNumbders:function(){var t=this.curren;alert(t)}}},d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("ul",{staticClass:"clearfix"},t._l(t.numbers,function(e,n){return a("li",{class:{active:e==t.curren},on:{click:function(a){t.$emit("changePage",e)}}},[a("a",{class:{active:t.curren==e},attrs:{href:"#"}},[t._v(t._s(0==e?"«":e<0?"»":e))])])}),0)])},staticRenderFns:[]};var f={name:"index",components:{Pagination:a("VU/8")(v,d,!1,function(t){a("ATN2")},"data-v-a490eb14",null).exports,MainContent:u},data:function(){return{noreply:[]}},methods:{getNoReply:function(){var t=this;this.axiosGetDev("/topic/noreply",function(e){t.noreply=e.data.data})}},created:function(){this.getNoReply()}},p={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container clearfix"},[a("div",{staticClass:"contents"},[a("MainContent")],1),t._v(" "),a("div",{staticClass:"cards"},[t._m(0),t._v(" "),a("div",{staticClass:"card"},[a("div",{staticClass:"header"},[t._v("无人回复的话题")]),t._v(" "),a("div",{staticClass:"inner"},[a("ol",{staticClass:"unstyled"},t._l(t.noreply,function(e){return a("li",[a("div",[a("a",{attrs:{href:"#",title:e.title}},[t._v(t._s(e.title))])])])}),0)])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[a("div",{staticClass:"inner"},[a("p",[t._v(" CNode：Node.js专业中文社区")]),t._v(" "),a("div",[t._v("您可以 "),a("a",{attrs:{href:"#"}},[t._v("登陆")]),t._v(" 或 "),a("a",{attrs:{href:"#"}},[t._v("注册")]),t._v(",也可以")]),t._v(" "),a("a",{attrs:{href:"#"}},[a("span",[t._v(" 通过 GitHub 登录")])])])])}]};var _=a("VU/8")(f,p,!1,function(t){a("H82U")},"data-v-fdd20fa2",null).exports;n.default.use(o.a);var h=new o.a({routes:[{path:"/",name:"Index",component:_}]}),g=a("zL8q"),m=a.n(g),x=(a("tvR6"),a("mtWM")),C=a.n(x),b={install:function(){n.default.prototype.axiosGet=function(t,e){C.a.get("https://cnodejs.org/api/v1/"+t).then(function(t){e&&e(t)}).catch(function(t){}).finally()},n.default.prototype.axiosGetDev=function(t,e){C.a.get(t).then(function(t){e&&e(t)}).catch(function(t){}).finally()}}};n.default.config.productionTip=!1,n.default.use(m.a),n.default.use(b),new n.default({el:"#app",router:h,render:function(t){return t(c)}})},NpQV:function(t,e){},d2QV:function(t,e){},tvR6:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.a94fc3fcc5fb7aa52f44.js.map