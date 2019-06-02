<script>
// import { get, set } from '@/utils/storage'

// 作者：roberthuang
// 链接：https://juejin.im/post/5c341e1d6fb9a049f66c4876
// 来源：掘金
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
// 检测小程序是否有新版本更新
const checkVersion = () => {
  if (wx.canIUse("getUpdateManager")) {
    const updateManager = wx.getUpdateManager();
    updateManager.onCheckForUpdate(function(res) {
      // 请求完新版本信息的回调
      if (res.hasUpdate) {
        updateManager.onUpdateReady(function() {
          wx.showModal({
            title: "更新提示",
            content: "新版本已经准备好，是否重启应用？",
            success: function(res) {
              if (res.confirm) {
                // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                updateManager.applyUpdate();
              }
            }
          });
        });
        // 小程序有新版本，会主动触发下载操作（无需开发者触发）
        wx.getUpdateManager().onUpdateFailed(function() {
          // 当新版本下载失败，会进行回调
          wx.showModal({
            title: "提示",
            content: "检查到有新版本，下载失败，请检查网络设置",
            showCancel: false
          });
        });
      }
    });
  } else {
    // 版本过低则无法使用该方法
    wx.showModal({
      title: "提示",
      confirmColor: "#5BB53C",
      content: "当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。"
    });
  }
};
export default {
  created() {
    // 调用API从本地缓存中获取数据
    /*
     * 平台 api 差异的处理方式:  api 方法统一挂载到 mpvue 名称空间, 平台判断通过 mpvuePlatform 特征字符串
     * 微信：mpvue === wx, mpvuePlatform === 'wx'
     * 头条：mpvue === tt, mpvuePlatform === 'tt'
     * 百度：mpvue === swan, mpvuePlatform === 'swan'
     * 支付宝(蚂蚁)：mpvue === my, mpvuePlatform === 'my'
     */

    let logs;
    if (mpvuePlatform === "my") {
      logs = mpvue.getStorageSync({ key: "logs" }).data || [];
      logs.unshift(Date.now());
      mpvue.setStorageSync({
        key: "logs",
        data: logs
      });
      checkVersion();
    } else {
      logs = mpvue.getStorageSync("logs") || [];
      logs.unshift(Date.now());
      mpvue.setStorageSync("logs", logs);
    }
  },
  log() {
    console.log(`log at:${Date.now()}`);
  }
};
</script>


<style src="./common.scss" lang="scss">
</style>
<style>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>
