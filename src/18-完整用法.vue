<template>
  <div>
    <!-- 
      computed:{'函数名':回调函数}
      计算属性完整用法    
    -->
    <h2>计算属性完整用法</h2>
    <h2> {{ test }} </h2>
    <!--  v-model="obj"--->绑定的是 computed中的对象 双向数据绑定  -->
    <input type="text" v-model="obj">
  </div>
</template>

<script>
export default {
  computed: {
  // 只是获取值 从来不修改 那就用 函数写法
    test() {
    return 123456
    },
    obj: {
      get() {
      return '我是好人'
      },
      set(val) {
      console.log(val);
    }
  }
}
}
</script>

<style>

</style>