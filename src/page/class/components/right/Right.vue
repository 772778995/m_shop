<template>
  <div class="class_right">
    <p>推荐品牌</p>
    <ul>
      <li v-for="(item, index) in brands" :key="index">
        <img :src="item.style">
        <p>{{item.state}}</p>
      </li>
    </ul>
    <p>常用分类</p>
    <div>
      <span v-for="(item, index) in species" :key="index">{{item.state}}</span>
    </div>
    <ul>
      <li v-for="(item, index) in shop" :key="index">
        <img :src="item.img">
        <p>{{item.state}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import brands from './js/brand.js'
import species from './js/species.js'
import shop from './js/shop.js'
export default {
  data () {
    return {
      brands,
      species,
      shop
    }
  }
}
</script>

<style lang="less" scoped>
  .class_right{
    background: white;
    width: 7.17rem;
    padding-left: 0.453333rem;
    padding-right: 0.373333rem;
    margin-top: 1.333333rem;
    p{
      font-size: 0.373333rem;
      font-weight: 400;
      color: #333333;
      text-align: center;
      margin-top: 0.266666rem;
    }
    ul{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      li{
        width: 1.626666rem;
      }
      img{
        width: 1.626666rem;
        height: 1.626666rem;
      }
    }
    div{
      padding-bottom: 0.506666rem;
      white-space: nowrap;
      span{
        font-size: 0.32rem;
        font-weight: 400;
        padding-right: 0.933333rem;
        color: #333333;
      }
      span:hover{
        color: #ff215d;
      }
    }
  }
</style>
