<template>
  <div>
    <!-- v-model -->
    <!-- 转换为数字类型 -->
    <input type="text" v-model.number="age">
    <!-- 去除前后空格 -->
    <input type="text" v-model.trim="str">
    <!-- 鼠标失去焦点的时候加载事件 -->
    <input type="text" v-model.lazy="load">
  </div>
</template>

<script>
export default {
  data() {
    return {
      age: 18,
      str:'',
      load: ''
    }
  }
}
</script>

<style>

</style>