import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import * as actions from './actions'
// import * as getters from './getters'
// import modules from './modules'
Vue.use(Vuex)

// 应用初始状态
const state = {
  comm: {
    isLoading: false,
    direction: 'forward',
    indexConf: {
      isFooter: false,
      isBack: false,
      title: '' // 标题
    },
    Authority: {}
  },
  responseData: {
    // 存储服务端接口返回的数据
    UserInfo: {}
  }
}
export default new Vuex.Store({
  state,
  mutations,
  actions
})
