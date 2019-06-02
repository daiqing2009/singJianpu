// import { onGet, onPost } from '@/utils/request';
const db = wx.cloud.database()
const jianpu = db.collection('jianpu')
const musSheet = db.collection('musicSheet')

export const getJianpuList = (pageNo, itemPerPage) =>
{
  console.log(`getJianpuList on page(${pageNo}) and itemPerPage(${itemPerPage})`)

  return jianpu
    .skip(pageNo * itemPerPage)
    .get()
    .then((res) => {
      return res
    })
}

export const getJianpu = (id) => {
  return jianpu
    .doc(id)
    .get()
    .then((res) => { return res })
}

// export const saveJianpu = (openid, jianpu) => onPost(`api/Jianpu/${openid}`, {
//   ...jianpu,
// });

// export const mcrJianpu = () => () =>
