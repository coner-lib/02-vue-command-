<template>
  <div>
    <!-- 
      1.v-model 只能用在两个地方 a.表单元素（任何表单元素都可以）  b.组件
      有 v-model 之后，就不用写 value 了，以v-model 为准
    -->
    <input type="text" v-model="uname">
  </div>
</template>

<script>
export default {
  data() {
    return {
    uname:'zs'
  }
}
}
</script>

<style>

</style>