<template>
  <div class="carousel_wrapper">
    <ul class="carousel_ul">
      <li class="carousel_li"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Carousel'
}
</script>

<style lang="less" scoped>
  .carousel_wrapper {
    position: absolute;
    top: 2.433333rem; left: 0.4rem;
    border-radius: 0.293333rem;
    width: 9.2rem; height: 2.426666rem;
    overflow: hidden;
    .carousel_ul {
      width: 700%; height: 100%;
      .carousel_li {
        width: 100%;
        height: 100%;
        background-image: url(../../../../assets/img/home/新品优惠全场享8折@2x.jpg);
        background-size: 9.2rem 100%;
        background-repeat: no-repeat;
      }
    }
  }
</style>
