<template>
  <div>
    <!-- v-on 修饰符 -->
    <!-- 
      .stop 阻止事件冒泡
      .prevent 阻止默认行为
      .once 程序运行期间，只触发一次事件处理函数
    -->
    <div @click="fatherFn" class="father">
      <div v-on:click.stop="isStop" class="son">我是son</div>
      <a @click.prevent.stop="getSub" href="https://www.baidu.com">百度</a>
      <button @click.stop.once="btn">程序运行期间，只触发一次事件处理函数</button>
    </div>
  </div>
</template>

<script>
export default {
   methods: {
    fatherFn() {
    console.log('我是father');  
    },
    isStop() {
    console.log('我是son');
    },
    getSub() {
    console.log(1);
    },
    btn() {
      console.log(1);
    }
  }
}
</script>

<style>

</style>