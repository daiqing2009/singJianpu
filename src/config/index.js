export default {
  //生产环境
  // domain: 'http://10.11.107.100:13000',
  //SIT环境
  // domain: 'http://10.11.107.90:3000',
  //正式的配置
  domain: process.env.NODE_ENV === 'production' ? 'https://shopcat.baozun.com/eye' : 'http://localhost:3000',
}
