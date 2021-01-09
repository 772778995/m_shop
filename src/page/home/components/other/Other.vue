<template>
  <div>
    <div class="top">大家都在抢</div>
    <ul>
      <li v-for="(item, index) in txtData" :key="index">
        <b class="gradual">{{item.p1}}</b>
        <span>{{item.p2}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Other',
  data () {
    return {
      txtData: [
        { p1: '新人专享', p2: '领券更优惠' },
        { p1: '新品首发', p2: '大牌云集' },
        { p1: '清仓甩卖', p2: '品类多价格低' },
        { p1: '0元适用', p2: '全场特价' }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
  .top {
    margin:0 0.266666rem;
    padding-left: 0.293333rem;
    height: 0.746666rem;
    line-height: 0.746666rem;
    font-size: 0.346666rem;
    color: #333333;
    background-color: #fff;
    border-bottom: 0.026666rem solid #eee;
    border-top: 0.026666rem solid #eee;
  }
  ul {
    display: flex;
    background-color: #fff;
    margin:0 0.266666rem;
    li {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 25%;
      .gradual {
        background: linear-gradient(to left,#fd9a4b 30%, #f34f4f 100%);
        -webkit-background-clip: text;
        color: transparent;
        font-size: 0.346666rem;
        width: 1.386666rem; height: 0.4rem;
        margin: 0.266666rem auto 0.106666rem;
      }
      span {
        height: 0.293333rem;
        margin: 0 auto 8px auto;
        font-size: 0.293333rem;
        color: #808080;
      }
    }
    li:nth-child(even) {
      .gradual {
        background: linear-gradient(to left,#fd9a4b 30%, #f34fa8 100%);
        -webkit-background-clip: text;
      }
    }
  }
</style>
