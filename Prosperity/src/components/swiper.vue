<template>
  <swiper
    class="swiper"
    indicator-dots="true"
    autoplay="true"
    duration="1000"
    interval="2000"
    circular="true"
  >
    <swiper-item class="swiperItem">
      <cover-image
        class="img"
        src="https://jnup.oss-cn-beijing.aliyuncs.com/product/2defe8aa432c89162ce0251a69ef7d02.jpg"
      />
    </swiper-item>
    <swiper-item class="swiperItem">
      <cover-image
        class="img"
        src="https://jnup.oss-cn-beijing.aliyuncs.com/product/d86697416051ac31d0c91a7cd4cae65e.jpg"
      />
    </swiper-item>
    <swiper-item class="swiperItem">
      <cover-image
        class="img"
        src="https://jnup.oss-cn-beijing.aliyuncs.com/product/9ed292f334e1fd8a145ef5897b2e315d.jpg"
      />
    </swiper-item>
    <swiper-item class="swiperItem">
      <cover-image
        class="img"
        src="https://jnup.oss-cn-beijing.aliyuncs.com/product/df3587b37927f0c0f2105183fd9dba1d.jpg"
      />
    </swiper-item>
  </swiper>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
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