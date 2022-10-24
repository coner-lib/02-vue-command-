<template>
  <div>
    <!-- 
      指令： v- 任何标签里开头的属性 都叫指令
      v-bind 绑定属性的一个 指令 可以绑定任何属性
      只要使用了 v-bind 绑定了 属性 那么 属性值都是一个 变量
     -->
    <a v-bind:href="url">百度</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
    url:'https://www.baidu.com'
  }
}
}
</script>

<style>

</style>