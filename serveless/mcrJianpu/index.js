// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

//TODO: 简单识别出图片中关于简谱的部分opencv
const normalizePic = () => {
  //TODO: 调整图片大小
  //TODO: 找出图片中间的

}

//TODO: 使用NeuralNetwork识别音符（数字）
const recognizeNotes = () => {

}

// TODO: 将简谱编码为可以被播放的格式
const encodeJianpu = () => {

}

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  //TODO: 读取对应的图片

  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }
}
