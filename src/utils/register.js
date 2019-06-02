// import store from '@/store'
import { registerViaPhoneNo } from '@/apis/user'
import { get, set } from '@/utils/storage'

export const register = (encryptedData, iv) => new Promise((resolve, reject) => {
    console.log(`register with encryptedData=${encryptedData} &iv= ${iv}`)
    registerViaPhoneNo(encryptedData, iv).then((res) => {
      console.log(res)
      //重置jwtToken
      if(res.data.jwt){
        set('jwt',res.data.jwt)
      }
      
      // const info = res.data
      // store.dispatch('setUserBaseInfo', info)
      resolve(res)
    }).catch((err) => {
      reject(err);
    })
  });
