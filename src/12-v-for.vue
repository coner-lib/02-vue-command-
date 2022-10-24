
<template>
  <div>
    <!-- v-for ="(值变量，索引) in  目标结构"
     想要循环谁，就对谁使用
    -->
    <ul>
      <!-- 循环数组 -->
      <li v-for="(item, index) in arr" :key="item">{{ item }}---{{ index }}</li>
      <!-- 循环对象 -->
      <!-- :key 值是唯一的 且只能是 number 和 string 类型的 -->
      <li v-for="(item, index) in obj" :key="item">
        {{ item }}----{{ index }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: ["zs", "sc", "luo"],
      obj: {
        uname: "liu",
        age: 18,
      },

    };
  },
};
</script>

<style>
</style>