<template>
  <div>
    <!-- 监听表单 -->
    <!-- <input type="text" v-model="val" /> -->
    <input type="text" v-model="val.name" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 监听的是对象
      val: {
        name:''
      }
    };
  },
  methods: {},
  computed: {},
  filters: {},
  watch: {
    //   val(newObj, oldObj) {
    //   console.log(newObj, oldObj);
    // }
    
    // 固定语法 监测得到是对象/数组
    val: {
      // 深度监听 deep
      deep: true,
      // 页面一加载 立马开启监听
      immediate: true,
      handler: function (newVal, oldVal) {
        console.log(newVal, oldVal);
      },
    },
  },
};
</script>

<style>
</style>