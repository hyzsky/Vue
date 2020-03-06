<template>
  <div>
    <!-- <h3>当前最新的count值为：{{$store.state.count}}</h3> -->
    <h3>{{$store.getters.showNum}}</h3>
    <button @click="btnhandle">+1</button>
    <button @click="btnhandle2">+N</button>
    <button @click="btnhandle3">+1 asycn</button>
    <button @click="btnhandle4">+N asycn</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
    // key: value
    }
  },
  methods: {
    btnhandle () {
      this.$store.commit('add')
      // this.$store.commit('addN',3)
    },
    btnhandle2 () {
      this.$store.commit('addN', 3)
    },
    btnhandle3 () {
      // 异步新增
      this.$store.dispatch('addAsync')
    },
    btnhandle4 () {
      this.$store.dispatch('addNAsync', 10)
    }
  }
}
</script>

<style>
</style>
