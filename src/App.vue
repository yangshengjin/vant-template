<template>
  <div id="app">
    <app-header/>
    <div :style="{'padding-top':$route.meta.title ? '46px' : 0,'padding-bottom':$route.meta.isTab?'50px': 0}">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AppHeader from './layout/AppHeader'

export default {
  name: 'app',
  components: {
    AppHeader
  },
  methods: {
  },
  computed: {
  },
  created () {
  }
}
</script>

<style lang="less">
@import "./styles/base.less";
body {
  font-size: 16px;
  background-color: #f8f8f8;
  -webkit-font-smoothing: antialiased;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
