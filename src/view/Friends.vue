<template >
  <div class="friends" >
    <van-nav-bar
        title="个人中心"
    />
    <!--      个人信息-->
    <div class="my-center" >
      <van-skeleton title avatar :row="3" />
    </div >

    <!--    选项-->
    <van-cell-group inset >
      <van-cell title="个人资料" clickable @click="hint" />
      <van-cell title="账号安全" label="账号还未设置密码" clickable @click="hint" >
        <van-badge :content="5" />
      </van-cell >
      <van-cell title="人工客服" clickable @click="hint" />
      <van-cell title="退出登录" clickable @click="exit" >
      </van-cell >
    </van-cell-group >
    <van-action-sheet
        v-model="show"
        :actions="actions"
        cancel-text="取消"
        description="是否确认退出"
        close-on-click-action
    />
  </div >
</template >

<script >


import { Dialog } from 'vant';

export default {
  name: "Friends",
  data() {
    return {
      show: false,
      actions: [
        { name: '确认退出' },
      ],
    }
  },
  methods: {
    exit() {
      this.show = true;
    },
    hint() {
      Dialog.alert({
        title: '温馨提示',
        message: '开发人员比较懒，你所需要的内容正在开发中。敬请期待！',
      }).then(() => {
        // on close
      });
    }
  }
}
</script >

<style scoped lang="scss" >
.friends {
  height: 100vh;
  background-color: #e1e1e1;

  .my-center {
    padding: 10px 0 30px;
  }
}

.van-action-sheet__description {
  font-size: 20px;

}
</style >