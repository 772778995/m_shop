<template>
  <div class="category">
    <ul class="category_list">
      <li
        v-for="(item, index) in cateList"
        :key="index"
        class="category_item">
          <div class="category_item_img" :style="item.iconURL">
            <div class="category_item_img_txt">{{item.txt}}</div>
          </div>
          <span class="category_item_title">{{item.title}}</span>
      </li>
    </ul>
    <ul class="category_toggle">
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
import { iconArr } from './js/getIcon'
export default {
  name: 'Category',
  data () {
    return {
      cateList: iconArr
    }
  }
}
</script>

<style lang="less" scoped>
  .category {
    width: 9.466666rem;
    margin: 2rem 0.266666rem 0 0.266666rem;
    background: #fff;
    border-radius: 0.266666rem 0.266666rem 0 0;
    overflow: hidden;
    .category_list {
      margin: 1.12rem auto 0.186666rem auto;
      width: 8.666666rem;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .category_item {
        width: 1.28rem; height: 1.653333rem;
        margin: 0 0.190666rem 0.293333rem 0.190666rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        .category_item_img {
          width: 1.173333rem; height: 1.173333rem;
          background-size: 100%;
            .category_item_img_txt {
              font-size: 0.30rem;
              width: 0.613333rem; height: 0.32rem;
              color: #fff;
              margin: 0.213333rem 0.293333rem 0.613333rem 0.293333rem;
              white-space: nowrap;
            }
        }
        .category_item_title {
          font-size: 0.32rem;
          font-family: Adobe Heiti Std R, Adobe Heiti Std R-R;
          color: #333333;
          font-weight: 500;
          white-space: nowrap;
        }
      }
    }
    .category_toggle {
      display: flex;
      height: 0.48rem;
      justify-content: center;
      li {
        width: 0.4rem; height: 0.106666rem;
        background-color: #c5c5c5;
        border-radius: 0.053333rem;
      }
      li:nth-child(1) {
        margin-right: 0.106666rem;
        background-color: #F23A3A;
      }
    }
  }
</style>
