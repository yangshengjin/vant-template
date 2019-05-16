<template>
  <div v-show="title">
    <van-nav-bar fixed :title="title" :left-text="isBack ? '返回':''" :left-arrow="isBack" @click-left="onClickBack"/>
  </div>
</template>
<script>
import { NavBar } from 'vant';
export default {
  components: {
    'van-nav-bar': NavBar
  },
  methods: {
    onClickBack () {
      this.$router.go(-1)
    }
  },
  computed: {
    title () {
      return this.$store.state.comm.indexConf.title
    },
    isBack () {
      return this.$store.state.comm.indexConf.isBack
    }
  }
}
</script>
