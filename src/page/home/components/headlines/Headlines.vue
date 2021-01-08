<template>
  <div class="headlines">
    <i>头条</i>
    <i class="red">快讯</i>
    <div class="redblock">精选</div>
    <span class="txt">全新一代千库V3.0智能手环正式发售监测...</span>
    <span class="more">更多</span>
  </div>
</template>

<script>
export default {
  name: 'Headlines'
}
</script>

<style lang="less" scoped>
  .headlines {
    width: 9.466666rem; height: 0.746666rem;
    margin: 0 auto;
    border-top: 0.026666rem solid #eee;
    background: #fff;
    display: flex;
    align-items: center;
    padding-right: 0.186666rem;
    padding-left: 0.266666rem;
    white-space: nowrap;
    i {
      font-weight: bolder;
      transform: translateY(-0.04rem);
      font-size: 0.426666rem;
    }
    .red {
      color: orangered;
      margin-right: 0.053333rem;
    }
    .redblock {
      background: #fa5c5c;
      border-radius: 0.16rem;
      font-size: 0.266666rem;
      font-family: Adobe Heiti Std R, Adobe Heiti Std R-R;
      color: #ffffff;
      padding: 0.026666rem 0.16rem 0.053333rem 0.133333rem;
      margin-right: 0.24rem;
    }
    .txt {
      font-size: 0.293333rem;
      width: 5.333333rem;
      font-family: Adobe Heiti Std R, Adobe Heiti Std R-R;
      color: #7e7e7e;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .more {
      font-size: 0.293333rem;
      font-family: Adobe Heiti Std R, Adobe Heiti Std R-R;
      color: #333333;
      &.more::before {
        content: '|';
        display: inline-block;
        font-size: 0.24rem;
        width: 0.026666rem;
        margin: 0 0.106666rem 0 0.293333rem;
      }
    }
  }
</style>
