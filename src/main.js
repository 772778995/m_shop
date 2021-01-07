import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入适配方案
import 'amfe-flexible'
// 全局样式
import '@assets/css/global.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
