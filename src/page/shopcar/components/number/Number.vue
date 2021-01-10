<template>
  <div class="shopcar_number">
    <div>&lt;</div>
    <div>购物车</div>
    <div>共108件宝贝</div>
    <div></div>
    <div>···</div>
  </div>
</template>

<script>
</script>

<style lang="less" scoped>
  .shopcar_number{
    height: 1.066666rem;
    line-height: 1.066666rem;
    background: #F23A3A;
    display: flex;
    div{
      font-size: 0.4rem;
      color: white;
    }
    div:nth-child(1){
      width: 1.093333rem;
      text-align: right;
      font-size: 0.453333rem;
    }
    div:nth-child(2){
      font-size: 0.453333rem;
      width: 1.813333rem;
      text-align: center;
    }
    div:nth-child(3){
      width: 5.053333rem;
    }
    div:nth-child(4){
      width: 0.906666rem;
      background: url(../../../../assets/img/shopcar/fenxiang.png) 50%/50% no-repeat;
    }
    div:nth-child(5){
      width: 0.8rem;
      font-weight: bolder;
      text-align: left;
    }
  }
</style>
