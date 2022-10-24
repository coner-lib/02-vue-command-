
<template>
  <div>
    <!-- 下拉菜单 -->
    <div>
      <span>选择城市</span>
      <select name="" id="" v-model="city">
        <option value="sh">上海</option>
        <option value="bj">北京</option>
        <option value="tj">天津</option>
      </select>
    </div>
    <!-- 同意按钮 -->
    <div>
      <span>爱好</span>
      <input type="checkbox" v-model="arr" value="sing" />唱歌
      <input type="checkbox" v-model="arr" value="dance" />跳舞
      <input type="checkbox" v-model="arr" value="tang" />烫头
    </div>

    <!-- 单选 -->
    <div>
      <span>性别：</span>
      <input type="radio" v-model="gender" name="sex" value="nan"/>男
      <input type="radio" v-model="gender" name="sex" value="nv"/>女
    </div>

    <!-- 自我介绍 文本域 resize：none-->
    自我介绍：<textarea name="" id="" cols="30" rows="10"></textarea>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      city: '',
      arr: [],
      gender: ''
    }
  }
}
</script>

<style>

</style>