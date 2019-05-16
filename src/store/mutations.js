export default {
  // loading的显示
  isLoading(state, { isLoading }) {
    state.comm.isLoading = isLoading
  },
  // 数据加载中
  isLoadMore(state, { isLoadMore }) {
    state.comm.loadMore = isLoadMore
  },
  // 过场动画的效果
  updateDirection(state, { direction }) {
    state.comm.direction = direction
  },
  // 设置header参数
  changeIndexConf(state, data) {
    Object.assign(state.comm.indexConf, data)
  },
  /**
   * 业务--------------------------------------------
   */
  // 登录
  PostLogin(state, { UserInfo }) {
    state.responseData['UserInfo'] = UserInfo
    // 登录成功，记住uid
    localStorage.setItem('uid', UserInfo.uid)
    window.localStorage.setItem('UserInfo', JSON.stringify(UserInfo))
  },
  // 退出系统
  GetLoginOut(state) {
    localStorage.removeItem('uid')
    state.responseData['UserInfo'] = {}
  }
}
