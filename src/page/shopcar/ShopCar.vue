<template>
  <div class="shopcar">
    <shopcar-number></shopcar-number>
    <shopcar-shop></shopcar-shop>
    <shopcar-money></shopcar-money>
  </div>
</template>

<script>
import ShopcarNumber from './components/number/Number.vue'
import ShopcarShop from './components/shop/Shop.vue'
import ShopcarMoney from './components/money/Money.vue'
export default {
  name: 'ShopCar',
  components: {
    'shopcar-number': ShopcarNumber,
    'shopcar-shop': ShopcarShop,
    'shopcar-money': ShopcarMoney
  }
}
</script>

<style lang="less">
  .shopcar{
    position: relative;
    margin-bottom: 1.599999rem;;
  }
</style>
