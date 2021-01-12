<template>
  <!-- 个人 -->
  <div class="user_personal">
    <div class="user_personal_top">
      <div class="user_personal_top_integral">
        <span>当前累计积分:&nbsp;1245</span>
        <span>签到</span>
      </div>
      <div class="user_personal_top_footprint">
        <ul v-for="(item, index) in userList" :key="index">
          <li>{{item.txt}}</li>
          <li>{{item.count}}</li>
        </ul>
      </div>
    </div>
    <div class="user_personal_bottom">
      <div class="user_personal_bottom_me">
        <span>我的订单</span>
        <span>查看全部订单</span>
      </div>
      <ul class="user_personal_bottom_order">
        <li v-for="(item, index ) in userOrder" :key="index">
          <div>
            <img :src="item.icon">
          </div>
          <p>{{item.txt}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { userList, userOrder } from './js/data.js'
export default {
  data () {
    return {
      userList,
      userOrder
    }
  }
}
</script>

<style lang="less" scoped>
  .user_personal{
    width: 9.2rem;
    height: 3.373333rem;
    margin: 0 auto;
    background: white;
    transform: translateY(-2.666666rem);
    .user_personal_top{
      background: #5b5b5b;
      height: 2.693333rem;
      border-radius: 0.266666rem 0.266666rem 75% 75% / 0.266666rem 0.266666rem 25% 25%;
      .user_personal_top_integral{
        width: 9.2rem;
        height: 1.253333rem;
        line-height: 1.253333rem;
        font-size: 0.346666rem;
        font-weight: 400;
        color: #ffffff;
        white-space: nowrap;
        span:nth-child(1){
          width: 3.066666rem;
          margin-left: 0.613333rem;
        }
        span:nth-child(2){
          margin-left: 3.66rem;
          padding-left: 0.6rem;
          background: url(../../../../assets/img/user/qiandao.png) left/0.4rem no-repeat;
        }
      }
      .user_personal_top_footprint{
        width: 9.2rem;
        height: 1.253333rem;
        ul{
          width: 25%;
          border-right: 0.026666rem solid #808080;
          float: left;
          li{
            text-align: center;
            margin-bottom: 0.16rem;
            font-size: 0.293333rem;
            color: #FFFFFF;
          }
        }
      }
    }
    .user_personal_bottom{
      height: 3.13333rem;
      background: white;
      .user_personal_bottom_me{
        margin-top: 0.266666rem;
        height: 0.533333rem;
        display: flex;
        justify-content: space-between;
        padding-left: 0.266666rem;
        padding-right: 0.213333rem;
        span{
          font-size: 0.4rem;
          font-weight: 500;
          color: #333333;
        }
        span:nth-child(2){
          font-size: 0.32rem;
          font-weight: 400;
          margin-top: 0.08rem;
        }
      }
      .user_personal_bottom_order{
        height: 2.08rem;
        display: flex;
        justify-content: space-around;
        margin-top: 0.45rem;
        li{
          text-align: center;
          margin-bottom: 0.16rem;
          font-size: 0.293333rem;
          color: #333333;
          font-weight: 400;
          div{
            width: 1.093333rem;
            height: 1.093333rem;
            border-radius: 50%;
            background: linear-gradient(#F23A3A, #F75F30);
            padding: 0.266666rem;
            img{
              width: 0.586666rem;
              height: 0.586666rem;
            }
          }
        }
      }
    }
  }
</style>
