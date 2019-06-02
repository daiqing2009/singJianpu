<template>
  <div>
    <i-card title="卡片标题" extra="额外内容" thumb="https://i.loli.net/2017/08/21/599a521472424.jpg">
      <view slot="content">内容不错</view>
      <view slot="footer">尾部内容</view>
    </i-card>
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
    }),
    ...mapActions(["getJianpuList"])
  },
  methods: {
    handleReachBottom() {
      //TODO: 展示loading的效果
      if (hasNextPage()) {
        jianpuPageNo++;
        this.getJianpuList(jianpuPageNo);
      } else {
        //TODO: 展示“到底了“的效果
      }
    }
  },
  onReady() {
    this.getJianpuList(jianpuPageNo);
  },
  created() {
    // let app = getApp()
  }
};
</script>

<style scoped>
.jianpu-card {
  margin-top: 10rpx;
  margin-bottom: 10rpx;
}
</style>
