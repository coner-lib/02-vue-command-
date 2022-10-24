<template>
  <div>
    {{res}}---{{reRes}}
    {{res}}---{{reRes}}
    {{res}}---{{reRes}}
    {{res}}---{{reRes}}
    <!-- 函数 -->
    <h2> {{ fn() }} </h2>
    <h2> {{ fn() }} </h2>
    <h2> {{ fn() }} </h2>
    <h2> {{ fn() }} </h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
    res:'qwer'
  }
  },
  methods: {
    fn() {
      console.log(11);
      return this.res.split('').reverse().join('')
    }
  },
  computed: {
    reRes() {
      console.log(222);
      return this.res.split('').reverse().join('')
    }
}
}
</script>

<style>

</style>