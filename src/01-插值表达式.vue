<template>
  <div>
    <!-- {{ 表达式 }} 里面必须是表达式语句-->
    <h2> {{ uname }} </h2>
    <h2> {{ arr }} </h2>
    <h2> {{ obj.address }} </h2>
  </div>
</template>

<script>
export default {
  // data是一个函数，return用来返回一个对象  data(){}
  data: function () {
    return {
      uname: 'zs',
      arr: [1, 2, 3],
      obj: {
      address:'石家庄'
      }
    }
  }
}
</script>

<style>

</style>