<template>
  <!-- 用户 -->
  <div class="user_name">
    <div class="user_name_headimg"></div>
    <div class="user_name_name">
      <span>千小库</span>
      <span>至尊会员</span>
    </div>
    <div class="user_name_name">
      <span style="font-size: 0.293333rem;font-weight: 400;">个人主页&gt;</span>
      <span>VIP等级</span>
    </div>
    <div class="user_name_icon"></div>
    <div class="user_name_set">···</div>
  </div>
</template>

<script>
</script>

<style lang="less" scoped>
  .user_name{
    height: 4.533333rem;
    display: flex;
    background: white;
    border-radius: 0 0 45% 45%/0 0 15% 15%;
    padding-top: 0.133333rem;
    div{
      height: 1.28rem;
    }
    .user_name_headimg{
      width: 1.866666rem;
      background: url(../../../../assets/img/user/headimg.png) bottom/100% no-repeat;
      margin-left: 0.48rem;
    }
    .user_name_name{
      display: flex;
      flex-direction: column;
      span{
        width: 1.466666rem;
        margin-top: 0.23rem;
        height: 0.426666rem;
        line-height: 0.426666rem;
        font-size: 0.453333rem;
        font-weight: 700;
        color: #333333;
        text-align: center;
        margin-left: 0.186666rem;
        white-space: nowrap;
      }
      span:nth-child(2){
        background: #f75e31;
        border-radius: 0.213333rem;
        font-size: 0.266666rem;
        font-weight: 400;
        color: #FFFFFF;
      }
    }
    .user_name_icon{
      width: 0.8rem;
      height: 0.64rem;
      margin-left: 3.246666rem;
      background: url(../../../../assets/img/user/xiaoxi.png) bottom/0.506666rem 0.506666rem no-repeat ;
    }
    .user_name_set{
      width: 0.8rem;
      height: 0.64rem;
      font-weight: bolder;
      line-height: 0.64rem;
      text-align: left;
      margin-left: 0.213333rem;
      margin-right: 0.48rem;
    }
  }
</style>
