import Vue from 'vue'
import App from './App.vue'
// 引入bootstrap.css样式
import 'bootstrap/dist/css/bootstrap.min.css'
Vue.config.productionTip = false

// 1.全局注册--过滤器的名字
Vue.filter('reserve', (val,s) => {
  return val.split('').reverse().join(s)
})

new Vue({
  render: h => h(App),
}).$mount('#app') //渲染到index中
