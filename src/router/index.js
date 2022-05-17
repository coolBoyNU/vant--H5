import Vue from 'vue'
import VueRouter from "vue-router";

//导入组件
import Home from '../view/Home.vue'
import Cart from "../view/Cart.vue";
import Friends from '../view/Friends.vue'

//商品详细
import GoodsLnt from '../components/Introduce/goodslnt.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/cart', component: Cart },
    { path: '/friends', component: Friends },
    { path: '/goodslnt', component: GoodsLnt },
  ]
})

export default router
