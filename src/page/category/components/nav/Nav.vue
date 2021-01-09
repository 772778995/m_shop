<template>
  <nav>
    <div
      v-for="(item, index) in navData"
      :key="index"
      class="nav_list">
        <a href="#">{{item}}</a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
  data () {
    return {
      navData: [
        '热销', '时尚', '美妆', '直播', '母婴', '美食'
      ]
    }
  }
}
</script>

<style lang="less" scoped>
  nav {
    background-color: #fff;
    display: flex;
    height: 0.88rem;
    line-height: 0.88rem;
    position: relative;
    .nav_list {
      flex: 1;
      text-align: center;
      position: relative;
      a {
        display: block;
        color: #343434;
        font-size: 0.373333rem;
      }
      a::after {
        content: '';
        display: block;
        width: 0.026666rem; height: 0.346666rem;
        background-color: #e6e6e6;
        position: absolute;
        top: 50%; right: 0;
        transform: translateY(-50%);
      }
    }
    .nav_list:first-child {
      a { color: #F23A3A; }
    }
    .nav_list:first-child::after {
      content: '';
      display: block;
      width: 0.933333rem; height: 0.053333rem;
      background-color: #F23A3A;
      position: absolute;
      bottom: 0; left: 50%;
      transform: translateX(-50%);
    }
    .nav_list:last-child {
      a::after { display: none; }
    }
  }
</style>
