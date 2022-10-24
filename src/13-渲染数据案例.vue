<template>
  <div id="app">
    <div class="container">
      <!-- 顶部框模块 -->
      <div class="form-group">
        <div class="input-group">
          <h4>品牌管理</h4>
        </div>
      </div>

      <!-- 数据表格 -->
      <table class="table table-bordered table-hover mt-2">
        <thead>
          <tr>
            <th>编号</th>
            <th>资产名称</th>
            <th>价格</th>
            <th>创建时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <!-- 可以直接写 index -->
          <!-- "(item, index) in arr" -->
          <tr v-for="item in list" :key="item.id">
            <!-- {{index}} -->
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <!-- 如果价格超过100，就有red这个类 -->
            <td :class="{ red: item.price > 100 }">{{ item.price }}</td>
            <td>{{ item.time | resever }}</td>
            <td><a href="#" @click="delFn(item.id)">删除</a></td>
          </tr>
          <tr style="backgrouond-color: #ccc" v-if="list.length">
            <td>总价: {{ allPrice }}</td>
            <td>平均价：{{ allPrice / list.length }}</td>
          </tr>
        </tbody>

        <tfoot>
          <tr v-if="!list.length">
            <td colspan="5" style="text-align: center">暂无数据</td>
          </tr>
        </tfoot>
      </table>

      <!-- 添加资产 -->
      <form class="form-inline">
        <div class="form-group">
          <div class="input-group">
            <input
              type="text"
              v-model="name"
              class="form-control"
              placeholder="资产名称"
            />
          </div>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <div class="form-group">
          <div class="input-group">
            <input
              type="text"
              v-model="price"
              class="form-control"
              placeholder="价格"
              aria-label="Username"
              aria-describedby="addon-wrapping"
            />
          </div>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <!-- 阻止表单提交 -->
        <button class="btn btn-primary" @click.prevent="btnFn">添加资产</button>
      </form>
    </div>
  </div>
</template>
<script>
import moment from "moment";

export default {
  data() {
    return {
      name: "", // 名称
      price: 0, // 价格
      list: JSON.parse(localStorage.getItem('liyi')) || [],
    };
  },
  methods: {
    btnFn() {
      // 判断是否为空
      if (this.name.trim().length == 0 || this.price === 0) {
        return alert("请输入正确的值");
      }
      // 解决bug:无数组新增 list 数组中没有数据，id需要给一个固定值（以后id 都是后台生成的，现在是模拟给一个id）

      // 当前数组最后一个对象的 id + 1 作为新对象 id 值
      let id =
        this.list.length > 0 ? this.list[this.list.length - 1].id + 1 : 1;
      this.list.push({
        id,
        name: this.name,
        price: this.price,
        time: new Date(),
      });
      this.name = "";
      this.price = "";
    },
    delFn(id) {
      console.log(id);
      // 根据 传过来的 id ，得到当前 数据的下标
      // 对象的 id 是否是自己找的 id 如果是的 就返回这个下标
      let index = this.list.findIndex((item) => item.id === id);
      console.log(index);
      this.list.splice(index, 1);
    },
  },
  computed: {
    // .toFixed(2)---保留两位小数
    allPrice() {
      let total = this.list.reduce(
        (sum, item) => (sum += parseFloat(item.price)),
        0
      );
      total = total.toFixed(2);
      return total;
    },
    // 平均价
    //     avag() {

    // }
  },
  filters: {
    resever(time) {
      return moment(time).format("YYYY-MM-DD");
    },
  },
  // 深度侦听 监测 list 中的数据
  watch: {
    list: {
      handler() {
        localStorage.setItem('liyi', JSON.stringify(this.list))
      },
      // 深度监听 deep
      deep: true
      // 页面一加载 立马开启监听
      // immediate: true,
    }
  }
}
</script>

<style >
.red {
  color: red;
}
</style>