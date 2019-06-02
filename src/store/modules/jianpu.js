import { getJianpuList, getJianpu, saveJianpu } from '@/apis/jianpu'
import { get, set } from '@/utils/storage'
import { actionCreator, mutationCreator } from 'vue-actions'

const JP_LIST_KEY = "JP/LIST"
const JP_CURRENT_KEY = "JP/CURRENT"
const JP_SHEET_KEY = "JP/SHEET"
const ITEM_PER_PAGE = 20

const state = {
  jianpuList: get(JP_LIST_KEY),
  jianpuCurrent: get(JP_CURRENT_KEY),
  jianpuSheet: get(JP_SHEET_KEY),
  jianpuPageNo: 0
}

const getters = {
  // isBrandMember: state => !!_.get(state.memberInfo, 'brandInfo.cardId'),
  // hasDecoded: state => !!_.get(state.jianpuInfo, 'brandInfo.cardId'),
}

const actions = {
  // TODO: 判断的是否是页末，如果是,不再更新，直接返回”到底了“
  getJianpuList: actionCreator(JP_LIST_KEY + '/GET', ({ state }) =>
    getJianpuList(state.jianpuPageNo, ITEM_PER_PAGE)
  ),
  getJianpu: actionCreator(JP_CURRENT_KEY + '/GET', ({ state }, { id }) => getJianpu(id))
  // saveJianpu: actionCreator(JP_INFO_KEY + '/SET', ({ state }, { jianpu }) => {
  //   return saveJianpu(  })
  // }),
}

const mutations = mutationCreator((on) => {
  on.success(actions.getJianpuList, (state, res) => {
    const newItems = res.data
    console.log(`getJianpuList result:(${res.errMsg})`)
    //把新的内容加入列表
    const jianpuList = Object.assign(state.jianpuList, newItems)
    // console.log(jianpuList)
    set(JP_LIST_KEY, jianpuList)
    state.jianpuList = jianpuList
  })
  on.success(actions.getJianpu, (state, res) => {
    console.log(`getJianpuList result:(${res.errMsg})`)
    const jianpuCurrent = res.data
    console.log(jianpuCurrent)
    set(JP_CURRENT_KEY, jianpuCurrent)
    state.jianpuCurrent = jianpuCurrent
  })
})

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
