<template>
  <!-- 物流 -->
  <div class="user_logistics">
    <div class="user_logistics_top">
      <span>物流信息</span>
      <span>4-13 18:00</span>
    </div>
    <div class="user_logistics_bottom">
      <img src="@assets/img/user/wuliu.png">
      <div>
        <span>已发出</span>
        <p>包裹由上海千库网络公司发出</p>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style lang="less" scoped>
  .user_logistics{
    background: white;
    width: 9.2rem;
    height: 1.92rem;
    margin: 0 auto;
    margin-top: 0.08rem;
    padding-left: 0.533333rem;
    padding-right: 0.346666rem;
    border-radius: 0 0 0.266666rem 0.266666rem;
    .user_logistics_top{
      line-height: 0.4rem;
      height: 0.4rem;
      display: flex;
      justify-content: space-between;
      color: #333333;
      font-size: 0.293333rem;
    }
    .user_logistics_bottom{
      font-weight: 400;
      height: 1.253333rem;
      display: flex;
      img{
        width: 1.253333rem;
        height: 1.253333rem;
        margin-right: 0.56rem;
      }
      span{
        font-size: 0.373333rem;
        display: block;
        padding-left: 0.64rem;
        background: url(../../../../assets/img/user/blackcar.png) no-repeat 0/0.453333rem 0.346666rem;
      }
      p{
        font-size: 0.32rem;
      }
    }
  }
</style>
