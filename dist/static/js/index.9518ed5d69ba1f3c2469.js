webpackJsonp([4],{"035s":function(t,e){},"A/DB":function(t,e){},TFhR:function(t,e,n){"use strict";var s={hotLists:"/index/hotLists",banner:"/index/banner",topList:"/category/topList",subList:"/category/subList",rank:"/category/rank",searchList:"/search/list",cartAdd:"/cart/add",cartLists:"/cart/list",cartReduce:"/cart/reduce",cartRemove:"/cart/remove",cartMremove:"/cart/mrremove",details:"/goods/details",deal:"/goods/deal",addCart:"/cart/add",addressLists:"/address/list",addressAdd:"/address/add",addressRemove:"/address/remove",addressUpdate:"/address/update",addressSetDefault:"/address/setDefault"};for(var a in s)s.hasOwnProperty(a)&&(s[a]="https://easy-mock.com/mock/5c9ecb7e216d715205f595af/vueyouzan"+s[a]);e.a=s},"U/rD":function(t,e,n){"use strict";var s=n("pFYg"),a=n.n(s),i=n("mw3O"),r=n.n(i).a.parse(location.search.substr(1)).index,o=[{name:"有赞",icon:"icon-home",href:"index.html"},{name:"分类",icon:"icon-category",href:"category.html"},{name:"购物车",icon:"icon-cart",href:"cart.html"},{name:"我",icon:"icon-user",href:"member.html"}],c={data:function(){return{navConfig:o,curIndex:parseInt(r)||0}},methods:{changeNav:function(t,e){location.href=t.href+"?index="+e}}},d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bottom-nav"},[n("ul",t._l(t.navConfig,function(e,s){return n("li",{key:e.icon,class:{active:s===t.curIndex},on:{click:function(n){t.changeNav(e,s)}}},[n("a",[n("i",{class:e.icon}),n("div",[t._v(t._s(e.name))])])])}))])},staticRenderFns:[]};var l=n("VU/8")(c,d,!1,function(t){n("UTo7")},null,null).exports,u=n("DNVT"),f=(n("v2ns"),{props:{lists:{type:Array,required:!0},name:{type:String}},created:function(){},mounted:function(){this.init()},methods:{init:function(){new u.a(".swiper-container",{loop:!0,pagination:{el:".swiper-pagination"}})}}}),h={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"swiper-container"},[e("div",{staticClass:"swiper-wrapper"},this._l(this.lists,function(t){return e("div",{key:t.img,staticClass:"swp-page swiper-slide"},[e("a",{staticClass:"js-no-follow",attrs:{href:t.clickUrl}},[e("img",{staticClass:"goods-main-photo fadeIn",attrs:{src:t.img}})])])})),this._v(" "),this._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"swiper-pagination"},[e("span")])}]};var m={filters:{toFixed2:function(t){return(void 0===t?"undefined":a()(t))===Number?t.toFixed(2):t}},components:{Foot:l,Swipe:n("VU/8")(f,h,!1,function(t){n("A/DB")},null,null).exports}};e.a=m},U67u:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("035s"),a=(n.n(s),n("eChN")),i=(n.n(a),n("7+uW")),r=n("mtWM"),o=n.n(r),c=n("TFhR"),d=n("U/rD"),l=n("Au9i");n.n(l);i.default.use(l.InfiniteScroll),new i.default({el:".vue-el",data:{pageNum:1,pageSize:6,lists:null,loading:!1,allLoaded:!1,bannerLists:null},created:function(){this.getLists(),this.getBanner()},methods:{getLists:function(){var t=this;this.allLoaded||(this.loading=!0,o.a.get(c.a.hotLists,{pageNum:this.pageNum,pageSize:this.pageSize}).then(function(e){var n=e.data.lists;n.length<t.pageSize&&(t.allLoaded=!0),t.lists?(t.lists=t.lists.concat(n),t.pageNum++):t.lists=n,t.loading=!1,t.pageNum++}))},getBanner:function(){var t=this;o.a.get(c.a.banner).then(function(e){t.bannerLists=e.data.lists})}},mixins:[d.a]})},UTo7:function(t,e){},eChN:function(t,e){},v2ns:function(t,e){}},["U67u"]);
//# sourceMappingURL=index.9518ed5d69ba1f3c2469.js.map