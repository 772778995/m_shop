<template>
  <div class="home">
    <!-- 头部 -->
    <home-header/>
    <!-- 推荐 -->
    <home-recommend/>
    <!-- 轮播图 -->
    <home-carousel/>
    <!-- 分类 -->
    <home-category/>
    <!-- 头条 -->
    <home-headlines/>
    <!-- 周边 -->
    <home-periphery/>
    <!-- 大家都在抢 -->
    <home-other/>
  </div>
</template>

<script>
import Header from './components/header/Header'
import Recommend from './components/recommend/Recommend'
import Carousel from './components/carousel/Carousel'
import Category from './components/category/Category'
import Headlines from './components/headlines/Headlines'
import Periphery from './components/periphery/Periphery'
import Other from './components/other/Other'
export default {
  name: 'Home',
  components: {
    'home-header': Header,
    'home-recommend': Recommend,
    'home-carousel': Carousel,
    'home-category': Category,
    'home-headlines': Headlines,
    'home-periphery': Periphery,
    'home-other': Other
  }
}
</script>

<style lang="less" scoped>
  .home {
    position: relative;
  }
</style>
