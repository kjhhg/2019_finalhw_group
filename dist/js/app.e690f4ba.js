(function(t){function e(e){for(var a,r,c=e[0],o=e[1],l=e[2],d=0,m=[];d<c.length;d++)r=c[d],n[r]&&m.push(n[r][0]),n[r]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);u&&u(e);while(m.length)m.shift()();return i.push.apply(i,l||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],a=!0,c=1;c<s.length;c++){var o=s[c];0!==n[o]&&(a=!1)}a&&(i.splice(e--,1),t=r(r.s=s[0]))}return t}var a={},n={app:0},i=[];function r(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=a,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(s,a,function(e){return t[e]}.bind(null,a));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=o;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"01a3":function(t,e,s){t.exports=s.p+"img/Group 66@2x.7844c712.png"},"01b6":function(t,e,s){},"06e5":function(t,e,s){},"0700":function(t,e,s){t.exports=s.p+"img/ted.4f6f1cc0.png"},"0be3":function(t,e,s){"use strict";var a=s("9b4b"),n=s.n(a);n.a},"0da0":function(t,e,s){},"0f6b":function(t,e,s){},"120d":function(t,e,s){},"16bf":function(t,e,s){t.exports=s.p+"img/Group 53@2x.8372d08f.png"},"177f":function(t,e,s){"use strict";var a=s("0da0"),n=s.n(a);n.a},"19c5":function(t,e,s){},"1c85":function(t,e,s){},2164:function(t,e,s){"use strict";var a=s("0f6b"),n=s.n(a);n.a},"21b7":function(t,e,s){"use strict";var a=s("b732"),n=s.n(a);n.a},"23ee":function(t,e,s){},"41f4":function(t,e,s){"use strict";var a=s("06e5"),n=s.n(a);n.a},5550:function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);var a={};s.r(a),s.d(a,"updateCart",function(){return Xe}),s.d(a,"removeItemInCart",function(){return Je}),s.d(a,"registerByEmail",function(){return Ke}),s.d(a,"logout",function(){return Ye}),s.d(a,"loginWithEmail",function(){return Ze}),s.d(a,"listenToProductList",function(){return ts}),s.d(a,"getShoppingCart",function(){return es}),s.d(a,"saveShoppingCart",function(){return ss}),s.d(a,"saveToTransaction",function(){return as});s("cadf"),s("551c"),s("f751"),s("097d"),s("4989"),s("ab8b");var n=s("2b0e"),i=s("8c4f"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("message-component"),s("router-view")],1)},c=[],o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:(t.showMessageBar?"":"d-none")+"  message-bar"},[s("div",{class:t.messageClass},[s("Button",{staticClass:"btn btn-link close-btn",attrs:{bsStyle:"link"},on:{click:t.closeMessageBar}},[s("i",{staticClass:"fa fa-times"})]),s("div",[t._v(t._s(t.currentMessage))])],1)])},l=[],u=s("cebc"),d=s("2f62"),m={computed:Object(u["a"])({},Object(d["c"])(["messages"]),{showMessageBar:function(){return this.messages.message&&this.messages.message.length>0},messageClass:function(){var t=this.messages.messageClass;return"col-12 panel panel-"+t+" "+(this.showMessageBar?"":"hidden")},currentMessage:function(){return this.messages.message}}),methods:Object(u["a"])({},Object(d["b"])(["clearMessage"]),{closeMessageBar:function(){this.clearMessage()}})},p=m,g=(s("7e3c"),s("2877")),f=Object(g["a"])(p,o,l,!1,null,"336fbc24",null),v=f.exports,h={components:{MessageComponent:v},name:"App"},b=h,_=Object(g["a"])(b,r,c,!1,null,null,null),C=_.exports,w=(s("96cf"),s("3b8d")),y=s("75fc"),I=s("bc3a"),L=s.n(I),E="127c5255e73042c29827cffc2091d4bf",O=L.a.create({method:"get",baseURL:"https://newsapi.org/v2/everything",params:{pageSize:4,page:1},headers:{Authorization:E}}),j=L.a.create({method:"get",baseURL:"https://newsapi.org/v2/everything",params:{pageSize:16,page:1},headers:{Authorization:E}}),x={news:{socialNews:[],entertainmentNews:[],sportNews:[],taiwanNews:[]},news16:[],selected:{news:[],id:0},newsTopic:"taiwan"},S={totalNews:function(t){return[].concat(Object(y["a"])(t.news.socialNews),Object(y["a"])(t.news.entertainmentNews),Object(y["a"])(t.news.sportNews),Object(y["a"])(t.news.taiwanNews))},news:function(t){return t.news},news16:function(t){return t.news16},newsTopic:function(t){return t.newsTopic},socialNews:function(t){return t.news.socialNews},entertainmentNews:function(t){return t.news.entertainmentNews},sportNews:function(t){return t.news.sportNews},taiwanNews:function(t){return t.news.taiwanNews},selectedNews:function(t){return t.selected.news}},k={onNewsSelect:function(t,e){var s=t.commit;s("ON_NEWS_SELECT",e)},init:function(){var t=Object(w["a"])(regeneratorRuntime.mark(function t(e){var s,a,n,i,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return s=e.commit,t.next=3,O("/?q=social");case 3:return a=t.sent,t.next=6,O("/?q=entertainment");case 6:return n=t.sent,t.next=9,O("/?q=sport");case 9:return i=t.sent,t.next=12,O("/?q=taiwan");case 12:r=t.sent,s("INIT",{social:a.data.articles,entertainment:n.data.articles,sport:i.data.articles,taiwan:r.data.articles});case 14:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}(),initnews16:function(){var t=Object(w["a"])(regeneratorRuntime.mark(function t(e,s){var a,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return a=e.commit,t.next=3,j("/?q=".concat(s));case 3:n=t.sent,a("INIT_NEWS_16",{news16:n.data.articles,newsTopic:s});case 5:case"end":return t.stop()}},t)}));function e(e,s){return t.apply(this,arguments)}return e}()},N={ON_NEWS_SELECT:function(t,e){t.selected.id=t.selected.id+1,4==t.selected.id&&(t.selected.id=0),t.selected.news=Object(y["a"])(t.selected.news),t.selected.news[t.selected.id]=e},INIT:function(t,e){t.news.socialNews=e.social,t.news.entertainmentNews=e.entertainment,t.news.sportNews=e.sport,t.news.taiwanNews=e.taiwan,t.selected.news.push(t.news.socialNews[0]),t.selected.news.push(t.news.entertainmentNews[0]),t.selected.news.push(t.news.sportNews[0]),t.selected.news.push(t.news.taiwanNews[0])},INIT_NEWS_16:function(t,e){t.newsTopic=e.newsTopic,t.news16=e.news16}},T={state:x,getters:S,actions:k,mutations:N},A=(s("7514"),{cartItemList:[]}),M={UPDATE_CART:function(t,e){var s=e.item,a=e.quantity,n=e.isAdd,i=t.cartItemList.find(function(t){return t.id==s.id});i?n?i.quantity+=a:i.quantity=a:t.cartItemList.push(Object(u["a"])({},s,{quantity:a}))},SET_CART:function(t,e){e&&(t.cartItemList=e)},REMOVE_CART_ITEM:function(t,e){var s=e.item,a=t.cartItemList.find(function(t){return t.id==s.id});t.cartItemList.splice(t.cartItemList.indexOf(a),1)}},P={clearCart:function(t){var e=t.commit;e("SET_CART",[])}},$={cartItemList:function(t){return t.cartItemList},cartValue:function(t){var e=0;return t.cartItemList.map(function(t){e+=t.price*t.quantity}),e}},G={state:A,mutations:M,actions:P,getters:$},U={isLoading:!0,productList:[]},R={UPDATE_PRODUCT_LIST:function(t,e){t.productList=e,t.isLoading=!1}},q={},D={products:function(t){return t.productList},isProductLoading:function(t){return t.isLoading}},z={state:U,mutations:R,actions:q,getters:D},W=s("8aa5"),V=s.n(W),B={apiKey:"AIzaSyDnGy9XtSGsIpXAGdlIdxijnj6Qo1HLu3o",authDomain:"sweettime-2366b.firebaseapp.com",databaseURL:"https://sweettime-2366b.firebaseio.com",projectId:"sweettime-2366b",storageBucket:"sweettime-2366b.appspot.com",messagingSenderId:"495013998711",appId:"1:495013998711:web:d4cbbe39fb162db8"};function F(t){V.a.auth().onAuthStateChanged(function(e){e?t(!0,e):t(!1)})}V.a.initializeApp(B);var H=V.a.database().ref(),Q=V.a.auth,X=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-grid"},[s("Nav"),s("Gallery"),s("Section"),s("Aboutus"),s("Groupmember"),s("Footer")],1)},J=[],K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"nav"},[a("img",{staticClass:"nav__logo",attrs:{src:s("b515"),alt:""}}),a("input",{staticClass:"nav__checkbox",attrs:{type:"checkbox",id:"nav-toggle"},on:{click:t.onCheck}}),a("label",{staticClass:"nav__btn",attrs:{for:"nav-toggle"}},[a("button",{class:""+t.navIconClr})]),a("div",{class:"overlay "+t.myNav,attrs:{id:"myNav"}},[a("div",{staticClass:"overlay-content"},[a("img",{staticClass:"overlay_img",attrs:{src:s("b515")}}),a("router-link",{staticClass:"nav-item",attrs:{to:"/",tag:"li","active-class":"active"}},[a("a",{staticClass:"nav-link"},[t._v("首頁")])]),a("router-link",{staticClass:"nav-item",attrs:{to:"/allproducts",tag:"li","active-class":"active"}},[a("a",{staticClass:"nav-link"},[t._v("商品總覽")])]),a("router-link",{staticClass:"nav-item",attrs:{to:"/notice",tag:"li","active-class":"active"}},[a("a",{staticClass:"nav-link"},[t._v("購買須知")])]),a("router-link",{staticClass:"nav-item",attrs:{to:"/contactus",tag:"li","active-class":"active"}},[a("a",{staticClass:"nav-link"},[t._v("聯絡我們")])]),t.isLoggedIn?t._e():a("router-link",{staticClass:"nav-item",attrs:{to:"/login",tag:"li","active-class":"active"}},[a("a",{staticClass:"nav-link"},[t._v("登入/註冊")])]),t.isLoggedIn?a("li",{staticClass:"li-pointer nav-item"},[a("a",{staticClass:"nav-link",on:{click:t.logout}},[t._v("登出 "+t._s(t.userEmail))])]):t._e()],1)]),a("li",[a("router-link",{staticClass:"btn",attrs:{to:"/cart",tag:"button"}},[t._v("\n          購物車 "),a("span",{staticClass:"badge badge-light"},[t._v(t._s(t.numItems)+" ($ "+t._s(t.cartValue)+")")])])],1)])},Y=[],Z={name:"Nav",data:function(){return{checked:!1,size:"lg",myNav:"hide-sm",navIconClr:"nav__icon"}},computed:Object(u["a"])({},Object(d["c"])(["isLoggedIn","cartValue","currentUser","cartItemList"]),{numItems:function(){return this.cartItemList.reduce(function(t,e){return t+=e.quantity,t},0)},userEmail:function(){return this.isLoggedIn?this.currentUser.email:""}}),methods:Object(u["a"])({},Object(d["b"])(["logout","loginWithGoogle"]),{toggleNavbar:function(){this.isNavOpen=!this.isNavOpen},onResize:function(){window.innerWidth,this.size="sm",this.checked||(this.myNav="notransition hide-sm")},onCheck:function(){this.checked&&"sm"==this.size?(this.myNav="hide-sm",this.navIconClr="nav__icon"):(this.myNav="show",this.navIconClr="nav__icon__white"),this.checked=!this.checked},onRoute:function(){this.checked=!this.checked}}),created:function(){window.addEventListener("resize",this.onResize),this.size="sm",this.myNav="hide-sm"}},tt=Z,et=(s("2164"),Object(g["a"])(tt,K,Y,!1,null,"570b0ba8",null)),st=et.exports,at=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},nt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"gallery"},[a("img",{staticClass:"gallery__img",attrs:{src:s("e204")}})])}],it={name:"Gallery",props:["totalNews"]},rt=it,ct=(s("6a39"),Object(g["a"])(rt,at,nt,!1,null,"d9e45f5a",null)),ot=ct.exports,lt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"section"})},ut=[],dt={name:"Section",components:{},computed:Object(d["c"])(["socialNews","entertainmentNews","sportNews","taiwanNews"])},mt=dt,pt=(s("c8a2"),Object(g["a"])(mt,lt,ut,!1,null,"a5d0988e",null)),gt=pt.exports,ft=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},vt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("div",{staticClass:"aboutus"},[t._v("--------  關於我們  --------")]),a("p",{staticClass:"titleword"},[t._v("\n    一群因為甜點而據再一起的人們，創立了Sweet Time這個品牌"),a("br"),t._v("\n    為了造福更多熱愛甜點的朋友們"),a("br"),t._v("\n    Sweet Time決定踏入網路的世界\n  ")]),a("img",{staticClass:"titleimg",attrs:{src:s("9586"),alt:""}}),a("img",{staticClass:"decrimg1",attrs:{src:s("9266"),alt:""}}),a("p",{staticClass:"decr1"},[t._v("\n    不確定自己該怎麼歸類，也許分類都是多餘的，"),a("br"),t._v("\n    畢竟吃甜點想得到的，都只是舒心與幸福，不是嗎? "),a("br"),a("br"),t._v("\n    所以我們會說，自己是自由式甜點吧!\n\n  ")]),a("img",{staticClass:"decrimg2",attrs:{src:s("01a3"),alt:""}}),a("p",{staticClass:"decr2"},[t._v("\n    一群因為甜點而據再一起的人們，創立了Sweet Time這個品牌"),a("br"),t._v("\n    為了造福更多熱愛甜點的朋友們"),a("br"),t._v("\n    Sweet Time決定踏入網路的世界\n  ")]),a("img",{staticClass:"decrimg3",attrs:{src:s("16bf"),alt:""}}),a("p",{staticClass:"decr3"},[t._v("\n    一群因為甜點而據再一起的人們，創立了Sweet Time這個品牌"),a("br"),t._v("\n    為了造福更多熱愛甜點的朋友們"),a("br"),t._v("\n    Sweet Time決定踏入網路的世界\n  ")])])}],ht={name:"Aboutus"},bt=ht,_t=(s("41f4"),Object(g["a"])(bt,ft,vt,!1,null,"9e880efe",null)),Ct=_t.exports,wt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},yt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("div",{staticClass:"groupmember"},[t._v("------團隊成員------")]),a("img",{staticClass:"groupmember--picture1",attrs:{src:s("f517"),alt:""}}),a("p",{staticClass:"groupmember--decr1"},[t._v("\n    Project Planning "),a("br"),t._v("\n    UI Design "),a("br"),t._v("\n    Coding "),a("br")]),a("img",{staticClass:"groupmember--picture2",attrs:{src:s("d609"),alt:""}}),a("p",{staticClass:"groupmember--decr2"},[t._v("\n    Project Planning "),a("br"),t._v("\n    UI/UX Design "),a("br"),t._v("\n    Coding "),a("br")]),a("img",{staticClass:"groupmember--picture3",attrs:{src:s("0700"),alt:""}}),a("p",{staticClass:"groupmember--decr3"},[t._v("\n    Project Planning "),a("br"),t._v("\n    Coding "),a("br")])])}],It={name:"Groupmember"},Lt=It,Et=(s("932f"),Object(g["a"])(Lt,wt,yt,!1,null,"15ab2b43",null)),Ot=Et.exports,jt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},xt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",{staticClass:"footer"},[s("h5",{staticClass:"footer__description"},[t._v("\n      臺北市和平東路二段134號，國立臺北教育大學 數位科技設計學系\n   ")]),s("h6",{staticClass:"footer__description"},[t._v("\n      © Copyright All rights reserved.\n   ")])])}],St={name:"Footer"},kt=St,Nt=(s("c3a6"),Object(g["a"])(kt,jt,xt,!1,null,"0570c78a",null)),Tt=Nt.exports,At={name:"Main",components:{Nav:st,Gallery:ot,Section:gt,Aboutus:Ct,Groupmember:Ot,Footer:Tt},methods:Object(d["b"])(["init"]),created:function(){this.init()}},Mt=At,Pt=(s("21b7"),Object(g["a"])(Mt,X,J,!1,null,null,null)),$t=Pt.exports,Gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),a("div",{staticClass:"col-md-6 offset-md-3"},[a("h2",{staticClass:"login-header text-center mb-5 display-4"},[t._v("\n      登入/註冊\n    ")]),a("form",[a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",name:"email",id:"email",placeholder:"Email Address"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",name:"password",id:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})])]),a("div",{staticClass:"text-center mt-4"},[a("button",{staticClass:"btn btn-bg btn-lg btn-block",attrs:{disabled:t.isLoading},on:{click:function(e){return e.preventDefault(),t.loginWithEmailLocal(e)}}},[t.isLoading?a("i",{staticClass:"fa fa-spinner fa-spin"}):t._e(),t._v("\n        登入\n      ")]),a("button",{staticClass:"btn btn-bg btn-lg btn-block",attrs:{disabled:t.isLoading},on:{click:function(e){return e.preventDefault(),t.registerByEmailLocal(e)}}},[t.isLoading?a("i",{staticClass:"fa fa-spinner fa-spin"}):t._e(),t._v("\n        註冊\n      ")]),a("button",{staticClass:"btn btn-bg-g btn-lg btn-block",on:{click:t.loginWithGoogle}},[a("img",{attrs:{src:s("57cd"),alt:""}}),t._v("\n        Google帳號登入\n      ")])])])])},Ut=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"jumbotron jumbotron-bg text-white text-center"},[a("h2",{staticClass:"display-3"},[a("img",{attrs:{src:s("b515"),alt:""}})])])}],Rt={data:function(){return{email:"",password:"",isLoading:!1}},methods:Object(u["a"])({},Object(d["b"])(["addMessage","clearMessage","loginWithEmail","registerByEmail","loginWithGoogle"]),{loginWithEmailLocal:function(){var t=this;this.isLoading=!0;var e={email:this.email,password:this.password};this.loginWithEmail(e).then(function(){t.clearMessage(),t.$router.push({name:"mainpage"})}).catch(function(e){var s={message:e.message,messageClass:"danger",autoClose:!0};t.addMessage(s)}).then(function(){t.isLoading=!1})},registerByEmailLocal:function(){var t=this;this.isLoading=!0;var e={email:this.email,password:this.password};this.registerByEmail(e).then(function(){t.clearMessage(),t.$router.push({name:"mainpage"})}).catch(function(e){var s={message:e.message,messageClass:"danger",autoClose:!0};t.addMessage(s)}).then(function(){t.isLoading=!1})}})},qt=Rt,Dt=(s("eab9"),Object(g["a"])(qt,Gt,Ut,!1,null,"1bd049d7",null)),zt=Dt.exports,Wt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container table-responsive"},[s("app-header"),s("table",{staticClass:"table table-hover table-sm",attrs:{id:"cart"}},[t._m(0),s("transition-group",{attrs:{name:"list-shopping-cart",tag:"tbody"}},t._l(t.cartItemList,function(t){return s("app-cart-item",{key:t.id,attrs:{cartItem:t}})}),1),s("tfoot",[s("tr",{staticClass:"d-table-row d-sm-none"},[s("td",{staticClass:"text-center"},[s("strong",[t._v("總金額 $"+t._s(t.cartValue))])])]),s("tr",[s("td",[s("button",{staticClass:"btn btn-warning",on:{click:t.saveShoppingCartLocal}},[s("i",{staticClass:"fa fa-angle-left"}),t._v(" 儲存並繼續購買\r\n\t\t\t\t\t\t")])]),s("td",{staticClass:"d-none d-sm-table-cell",attrs:{colspan:"2"}}),s("td",{staticClass:"d-none d-sm-table-cell text-center"},[s("strong",[t._v("總金額 $"+t._s(t.cartValue))])]),s("td",{staticClass:"px-0"},[s("button",{staticClass:"btn btn-success",on:{click:t.checkout}},[t._m(1)])])])])],1)],1)},Vt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",{staticStyle:{width:"50%"}},[t._v("產品")]),s("th",{staticStyle:{width:"10%"}},[t._v("價格")]),s("th",{staticStyle:{width:"8%"}},[t._v("剩餘數量")]),s("th",{staticClass:"text-center",staticStyle:{width:"22%"}},[t._v("小計")]),s("th",{staticStyle:{width:"10%"}})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"text-nowrap"},[t._v("前往結帳 "),s("i",{staticClass:"fa fa-angle-right d-inline"})])}],Bt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("tr",[s("td",{attrs:{"data-th":"Product"}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-2 d-none d-sm-block"},[s("img",{staticClass:"img-fluid",attrs:{src:t.cartItem.thumbnail_url,alt:"..."}})]),s("div",{staticClass:"col-sm-10"},[s("h4",{staticClass:"nomargin"},[t._v(t._s(t.cartItem.title))]),s("p",[t._v(t._s(t.cartItem.description))])])])]),s("td",{attrs:{"data-th":"Price"}},[t._v(t._s(t.cartItem.price))]),s("td",{attrs:{"data-th":"Quantity"}},[s("input",{staticClass:"form-control text-center",attrs:{type:"number",min:"0"},domProps:{value:t.cartItem.quantity},on:{input:t.updateQuantity}})]),s("td",{staticClass:"text-center",attrs:{"data-th":"Subtotal"}},[t._v("$"+t._s(t.subtotal))]),s("td",{staticClass:"actions",attrs:{"data-th":""}},[s("button",{staticClass:"btn btn-danger btn-sm",on:{click:t.removeItem}},[s("i",{staticClass:"fa fa-trash-o"})])])])},Ft=[],Ht={props:["cartItem"],computed:{subtotal:function(){return this.cartItem.quantity*this.cartItem.price}},methods:Object(u["a"])({},Object(d["b"])(["updateCart","removeItemInCart"]),{removeItem:function(){var t=this;this.removeItemInCart({item:t.cartItem})},updateQuantity:function(t){var e=this;this.updateCart({item:e.cartItem,quantity:parseInt(t.target.value),isAdd:!1})}})},Qt=Ht,Xt=Object(g["a"])(Qt,Bt,Ft,!1,null,null,null),Jt=Xt.exports,Kt={computed:Object(u["a"])({},Object(d["c"])(["cartItemList","isLoggedIn","products","currentUser","cartValue"])),components:{appCartItem:Jt,appHeader:st},methods:Object(u["a"])({},Object(d["b"])(["saveShoppingCart","addMessage","saveToTransaction","clearCart"]),{checkValidCart:function(t,e){var s=!0,a="";return t.map(function(t){for(var n=0;n<e.length;n++)if(e[n].id==t.id){if(e[n].quantity<t.quantity)return a="Only ".concat(e[n].quantity," ").concat(t.title," available in stock"),void(s=!1);break}}),{isValid:s,message:a}},saveShoppingCartLocal:function(){var t=this;if(this.isLoggedIn){var e=this.checkValidCart(this.cartItemList,this.products),s=e.isValid,a=e.message;s?this.saveShoppingCart({cartItemList:this.cartItemList,uid:this.currentUser.uid}).then(function(){t.addMessage({messageClass:"success",message:"已成功儲存您的購物車"}),t.$router.push("/")}):this.addMessage({messageClass:"danger",message:a})}else this.addMessage({messageClass:"warning",message:"請登入儲存您的購物車"})},checkout:function(){var t=this;if(this.isLoggedIn){if(!this.cartItemList||0==this.cartItemList.length)return void this.addMessage({messageClass:"warning",message:"您的購物車已經清空!"});var e=this.checkValidCart(this.cartItemList,this.products),s=e.isValid,a=e.message;s?this.saveToTransaction({cartItemList:this.cartItemList,uid:this.currentUser.uid}).then(function(){t.addMessage({messageClass:"success",message:"購買成功"}),t.saveShoppingCart({cartItemList:[],uid:t.currentUser.uid}),t.clearCart(),t.$router.push("/")}):this.addMessage({messageClass:"danger",message:a})}else this.addMessage({messageClass:"warning",message:"請先登入"})}})},Yt=Kt,Zt=(s("0be3"),Object(g["a"])(Yt,Wt,Vt,!1,null,"39f6e71e",null)),te=Zt.exports,ee=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"col-md-12"},[t.isProductLoading?s("div",{staticClass:"text-center"},[s("grid-loader",{staticClass:"d-inline-block",attrs:{loading:t.isProductLoading,color:t.loaderColor,size:t.loaderSize}})],1):s("div",{staticClass:"card"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-md-4 offset-md-4"},[s("div",{staticClass:"intrinsic"},[s("img",{staticClass:"img-fluid intrinsic-item",attrs:{src:t.item.thumbnail_url,alt:""}})])])]),s("div",{staticClass:"caption-full"},[s("h4",{staticClass:"pull-right"},[t._v("$ "+t._s(t.item.price))]),s("h4",[t._v(" "+t._s(t.item.title))]),s("p",[t._v(" "+t._s(t.item.description)+" ")])]),s("div",{staticClass:"ratings"},[s("span",[t._v(t._s(t.item.quantity)+" left in stock")]),s("p",{staticClass:"pull-right"},[s("button",{staticClass:"btn btn-success",attrs:{disabled:0===t.item.quantity},on:{click:t.addItem}},[t._v("\r\n                            Add to cart\r\n                        ")])]),s("div",{staticClass:"clearfix"})])])])])},se=[],ae=s("0d9b"),ne={components:{GridLoader:ae["a"]},data:function(){return{loaderColor:"#5cb85c",loaderSize:"50px"}},computed:Object(u["a"])({},Object(d["c"])(["isProductLoading","products"]),{item:function(){var t=this.$route.params.id;if(this.products.length>=t){var e=this.products.filter(function(e){return e.id==t});if(e.length>0)return e[0]}return{}}}),methods:Object(u["a"])({},Object(d["b"])(["updateCart"]),{addItem:function(){var t={item:Object.assign({},this.item),quantity:1,isAdd:!0};this.updateCart(t)}})},ie=ne,re=(s("acfe"),Object(g["a"])(ie,ee,se,!1,null,"3e29da24",null)),ce=re.exports,oe=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-grid"},[s("Nav"),t._m(0),s("Footer")],1)},le=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"section"},[s("div",{staticClass:"notice"},[t._v("購買須知")]),s("div",{staticClass:"main"},[t._v("\n      蛋糕宅配服務"),s("br"),t._v("\n      \n      目前我們配合黑貓宅急便做蛋糕宅配運送，為了確保商品的新鮮及配送安全，全程都會使用低溫冷凍配送，因此如果蛋糕內容含有新鮮水果及無法冷凍的食材就不能選擇宅配喲！\n      "),s("br"),s("p"),s("p"),t._v("\n      訂購須知："),s("br"),s("p"),s("p"),t._v("\n      ✱ 可指定到貨日：指定時間為週二至週六，為因應黑貓宅急便週日公休政策，所以週日及週一無法指定到貨"),s("br"),s("p"),t._v("\n      ✱ 訂單送出後，請在3日內完成付款，付款完成才開始安排訂單製作"),s("br"),s("p"),t._v("\n      ✱ 所有商品皆為新鮮製作，所以我們最快出貨日為下單後3個工作天，如有急單需求請務必來電確認，夥伴們會跟您確認更改收貨日期的事宜"),s("br"),s("p"),t._v("\n      ✱ 如訂單送出後有需要修改到貨日期，請電洽店面或私訊粉絲團做修改"),s("br"),s("p"),t._v("\n      ✱ 宅配商品我們皆進行了多次的配送實驗，也有最完全保護的包裝，但是配送過程還是有一定的風險，下單前請三思，可能會因配送而有碰撞的狀態，風險須自行承擔，除非為嚴重變形及耗損，黑貓宅配才會視狀況做賠償，可以接受者再下單喲"),s("br")]),s("div",{staticClass:"pay pay-title1"},[t._v("\n      蛋糕宅配可以選擇時段嗎？\n    ")]),s("div",{staticClass:"ans ans1"},[t._v("\n      \n      配合黑貓宅配的到貨方案，宅配時段可選13:00前及13:00-18:00兩個時段，無法指定確切的時間到貨，如有需要指定時段，請直接在訂單備註欄做備註，如沒有特殊需求，建議指定「13點前」收件，避免延誤您的等候時間，也會減短商品在物流運送的時間、大幅降低商品受損的風險。另外請注意周日及週一無法指定到貨，請留意選擇到貨時間\n      "),s("br"),s("p"),t._v("\n      如有特殊到貨需求，可至粉絲專頁私訊或是電話告知，我們會做即時的資訊回覆。\n\n    ")]),s("div",{staticClass:"pay pay-title2"},[t._v("\n      母親節蛋糕什麼時候開放宅配預約？\n    ")]),s("div",{staticClass:"ans ans2"},[t._v("\n      2019母親節蛋糕開放訂購時間為4/?~5/?，蛋糕宅配可到貨時間為5/?~5/?，請直接到以下連結線上訂購\n    ")]),s("div",{staticClass:"pay pay-title3"},[t._v("\n      如果宅配過程中蛋糕撞傷了，怎麼辦？能補一個新的嗎？\n    ")]),s("div",{staticClass:"ans ans3"},[t._v("\n      1. 蛋糕宅配有一定風險，車體運送途中可能造成蛋糕左右位移3~5cm。蛋糕位移、側邊損傷或裝飾掉落、微損，均不在毀壞補償範圍內，風險須自行承擔。"),s("br"),t._v("\n      2. 本商品為食品，收件後請立即打開檢視蛋糕狀態。"),s("br"),t._v("\n      3. 蛋糕如嚴重受損 ( 蛋糕糊爛、不成型、難以辨別蛋糕原本的樣子)，請在第一時間內拍照存證 ( 需拍攝蛋糕在蛋糕盒內的樣子)，並請於「當天」電話 02-29602487或私訊粉絲專頁聯絡我們喔！"),s("br"),t._v("\n      4. 如很明顯是運送的人為疏失，我們會在第一時間與配送公司聯繫處理，在還未處理完成前，請不要丟掉或吃掉蛋糕，請保留收件時的狀態，避免與黑貓造成糾紛。"),s("br"),t._v("\n      5.我們會盡最大的心力去包裝並防止碰撞，但宅配一定有風險，下單前請務必閱讀以上注意事項。\n\n\n    ")])])}],ue={name:"Notice",components:{Nav:st,Footer:Tt}},de=ue,me=(s("177f"),Object(g["a"])(de,oe,le,!1,null,null,null)),pe=me.exports,ge=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-grid"},[s("Nav"),s("Gallery",{attrs:{totalNews:t.totalNews}}),s("Footer")],1)},fe=[],ve={name:"Main",components:{Nav:st,Gallery:ot,Footer:Tt},computed:Object(d["c"])(["totalNews","selectedNews"]),methods:Object(d["b"])(["init"]),created:function(){this.init()}},he=ve,be=(s("8298"),Object(g["a"])(he,ge,fe,!1,null,null,null)),_e=be.exports,Ce=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"d-flex flex-column sticky-footer-wrapper"},[s("main",{staticClass:"flex-fill"},[s("app-header"),s("div",{staticClass:"container mt-3"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("Store")],1)])])],1),s("Footer")],1)},we=[],ye=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container",class:{loadingItem:t.isProductLoading}},[t.isProductLoading?s("div",{staticClass:"row text-center"},[s("grid-loader",{attrs:{loading:t.isProductLoading,color:t.loaderColor,size:t.loaderSize}})],1):s("div",{staticClass:"row action-panel"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"btn-group btn-group-sm pull-right"},[s("button",{staticClass:"btn btn-outline-dark",attrs:{id:"list"},on:{click:function(e){return e.preventDefault(),t.changeDisplay(!0)}}},[s("i",{staticClass:"fa fa-list",attrs:{"aria-hidden":"true"}}),t._v(" List\r\n\t\t\t\t")]),s("button",{staticClass:"btn btn-outline-dark",attrs:{id:"grid"},on:{click:function(e){return e.preventDefault(),t.changeDisplay(!1)}}},[s("i",{staticClass:"fa fa-th",attrs:{"aria-hidden":"true"}}),t._v(" Grid\r\n\t\t\t\t")])])])]),t.isProductLoading?t._e():s("div",{staticClass:"row"},t._l(t.products,function(e){return s("app-product-item",{key:e.id,attrs:{item:e,displayList:t.displayList}})}),1)])},Ie=[],Le=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mb-3 col-sm-6 col-md-4 item",class:{"list-group-item":t.displayList}},[s("div",{staticClass:"thumbnail card"},[s("div",{staticClass:"img-event intrinsic"},[s("img",{staticClass:"grow thumbnail-image card-img-top intrinsic-item p-3",attrs:{src:t.item.thumbnail_url,alt:""}})]),s("div",{staticClass:"card-body"},[s("router-link",{staticClass:"card-title",attrs:{to:"/product/"+t.item.id,tag:"h5"}},[s("a",[t._v(t._s(t.item.title))])]),s("h6",{staticClass:"card-subtitle mb-2 remain"},[t._v(t._s(t.item.quantity)+" left in stock")]),s("p",{staticClass:"card-text truncate"},[t._v(t._s(t._f("shortDescription")(t.item.description)))]),s("div",{staticClass:"row"},[s("p",{staticClass:"col-6 lead"},[t._v("$"+t._s(t.item.price))]),s("p",{staticClass:"col-6"},[s("button",{staticClass:"btn btn-success pull-right",attrs:{disabled:0===t.item.quantity},on:{click:t.addItem}},[t._v("\r\n            加入購物車\r\n          ")])])])],1)])])},Ee=[],Oe={props:["item","displayList"],methods:Object(u["a"])({},Object(d["b"])(["updateCart"]),{addItem:function(){var t={item:Object.assign({},this.item),quantity:1,isAdd:!0};this.updateCart(t)}}),filters:{shortDescription:function(t){return t&&t.length>100?t.substring(0,100)+"...":t}}},je=Oe,xe=(s("9a2e"),Object(g["a"])(je,Le,Ee,!1,null,"982452c4",null)),Se=xe.exports,ke={data:function(){return{loaderColor:"#5cb85c",loaderSize:"50px",displayList:!1}},computed:Object(u["a"])({},Object(d["c"])(["products","isProductLoading"])),components:{appProductItem:Se,GridLoader:ae["a"]},methods:{changeDisplay:function(t){this.displayList=t}}},Ne=ke,Te=(s("b00a"),Object(g["a"])(Ne,ye,Ie,!1,null,null,null)),Ae=Te.exports,Me={components:{appHeader:st,Store:Ae,Footer:Tt},methods:Object(u["a"])({},Object(d["b"])(["getShoppingCart","listenToProductList"])),created:function(){var t=this.$store.getters.currentUser.uid;this.listenToProductList(),this.getShoppingCart({uid:t,currentCart:this.$store.getters.cartItemList})}},Pe=Me,$e=(s("ecdf"),Object(g["a"])(Pe,Ce,we,!1,null,null,null)),Ge=$e.exports;n["a"].use(i["a"]);var Ue=new i["a"]({mode:"history",routes:[{path:"*",redirect:"/"},{path:"/",component:$t,name:"mainpage"},{path:"/product/:id",component:ce,name:"product"},{path:"/cart",component:te,name:"shoppingcart"},{path:"/login",component:zt,name:"login",onlyGuest:!0},{path:"/notice",component:pe,name:"notice"},{path:"/contactus",component:_e,name:"contactus"},{path:"/allproducts",component:Ge,name:"allproduct"}]}),Re={isLoggedIn:null!=Q().currentUser,user:Q().currentUser,errors:[],loading:!1},qe={AUTH_STATUS_CHANGE:function(t){t.isLoggedIn=null!=Q().currentUser,t.user=Q().currentUser}},De={loginWithGoogle:function(){var t=Object(w["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return Re.loading=!0,Re.errors=[],t.prev=2,t.next=5,V.a.auth().signInWithPopup(new V.a.auth.GoogleAuthProvider);case 5:e=t.sent,Re.user=e.user,Ue.push("/"),t.next=14;break;case 10:t.prev=10,t.t0=t["catch"](2),Re.errors.push(t.t0.message),Re.loading=!1;case 14:case"end":return t.stop()}},t,null,[[2,10]])}));function e(){return t.apply(this,arguments)}return e}()},ze={isLoggedIn:function(t){return t.isLoggedIn},currentUser:function(t){return t&&t.user?{email:t.user.email,emailVerified:t.user.emailVerified,uid:t.user.uid}:{}}},We={state:Re,mutations:qe,actions:De,getters:ze},Ve={messageGroup:{messageClass:"",message:"",timeoutEvent:null}},Be={ADD_MESSAGE:function(t,e){var s=e.message,a=e.messageClass;t.messageGroup={messageClass:a,message:s},t.timeoutEvent&&clearTimeout(t.timeoutEvent),t.timeoutEvent=setTimeout(function(){t.messageGroup={messageClass:"",message:""}},5e3)},CLEAR_MESSAGE:function(t){t.messageGroup={messageClass:"",message:""}}},Fe={addMessage:function(t,e){var s=t.commit;s("ADD_MESSAGE",e)},clearMessage:function(t){var e=t.commit;e("CLEAR_MESSAGE")}},He={messages:function(t){return t.messageGroup}},Qe={state:Ve,mutations:Be,actions:Fe,getters:He},Xe=function(t,e){var s=t.commit,a=e.item,n=e.quantity,i=e.isAdd;if(s("UPDATE_CART",{item:a,quantity:n,isAdd:i}),i){var r={message:"成功將 ".concat(a.title," 加入購物車"),messageClass:"success",autoClose:!0};s("ADD_MESSAGE",r)}},Je=function(t,e){var s=t.commit,a=e.item;s("REMOVE_CART_ITEM",{item:a})},Ke=function(t,e){var s=e.email,a=e.password;return Q().createUserWithEmailAndPassword(s,a)},Ye=function(t){var e=t.commit;return e("SET_CART",[]),Q().signOut()};function Ze(t,e){var s=e.email,a=e.password;return Q().signInWithEmailAndPassword(s,a)}function ts(t){var e=t.commit;return H.child("productList").on("value",function(t){e("UPDATE_PRODUCT_LIST",t.val())})}function es(t,e){var s=t.commit,a=e.uid,n=e.currentCart;if(a)return H.child("cart/"+a).once("value").then(function(t){!t.val()||n&&0!=n.length||s("SET_CART",t.val())})}function ss(t,e){var s=e.uid,a=e.cartItemList;return H.child("cart/"+s).set(a)}function as(t,e){var s=e.uid,a=e.cartItemList,n=H.child("transactions").push().key,i={};return i["/transactions/"+s+"/"+n]=a,H.update(i)}n["a"].use(d["a"]);var ns=new d["a"].Store({actions:a,modules:{googleNews:T,auth:We,cart:G,products:z,messages:Qe}});function is(t,e){ns&&(ns.commit("AUTH_STATUS_CHANGE"),e&&ns.dispatch("getShoppingCart",{uid:e.uid,currentCart:ns.getters.cartItemList}))}n["a"].use(i["a"]),F(is),new n["a"]({router:Ue,store:ns,render:function(t){return t(C)}}).$mount("#app")},"57cd":function(t,e,s){t.exports=s.p+"img/1024px-Google__G__Logo.svg.572fe388.png"},"6a39":function(t,e,s){"use strict";var a=s("01b6"),n=s.n(a);n.a},"73d9":function(t,e,s){},"7e3c":function(t,e,s){"use strict";var a=s("b113"),n=s.n(a);n.a},8298:function(t,e,s){"use strict";var a=s("73d9"),n=s.n(a);n.a},9266:function(t,e,s){t.exports=s.p+"img/Group 67@2x.38c92ccb.png"},"932f":function(t,e,s){"use strict";var a=s("1c85"),n=s.n(a);n.a},9586:function(t,e,s){t.exports=s.p+"img/Group 73@2x.4c19a075.png"},9655:function(t,e,s){},"9a2e":function(t,e,s){"use strict";var a=s("9655"),n=s.n(a);n.a},"9b4b":function(t,e,s){},acfe:function(t,e,s){"use strict";var a=s("f705"),n=s.n(a);n.a},b00a:function(t,e,s){"use strict";var a=s("19c5"),n=s.n(a);n.a},b113:function(t,e,s){},b515:function(t,e,s){t.exports=s.p+"img/sweet_time.076289e3.png"},b732:function(t,e,s){},c3a6:function(t,e,s){"use strict";var a=s("23ee"),n=s.n(a);n.a},c8a2:function(t,e,s){"use strict";var a=s("120d"),n=s.n(a);n.a},d609:function(t,e,s){t.exports=s.p+"img/alan.4bb27d0a.jpg"},e204:function(t,e,s){t.exports=s.p+"img/baked-goods-cake-close-up-998237.7851b8ef.jpg"},eab9:function(t,e,s){"use strict";var a=s("5550"),n=s.n(a);n.a},ecdf:function(t,e,s){"use strict";var a=s("f54e"),n=s.n(a);n.a},f517:function(t,e,s){t.exports=s.p+"img/hsuan.dff47b6a.jpg"},f54e:function(t,e,s){},f705:function(t,e,s){}});
//# sourceMappingURL=app.e690f4ba.js.map