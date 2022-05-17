import Vue from 'vue'
import App from './App.vue'
// 导入Vant
import './as-vant/index.js'
// 路由
import router from './router/index.js'
//scss
import './assets/scss/home-search.scss'
//vuex
import store from './vuex/index.js'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')