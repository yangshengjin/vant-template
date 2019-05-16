/**
 * http配置
 */
import axios from 'axios'

// axios 配置
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.timeout = 15000

// http response 拦截器
axios.interceptors.response.use(
  response => {
    if (response !== undefined && response.data.result !== undefined) {
      // 没有访问权限
      if (response.data.result.status < 0) {
        alert(response.data.result.msg)
      }
    }
    return response
  },
  error => {
    if (error.response) {
      setTimeout(() => {
        alert(`status:${error.response.status},服务出错`)
      }, 500)
    }
    // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
    return Promise.reject(error.response.data)
  }
)

export default axios
