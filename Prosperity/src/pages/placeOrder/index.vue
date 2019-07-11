<template>
  <div class="order">
    <div class="box">
      <div class="swrap">
        <div
          class="remiad"
        >订单中包含海外购商品，海关要求必须提供真实姓名和身份证号进行实名认证，且实名人与支付人必须一致，错误信息可能导致无法清关，平台保证您的信息安全，绝不对外泄露！</div>
        <div class="address">
          <dl>
            <dd>
              <p class="name">
                <span>{{placeOrder.subOrder[0].consignee}}</span>
                <span>{{placeOrder.subOrder[0].consigneePhone}}</span>
              </p>
              <p class="fly">
                <cover-image class="location" src="/static/images/locationIcon.png"/>
                <span>{{placeOrder.subOrder[0].addressDetail}}</span>
              </p>
            </dd>
            <dt>
              <cover-image src="/static/images/jt.png"/>
            </dt>
          </dl>
          <cover-image class="blue-red" src="/static/images/orderdetail.png"/>
        </div>
        <div class="userID">
          <span>123</span>
          <span class="sps">15465145615612331564</span>
        </div>
      </div>
      <div class="two">
        <dl class="center">
          <dd>
            <cover-image
              :src="placeOrder.subOrder[0].orderItemProductInfos[0].mainImgUrl"
            />
          </dd>
          <dt>
            <p class="title">{{placeOrder.subOrder[0].orderItemProductInfos[0].productTitle}} </p>
            <p class="title tit">规格：{{placeOrder.subOrder[0].orderItemProductInfos[0].skuName}} </p>
            <p class="title">
              <span>￥{{placeOrder.subOrder[0].orderItemProductInfos[0].salesPrice}}</span>
              <span>x{{placeOrder.subOrder[0].orderItemProductInfos[0].productNumber}}</span>
            </p>
          </dt>
        </dl>
      </div>
      <div class="three">
        <span>发货方式</span>
        <span>快递(包邮):0元</span>
      </div>
      <div class="three">
        <span>订单总计</span>
        <div>
          <span>￥</span>
          <span class="money">{{placeOrder.subOrder[0].totalAmount}}</span>
        </div>
      </div>
      <div class="three">
        <span>优惠券</span>
        <cover-image class="jt" src="/static/images/jt.png"/>
      </div>
      <div class="three">
        <span>
          <cover-image src="/static/images/7.png"/>
          <span class="sps">微信支付</span>
        </span>
        <cover-image src="/static/images/true2.png"/>
      </div>
    </div>
    <div class="footer">
      <div class="left">
        <div>
          <span class="price">总计￥</span>
          <span class="num">{{placeOrder.subOrder[0].totalAmount}}</span>
        </div>
        <div>微信支付</div>
      </div>
      <!-- <div class="right" @click="gotoSettlementView">去支付</div> -->
      <div class="right" @click="gopayment">去支付</div>
    </div>
  </div>
</template>
<script>
import {mapState,mapActions} from "vuex"
export default {
  props: {},
  components: {},
  data() {
    return {
      prepareId:0
    };
  },
  computed: {
    ...mapState({
      placeOrder: state => state.commodityDetails.placeOrder,
    })
  },
  methods: {
    ...mapActions({
      getgopayment:"commodityDetails/getgopayment",
    }),
    async gopayment(){
      let res=await this.getgopayment({
        payChannel:1,
        prepareId:this.prepareId,
        platform:4
      })
      // if(res.res_code===1){
      console.log(res)
        wx.requestPayment({
          timeStamp: res.result.timeStamp,
          nonceStr:  res.result.nonceStr,
          package:  res.result.package,
          signType: 'MD5',
          paySign:res.result.appId,
          success (res) { 
              console.log("支付成功");
          },
          fail (res) {
            console.log("支付失败")
            wx.navigateTo({ url: "/pages/transactionDetail/main" });
          }
        })
      // }
    }
  },
  computed: {},
  methods: {
    gotoSettlementView(){
      wx.navigateTo({
        url:"/pages/settlementView/main"
      })
    }
  },
  created() {},
  mounted() {
    console.log(this.placeOrder)
    this.prepareId=this.placeOrder.prepareId
  }
};
</script>
<style lang="scss">
.order {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  .box {
    width: 100%;
    flex: 1;
    .swrap {
      background: #f3f7f7;
      width: 100%;
      .remiad {
        width: 100%;
        font-size: 24rpx;
        background: #fff6f6;
        color: #484848;
        padding: 20rpx;
        box-sizing: border-box;
      }
      .address {
        margin: 20rpx;
        padding: 20rpx;
        background: #fff;
        position: relative;
        .blue-red {
          width: 100%;
          position: absolute;
          bottom: 0;
          height: 3px;
        }
        dl {
          display: flex;
          justify-content: space-between;
          dd {
            .fly {
              display: flex;
              padding-top: 10px;
              font-size: 15px;
            }
            .name {
              span {
                margin: 10px;
              }
            }
            .location {
              height: 30rpx;
              width: 30rpx;
              margin-top: 5px;
              margin-right: 5px;
            }
          }
        }
        dt {
          cover-image {
            height: 30rpx;
            width: 30rpx;
          }
        }
      }
      .userID {
        padding: 20rpx;
        margin: 10px;
        background: #fff;
        border-bottom: 10px solid #f3f7f7;
      }
    }
    .two {
      width: 100%;
      padding: 20px;
      //  border-top: 10px solid #f3f7f7;
      box-sizing: border-box;
      .center {
        display: flex;
        justify-content: space-between;
        dd {
          cover-image {
            height: 76px;
            width: 76px;
          }
          dt {
            font-size: 12px;
          }
        }
        .title {
          font-size: 15px;
          display: flex;
          justify-content: space-between;
        }
        .tit {
          color: #999da2;
          padding: 5px 0;
        }
      }
    }
    .three {
      padding: 25rpx;
      font-size: 15px;
      display: flex;
      justify-content: space-between;
      div {
        display: flex;
        color: #fc5d7b;
      }
      .money {
        font-size: 22px;
        color: #fc5d7b;
      }
      cover-image {
        height: 17px;
        width: 17px;
      }
      span {
        display: flex;
      }
    }
    .jt {
      height: 30rpx;
      width: 30rpx;
    }
    .sps {
      margin-left: 10px;
    }
  }
  .footer {
    width: 100%;
    height: 46px;
    display: flex;
    align-items: center;
    border-top: 1px solid #999;
    .left {
      width: 70%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 15px;
      padding-right: 5px;
      .price {
        font-size: 28rpx;
        color: #fc5d7b;
        padding: 0 20rpx;
        box-sizing: border-box;
      }
      .num {
        color: #fc5d7b;
        font-size: 60rpx;
      }
    }
    .right {
      width: 30%;
      font-size: 36rpx;
      height: 50px;
      line-height: 46px;
      text-align: center;
      background: linear-gradient(217deg, #f86367, #fb2579);
      color: #fff;
    }
  }
}
</style>