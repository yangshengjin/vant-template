<template>
  <div class="page-home">
    <h1>home</h1>
    <ul>
      <li v-for="item in 100" :key="item">{{item}}</li>
    </ul>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
.page-home {
  color: red;
}
</style>
