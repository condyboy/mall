import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

Vue.use(VueRouter)
//使用懒加载模式
const cart=()=>import ("views/cart/cart")
const category=()=>import ("views/category/category")
const home=()=>import ("views/home/home")
const profile=()=>import ("views/profile/profile")
const detail=()=>import("views/detail/detail")
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: home
  },
  {
    path: '/category',
    component: category
  },
  {
    path: '/cart',
    component: cart
  },
  {
    path: '/profile',
    component: profile
  },{
    path:"/detail/:iid",
    component:detail
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.afterEach((to,from)=>{
  if(to.path.indexOf("detail") !=-1){
    store.commit("changeTabbar",false)
  }
  if(from.path.indexOf("detail") !=-1){
    store.commit("changeTabbar",true)
  }
})

export default router
