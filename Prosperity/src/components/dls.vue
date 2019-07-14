<template>
  <div>
    <div v-if="index%2===0">
      <dl class="dl_x" v-for="(item,index) in list" :key="index" @click="gotocommodityDtails(item)">
        <dt>
          <img :src="item.mainImgUrl" alt>
        </dt>
        <dd>
          <div class="titleBox">{{item.title}}</div>
          <div class="moneySpanBox">
            <span class="moneySpan1">
              ￥
              <b>{{item.marketPrice}}</b>
            </span>
            <span class="moneySpan3">
              赚￥
              <b>{{item.memberDiscountPrice}}</b>
            </span>
          </div>
        </dd>
      </dl>
    </div>
    <div class="detail" v-else>
      <ul>
        <li v-for="(item,index) in list" :key="index" @click="gotocommodityDtails(item)">
          <img :src="item.mainImgUrl" alt>
          <div class="contents">{{item.title}}</div>
          <div class="money">
            <span>￥</span>
            <b>{{item.marketPrice}}</b>
          </div>
          <p>
            <span>赚￥{{item.memberDiscountPrice}}</span>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  props: ["list", "index"],
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
    ...mapMutations({
      gotocommodityDtails: "commodityDetails/gotocommodityDtails"
    })
  },
  created() {},
  mounted() {}
};
</script>
<style  lang="scss">
.dl_x {
  display: flex;
  height: 282rpx;
  background: #fff;
  border-radius: 10rpx;
  margin-top: 20rpx;
  dt {
    padding: 20rpx;
    width: 240rpx;
    height: 240rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8rpx;
    img {
      width: 100%;
      height: 100%;
    }
  }
  dd {
    flex: 1;
    box-sizing: border-box;
    padding: 20rpx;
    .titleBox {
      color: #323a45;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      line-height: 40rpx;
    }
    .moneySpanBox {
      height: 120rpx;
      box-sizing: border-box;
      padding-top: 80rpx;
      display: flex;
      align-items: center;
      .moneySpan1 {
        color: #fc5d7b;
        margin-right: 20rpx;
        display: flex;
      }
      .moneySpan3 {
        padding: 0 6rpx;
        border-radius: 6rpx;
        font-size: 24rpx;
        background-color: #ffe8ed;
        color: #fc5d7b;
        display: flex;
      }
    }
  }
}
.detail {
  width: 100%;
  padding: 8rpx;
  box-sizing: border-box;
  ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 100rpx;
    box-sizing: content-box;
    li {
      width: 236rpx;
      height: 484rpx;
      background: #fff;
      border-radius: 10rpx;
      overflow: hidden;
      margin: 10rpx 0 0 8rpx;
      box-sizing: border-box;
      img {
        width: 100%;
        height: 264rpx;
      }
      .contents {
        box-sizing: border-box;
        padding: 10rpx;
        width: 254rpx;
        height: 80rpx;
        font-size: 24rpx;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: #323a45;
        line-height: 34rpx;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .money {
        width: 100%;
        display: flex;
        margin-top: 10rpx;
        span {
          width: 18rpx;
          height: 32rpx;
          font-size: 28rpx;
          font-family: PingFangSC-Medium;
          font-weight: 500;
          color: #fc5d7b;
          line-height: 32rpx;
          margin-top: 20rpx;
        }
        b {
          height: 64rpx;
          font-size: 36rpx;
          font-family: DINAlternate-Bold;
          font-weight: 700;
          color: #fc5d7b;
          line-height: 62rpx;
          margin-top: 2rpx;
        }
      }
      p {
        height: 24rpx;
        font-size: 22rpx;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: #999da2;
        line-height: 24rpx;
        span {
          color: #fc5d7b;
        }
      }
    }
  }
}
</style>