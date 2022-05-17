<template >
  <div class="cart" >
    <van-nav-bar
        fixed
        @click-right="goodsManage"
        @click-left="J_del"
    >
      <template #left >
        <span v-if="d_status" >我的商品</span >
        <van-button v-else type="danger" size="mini" >删除</van-button >
      </template >
      <template #right >
        <van-button type="default" size="mini" >管理</van-button >
      </template >
    </van-nav-bar >

    <!--    内容-->
    <van-empty
        v-if="Solid"
        class="custom-image"
        image="https://img01.yzcdn.cn/vant/custom-empty-image.png"
        description="空空如也"
    />
    <van-swipe-cell :disabled="manageState" v-for="item in goods" :key="item.id" >
      <template #left >
        <van-checkbox v-model="$store.getters.get_states[item.id]" class="Box-button"
                      @click="z_states($store.getters.get_states[item.id],item.id)" />
      </template >
      <van-card
          :price="item.price"
          :desc="item.desc"
          :title="item.name"
          class="goods-card"
          :thumb="item.image"

      >
        <template #num >
          <van-stepper :value="item.num" @change="getNewState($event,item.id)" min="1" max="8" integer
                       disable-input />
        </template >
      </van-card >
    </van-swipe-cell >

    <!--  底部订单提交-->
    <van-submit-bar :price="rate" safe-area-inset-bottom button-text="提交订单" @submit="onSubmit" >
      <van-checkbox v-show="AllBtn" :value="checked" @click="Select" >全选</van-checkbox >
    </van-submit-bar >
  </div >
</template >

<script >
export default {
  name: "Cart",
  data() {
    return {
      checked: false, //全选按钮初始化状态
      AllBtn: false, //全选按钮
      manageState: true, //商品是否可以左右滑动 true 是禁止 false 是开启
      goods: [], //数据
      d_status: true, //删除按钮状态
      Solid: true, //购物车背景占位
    }
  },
  created() {
    this.goodsData()
  },
  methods: {
    goodsData() {
      //获取 vuex 商品数据
      this.$store.state.allGoods.forEach(item => {
        if (item !== '') {
          this.Solid = false;
        }
        this.goods.push(item)
      })
    },
    J_del() {
      //删除数据 数据不为假就返回
      let del = this.goods.filter(item => !item.states)
      this.$store.commit('setDel')
      // 重新渲染数据
      if (del.length === 0) {
        this.Solid = true;
        this.checked = false;
      }
      this.goods = del
    },
    goodsManage(e) {
      //管理
      if (e.path[0].innerText === '管理') {
        e.path[0].innerText = '取消';
        this.d_status = false;
        document.querySelectorAll('.van-swipe-cell__wrapper').forEach((item) => {
          item.style.transform = 'translate3d(40px,0,0)';
        })
        this.manageState = false;
        this.AllBtn = true;
      } else {
        e.path[0].innerText = '管理';
        this.d_status = true;
        document.querySelectorAll('.van-swipe-cell__wrapper').forEach((item) => {
          item.style.transform = 'translate3d(0,0,0)';
        })
        this.manageState = true;
        this.AllBtn = false;
      }

    },
    onSubmit() {
      //提交订单
      // console.log(this.$store)
    },
    Select() {
      //商品全选 全不选
      this.$store.commit('newSelect');
      let z_sel = this.goods.every((item) => item.states);
      this.checked = !!z_sel;

    },
    z_states(e, id) {
      this.$store.commit('new_zStates', { e, id })
      // 商品全部勾选的话就把全选按钮勾上
      let z_sel = this.goods.every((item) => item.states);
      this.checked = !!z_sel;
    },
    //加减运算 传递参数
    getNewState(e, id) {
      this.$store.commit('getState', { e, id })
    }
  },
  //挂在后 可以做一些 DOM 操作
  mounted() {
    // $nextTick仅在整个视图都被渲染之后才会运行的代码
    this.$nextTick(function () {
      //空购物车样式
      // let _emptyImg = document.querySelector('.custom-image .van-empty__image')
      // _emptyImg.style.width = '90px'
      // _emptyImg.style.height = '90px'
    })
  },
  computed: {
    //总价
    rate() {
      // 把所有价格加起来
      let stevt = this.goods.reduce((amt, item) => amt += Number(item.price) * item.num, 0);
      //乘100 配和插件小数点
      return stevt * 100
    }
  }
}
</script >

<style lang="scss" scoped >

.cart {
  margin-top: 50px;
  min-height: 80vh;
  background-color: #f5f5f5;

  .van-swipe-cell {
    margin-top: 5px;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
  }

  .van-submit-bar {
    bottom: 50px;
  }

  .goods-card {
    margin: 0;
    background-color: white;
  }

  .Box-button {
    width: 100%;
    height: 100%;
    padding: 0 10px;
    background-color: white;
  }

  //购物车
  .van-empty {
    height: 80vh;
  }
}

.van-nav-bar {
  background-color: #0aa770;
}


</style >