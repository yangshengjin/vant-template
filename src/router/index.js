import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import Tabs from '@/layout'

const Home = resolve => require(['@/views/Home'], resolve)
const Sort = resolve => require(['@/views/Sort'], resolve)
const User = resolve => require(['@/views/User'], resolve)
// 登录
const Login = resolve => require(['@/views/User/Login.vue'], resolve)
// 注册
const Register = resolve => require(['@/views/User/Register.vue'], resolve)

/**
 * 导入工作台路由
 */
// import sort from './sort'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: Tabs,
      children: [
        {
          path: '/home',
          component: Home,
          meta: {
            title: '首页',
            isnoBack: true,
            isToken: false,
            isTab: true
          }
        },
        {
          path: '/sort',
          component: Sort,
          meta: {
            title: '分类',
            isnoBack: true,
            isToken: false,
            isTab: true
          }
        },
        {
          path: '/user',
          component: User,
          meta: {
            title: '个人中心',
            isnoBack: true,
            isToken: true,
            isTab: true
          }
        }
      ]
    },
    {
      path: '/user/login',
      component: Login,
      meta: {
        title: '登录'
      }
    },
    {
      path: '/user/register',
      component: Register,
      meta: {
        title: '注册'
      }
    }
    // ...sort
  ]
})

// simple history management
const history = window.sessionStorage
history.clear()
let historyCount = history.getItem('count') * 1 || 0
history.setItem('/', 0)

router.beforeEach((to, from, next) => {
  store.commit('isLoading', { isLoading: true })
  // 判断有无登录
  let uid = localStorage.getItem('uid')
  if (uid) {
    if (to.path === '/' || to.path === '/user/login') {
      next('/home')
    } else {
      next()
    }
    // 如果有token就正常转向
  } else {
    if (to.meta.isToken) {
      next('/user/login?redirect=' + to.path) // 否则如果该页面需要Token则跳转回登录页
    } else if (to.path === '/') {
      next('/home')
    } else {
      next()
    }
  }

  const toIndex = history.getItem(to.path)
  const fromIndex = history.getItem(from.path)
  if (toIndex) {
    if (
      !fromIndex ||
      parseInt(toIndex, 10) > parseInt(fromIndex, 10) ||
      (toIndex === '0' && fromIndex === '0')
    ) {
      store.commit('updateDirection', { direction: 'forward' })
    } else {
      store.commit('updateDirection', { direction: 'reverse' })
    }
  } else {
    ++historyCount
    history.setItem('count', historyCount)
    to.path !== '/' && history.setItem(to.path, historyCount)
    store.commit('updateDirection', { direction: 'forward' })
  }

  if (/\/http/.test(to.path)) {
    let url = to.path.split('http')[1]
    window.location.href = `http${url}`
  } else {
    next()
  }
})

router.afterEach(to => {
  store.commit('isLoading', { isLoading: false })
  store.commit('changeIndexConf', {
    isBack: !to.meta.isnoBack,
    title: to.meta.title
  })
})

export default router
