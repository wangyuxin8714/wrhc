<template>
  <div class="shareWrap">
    <h2>男童春装套装2019新款条纹T恤儿童背带裤套装潮卡通童装</h2>
    <div class="price">【在售价】69元</div>
    <div class="center">
      <div class="left">
        <canvas style="width: 168px; height: 298px;"></canvas>
      </div>
      <div class="right">
        <div class="prolist">
          <cover-image class="img1" src="/static/images/true2.png"/>
          <cover-image
            class="img2"
            src="https://jnup.oss-cn-beijing.aliyuncs.com/web/uploads/image/store_1/66c595c9ee1860102eecd765dc214e8252ef5895.jpg"
          />
        </div>
      </div>
    </div>
    <div class="footer">
      <ul class="list">
        <li>
          <cover-image class="imgs" src="/static/images/6.png"/>
          <span>保存到相册</span>
        </li>
        <li>
          <cover-image class="imgs" src="/static/images/7.png"/>
          <span>微信好友</span>
        </li>
      </ul>
    </div>
  </div>
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
.shareWrap {
  width: 100%;
  height: 100%;
  h2 {
    font-weight: 600;
    font-size: 40rpx;
    width: 658rpx;
    margin: 0 auto;
  }
  .price {
    width: 690rpx;
    height: 60rpx;
    margin: 0 auto;
    margin-top: 20rpx;
  }
  .center {
    width: 700rpx;
    height: 324px;
    margin: 30rpx auto 0;
    display: flex;
    justify-content: space-between;
    .left {
    }
    .right {
      .prolist {
        width: 140rpx;
        height: 140rpx;
        border: 2rpx solid #ededed;
        margin-left: 15rpx;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        margin-bottom: 18rpx;
        .img1 {
          width: 42rpx;
          height: 42rpx;
          position: absolute;
          top: 4rpx;
          right: 4rpx;
        }
        .img2 {
          width: 100rpx;
          height: 100rpx;
        }
      }
    }
  }
}
.footer {
  height: 175rpx;
  .list {
    display: flex;
    justify-content: space-around;
    li {
      text-align: center;
      font-size: 30rpx;
      display: flex;
      flex-direction: column;
      .imgs {
        width: 100rpx;
        height: 100rpx;
        margin: 15rpx auto;
      }
    }
  }
}
</style>