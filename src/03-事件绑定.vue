<template>
  <!-- 必须有一个根目录 且只有一个 -->
  <div>
    <p> {{ count }} </p>
    <button v-on:click="addFn">+1</button>
    <button @click="addCount(5)">+5</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
    count: 1
    }
  },
  methods: {
    addFn: function () {
      this.count += 1
    console.log(111);
    },
    addCount: function (num) {
      this.count +=num
    } 
}
}
</script>

<style>

</style>