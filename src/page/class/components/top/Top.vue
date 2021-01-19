<template>
  <div class="class_top">
    <div class="class_top_icon">
      <img src="@/assets/img/class/sao.png">
      <span>扫一扫</span>
    </div>
    <input type="text" placeholder="搜索宝贝名称">
    <div class="class_top_font">···</div>
  </div>
</template>

<script>
</script>

<style lang="less" scoped>
  .class_top{
    position: fixed;
    background: white;
    height: 1.3rem;
    display: flex;
    padding-top: 0.24rem;
    margin-bottom: 0.026666rem;
    .class_top_icon{
      width: 1.52rem;
      height: 0.88rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 0.13rem;
      img{
        width: 0.48rem;
        height: 0.48rem;
      }
      span{
        font-size: 0.24rem;
      }
    }
    input{
      width: 7.28rem;
      height: 0.88rem;
      font-size: 0.346666rem;
      border-radius: 0.453333rem;
      padding-left: 0.88rem;
      background: url(../../../../assets/img/class/icon.png) no-repeat 0.293333rem/0.4rem 0.4rem transparent;
      background-color: #F3F3F3;
    }
    .class_top_font{
      height: 0.88rem;
      width: 1.133333rem;
      font-weight: bolder;
      text-align: center;
      line-height: 0.88rem;
    }
  }
</style>
