webpackJsonp([4],{"035s":function(t,e){},"A/DB":function(t,e){},TFhR:function(t,e,n){"use strict";var i={hotLists:"/index/hotLists",banner:"/index/banner",topList:"/category/topList",subList:"/category/subList",rank:"/category/rank",searchList:"/search/list",cartAdd:"/cart/add",cartLists:"/cart/list",cartReduce:"/cart/reduce",cartRemove:"/cart/remove",cartMremove:"/cart/mrremove",details:"/goods/details",deal:"/goods/deal",addCart:"/cart/add"};for(var a in i)i.hasOwnProperty(a)&&(i[a]="http://rap2api.taobao.org/app/mock/22820"+i[a]);e.a=i},"U/rD":function(t,e,n){"use strict";var i=n("pFYg"),a=n.n(i),s=n("mw3O"),r=n.n(s).a.parse(location.search.substr(1)).index,o=[{name:"有赞",icon:"icon-home",href:"index.html"},{name:"分类",icon:"icon-category",href:"category.html"},{name:"购物车",icon:"icon-cart",href:"cart.html"},{name:"我",icon:"icon-user",href:"member.html"}],c={data:function(){return{navConfig:o,curIndex:parseInt(r)||0}},methods:{changeNav:function(t,e){location.href=t.href+"?index="+e}}},l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bottom-nav"},[n("ul",t._l(t.navConfig,function(e,i){return n("li",{key:e.icon,class:{active:i===t.curIndex},on:{click:function(n){t.changeNav(e,i)}}},[n("a",[n("i",{class:e.icon}),n("div",[t._v(t._s(e.name))])])])}))])},staticRenderFns:[]};var u=n("VU/8")(c,l,!1,function(t){n("UTo7")},null,null).exports,d=n("DNVT"),h=(n("v2ns"),{props:{lists:{type:Array,required:!0},name:{type:String}},created:function(){},mounted:function(){this.init()},methods:{init:function(){new d.a(".swiper-container",{loop:!0,pagination:{el:".swiper-pagination"}})}}}),f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"swiper-container"},[e("div",{staticClass:"swiper-wrapper"},this._l(this.lists,function(t){return e("div",{key:t.img,staticClass:"swp-page swiper-slide"},[e("a",{staticClass:"js-no-follow",attrs:{href:t.clickUrl}},[e("img",{staticClass:"goods-main-photo fadeIn",attrs:{src:t.img}})])])})),this._v(" "),this._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"swiper-pagination"},[e("span")])}]};var p={filters:{toFixed2:function(t){return(void 0===t?"undefined":a()(t))===Number?t.toFixed(2):t}},components:{Foot:u,Swipe:n("VU/8")(h,f,!1,function(t){n("A/DB")},null,null).exports}};e.a=p},U67u:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("035s"),a=(n.n(i),n("eChN")),s=(n.n(a),n("7+uW")),r=n("mtWM"),o=n.n(r),c=n("TFhR"),l=n("U/rD"),u=n("Au9i");n.n(u);s.default.use(u.InfiniteScroll),new s.default({el:".vue-el",data:{pageNum:1,pageSize:6,lists:null,loading:!1,allLoaded:!1,bannerLists:null},created:function(){this.getLists(),this.getBanner()},methods:{getLists:function(){var t=this;this.allLoaded||(this.loading=!0,o.a.get(c.a.hotLists,{pageNum:this.pageNum,pageSize:this.pageSize}).then(function(e){var n=e.data.lists;n.length<t.pageSize&&(t.allLoaded=!0),t.lists?(t.lists=t.lists.concat(n),t.pageNum++):t.lists=n,t.loading=!1,t.pageNum++}))},getBanner:function(){var t=this;o.a.get(c.a.banner).then(function(e){t.bannerLists=e.data.lists})}},mixins:[l.a]})},UTo7:function(t,e){},eChN:function(t,e){},v2ns:function(t,e){}},["U67u"]);
//# sourceMappingURL=index.85cfd9131f89597872c3.js.map