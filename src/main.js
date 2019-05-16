import 'amfe-flexible'
import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false

import mixins from './mixins'
// 注册全局mixins
Vue.mixin(mixins)

// 实例化Vue的filter
import filters from './filters'
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))

// 引入路由配置
import router from './router'
// 引入vuex
import store from './store'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
