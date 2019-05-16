import { Toast, Dialog } from 'vant'
export default {
  componetns: {
    Toast,
    Dialog
  },
  data() {
    return {}
  },
  methods: {
    showToast(message, { type, duration } = { type: 'text', duration: 3000 }) {
      Toast({ message, type, duration })
    },
    showAlert(content, callback) {
      Dialog.alert({
        title: '提示',
        message: content
      }).then(() => {
        if (callback instanceof Function) callback()
      })
    },
    showComfirm(title, callback, { content } = { content: '' }) {
      Dialog.confirm({
        title: title,
        message: content
      })
        .then(() => {
          if (callback instanceof Function) callback(true)
        })
        .catch(() => {
          if (callback instanceof Function) callback(false)
        })
    },
    // 手机号码正则表达式
    checkPhoneReg(phone) {
      let phoneReg = /(^1\d{10}$)|(^[0-9]\d{7}$)/
      return !phoneReg.test(phone)
    },
    // 身份证号码正则表达式
    checkIdCardReg(idcard) {
      var IdNumberReg = /^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/
      return !IdNumberReg.test(idcard)
    },
    // 固定电话正则表达式
    checkTel(tel) {
      var telReg = /^0\d{2,3}-?\d{7,8}$/
      return !telReg.test(tel)
    },
    // 回退
    goBack() {
      this.$router.go(-1)
    }
  }
}
