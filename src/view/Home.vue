<template >
  <div >
    <serch >
      <template v-slot:search >
        <!--        动态显示隐藏-->
        <van-search class="line-search-fix " v-if="show" v-model="value" placeholder="请输入搜索关键词" />
      </template >
    </serch >

    <div class="banner" >
      <van-notice-bar
          left-icon="volume-o"
          text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"
      />
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" >
        <van-swipe-item >1</van-swipe-item >
        <van-swipe-item >2</van-swipe-item >
        <van-swipe-item >3</van-swipe-item >
        <van-swipe-item >4</van-swipe-item >
      </van-swipe >
    </div >
    <div class="content" >
      <!--      宫格-->
      <van-grid :gutter="10" clickable >
        <van-grid-item v-for="value in 8" :key="value" icon="photo-o" text="商品" />
      </van-grid >
      <!--      卡片-->
      <div v-for="item in goodsData" :key="item.id" >
        <van-card
            :price="item.price"
            :desc="item.desc"
            :title="item.name"
            :thumb="item.image"
        >
          <template #footer >
            <van-button type="warning" @click="Goods_buy(item.id)" size="mini" >购买</van-button >
          </template >
        </van-card >
      </div >
      <van-button @click="is_image" type="info" block >查看商品所有图片</van-button >
    </div >


  </div >
</template >

<script >
import serch from '../components/Search-header.vue'

export default {
  name: "Home",
  data() {
    return {
      show: false,
      value: '',
      goodsData: [
        {
          id: 1,
          name: '4代真无线蓝牙耳机',
          price: '29.90',
          desc: '就是好用(太拉跨了)',
          image: 'https://img.alicdn.com/bao/uploaded/i3/1778109376/O1CN01mynue92J8GG5OIZc0_!!0-item_pic.jpg_200x200q90.jpg_.webp',
          states: false,
          num: 1
        },
        {
          id: 2,
          name: '一只猫',
          price: '200.00',
          desc: '东北加菲猫',
          image: 'https://img01.yzcdn.cn/vant/cat.jpeg',
          states: false,
          num: 1
        },
        {
          id: 3,
          name: '夏季短袖男t恤',
          price: '76.90',
          desc: '潮牌美式大码体恤潮流百搭宽松2022新款纯棉半袖',
          image: 'https://img.alicdn.com/bao/uploaded/i3/2215958484/O1CN01GdDJYA2CXixTsySHB_!!0-item_pic.jpg_200x200q90.jpg_.webp',
          states: false,
          num: 1
        },
        {
          id: 4,
          name: '一叶子',
          price: '269.00',
          desc: '清爽水乳鸢尾护肤套装洗面奶化妆品学生秋冬女\n',
          image: 'https://img.alicdn.com/bao/uploaded///asearch.alicdn.com/bao/uploaded/O1CN01bwVlLf1raNKhzr7mx_!!1050505647.jpg_200x200q90.jpg_.webp',
          states: false,
          num: 1
        },
        {
          id: 5,
          name: '使徒机械键盘',
          price: '569.99',
          desc: '鼠标垫超大号锁边简约桌搭美学桌',
          image: 'https://img.alicdn.com/bao/uploaded/i2/106594754/O1CN01r0kp4T1kzNciC1mLO_!!106594754.jpg_200x200q90.jpg_.webp',
          states: false,
          num: 1
        },
      ]
    }
  },
  components: {
    serch
  },
  methods: {
    //查看所有图片
    is_image() {
      let imageData = this.goodsData.map((item) => item.image);
      this.$ImagePreview(imageData);
    },
    //购买按钮
    Goods_buy(num) {
      // 检查数组中是否存在相同 id
      let rut = this.$store.state.allGoods.every((item) => item.id !== num)
      if (!rut) {
        this.$Toast({
          message: '该商品您购物车已经存在',
          position: 'top',
        });
        return false
      } else {
        let Gs_select = this.goodsData.filter((item) => item.id === num);
        // 将数据储存到 vuex
        this.$store.commit('setPrint', Gs_select[0])
      }
    },
    //监听页面滚动
    Scrollbottom() {
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      let clientHeight = document.documentElement.clientHeight;
      let scrollHeight = document.documentElement.scrollHeight;
      if (scrollTop + clientHeight >= scrollHeight) {
        this.$Toast({
          message: '已经没有内容了！',
          position: 'top',
        });
      }
      //到达指定高度显示固定搜索框 - 简写
      this.show = scrollTop >= 260;
    },
  },
  created() {
    window.addEventListener('scroll', this.Scrollbottom);
  },
  destroyed() {
    //页面离开后销毁
    window.removeEventListener('scroll', this.Scrollbottom);
  }
}
</script >

<style scoped lang="scss" >
// 轮播图
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}

.content {
  margin: 10px 0 0 0;
}

// 内容部分
.van-card {
  margin: 10px 0;
  border-top: 1px solid #e1e0e0;
  border-bottom: 1px solid #e1e0e0;
  background-color: white;
}

.delete-button {
  height: 100%;
}
</style >