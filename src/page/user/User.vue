<template>
  <div class="user">
    <!-- 用户 -->
    <user-name></user-name>
    <!-- 信息 -->
    <user-personal></user-personal>
    <!-- 物流 -->
    <user-logistics></user-logistics>
    <!-- 会员 -->
    <user-members></user-members>
    <!-- 服务中心 -->
    <user-service></user-service>
  </div>
</template>

<script>
import Logistics from './components/logistics/Logistics.vue'
import Members from './components/members/Members.vue'
import UserName from './components/name/Name.vue'
import Personal from './components/personal/Personal.vue'
import Service from './components/service/Service.vue'
export default {
  name: 'User',
  components: {
    'user-name': UserName,
    'user-logistics': Logistics,
    'user-members': Members,
    'user-personal': Personal,
    'user-service': Service
  }
}
</script>

<style lang="less" scoped>
  .user{
  }
</style>
