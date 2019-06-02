const queryString = require('query-string');
const config = require('@/config/index')
// const _ = require('lodash')

// import { build, dev } from '../../config/index'
import { get, set } from '@/utils/storage'

const request = method => (path, data) => {
  // console.log(config.default)
  let url = `${config.default.domain}/${path}`
  console.log(`${method} begin: ${url}`, data ? `, parameters: ${JSON.stringify(data)}` : '')
  data = data || {}

  const jwt = get('jwt')
  let reqHeader = {
    'content-type': 'application/json; charset=utf-8',
    'Authorization': 'Bearer ' + jwt,
  }

  if (process.env.MOCK) {
    // 无论什么method, data的值会被
    Object.assign(reqHeader, { Mock: process.env.MOCK })

  }
  // if (!_.isEmpty(data) && method === 'GET') {
  //   url += `?${queryString.stringify(data)}`;
  // }

  return new Promise((resolve, reject) => {
    wx.request({
      method,
      url,
      data,
      header: reqHeader,
      success(res) {
        console.log(`${method} begin: ${url}, success:`, res.data)
        if (res.statusCode >= 400) {
          reject(res)
        } else {
          resolve(res)
        }
      },
      fail(err) {
        console.log(`${method} begin: ${url}, failure:`, err)
        reject(err)
      },
    })
  })
}

export const onGet = request('GET')
export const onPost = request('POST')
export const onDelete = request('DELETE')
export const onPut = request('PUT')
