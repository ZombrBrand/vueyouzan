let url = {
  hotLists: '/index/hotLists',
  banner: '/index/banner',
  topList: '/category/topList',
  subList: '/category/subList',
  rank: '/category/rank',
  searchList: '/search/list',
  cartAdd: '/cart/add',
  cartLists: '/cart/list',
  cartReduce: '/cart/reduce',
  cartRemove: '/cart/remove',
  cartMremove: '/cart/mrremove',
  details: '/goods/details',
  deal: '/goods/deal',
  addCart: '/cart/add',
  addressLists:'/address/list',
  addressAdd:'/address/add',
  adressRemove:'/address/remove',
  addressUpdate:'/address/update',
  addressSetDefault:'/address/setDefault'
};
//开发环境和真实环境的切换
let host = "http://rap2api.taobao.org/app/mock/22820";

for (let key in url) {
  if (url.hasOwnProperty(key)) {
    url[key] = host + url[key]
  }
}

export default url
