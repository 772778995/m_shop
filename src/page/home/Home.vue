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
  </div>
</template>

<script>
import Header from './components/header/Header'
import Recommend from './components/recommend/Recommend'
import Carousel from './components/carousel/Carousel'
import Category from './components/category/Category'
import Headlines from './components/headlines/Headlines'
import Periphery from './components/periphery/Periphery.vue'
export default {
  name: 'Home',
  components: {
    'home-header': Header,
    'home-recommend': Recommend,
    'home-carousel': Carousel,
    'home-category': Category,
    'home-headlines': Headlines,
    'home-periphery': Periphery
  }
}
</script>

<style lang="less" scoped>
  .home {
    position: relative;
    &.home::after {
      content: '';
      display: block;
      width: 10rem; height: 4.693333rem;
      background: linear-gradient(0deg,#f23a3a 0%, #f75f30 100%);
      border-radius: 10% 10% 23% 23% / 0% 0% 9% 9%;
      position: absolute;
      top: 0; left: 0;
      z-index: -1;
    }
  }
</style>
