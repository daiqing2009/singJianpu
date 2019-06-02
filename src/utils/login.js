import { getSession } from '@/apis/user'
import { get, set } from '@/utils/storage'
// import store from '@/store'

export default (forceLogin) => {
  const login = () => new Promise((resolve, reject) => {
    wx.login({
      success({ code }) {
        getSession(code).then((res) => {
          // console.log(res)
          // const info = res.data
          // store.dispatch('setUserBaseInfo', info)
          // 设置jwt token, 类似与java的session ID
          if(res.data.jwt){
            set('jwt',res.data.jwt)
            set("authorised", res.data.authorised);
          }
          resolve(res)
        }).catch((err) => {
          reject(err);
        })
      },
      fail() {
        reject();
      },
    })
  })

  if (!forceLogin) {
    return new Promise((resolve) => {
      wx.checkSession({
        success() {
          resolve()
        },
        fail() {
          resolve(login())
        },
      })
    })
  }

  return login()
}
