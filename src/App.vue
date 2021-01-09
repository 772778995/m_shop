<template>
  <div id="app">
    <router-view></router-view>
    <app-tabbar></app-tabbar>
  </div>
</template>

<script>
import TabBar from './globalComponents/tabBar/TabBar'
export default {
  name: 'App',
  components: {
    'app-tabbar': TabBar
  }
}
</script>

<style lang="less" scoped>
  #app {
    // 给底部栏占位
    margin-bottom: 1.2rem;
  }
</style>
