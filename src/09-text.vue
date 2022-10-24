<template>
  <div>
    <!-- innerText -->
    <p v-text="text"></p>
    <!-- innerHTML -->
    <p v-html="msg"></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: '<p ">这是text标签</p>',
      msg:  '<p v-html="msg">这是一个html标签</p>'
  }
}
}
</script>

<style>

</style>