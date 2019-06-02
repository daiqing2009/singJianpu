// import { addWishList, getWishList, recordShare, recordViewShare } from '@/apis/shopcat'
import { getMember, getUnionId, saveMember } from '@/apis/user'
import { get, set } from '@/utils/storage'
// import _ from 'lodash'
import { actionCreator, mutationCreator } from 'vue-actions'

const BASE_INFO_KEY = 'USER/INFO'
const MEMBER_KEY = 'MEMBER/INFO'

const store = {
  baseInfo: get(BASE_INFO_KEY),
  memberInfo: get(MEMBER_KEY),
}

const getters = {
  // isBrandMember: state => !!_.get(state.memberInfo, 'brandInfo.cardId'),
}

const actions = {
  setUserBaseInfo: actionCreator('USER/SET'),
  getMember: actionCreator('MEMBER/GET', ({ state }) => getMember(state.baseInfo)),
  getUserDetail: actionCreator('MEMBER/DECRYPT', ({ state }, payload) => getUnionId(
    state.baseInfo.session_key,
    payload.encryptedData,
    payload.iv,
  )),
  saveMember: actionCreator('MEMBER/SAVE', ({ state }, { extraData, shareUnionId }) => {
    const {
      unionid, openid, nickName, avatarUrl,
    } = state.baseInfo
    return saveMember(extraData, {
      unionid, openid, shareUnionId, nickName, avatarUrl,
    })
  }),
}

const mutations = mutationCreator((on) => {
  on(actions.setUserBaseInfo, (state, info) => {
    const baseInfo = Object.assign({}, state.baseInfo, info)
    set(BASE_INFO_KEY, baseInfo)
    state.baseInfo = baseInfo
  })
  on.success(actions.getUserDetail, (state, res) => {
    const detail = res.data
    const info = Object.assign(state.baseInfo, detail, {
      unionid: detail.unionId,
    })
    set(BASE_INFO_KEY, info)
    state.baseInfo = info
  })
  on.success(actions.getMember, (state, res) => {
    set(MEMBER_KEY, res.data)
    state.memberInfo = res.data
  })
})

export default {
  state: store,
  getters,
  actions,
  mutations,
}
