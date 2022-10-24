<template>
  <div>
    <!-- v-on 修饰符 -->
    <div @click="fatherFn">
      <a @click.prevent.stop="sonFn" href="https://www.baidu.com">baidu</a>
    </div>
   <button @click.once="showLog">点我</button>
  </div>
</template>

<script>
export default {
  methods:{
    fatherFn:function() {
    console.log('我是父亲');
    },
    sonFn() {
    console.log('444');
    },
    showLog() {
      console.log('1111');
    }
 }
}
</script>

<style>

</style>