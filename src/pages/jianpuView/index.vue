<template>
  <div>
    <div class="music-sheet">
      <movable-area class="music-sheet">
        <movable-view style="img" direction="all">
          <image class="img" :src="jianpu.sheetPic"/>
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
// const musje = this.globalData.musje;
const musje = require("../../../static/musje/musje.js");

export default {
  data() {
    return {
    };
  },
  computed: {
    ...mapState({
      // jianpuList: state => state.jianpu.jianpuList,
      // jianpuPageNo: state => state.jianpu.jianpuPageNo
      jianpu: state => state.jianpu.jianpuCurrent,
      // musje: this.musje
    })
  },
  methods: {
    navToEdit() {},
    play() {
      // console.log(this.score);
      this.score.play();
    },
    pause() {
      // console.log(this.score);
      this.score.stop();
    },
    share() {},
    ...mapActions("jianpu", ["getJianpu"])
  },
  onLoad() {
    // let app = getApp()
    console.log(this.$root.$mp.query); //{'param' : param}
    const query = this.$root.$mp.query;
    this.getJianpu(query.jianpuId);
  },
  mounted() {
    //初始化MIDI
    musje.loadPlugin({
      soundfontUrl: "cloud://test-169e27.7465-test-169e27/soundfont/",
      instrument: "acoustic_grand_piano", // or multiple instruments
      onsuccess: function() {
        // $scope.playDisabled = false;
        // $scope.$digest();
        console.log("musje loaded")
      }
    });
    let score = {};
    try {
      score = musje.parse(this.jianpu.rytheym + " " + this.jianpu.musString);
    } catch (err) {
      this.totalMeasures = "N/A";
      this.error = err.message;
    }
    if (score) {
      this.score = new musje.Score(score);
    }
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
  /* width: 100%; */
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
