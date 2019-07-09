<template>
  <main>
    <div class="nav">
      <span>综合</span>
      <span>最新</span>
      <span>
        价格
        <b :class="sortType===3?'rizeActive':'rise'"></b>
        <b :class="sortType===4?'dropActive':'drop'"></b>
      </span>
    </div>
    <div class="content">
      <dl v-for="(item,index) in classData" :key="index">
        <dt>
          <img :src="item.mainImgUrl" alt>
        </dt>
        <dd>
          <h5>{{item.title}}</h5>
          <span class="border">包税</span>
          <p class="price">
            ￥
            <b>{{item.salesPrice}}</b>
          </p>
          <p>
            <span class="first">￥{{item.vipPrice}}</span>
            <span class="last">赚￥{{item.memberDiscountPrice}}</span>
          </p>
        </dd>
      </dl>
    </div>
  </main>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  props: ["classData"],
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
.rise {
  position: absolute;
  top: 3px;
  right: 38px;
  color: #fc5d7b;
  width: 0;
  height: 0;
  border-right: 5px solid transparent;
  border-left: 5px solid transparent;
  border-bottom: 5px solid #000;
}
.drop {
  position: absolute;
  top: 11px;
  right: 38px;
  width: 0;
  height: 0;
  border-right: 5px solid transparent;
  border-left: 5px solid transparent;
  border-top: 5px solid #000;
}
.rizeActive {
  position: absolute;
  top: 3px;
  right: 38px;
  color: #fc5d7b;
  width: 0;
  height: 0;
  border-right: 5px solid transparent;
  border-left: 5px solid transparent;
  border-bottom: 5px solid red;
}

.dropActive {
  position: absolute;
  top: 11px;
  right: 38px;
  width: 0;
  height: 0;
  border-right: 5px solid transparent;
  border-left: 5px solid transparent;
  border-top: 5px solid red;
}
.nav {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  margin-top: 10px;
  background: #fff;
  span {
    position: relative;
    flex: 1;
    text-align: center;
    font-size: 13px;
    font-weight: 400;
  }
}
.content {
  flex: 1;
  width: 100%;
  background: #f3f7f7;
  padding: 18rpx 10rpx 0;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  dl {
    width: 48%;
    background: #fff;
    border-radius: 10rpx;
    display: flex;
    flex-direction: column;
    margin: 8rpx 1%;
    padding: 10rpx 20rpx;
    box-sizing: border-box;
    dt {
      padding: 60rpx 46rpx 30rpx 28rpx;
      box-sizing: border-box;
      img {
        width: 295rpx;
        height: 277rpx;
      }
    }
    dd {
      width: 100%;
      flex: 1;
      h5 {
        font-size: 24rpx;
        padding-left: 10rpx;
        color: #323a45;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .border {
        color: #fc5d7b;
        border: 2rpx solid #fc5d7b;
        border-radius: 6rpx;
        font-size: 10px;
        padding: 0 10rpx;
        box-sizing: border-box;
      }
      .price {
        color: #fc5d7b;
        font-size: 14px;
        b {
          display: inline;
          font-size: 18px;
          color: #fc5d7b;
        }
      }
      .first {
        font-size: 22rpx;
        color: #a87831;
        padding: 5rpx;
        box-sizing: border-box;
      }
      .last {
        font-size: 22rpx;
        background: #ffe8ed;
        color: #fc5d7b;
        margin-left: 10rpx;
      }
    }
  }
}
</style>