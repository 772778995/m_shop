<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <app-tabbar></app-tabbar>
  </div>
</template>

<script>
import TabBar from './globalComponents/tabBar/TabBar'
export default {
  name: 'App',
  // 注册组件
  components: {
    'app-tabbar': TabBar,
  }
}
</script>

<style lang="less" scoped>
  #app {
    // 给底部栏占位
    margin-bottom: 1.2rem;
  }
</style>
