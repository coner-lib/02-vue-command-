<template>
  <div>
    <!-- v-if -->
    <p v-if="flag">我是v-if</p>
    <!-- v-show -->
    <p v-show="flag">我是v-show</p>
    <button @click="flag=!flag">切换</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
    flag:true
  }
}
}
</script>

<style>

</style>