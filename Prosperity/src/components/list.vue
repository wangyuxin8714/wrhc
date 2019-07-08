<template>
  <div>
    <!-- 上下结构 -->
    <template v-if="types==='top'">
      <dl class="top" v-for="(item,index) in goodList" :key="index">
        <dt>
          <img class="img" :src="item.imgUrl" />
        </dt>
        <dd class="shop_title">{{item.title}}</dd>
        <dd class="shop_price">￥{{item.salesPrice}}</dd>
      </dl>
    </template>
    <!-- 左右结构 -->
    <template v-if="types==='left'">
      <dl class="left" v-for="(item,index) in chooseList" :key="index">
        <dt>
          <img class="img" :src="item.productVo.mainImgUrl"/>
        </dt>
        <dd>
          <p class="shop_title">{{item.productVo.title}}</p>
          <p class="shop_discount">
            <span>包邮</span>
            <span>报税</span>
          </p>
          <p class="shop_price">
            <span>￥</span>
            <span>{{item.productVo.salesPrice}}</span>
            <span>￥{{item.productVo.vipPrice}}</span>
            <img class="shop_price_img" src="../../static/images/vip.png" />
            <span>赚￥{{item.productVo.earnMoney}}</span>
          </p>
        </dd>
      </dl>
    </template>
  </div>
</template>
<script>
export default {
  props: ["types", "chooseList", "goodList"],
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
dl.top {
  display: inline-block;
  width: 30vw;
  margin: 0 0 2.5vw 2.5vw;
  dt {
    width: 30vw;
    height: 30vw;
    display: flex;
    align-items: center;
    justify-content: center;
    .img {
      width: 100%;
      height: 100%;
    }
  }
  .shop_title {
    font-size: 28rpx;
    color: #323a45;
    line-height: 40rpx;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
  .shop_price {
    font-size: 28rpx;
    color: #fc5d7b;
    margin-top: 2vw;
  }
}
dl.left {
  display: flex;
  padding-right: 20rpx;
  box-sizing: border-box;
  margin: 20rpx 0;
  .img {
    width: 200rpx;
    height: 216rpx;
    margin: 0 20rpx;
  }
  .shop_title {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    font-size: 28rpx;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-bottom: 20rpx;
    line-height: 2;
  }
  .shop_discount {
    margin-bottom: 10rpx;
    span {
      border: 2rpx solid #fc5d7b;
      color: #fc5d7b;
      font-size: 20rpx;
      padding: 2rpx 6rpx;
      box-sizing: border-box;
      margin: 0 10rpx;
    }
  }
  .shop_price {
    color: #fc5d7b;
    line-height: 2;
    span:nth-child(1) {
      font-size: 28rpx;
    }
    span:nth-child(2) {
      font-size: 44rpx;
    }
    span:nth-child(3) {
      margin-left: 10rpx;
      color: #a87831;
      font-size: 20rpx;
    }
    .shop_price_img {
      display: inline-block;
      width: 42rpx;
      height: 20rpx;
      margin: 0 6rpx;
    }
    span:last-child {
      font-size: 20rpx;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: #fc5d7b;
      line-height: 24rpx;
      background: #ffe8ed;
      margin-left: 10rpx;
      padding: 4rpx 0;
      box-sizing: border-box;
    }
  }
}
</style>