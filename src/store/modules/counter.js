import Vue from 'vue'
import { actionCreator, mutationCreator } from 'vue-actions'

const state = {
  count1: 0
}

const actions = {
  // increment ({
  //   commit
  // }) {
  //   commit('INCREMENT')
  // },
  increment: actionCreator('INCREMENT'),
  // decrement({
  //   commit
  // }) {
  //   commit('DECREMENT')
  // },
  // getProvince({
  //   commit
  // }, params = {}) {
  //   return Vue.iBox.http('globalUrl.getProvince', params)({
  //     method: 'get'
  //   }).then(res => {
  //     console.log('vuex中接口返回的提示：' + res.data.provinceShort)
  //     return res
  //   })
  // }
}

const mutations = mutationCreator((on) => {
  on(actions.increment, (state) => {
    state.count1 += 2
  });
})

// {
//   INCREMENT: (state) => {
//     const obj = state
//     obj.count1 += 1
//   },
//   DECREMENT: (state) => {
//     const obj = state
//     obj.count1 -= 1
//   },
// }

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
