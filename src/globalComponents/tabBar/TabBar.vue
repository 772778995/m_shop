<template>
  <!-- 底部栏 -->
  <ul class="tab_bar">
    <router-link
      v-for="(item, index) in tabBarList"
      :key="index"
      class="tab_bar_list"
      :to="item.path">
        <div class="txt">{{item.txt}}</div>
        <div class="icon" :style="item.path !== path ? item.iconStyle: item.iconStyle2"></div>
    </router-link>
  </ul>
</template>

<script>
import { tabBarList } from './getTabBarList.js'
export default {
  name: 'TabBar',
  data () {
    return {
      tabBarList,
      path: this.$route.path
    }
  },
  watch: {
    $route: {
      handler (val) {
        this.path = val.path
      },
      deep: true
    }
  }
}
</script>

<style lang="less" scoped>
  .tab_bar {
    display: flex;
    justify-content: space-between;
    padding: 0 0.8rem;
    height: 1.2rem;
    background-color: #fff;
    border-top: 0.026666rem solid #eee;
    width: 10rem;
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translate(-50%);
    .tab_bar_list {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
      .txt {
        width: 100%; height: 0.266666rem;
        font-size: 0.266666rem; line-height: 0.266666rem;
        color: #333333;
        text-align: center;
        margin: 0.106666rem 0 0.16rem 0;
      }
      .icon {
        width: 0.64rem; height: 0.48rem;
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
      }
    }
  }
</style>
