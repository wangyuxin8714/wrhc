<template>
  <div class="title">
    <div class="title_left">
      <template v-if="titFlag">
        <span>为你精选</span>
        <span>等你来抢</span>
      </template>
      <template v-else>
        <span>精选好物</span>
        <span>等你来抢</span>
      </template>
    </div>
    <div class="title_right">
      <cover-image class="title_img" src="/static/images/gd.png"/>
    </div>
  </div>
</template>
<script>
export default {
  props: ["titFlag"],
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
.title {
  display: flex;
  font-size: 26rpx;
  justify-content: space-between;
  padding: 0 20rpx;
  margin: 6rpx 0;
  line-height: 3;
  .title_left {
    span:first-child {
      font-size: 40rpx;
      padding-right: 20rpx;
      box-sizing: border-box;
    }
    span:last-child {
      border-left: 4rpx solid #ccc;
      padding-left: 20rpx;
      box-sizing: border-box;
      font-size: 32rpx;
    }
  }
  .title_right {
    width: 72rpx;
    height: 32rpx;
    margin-top: 44rpx;
  }
}
</style>