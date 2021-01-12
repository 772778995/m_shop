<template>
  <!-- 服务 -->
  <div class="user_service">
    <div class="more">
      <span>我的服务</span>
      <span>查看更多</span>
    </div>
    <ul>
      <li v-for="(item, index) in iconList" :key="index">
        <img :src="item.icon">
        <p>{{item.txt}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import iconList from './js/data.js'
export default {
  data () {
    return {
      iconList
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../css/common.less';
  .user_service{
    // height: 3.48rem;
    background: white;
    border-radius: 0.266666rem 0.266666rem 0 0;
    width: 9.2rem;
    margin: 0 auto;
    padding-top: 0.346666rem;
    ul{
      display: flex;
      flex-direction: wrap;
      flex-wrap: wrap;
      justify-content: flex-start;
      li{
        font-size: 0.32rem;
        width: 25%;
        text-align: center;
        img{
          margin: 0 0.386666rem;
          margin-top: 0.4rem;
          width: 0.506666rem;
          height: 0.506666rem;
        }
      }
    }
  }
</style>
