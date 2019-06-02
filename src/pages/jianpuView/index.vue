<template>
  <div>
    <div class="music-sheet">
      <movable-area class="music-sheet">
        <movable-view style="img" direction="all">
          <image class="img" :src="jianpu.sheetPic"></image>
        </movable-view>
      </movable-area>
    </div>
    <div class="3-action-buttons">
      <icon class="_icon icon-edit .icon2x" @click="navToEdit"></icon>
      <icon class="_icon icon-play .icon2x" @click="play"></icon>
      <icon class="_icon icon-pause .icon2x" @click="pause"></icon>
      <icon class="_icon icon-share .icon2x" @click="share"></icon>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
require('../../../static/musje/snap.svg-min.js')
// require('../../../static/musje/MIDI-wrapper.js')

// const musje =  require('../../../static/musje/musje.min.js')
export default {
  data() {
    return {};
  },
  computed: {
    // score: musje.parse(this.jianpu.chef+ ' '  + this.jianpu.rytheym  + ' ' + this.jianpu.musString),
    ...mapState({
      // jianpuList: state => state.jianpu.jianpuList,
      // jianpuPageNo: state => state.jianpu.jianpuPageNo
      jianpu: state => state.jianpu.jianpuCurrent
      // currentShop: state => state.shop.currentShop
    })
  },
  methods: {
    navToEdit() {},
    play() {
      score.play();
    },
    pause() {},
    share() {},
    ...mapActions("jianpu", ["getJianpu"])
  },
  onLoad() {
    // let app = getApp()
    console.log(this.$root.$mp.query); //{'param' : param}
    const query = this.$root.$mp.query;
    this.getJianpu(query.jianpuId)
  }
};
</script>

<style scoped>
.music-sheet {
  height: 800rpx;
  width: 100%;
  background: red;
}
.img {
  width: 100%;
  clear: both;
  display: block;
}

.3-action-buttons {
}

.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
