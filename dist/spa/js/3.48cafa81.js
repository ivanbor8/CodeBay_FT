(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"1e5b":function(t,e,a){},"2da0":function(t,e,a){"use strict";var s=a("1e5b"),i=a.n(s);i.a},"713b":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{attrs:{view:"lHh Lpr lFf"}},[a("q-header",{attrs:{elevated:""}},[a("q-toolbar",[a("Language"),a("q-space"),a("NightMode"),a("q-space"),a("Cart"),a("q-space"),a("Account"),a("q-space"),a("Search")],1)],1),a("br"),a("br"),a("Navigation"),a("q-page-container",{staticClass:"page"},[a("router-view")],1),a("Footer")],1)},i=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("br"),a("br"),a("footer",[a("div",{staticClass:"row footer"},[a("div",{staticClass:"col-lg-4 col-md-4 col-sm-12 col-xs-12 text-left"},[a("div",{staticClass:"q-pa-md",attrs:{align:"center"}},[a("q-list",{staticClass:"quick_links"},[a("q-item",[a("q-item-section",{staticClass:"bold-text"},[t._v(t._s(t.$t("quick_links")))])],1),a("q-separator",{staticStyle:{"max-width":"200px"},attrs:{inset:""}}),a("div",{staticClass:"links"},[a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",to:"/home"}},[a("q-item-section",[a("q-item-label",[t._v(t._s(t.$t("home")))])],1)],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",to:"/event"}},[a("q-item-section",[a("q-item-label",[t._v(t._s(t.$t("event")))])],1)],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",to:"/support"}},[a("q-item-section",[a("q-item-label",[t._v(t._s(t.$t("support")))])],1)],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",to:"/contact"}},[a("q-item-section",[a("q-item-label",[t._v(t._s(t.$t("contact")))])],1)],1)],1)],1)],1)]),a("div",{staticClass:"col-lg-4 col-md-4 col-sm-12 col-xs-12 text-left"},[a("div",{staticClass:"q-pa-md",attrs:{align:"center"}},[a("q-list",{staticClass:"promoted"},[a("q-item",[a("q-item-section",{staticClass:"bold-text"},[t._v(t._s(t.$t("promoted")))])],1),a("q-separator",{staticStyle:{"max-width":"200px"},attrs:{inset:""}}),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""}},[a("q-item-section",[a("q-item-label",[t._v(t._s(t.$t("promoted_info")))])],1)],1)],1)],1)]),a("div",{staticClass:"col-lg-4 col-md-4 col-sm-12 col-xs-12 text-left"},[a("div",{staticClass:"q-pa-md",attrs:{align:"center"}},[a("q-list",{staticClass:"comingsoon"},[a("q-item",[a("q-item-section",{staticClass:"bold-text"},[t._v(t._s(t.$t("soon")))])],1),a("q-separator",{staticStyle:{"max-width":"200px"},attrs:{inset:""}}),a("q-item-section",[a("q-img",{staticStyle:{"max-width":"50%",display:"block",margin:"auto","margin-top":"3%"},attrs:{src:"https://www.teknofilo.com/wp-content/uploads/2020/03/iPhone-12.jpg",height:"100%",width:"100%"}},[a("div",{staticClass:"absolute-bottom text-subtitle2 text-center"},[t._v("\n                  IPHONE 12\n                ")])])],1)],1)],1)])])]),a("div",{staticClass:"text-caption copyright text-center"},[a("br"),t._v("\n    "+t._s(t.$t("copyright"))+"\n    "),a("br"),a("br")])])},c=[],r={name:"Footer",data(){return{}},methods:{}},l=r,o=(a("d302"),a("2877")),m=a("1c1c"),u=a("66e5"),d=a("4074"),p=a("eb85"),h=a("0170"),_=a("068f"),b=a("714f"),v=a("eebe"),q=a.n(v),f=Object(o["a"])(l,n,c,!1,null,null,null),g=f.exports;q()(f,"components",{QList:m["a"],QItem:u["a"],QItemSection:d["a"],QSeparator:p["a"],QItemLabel:h["a"],QImg:_["a"]}),q()(f,"directives",{Ripple:b["a"]});var C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language"},[a("q-select",{staticStyle:{"min-width":"105%"},attrs:{options:t.langOptions,label:t.$t("language"),dense:"",borderless:"","emit-value":"","map-options":"","options-dense":""},scopedSlots:t._u([{key:"before",fn:function(){return[a("q-icon",{attrs:{name:"language"}})]},proxy:!0}]),model:{value:t.lang,callback:function(e){t.lang=e},expression:"lang"}})],1)},x=[],$={name:"Language",data(){return{lang:this.$i18n.locale,langOptions:[{value:"es-ES",label:"Español"},{value:"en-US",label:"English"}]}},watch:{lang(t){this.$i18n.locale=t}}},y=$,k=(a("7724"),a("ddd8")),Q=a("0016"),w=Object(o["a"])(y,C,x,!1,null,null,null),S=w.exports;q()(w,"components",{QSelect:k["a"],QIcon:Q["a"]});var I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nightmode text-center"},[a("div",{staticClass:"col-3 col-sm-3 text-center"},[a("q-btn",{attrs:{size:"100%",flat:"",round:""}},[a("q-icon",{attrs:{color:t.color,name:"brightness_4"},on:{click:t.changeMode}})],1)],1)])},N=[],E={name:"NightMode",data(){return{color:""}},mounted(){this.checkMode()},watch:{"$q.dark.isActive"(t){this.checkMode()}},methods:{changeMode(){this.$q.dark.toggle(),this.checkMode()},checkMode(){this.$q.dark.isActive?this.color="white":this.color="black"}}},O=E,L=a("9c40"),j=Object(o["a"])(O,I,N,!1,null,null,null),A=j.exports;q()(j,"components",{QBtn:L["a"],QIcon:Q["a"]});var M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"q-pa-md"},[a("q-toolbar",{staticClass:"shadow-2"},[a("q-btn",{attrs:{flat:"",label:"CodeBay"}}),a("q-space"),t.$q.platform.is.desktop?a("div",{staticClass:"standard_nav"},[a("q-tabs",{attrs:{shrink:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("q-route-tab",{attrs:{name:"tab1",label:t.$t("home"),to:"/home"}}),a("q-route-tab",{attrs:{name:"tab2",label:t.$t("event"),to:"/event"}}),a("q-route-tab",{attrs:{name:"tab3",label:t.$t("accesories"),to:"/accesories"}}),a("q-route-tab",{attrs:{name:"tab4",label:t.$t("apparel"),to:"/apparel"}}),a("q-route-tab",{attrs:{name:"tab5",label:t.$t("featured"),to:"/featured"}})],1)],1):t._e(),t.$q.platform.is.mobile?a("div",{staticClass:"mobile_nav"},[a("q-select",{attrs:{options:t.tabs},model:{value:t.model,callback:function(e){t.model=e},expression:"model"}})],1):t._e()],1)],1)},F=[],P=(a("fb6a"),{name:"Navigation",data(){return{tab:"",model:this.$t(this.$route.path.slice(1)),tabs:[this.$t("home"),this.$t("event"),this.$t("accesories"),this.$t("apparel"),this.$t("featured")]}},updated(){this.$q.platform.is.mobile&&this.$router.push(this.transformModel(this.model))},methods:{transformModel(t){switch(t){case this.$t("home"):return"home";case this.$t("event"):return"event";case this.$t("accesories"):return"accesories";case this.$t("apparel"):return"apparel";case this.$t("featured"):return"featured"}}}}),R=P,z=a("65c6"),B=a("2c91"),H=a("429b"),J=a("7867"),T=Object(o["a"])(R,M,F,!1,null,null,null),U=T.exports;q()(T,"components",{QToolbar:z["a"],QBtn:L["a"],QSpace:B["a"],QTabs:H["a"],QRouteTab:J["a"],QSelect:k["a"]});var Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"account text-center"},[a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",to:""}},[a("q-item-section",[a("q-item-label",[t._v(t._s(t.$t("account")))])],1)],1)],1)},G=[],V={name:"Account",data(){return{}}},W=V,D=Object(o["a"])(W,Z,G,!1,null,null,null),K=D.exports;q()(D,"components",{QItem:u["a"],QItemSection:d["a"],QItemLabel:h["a"]}),q()(D,"directives",{Ripple:b["a"]});var X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cart text-center"},[a("div",{staticClass:"col-3 col-sm-3 text-center usuario"},[a("q-btn",{attrs:{size:"100%",flat:"",round:""}},[a("q-item-label",[t._v(t._s(t.cart_items_quantity))]),a("q-icon",{attrs:{name:"shopping_cart"}}),a("q-menu",{attrs:{fit:"",offset:[150,5],persistent:"","transition-show":"jump-down","transition-hide":"jump-up"}},[a("q-card-section",{staticClass:"text-center",attrs:{vertical:""}},[a("div",{staticClass:"text-h6"},[t._v(t._s(t.$t("cart")))])]),a("q-separator"),t._l(t.cart_items,(function(e){return a("CartItem",t._b({key:e.item_name,on:{clicked:t.onClickChild}},"CartItem",e,!1))})),a("q-separator"),a("q-card-section",{staticClass:"text-center",attrs:{vertical:""}},[a("div",{staticClass:"text-h6"},[t._v(t._s(t.$t("units"))+" "+t._s(t.cart_items_quantity)+" ")]),a("div",{staticClass:"text-h6"},[t._v(t._s(t.$t("payment"))+" "+t._s(t.full_payment)+" "+t._s(t.$t("coin"))+" ")]),a("br"),a("q-btn",{staticClass:"pay_button",staticStyle:{width:"100%"},attrs:{label:t.$t("pay"),loading:t.loading,color:"primary"},on:{click:t.simulateLoading},scopedSlots:t._u([{key:"loading",fn:function(){return[a("q-spinner-hourglass",{staticClass:"on-left"}),t._v("\n              "+t._s(t.$t("loading"))+"\n            ")]},proxy:!0}])})],1)],2)],1)],1)])},Y=[],tt=(a("a434"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"items"},[a("q-card",{staticClass:"my-card"},[a("q-card-section",{attrs:{horizontal:""}},[a("q-card-section",{staticClass:"text-center",attrs:{vertical:""}},[a("q-img",{staticClass:"item_cart_image",attrs:{src:t.item_image,"spinner-color":"white",ratio:"4/3"}})],1),a("q-card-section",{staticClass:"item_name text-center",attrs:{vertical:""}},[a("div",{staticClass:"text-h6"},[t._v(t._s(t.item_name))]),a("div",{staticClass:"text-subtitle2"},[t._v(t._s(t.$t(t.item_category)))])]),a("q-card-section",{staticClass:"item_price text-center",attrs:{vertical:""}},[t._v("\n        "+t._s(t.item_price)+" "+t._s(t.$t("coin"))+"\n      ")]),a("q-btn",{staticClass:"item_delete",attrs:{flat:"",color:"primary",icon:"close"},on:{click:t.deleteItem}})],1)],1)],1)}),et=[],at={name:"CartItem",data(){return{}},methods:{deleteItem(){this.$emit("clicked",this.item_name)}},props:{item_image:{type:String,required:!0},item_name:{type:String,required:!0},item_category:{type:String,required:!0},item_price:{type:Number,required:!0}}},st=at,it=(a("e1ab"),a("f09f")),nt=a("a370"),ct=Object(o["a"])(st,tt,et,!1,null,null,null),rt=ct.exports;q()(ct,"components",{QCard:it["a"],QCardSection:nt["a"],QImg:_["a"],QBtn:L["a"]});var lt={name:"Cart",components:{CartItem:rt},data(){return{loading:!1,full_payment:0,cart_items_quantity:2,cart_items:[{item_image:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRFROUOGAt6R58jU0JUVDpN7WfEEClI78b4ZozLHZYbnRnNueVPF2U&usqp=CAc",item_name:"Samsung Note 20",item_category:"mobile",item_price:1200},{item_image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSiaq-L2RIIZmZQJZ1fn6wydkO3W_wElzStKFsX8lAFJfliC59reA8&usqp=CAc",item_name:"Apple Iphone 11",item_category:"mobile",item_price:1300}]}},mounted(){this.calculatePayment()},methods:{deleteItem(t){this.cart_items.splice(t,1),this.cart_items_quantity--,this.calculatePayment()},addItem(t){this.cart_items.push(t),this.calculatePayment()},calculatePayment(){this.full_payment=0;for(let t=0;t<this.cart_items.length;t++)this.full_payment+=this.cart_items[t].item_price},onClickChild(t){let e;for(let a=0;a<this.cart_items.length;a++)if(t===this.cart_items[a].item_name){e=a;break}this.deleteItem(e)},simulateLoading(t){this.loading=!0,setTimeout((()=>{this.loading=!1}),3e3)}}},ot=lt,mt=a("4e73"),ut=a("9149"),dt=Object(o["a"])(ot,X,Y,!1,null,null,null),pt=dt.exports;q()(dt,"components",{QBtn:L["a"],QItemLabel:h["a"],QIcon:Q["a"],QMenu:mt["a"],QCardSection:nt["a"],QSeparator:p["a"],QSpinnerHourglass:ut["a"]});var ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("q-input",{staticClass:"q-ml-md",attrs:{dark:"",dense:"",standout:"",rounded:"","input-class":"text-right"},scopedSlots:t._u([{key:"append",fn:function(){return[""===t.text?a("q-icon",{attrs:{name:"search"}}):a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"clear"},on:{click:function(e){t.text=""}}})]},proxy:!0}]),model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1)},_t=[],bt={name:"Search",data(){return{text:""}}},vt=bt,qt=a("27f9"),ft=Object(o["a"])(vt,ht,_t,!1,null,null,null),gt=ft.exports;q()(ft,"components",{QInput:qt["a"],QIcon:Q["a"]});var Ct={name:"MainLayout",components:{Footer:g,Language:S,Navigation:U,Account:K,Cart:pt,Search:gt,NightMode:A},data(){return{}}},xt=Ct,$t=(a("2da0"),a("4d5a")),yt=a("e359"),kt=a("09e3"),Qt=Object(o["a"])(xt,s,i,!1,null,null,null);e["default"]=Qt.exports;q()(Qt,"components",{QLayout:$t["a"],QHeader:yt["a"],QToolbar:z["a"],QSpace:B["a"],QPageContainer:kt["a"]})},7724:function(t,e,a){"use strict";var s=a("c355"),i=a.n(s);i.a},c355:function(t,e,a){},d302:function(t,e,a){"use strict";var s=a("edfe"),i=a.n(s);i.a},e1ab:function(t,e,a){"use strict";var s=a("e816"),i=a.n(s);i.a},e816:function(t,e,a){},edfe:function(t,e,a){}}]);