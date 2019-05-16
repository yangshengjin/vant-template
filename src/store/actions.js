import { PostLogin } from '@/api/base'

// 登录
export const LoginApp = ({ commit }, params) => {
  return PostLogin(params).then(res => {
    res = {
      status: 1,
      desc: '登录成功',
      userinfo: {
        uid: '123456',
        name: '测试1'
      }
    }
    if (res.status === 1) {
      commit('PostLogin', { UserInfo: res.userinfo })
    }
    return res
  })
}

// 退出系统
export const GetLoginOut = ({ commit }, params) => {
  commit('GetLoginOut', { params })
}
