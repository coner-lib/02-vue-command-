<template>
  <!--案例 -->
  <div>
    <p> {{ str }}</p>
    <button @click="btnFn">反转</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
    str:'人人爱我'
  }
  },
  methods: {
    btnFn() {
      // 先把字符串转换为数组，使用数组的 反转 方法，转换，之后 再把 转换完 的 数组 转换成 字符串 输出
      this.str = this.str.split("").reverse().join("")
    }
  }
}
</script>

<style>

</style>