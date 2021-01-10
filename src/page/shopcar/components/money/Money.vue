<template>
  <div class="shopcar_money">
    <div class="circular"></div>
    <div class="shopcar_money_all">全选</div>
    <div class="shopcar_money_money">总计<span>￥12000</span></div>
    <div class="shopcar_money_order">提交订单</div>
  </div>
</template>

<script>
</script>

<style lang="less" scoped>
@import '../../css/common.less';
  .shopcar_money{
    position: fixed;
    display: flex;
    bottom: 1.2rem; left: 0;
    height: 1.333333rem;
    width: 10rem;
    left: 50%;
    transform: translate(-50%);
    background: white;
    div{
      color: #333333;
      margin: auto 0;
      font-size: 0.4rem;
    }
    .circular{
      margin: auto 0.453333rem;
    }
    .shopcar_money_all{
      width: 2.426666rem;
    }
    .shopcar_money_money{
      flex: 1;
      white-space: nowrap;
      span{
        color: #FF4A68;
      }
    }
    .shopcar_money_order{
      width: 3.893333rem;
      height: 1.066666rem;
      line-height: 1.066666rem;
      text-align: center;
      background: #f23a3a;
      border-radius: 0.533333rem;
      font-size: 0.4rem;
      color: #FFFFFF;
      margin-right: 0.293333rem;
      margin-left: 0.266666rem;
    }
  }
</style>
