<template>
  <ul class="class_left">
    <li v-for="(item, index) in labels" :key="index">{{item.state}}</li>
  </ul>
</template>

<script>
import labels from './js/labels.js'
export default {
  data () {
    return {
      labels,
      isshow: true
    }
  }
}
</script>

<style lang="less" scoped>
  .class_left{
    margin-top: 1.333333rem;
    background: whitesmoke;
    width: 2.826666rem;
    padding-bottom: 0.7rem;
    li{
      height: 0.853333rem;
      line-height: 0.853333rem;
      width: 2.826666rem;
      text-align: center;
      font-size: 0.373333rem;
      font-weight: 500;
      color: #343434;
      margin-bottom: 0.56rem;
    }
    li:hover{
      border-left: #FF215D 0.08rem solid;
      border-right: whitesmoke 0.026666rem solid;
      background: white;
    }
  }
</style>
