(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["qxmap"],{"1bf9":function(t,s,i){"use strict";var n=i("f865"),e=i.n(n);e.a},"2e0c":function(t,s,i){"use strict";var n=i("ceab"),e=i.n(n);e.a},"88d5":function(t,s,i){},ce96:function(t,s,i){"use strict";i.r(s);var n=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"qxmapBox"},[i("h1",[t._v("全国迁徙热门城市")]),i("div",{staticClass:"timeBox"},[t._v(t._s(t.time)+" 来自我的地图")]),i("switchTab",{attrs:{list:["热门迁入地","热门迁出地"]},on:{change:t.change}}),i("mylist",{attrs:{list:t.list}})],1)},e=[],a=(i("ac1f"),i("5319"),i("365c")),c=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"switchBox",on:{click:t.move}},[i("ul",t._l(t.list,(function(s,n){return i("li",{key:n},[t._v(t._s(s))])})),0),i("div",{staticClass:"tabBar",style:{transform:"translateX("+t.x+"px)"}},[t._v(" "+t._s(t.list[t.index])+" ")])])},l=[],o={name:"XXX",props:["list"],data:function(){return{x:0,index:0}},methods:{move:function(){this.x?(this.x=0,this.index=0):(this.x=324,this.index=1),this.$emit("change",this.index,this.list[this.index])}},components:{}},u=o,r=(i("e5fc"),i("2877")),m=Object(r["a"])(u,c,l,!1,null,null,null),v=m.exports,d=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"list_box"},[i("ul",{staticClass:"til"},[i("li",{staticClass:"sort"},[t._v("排名")]),i("li",{staticClass:"name"},[t._v("城市名称")]),i("li",{staticClass:"percent"},[t._v(t._s(t.list.myIndex?"迁出":"迁入")+"比例")])]),i("ul",{staticClass:"body"},t._l(t.list,(function(s,n){return i("li",{key:n,on:{click:function(i){return t.go(s)}}},[i("div",{staticClass:"sort"},[t._v(t._s(n+1))]),i("div",{staticClass:"name"},[t._v(" "+t._s(s.city_name)),i("span",[t._v("("+t._s(s.province_name)+")")])]),i("div",{staticClass:"percent"},[t._v(t._s(s.value)+"%")])])})),0)])},f=[],h={name:"mylist",props:["list"],data:function(){return{}},methods:{go:function(t){window.open("https://qianxi.baidu.com/?from=shoubai#city="+t.city_code)}},components:{}},_=h,p=(i("1bf9"),Object(r["a"])(_,d,f,!1,null,"7ac6884c",null)),x=p.exports,b={name:"qxmap",data:function(){return{moveInList:[],moveOutList:[],list:[],time:""}},methods:{change:function(t,s){this.list=t?this.moveOutList:this.moveInList,this.list.myIndex=t}},created:function(){var t=this;Object(a["d"])().then((function(s){t.list=t.moveInList=s.result.moveInList||[],t.moveOutList=s.result.moveOutList,t.time=s.result.time.replace(/(\d{4})(\d{2})(\d{2})/,"$1年$2月$3日")}))},components:{switchTab:v,mylist:x}},C=b,y=(i("2e0c"),Object(r["a"])(C,n,e,!1,null,null,null));s["default"]=y.exports},ceab:function(t,s,i){},e5fc:function(t,s,i){"use strict";var n=i("88d5"),e=i.n(n);e.a},f865:function(t,s,i){}}]);
//# sourceMappingURL=qxmap.387db69f.js.map