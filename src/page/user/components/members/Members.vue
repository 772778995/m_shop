<template>
  <!-- 会员 -->
  <div class="user_members">
    <div class="more">
      <span>会员福利</span>
      <span>查看更多</span>
    </div>
    <ul>
      <li v-for="(item, index) in imgList" :key="index">
        <img :src="item.picture">
      </li>
    </ul>
  </div>
</template>

<script>
import imgList from './js/img.js'
export default {
  data () {
    return {
      imgList
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../css/common.less';
  .user_members{
    height: 1.066666rem;
    width: 9.2rem;
    height: 2.9rem;
    margin: 0 auto;
    margin-top: 0.24rem;
    ul{
      margin-top: 0.24rem;
      display: flex;
      justify-content: space-between;
      li{
        img{
          width: 2.906666rem;
          height: 1.866666rem
        }
      }
    }
  }
</style>
