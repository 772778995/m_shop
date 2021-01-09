import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import(/* webpackChunkName: "home" */ '@/page/home/Home')
const Category = () => import(/* webpackChunkName: "category" */ '@/page/category/Category')

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/category', component: Category }
]

const router = new VueRouter({
  routes
})

export default router
