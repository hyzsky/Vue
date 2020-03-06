<template>
  <div>
    <!-- <h3>当前最新的count值为：{{count}}</h3> -->
    <h3>{{showNum}}</h3>
    <button @click="btnhandle1">-1</button>
    <button @click="btnhandle2">-N</button>
    <button @click="btnhandle3">-1 async</button>
    <button @click="subNAsync(10)">-N async</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {
      // key: value
    }
  },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['showNum'])
  },
  methods: {
    ...mapMutations(['sub', 'subN']),
    ...mapActions(['subAsync', 'subNAsync']),
    btnhandle1 () {
      this.sub()
    },
    btnhandle2 () {
      this.subN(3)
    },
    btnhandle3 () {
      this.subAsync()
    }
    // btnhandle4 () {
    //   this.subNAsync(10)
    // }
  }

}
</script>

<style>
</style>
