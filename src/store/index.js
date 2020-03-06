import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    add (state) {
      state.count++
      // 不要在mutation中 执行异步操作
      // setTimeout(() => {
      //   state.count++
      // }, 1000)
    },
    addN (state, step) {
      state.count += step
    },
    sub (state) {
      state.count--
    },
    subN (state, step) {
      state.count -= step
    }
  },
  actions: {
    addAsync (context) {
      setTimeout(() => {
        // 在Action中不能直接修改state中的数据 必须通过
        context.commit('add')
      }, 1000)
    },
    addNAsync (context, step) {
      setTimeout(() => {
        // 在Action中不能直接修改state中的数据 必须通过
        context.commit('addN', step)
      }, 1000)
    },
    subAsync (context) {
      setTimeout(() => {
        // 在Action中不能直接修改state中的数据 必须通过
        context.commit('sub')
      }, 1000)
    },
    subNAsync (context, step) {
      setTimeout(() => {
        // 在Action中不能直接修改state中的数据 必须通过
        context.commit('subN', step)
      }, 1000)
    }

  },

  getters: {
    showNum (state) {
      return '当前最新的数量是【' + state.count + '】'
    }
  },
  modules: {
  }
})
