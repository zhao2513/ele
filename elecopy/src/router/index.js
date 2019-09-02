import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home/Home'
import search from '@/page/search/Search'
import shop from '@/page/shop/shop'
import shopList from '@/page/shop/components/shopList'
import shopComment from '@/page/shop/components/shopComment'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/search',
      name: 'search',
      component: search
    },{
      path: '/shop/:id',
      name: 'shop',
      component: shop,
      children:[
      {
        path:'/menu',
        component:shopList
      },{
        path:'/comment',
        component:shopComment
      },{
        path:'/resturant',
        component:shopList
      }]
    }
  ]
})
