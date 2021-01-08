<template>
  <div class="periphery">
    <div class="top">
      <div class="top_find">发现周边</div>
      <div class="top_count">
        <span class="h">1</span>:
        <span class="m">34</span>:
        <span class="s">20</span>
      </div>
      <div class="top_nextTime">下场等待开启 | 12:00</div>
      <div class="top_more">更多优惠</div>
    </div>
    <div class="cont">
      <ul class="cont_left">
        <li></li>
        <li></li>
      </ul>
      <ul class="cont_right">
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Periphery'
}
</script>

<style lang="less" scoped>
  .periphery {
    margin: 0.266666rem auto 0 auto;
    width: 9.466666rem; height: 0.746666rem;
    line-height: 0.746666rem;
    background: #ffffff;
    white-space: nowrap;
    .top {
      display: flex;
      .top_find {
        font-size: 0.4rem;
        width: 1.573333rem;
        height: 0.373333rem;
        color: #333333;
        margin: 0 0.373333rem 0 0.213333rem;
      }
      .top_count {
        font-size: 0.293333rem;
        width: 1.146666rem;
        color: #333333;
        margin-right: 0.106666rem;
        span {
          display: inline-block;
          text-align: center;
          line-height: 0.373333rem;
          margin-top: 0.213333rem;
          font-size: 0.266666rem;
          width: 0.373333rem; height: 0.373333rem;
          color: #fffefe;
          background: #333333;
        }
      }
      .top_nextTime {
        width: 2.666666rem; height: 0.346666rem;
        margin-left: 0.266666rem;
        font-size: 0.293333rem;
        color: #7e7e7e;
      }
      .top_more {
        width: 1.253333rem;
        height: 0.32rem;
        font-size: 0.32rem;
        color: #7e7e7e;
        margin-left: 1.333333rem;
      }
    }
    .cont {
      height: 3.466666rem;
      background-color: #fff;
      display: flex;
      ul li {
        flex: 1;
        border: 0.026666rem solid #eee;

      }
      .cont_left {
        width: 5.333333rem; height: 3.466666rem;
        display: flex;
      }
      .cont_right {
        flex: 1;
        display: flex;
        flex-direction: column;
      }
    }
  }
</style>
