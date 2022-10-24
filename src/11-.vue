<template>
  <div>
    <button @click="toggleFn"> {{isShow?'隐藏':'显示'  }} </button>
    <p v-show="isShow">这个世界真美好</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
    }
  },
  methods: {
    toggleFn() {
      this.isShow=!this.isShow
    }
  }

}
</script>

<style>

</style>