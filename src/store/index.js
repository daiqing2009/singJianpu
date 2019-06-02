import Vue from 'vue'
import Vuex from 'vuex'

// import sys from './modules/sys'
// import user from './modules/user'
// import jianpu from './modules/jianpu'

Vue.use(Vuex)

const store = new Vuex.Store({})

const storeContext = require.context('@/store/modules', true, /\.js$/)

storeContext.keys().forEach((modules) => {
  store.registerModule(modules.replace(/(^\.\/)|(\.js$)/g, ''), storeContext(modules).default)
})

Vue.prototype.$store = store
export default store
