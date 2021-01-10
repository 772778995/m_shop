import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import(/* webpackChunkName: "home" */ '@/page/home/Home')
const Category = () => import(/* webpackChunkName: "category" */ '@/page/category/Category')
const ShopCar = () => import(/* webpackChunkName: "ShopCar" */ '@/page/shopcar/ShopCar')
Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/category', component: Category },
  { path: '/shopcar', component: ShopCar }
]

const router = new VueRouter({
  routes
})

export default router
