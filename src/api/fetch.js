import axios from './http'
// API请求域名
const HOST = 'https://cnodejs.org'

// 请求参数配置
const requireData = postData => {
  if (postData !== undefined) {
    let postDataStr = JSON.stringify(postData)
    postData = JSON.parse(postDataStr)
  }
  /* 拿取用户uid */
  let uid = -1
  var oData = {
    handle: 0,
    shandle: 0,
    data: {
      phead: {
        pversion: 1,
        uid: uid,
        cid: 3,
        cversion: 1,
        cversionname: '5.3',
        channel: 1,
        requesttime: new Date().getTime(),
        coordinates: '',
        positions: ''
      }
    }
  }
  if (postData instanceof Object) {
    for (let x in postData) {
      // 请求的数据信息
      oData.data[x] = postData[x]
    }
  }
  // const dataStr = JSON.stringify(oData.data)
  // 私钥
  // const pkey = 'sfl^2018@Grandsea' // 顺风驴: sfl^2018@Grandsea,
  // oData.sign = md5(pkey + dataStr + pkey)
  return JSON.stringify(oData)
}

/**
 * 以get方式抓取远端API的结构
 * https://developers.douban.com/wiki/?title=movie_v2
 * @param  {String} api    api 根地址
 * @param  {String} path   请求路径
 * @param  {Objece} params 参数
 * @return {Promise}       包含抓取任务的Promise
 */
const fetchGet = (api, path, params, { host } = { host: HOST }) => {
  params = requireData(params)
  return axios
    .get(`${host}/${api}/${path}`, { params })
    .then(res => {
      console.log('请求成功')
      return res.data
    })
    .catch(e => {
      console.log(e.toString())
    })
}

/**
 * 以post方式抓取远端API的结构
 * https://developers.douban.com/wiki/?title=movie_v2
 * @param  {String} api    api 根地址
 * @param  {String} path   请求路径
 * @param  {Objece} params 参数
 * @return {Promise}       包含抓取任务的Promise
 */
const fetchPost = (api, path, params, { host } = { host: HOST }) => {
  params = requireData(params)
  return axios
    .post(`${host}/${api}/${path}`, params)
    .then(res => {
      console.log('请求成功')
      return res.data
    })
    .catch(e => {
      console.log(e.toString())
    })
}

/**
 * 抓取远程特定类型的API
 * https://www.grandsea.com.cn/test/sfc-search/city_list
 * @type  {String} type   类型，例如：'city_list'
 * @param  {Objece} params 参数
 * @return {Promise}       包含抓取任务的Promise
 */
function fetchApi(api, type, params) {
  return fetchPost(api, type, params)
}

export { fetchPost, fetchGet, fetchApi }
