export const set = (key, value) => {
  try {
    wx.setStorageSync(key, value)
  } catch (e) {
    console.log('error')
  }
}

export const get = (key, defaultvalue = {}) => {
  wx.getStorageSync(key)
  try {
    const value = wx.getStorageSync(key)
    return value || defaultvalue
  } catch (e) {
    console.log('error')
    return defaultvalue
  }
}
