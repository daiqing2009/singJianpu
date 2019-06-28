<template>
  <div>
    <van-panel title="卡片标题" extra="额外内容" thumb="https://i.loli.net/2017/08/21/599a521472424.jpg">
      <view slot="content">内容不错</view>
      <view slot="footer">尾部内容</view>
    </van-panel>
    <van-panel
      class="jianpu-card"
      v-for="(item, index) in jianpuList"
      :key="index"
      :title="item.title"
      :thumb="item.thumb"
      :extra="item.chef+' '+item.rytheym"
      @click="viewJianpu(item._id)"
    >
      <view slot="content">{{item.lyrics}}</view>
      <view slot="footer">{{item.musString}}</view>
    </van-panel>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      jianpuList: state => state.jianpu.jianpuList,
      jianpuPageNo: state => state.jianpu.jianpuPageNo
    })
  },
  methods: {
    ...mapActions("jianpu", ["getJianpuList"]),
    viewJianpu(id) {
      const path = "../jianpuView/main";
      const query = {
        jianpuId: id
      };
      this.$router.push({ path, query });
      // this.$router.replace({ path, query }) 关闭当前页面，跳转到应用内的某个页面，相当于 wx.redirectTo，location 参数格式与 $router.push 相似，不支持 isTab 及 reLaunch 属性
      // this.$router.back() // 关闭当前页面，返回上一页面
      // this.$router.go(1) // 关闭当前页面，返回上一页面或多级页面，n 为回退层数，默认值为 1
    },
    handleReachBottom() {
      //TODO: 展示loading的效果
      if (hasNextPage()) {
        jianpuPageNo++;
        this.getJianpuList();
      } else {
        //TODO: 展示“到底了“的效果
      }
    }
  },
  onLoad() {
    this.getJianpuList();
  }
};
</script>

<style scoped>
.jianpu-card {
  margin-top: 10rpx;
  margin-bottom: 10rpx;
}
</style>
