<template >
  <div class="search" >
    <slot name="search" >
      <van-search
          v-model="value"
          shape="round"
          background="#4fc08d"
          placeholder="请输入搜索关键词"
      />
    </slot >
  </div >
</template >

<script >
export default {
  name: "Search-header",
  data() {
    return {
      value: '',
    }
  }
}
</script >

<style scoped >

</style >