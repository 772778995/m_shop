<template>
  <ul class="list">
    <li v-for="(item, index) in listData" :key="index">
      <img :src="item.imgSrc">
      <p class="list_discribe">{{item.des}}</p>
      <div class="list_data">
        <span class="list_data_price">￥{{item.price}}</span>
        <del class="list_data_old_price">￥{{item.oldPrice}}</del>
        <img class="list_data_good_img" src="@assets/img/category/dz.png">
        <span class="list_data_good_number">{{item.goodsNumber}}赞</span>
      </div>
    </li>
  </ul>
</template>

<script>
import listData from './getListData.js'
export default {
  name: 'List',
  data () {
    return {
      listData
    }
  }
}
</script>

<style lang="less" scoped>
  .list {
    background-color: #f2f2f2;
    padding: 0.24rem 0.4rem 0 0.4rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    li {
      width: 4.48rem; height: 5.52rem;
      margin-top: 0.24rem;
      border-radius: 0.08rem;
      overflow: hidden;
      background-color: #fff;
        img {
          width: 4.48rem; height: 3.413333rem;
        }
        .list_discribe {
          margin: 0.186666rem 0.106666rem 0.533333rem 0.106666rem;
          width: 4.266666rem; height: 0.693333rem;
          font-size: 0.32rem; line-height: 0.346666rem;
          color: #333333;
          display:-webkit-box;
          overflow:hidden;
          text-overflow:ellipsis;
          -webkit-line-clamp:2;
          -webkit-box-orient:vertical;
        }
        .list_data {
          display: flex;
          .list_data_price {
            margin-left: 0.213333rem;
            width: 1.173333rem; height: 0.346666rem;
            color: #f23a3a;
            font-size: 0.426666rem;
          }
          .list_data_old_price {
            margin: 0.106666rem 0.413333rem 0 0.133333rem;
            width: 0.693333rem; height: 0.266666rem;
            font-size: 0.32rem;
            color: #808080;
          }
          .list_data_good_img {
            margin: 0.133333rem 0 0 0;
            width: 0.266666rem; height: 0.293333rem;
          }
          .list_data_good_number {
            flex: 1;
            height: 0.266666rem;
            margin-top: 0.16rem;
            margin-left: 0.08rem;
            font-size: 0.266666rem;
            color: #808080;
          }
        }
    }
  }
</style>
