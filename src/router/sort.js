// 分类
const database = resolve => require(['../views/database.vue'], resolve)

export default [
  {
    path: '/database',
    component: database,
    meta: {
      title: '分类',
      isBack: true
    }
  }
]
