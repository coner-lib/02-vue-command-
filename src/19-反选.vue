<template>
  <div>
    <span>全选:</span>
    <input type="checkbox" v-model="all" />
    <button @click="btn">反选</button>
    <ul>
      <li v-for="(item, index) in arr" :key="index">
        <input type="checkbox" v-model="item.c" />
        <span> {{ item.name }} </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        {
          name: "猪八戒",
          c: false,
        },
        {
          name: "孙悟空",
          c: false,
        },
        {
          name: "唐僧",
          c: false,
        },
        {
          name: "白龙马",
          c: false,
        },
      ],
    };
  },
  computed: {
    all: {
      get() {
        return this.arr.every((item) => {
          return item.c === true
        })
        
      },
      set(val) {
        //console.log(val); //true
        this.arr.forEach(item => {
          item.c = val
        })
      },
    },
  },
  methods: {
    btn() {
      
    }
  }
};
</script>