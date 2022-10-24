<template>
  <div>
    <!-- 过滤器
    1..两种用法：
      全局定义 vue.filter
      局部定义
    -->
    <h1 v-bind:name="uname">{{ uname | big }}</h1>
    <!-- 给过滤器传参 -->
    <h4>{{ test | reserve("|") }}</h4>
    <!-- 可以给多个过滤器 -->
    <p :title="msg | toUp | reserve('|')">鼠标</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      uname: "qwer",
      test: "liyi",
      msg:'ren'
    };
  },
  filters: {
    big(val) {
      return val.toUpperCase();
    },
    toUp(val) {
      return val.toUpperCase()
    },
  },
};
</script>

<style>
</style>