import Vue from 'vue'
import App from './App'
import MpvueRouterPatch from 'mpvue-router-patch'

Vue.use(MpvueRouterPatch)
Vue.config.productionTip = false
App.mpType = 'app'

// 支持云开发
wx.cloud.init({
  env: 'test-169e27',
  traceUser: true
})

const app = new Vue(App)
app.$mount()
// const globalData = getApp().globalData
// globalData.musje = musje
// Vue.prototype.globalData = globalData
