import { actionCreator, mutationCreator } from 'vue-actions'
import { get, set } from '@/utils/storage'
// import _ from 'lodash'

const SYS_INFO_ENV_KEY = 'SYS/INFO/ENV'
const SYS_INFO_DEVICE_KEY = 'SYS/INFO/DEVICE'

const store = {
  sysInfoEnv: get(SYS_INFO_ENV_KEY),
  sysInfoDevice: get(SYS_INFO_DEVICE_KEY),
}

const fullScreenDevice = {
  'iphone':['X'],
  'oppo':[],
}
// var windowWidth = 320;
// try {
//   var res = wx.getSystemInfoSync();
//   windowWidth = res.windowWidth;
// } catch (e) {
//   console.error("getSystemInfoSync failed!");
// }
const getters = {
  // isWxwork: state => _.get(state.sysInfoEnv, 'env'),
  // isFullScreen: state => skuCode => !!_.find(state.sysInfoDevice, ({
  //   skuCode,
  // })),
  // getScreenWidth: state => _.get(state.sysInfoEnv, 'windowWidth', 320),
}

const actions = {
  setSysInfoEnv: actionCreator('SYS/INFO/ENV'),
  setSysInfoDevice: actionCreator('SYS/INFO/DEVICE'),
}

const mutations = mutationCreator((on) => {
  on(actions.setSysInfoEnv, (state, env) => {
    const sysEnv = Object.assign({}, state.sysInfoEnv, env)
    set(SYS_INFO_ENV_KEY, sysEnv)
    state.sysInfoEnv = sysEnv
  })
  on(actions.setSysInfoEnv, (state, device) => {
    const sysDevice = Object.assign({}, state.sysInfoDevice, device)
    set(SYS_INFO_DEVICE_KEY, sysDevice)
    state.sysInfoDevice = sysDevice
  })
})

export default {
  state: store,
  getters,
  actions,
  mutations,
};
