<template>
  <div class="class_box">
    <class-top/>
    <class-left/>
    <class-right/>
  </div>
</template>

<script>
import ClassTop from './components/top/Top.vue'
import ClassLeft from './components/left/Left.vue'
import ClassRight from './components/right/Right.vue'
export default {
  name: 'Class',
  components: {
    'class-top': ClassTop,
    'class-left': ClassLeft,
    'class-right': ClassRight
  }
}
</script>

<style lang="less" scoped>
  .class_box{
    display: flex;
  }
</style>
