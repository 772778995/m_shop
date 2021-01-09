<template>
  <div class="category">
    <cate-header></cate-header>
    <cate-nav></cate-nav>
    <cate-list></cate-list>
  </div>
</template>

<script>
import Header from '../home/components/header/Header'
import Nav from './components/nav/Nav'
import List from './components/list/List'
export default {
  name: 'Category',
  components: {
    'cate-header': Header,
    'cate-nav': Nav,
    'cate-list': List
  }
}
</script>

<style lang="less" scoped>
  .category {
    position: relative;
  }
</style>
