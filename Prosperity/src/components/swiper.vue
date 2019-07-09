<template>
  <swiper
    class="swiper"
    indicator-dots="true"
    autoplay="true"
    duration="1000"
    interval="2000"
    circular="true"
  >
    <swiper-item class="swiperItem" v-for="(item,index) in swiperList" :key="index">
      <cover-image
        class="img"
        :src="item.imgUrl"
        @click="godisser(item.contentValue)"
      />
    </swiper-item>
  </swiper>
</template>
<script>
import {mapActions} from "vuex"
export default {
  props: ['swiperList'],
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
    ...mapActions({
      getdissertation:"dissertation/getdissertation"
    }),
    godisser(id){
      this.getdissertation(id)
      wx.navigateTo({
          url:  "/pages/dissertation/main"
      })
    }
  },
  created() {},
  mounted() {
  }
};
</script>
<style scoped lang="scss">
.swiper {
  width: 100%;
  height: 39.5vw;
  box-sizing: border-box;
}
.swiperItem {
  position: absolute;
  width: 100%;
  height: 100%;
  display: block;
  overflow: hidden;
  will-change: transform;
  .img {
    height: 100%;
    width: 100%;
    border-radius: 10rpx;
  }
}
</style>