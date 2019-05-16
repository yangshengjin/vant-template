/** 描述
 *  接口函数命名规范：
 * - 每个接口函数首字母为大写
 * - 有 '_ -' 等下划线、斜杠等连接的单词改以驼峰形态命名 如 ac_bc -> AcBc
 * - 查询：      以 'Query' 开头
 * - 新增、修改： 以 'Edit' 开头
 * - 启用停用：   以 'Status' 开头
 * - 导出：       以 'Export' 开头
 * - 删除：       以 'Delete' 开头
 * - 其他接口：    以 '接口路径最后的单词' 作为开头 比如 'ticket-ref/ticket/get_by_code' 可命名为 GetByCodeTicket
 * - 命名单词不宜太长、一般最好不要超过5个单词，如 GetByCodeTicket 包含了4个单词，分别有 get\by\code\ticket
 * - 一般是以 动词 + 名称 的规则来命名。
 */
import { fetchGet } from './fetch'
const API = 'api'
/**
 * --登录
 * @param {Objece} params 参数
 */
function PostLogin(params) {
  return fetchGet(API, 'v1/topics', params)
}

export { PostLogin }
