<template>
  <div>
    <div class="shopcar_data" v-for="(item, index ) in shopList" :key="index">
      <div class="shopcar_data_title">
        <div class="circular"></div>
        <div class="shop">
          {{item.shop}}
          <b>&gt;</b>
        </div>
        <div class="volume">领卷</div>
      </div>
      <div class="shopcar_data_describe">
        <div class="circular"></div>
        <div class="shop_img" :style="item.img"></div>
        <div class="shop_explain">
          <div class="shop_explain_title">{{item.title}}</div>
          <div class="shop_explain_label">{{item.label}}</div>
          <div class="shop_explain_money">{{item.money}}</div>
          <div class="shop_explain_button">
            <div>-</div>
            <div>{{item.number}}</div>
            <div>+</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import shopList from './js/shoplist.js'
export default {
  data () {
    return {
      shopList
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../css/common.less';
  .shopcar_data{
    width: 8.933333rem;
    margin: 0 auto;
    margin-top: 0.293333rem;
    background: white;
    .shopcar_data_title{
      height: 0.826666rem;
      border-bottom: 0.053333rem solid #f2f2f2;
      display: flex;
      .shop{
        height: 0.826666rem;
        line-height: 0.8266666rem;
        flex: 1;
        font-size: 0.346666rem;
        color: #333333;
        padding-left: 0.4rem;
        background: url(../../../../assets/img/shopcar/shop.png) 0/5% no-repeat;
      }
      .volume{
        width: 1.28rem;
        height: 0.48rem;
        line-height: 0.48rem;
        font-size: 0.32rem;
        color: #E91A1A;
        margin: auto 0.186666rem;
        border-radius: 1.333333rem;
        border: 0.026666rem #FFADAD solid;
        text-align: center;
      }
    }
    .shopcar_data_describe{
      height: 2.96rem;
      display: flex;
      .shop_img{
        width: 2.933333rem;
        height: 2.213333rem;
        margin: auto 0;
      }
      .shop_explain{
        width: 4.506666rem;
        height: 2.213333rem;
        margin: auto 0.426666rem;
        position: relative;
        .shop_explain_title{
          font-size: 0.373333rem;
          color: #333333;
          line-height: 0.533333rem;
          overflow: hidden;
          text-overflow:ellipsis;
          display:-webkit-box;
          /* autoprefixer: off */
          -webkit-box-orient:vertical;
          /* autoprefixer: on */
          -webkit-line-clamp:2;
        }
        .shop_explain_label{
          margin-top: 0.213333rem;
          font-size: 0.266666rem;
          color: #808080
        }
        .shop_explain_money{
          position: absolute;
          bottom: 0;
          left: 0;
          font-size: 0.426666rem;
          color: #F23A3A;
        }
        .shop_explain_button{
          position: absolute;
          bottom: 0;
          right: 0;
          width: 1.5rem;
          display: flex;
          justify-content: space-between;
          text-align: center;
          div{
            font-weight: bolder;
            width: 0.4rem;
            height: 0.4rem;
            line-height: 0.4rem;
          }
          div:nth-child(1){
            background: #F2F2F2;
            font-size: 0.4rem;
            color: #B3B3B3;
          }
          div:nth-child(2){
            font-size: 0.373333rem;
          }
          div:nth-child(3){
            background: #F23A3A;
            color: #FFFFFF;
            font-size: 0.4rem;
          }
        }
      }
    }
  }
</style>
