<template>
  <div class="myOrder">
    <div class="orderTab">
      <span
        v-for="(item,index) in orderList"
        :key="index"
        :class="{'active':index==ind}"
      >{{item.title}}</span>
    </div>
    <div class="orderMain">
      <div class="orderList">
        <p @click="jump">
          <span>2019-07-08 10:10:10</span>
          <span>已取消</span>
        </p>
        <dl>
          <dt>
            <img
              src="https://jnup.oss-cn-beijing.aliyuncs.com/product/664b019bff10838e9a6d2594a57c1097.png"
              alt
            >
          </dt>
          <dd>
            <h5>PEPPA PIG/ 小猪佩奇 儿童牛奶香型洗手液 300ML</h5>
            <h6>规格:默认</h6>
            <p>
              <span>￥39</span>
              <span>x1</span>
            </p>
          </dd>
        </dl>
        <div @click="jump">
          <p>
            共1件商品 合计:
            <span>￥39</span>
          </p>
        </div>
      </div>
    </div>
    <div class="orderNull" v-if="null">
      <div>
        <img src="/../static/images/wudingdan.png" alt>
        <p>暂时没有订单噢~</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      orderList: [
        {
          title: "全部",
          id: 0
        },
        {
          title: "待付款",
          id: 1
        },
        {
          title: "待发货",
          id: 2
        },
        {
          title: "待收货",
          id: 3
        }
      ],
      ind: 0
    };
  },
  methods: {
    jump() {
      wx.navigateTo({
        url: "/pages/orderDetail/main"
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.myOrder {
  width: 100%;
  height: 100%;
}
.orderTab {
  width: 100%;
  height: 34px;
  background: #fff;
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
  font-size: 30rpx;
  position: fixed;
  top: 0;
  left: 0;
  span {
    padding: 0 10px;
    height: 34px;
    line-height: 34px;
    &.active {
      border-bottom: 6rpx solid #33d6c5 !important;
    }
  }
}
.orderMain {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 18rpx;
  box-sizing: border-box;
  margin-top: 80rpx;
}
.orderList {
  width: 100%;
  background: #fff;
  margin-top: 24rpx;
  border-radius: 12rpx;
  > p {
    width: 100%;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    height: 74rpx;
    line-height: 74rpx;
    padding: 0 24rpx;
    span {
      font-size: 14px;
      color: #323a45;
    }
  }
  > dl {
    height: 208rpx;
    padding: 12rpx 24rpx;
    border-bottom: 2rpx solid #eee;
    width: 100%;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    dt {
      width: 25%;
      height: 100%;
      background: #eee;
      img {
        width: 100%;
        height: 100%;
      }
    }
    dd {
      width: 70%;
      height: 100%;
      font-size: 28rpx;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      h6 {
        color: #999da2;
        font-size: 12px;
      }
      p {
        width: 100%;
        display: flex;
        justify-content: space-between;
        span {
          color: #323a45;
          font-size: 12px;
        }
      }
    }
  }
  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-around;
    height: 208rpx;
    border-bottom: 2rpx solid #eee;
    p {
      display: flex;
      font-size: 26rpx;
      color: #484848;
      margin-right: 15px;
    }
  }
}
.orderNull {
  width: 100%;
  height: 100%;
  > div {
    width: 100%;
    height: 100%;
    margin-top: 100rpx;
    margin: 0 auto;
    text-align: center;
    font-size: 32rpx;
    color: #999;
    img {
      width: 276rpx;
      height: 276rpx;
      border-radius: 50%;
      margin-top: 300rpx;
    }
  }
}
</style>

