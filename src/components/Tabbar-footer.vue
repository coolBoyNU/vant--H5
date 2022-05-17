<template >
  <div class="tabbar" >
    <div class="footer-tabbar" >
      <van-tabbar v-model="active" router :placeholder="true" >
        <van-tabbar-item to="/home" icon="home-o" >首页</van-tabbar-item >
        <van-tabbar-item to="/Cart" icon="cart-o" >购物车</van-tabbar-item >
        <van-tabbar-item to="/friends" icon="friends-o" badge="5" >我的</van-tabbar-item >
      </van-tabbar >
    </div >
  </div >
</template >

<script >


export default {
  name: "Tabbar-footer",
  data() {
    return {
      active: 0,
    }
  },
}
</script >

<style scoped >

</style >