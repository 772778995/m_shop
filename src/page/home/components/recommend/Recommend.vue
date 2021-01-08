<template>
  <div class="wrapper">
    <div class="recommend">推荐：</div>
    <ul class="recommend-ul">
      <li
        v-for="(item, index) in recommendList"
        :key="index"
        class="recommend-li">
          {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Recommend',
  data () {
    return {
      recommendList: [
        '春装', '女装', '男装', '母婴', '美食', '包包', '美容'
      ]
    }
  }
}
</script>

<style lang="less" scoped>
  .wrapper {
    height: 0.4rem;
    .recommend {
      font-size: 0.32rem;
      margin: 0 0.293333rem 0 0.4rem;
      font-family: Adobe Heiti Std R, Adobe Heiti Std R-R;
      color: #ffffff;
      float: left;
    }
    .recommend-ul {
      width: 200%;
      .recommend-li {
        width: 1.12rem; height: 0.4rem;
        margin-right: 0.16rem;
        background: #fa5c5c;
        border-radius: 0.213333rem;
        font-size: 0.32rem;
        font-family: Adobe Heiti Std R, Adobe Heiti Std R-R;
        color: #ffffff;
        text-align: center;
        float: left;
      }
    }
  }
</style>
