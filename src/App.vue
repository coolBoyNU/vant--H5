<template >
  <div id="app" >
    <!--    首页-->
    <router-view ></router-view >

    <!--    尾部标签栏-->
    <tabbar />

  </div >
</template >

<script >
import tabbar from './components/Tabbar-footer.vue'

export default {
  name: "App",
  components: {
    tabbar
  }
}
</script >

<style scoped lang="scss" >

</style >