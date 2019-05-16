<template>
  <van-tabbar v-model="active">
    <van-tabbar-item v-for="item in tabbars" :key="item.path" :url="'#/'+item.path">
      <span>{{item.title}}</span>
      <img slot="icon" slot-scope="props" :src="props.active ? item.iconActive : item.iconNormal">
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant'
export default {
  components: {
    'van-tabbar': Tabbar,
    'van-tabbar-item': TabbarItem
  },
  data () {
    return {
      active: 0,
      tabbars: [
        { title: '首页', path: 'home', iconActive: require('../assets/logo.png'), iconNormal: require('../assets/logo.png') },
        { title: '分类', path: 'sort', iconActive: require('../assets/logo.png'), iconNormal: require('../assets/logo.png') },
        { title: '个人中心', path: 'user', iconActive: require('../assets/logo.png'), iconNormal: require('../assets/logo.png') }
      ],
      currentPath: 'home'
    }
  },
  methods: {
  },
  watch: {
    'currentPath' (tab) {
      switch (tab) {
        case 'home': this.active = 0
          break
        case 'sort': this.active = 1
          break
        case 'user': this.active = 2
          break
        default: this.active = 0
          break
      }
    }
  },
  created () {
    this.currentPath = this.$route.path.replace('/', '')
  }
}
</script>

<style lang="less">
.m-tabs-wrap {
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 999;
}
</style>