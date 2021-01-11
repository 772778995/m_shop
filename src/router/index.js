import Vue from 'vue'
import VueRouter from 'vue-router'
// 路由懒加载
const Home = () => import(/* webpackChunkName: "home" */ '@/page/home/Home')
const Category = () => import(/* webpackChunkName: "category" */ '@/page/category/Category')
const ShopCar = () => import(/* webpackChunkName: "ShopCar" */ '@/page/shopcar/ShopCar')
const User = () => import(/* webpackChunkName: "User" */ '@/page/user/User')
Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/category', component: Category },
  { path: '/shopcar', component: ShopCar },
  { path: '/user', component: User }
]

const router = new VueRouter({
  routes
})

export default router
