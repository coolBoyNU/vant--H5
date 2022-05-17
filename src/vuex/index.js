import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  state: {
    allGoods: [],
    active: 0,
  },
  mutations: {
    // 接收传递过来的数据进行保存
    setPrint(state, allGoods) {
      state.allGoods.push(allGoods)
    },
    // 删除选中的数据据
    setDel(state) {
      let del = state.allGoods.filter(item => !item.states)
      state.allGoods = del
    },
    _allPcs(state) {
      console.log(state)
    },
    // 加减运算
    getState(state, num) {
      let { e, id } = num;
      state.allGoods.filter((item) => {
        // 传递过来的 id 和数据的id 相同就进行赋值
        if (item.id === id) {
          return item.num = e;
        }
      });
    },
    //商品全选 全不选
    newSelect(state) {
      let sel = state.allGoods.every(item => item.states)
      if (!sel) {
        for (let key of state.allGoods) {
          key.states = true
        }
      } else {
        for (let key of state.allGoods) {
          key.states = false
        }
      }
    },
    //商品全部勾选的话就把全选按钮勾上
    new_zStates(state, newValue) {
      const { e, id } = newValue;
      let statesResult = state.allGoods.findIndex((item) => item.id === id);
      state.allGoods[statesResult].states = e;
    }
  },
  getters: {
    // 选中状态
    get_states(state) {
      let objMap = {}
      state.allGoods.forEach(item => objMap[item.id] = item.states);
      return objMap;
    }
  },
  // 进行本地存储
  plugins: [ createPersistedState() ]
})

export default store