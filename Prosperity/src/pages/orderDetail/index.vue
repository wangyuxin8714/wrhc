<template>
 <div class="box">
    <div class="orderDetail" v-for="(item,index) in orderDetailList" :key='index' >
      <div class="timer" v-if="item.cancleStatus==0">
         <img src="/../static/images/remindIcon.png" alt="">
         <p>
           请在<span>{{minute}}:{{second}}</span>内付款，时间结束后订单将会被取消。
         </p>
      </div>
      <div class="orderTop">
        <p>
          订单编号:
          <span>{{item.orderId}}</span>
        </p>
        <span @click='showText'>复制</span>
      </div>
      <div class="orderCenter">
        <div>
          <h4>
            <span>{{item.consignee}}</span>  {{item.consigneePhone}}
          </h4>
          <p>
            <img src="/../static/images/locationIcon.png" alt>
            <span>{{item.addressDetail}}</span>
          </p>
          <img src="/../static/images/orderdetail.png" alt>
        </div>
      </div>
      <div class="orderBottom">
        <div class="orderList">
          <p>
            <span>{{item.createTime}}</span>
          </p>
          <dl>
            <dt>
              <img :src="item.products[0].mainImgUrl" alt="">
            </dt>
            <dd>
              <h5> {{item.products[0].productTitle}}</h5>
              <h6>规格:{{item.products[0].skuName}}</h6>
              <p>
                <span>￥{{item.products[0].salesPrice}}</span>
                <span>x{{item.products[0].productNumber}}</span>
              </p>
            </dd>
          </dl>
          <div>
            <p>
              <span>运费</span>
              <span>￥0</span>
            </p>
            <template v-if="item.cancleStatus==0">
               <p>
                  <span>税</span>
                  <span>￥0</span>
                </p>
                <p>
                  <span>优惠金额</span>
                  <span>￥0</span>
                </p>
            </template>
            <p>
              <span>订单总计</span>
              <span>￥{{item.totalAmount}}</span>
            </p>
            <div class="payment" v-if="item.cancleStatus==0">
              <span @click='jumpSettlementView'>去付款{{item.products[0].salesPrice}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default {
   data(){
     return {
       minute:29,
       second:59
     }
   },
   computed: {
      ...mapState({
        orderDetailList:state=>state.order.orderDetailList
      })
   },
   methods: {
     showText(){
        wx.showToast({
          title: '已复制邀请码到剪切板',
          icon: 'none'
        })
     },
     jumpSettlementView(){
       let obj={};
       obj.minute=this.minute;
       obj.second=this.second;
       obj.price=this.orderDetailList[0].totalAmount
        wx.navigateTo({
              url:  "/pages/settlementView/main?obj="+JSON.stringify(obj)
        })
     }
   },
   onLoad(){
      setInterval(()=>{
         this.second--;
         if(this.second == '00' && this.minute == '00') {
            orderDetailList.cancleStatus=1
         };
         if(this.second == '00') {
              this.second = 59;
              this.minute--;     
        if(this.minute < 10) this.minute = "0" + this.minute;
        }; 
        if(this.second < 10) this.second = "0" + this.second;
      }, 1000);
   }
}
</script>
<style lang="scss" scoped>
.box{
  width:100%;
  height:100%;
}
.orderDetail {
  background: #f3f7f7;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .timer{
    width: 100%;
    height: 74rpx;
    background: #fff6f6;
    display: flex;
    img{
      width: 28rpx;
      height: 30rpx;
      padding: 22rpx 0 0 34rpx;
    }
    p{
      font-size: 24rpx;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: #484848;
      line-height: 74rpx;
      margin-left: 10rpx;
      span{
        color: #fc5d7b;
      }
    }
  }
  .payment{
    width: 100%;
    padding-bottom: 22rpx;
    display: flex;
    justify-content: flex-end;
    span{
      display: block;
      width: 160rpx;
      height: 60rpx;
      font-size: 28rpx;
      text-align: center;
      line-height: 60rpx;
      border-radius: 8rpx;
      border: 2rpx solid #fc5d7b;
      color: #fc5d7b;
    }
  }
}
.orderTop {
  width: 96%;
  height: 34px;
  background: #fff;
  border-radius: 5px;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  font-size: 24rpx;
  color: #323a45;
  padding: 18rpx 0 0 30rpx;
  padding-bottom: 10px;
  p {
    height: 34px;
    line-height: 34px;
  }
  > span {
    width: 74rpx;
    background: #fff;
    border-radius: 6rpx;
    border: 2rpx solid #fc5d7b;
    font-size: 22rpx;
    color: #fc5d7b;
    text-align: center;
    margin: 0 0 0 30rpx;
  }
}
.orderCenter {
  margin-top: 20px;
  width: 96%;
  border-radius: 10rpx;
  background-color: #fff;
  position: relative;
  > div {
    width: 100%;
    box-sizing: border-box;
    padding: 20px;
    h4 {
      font-size: 32rpx;
      font-weight: 700;
      margin-bottom: 20rpx;
      span {
        margin-right: 20rpx;
      }
    }
    p {
      font-size: 28rpx;
      display: flex;
      img {
        width: 28rpx;
        height: 28rpx;
        padding-right: 8rpx;
        margin-top: 5rpx;
      }
    }
    > img {
      width: 100%;
      height: 4px;
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
}
.orderBottom {
  margin-top: 20px;
  width: 96%;
  border-radius: 10rpx;
  .orderList {
    width: 100%;
    background: #fff;
    border-radius: 12rpx;
    > p {
      width: 100%;
      box-sizing: border-box;
      height: 74rpx;
      line-height: 74rpx;
      span {
        padding: 0 24rpx;
        font-size: 30rpx;
        font-family: PingFangSC-Medium;
        font-weight: bolder;
        color: #323a45;
      }
    }
    > dl {
      height: 208rpx;
      padding: 12rpx 24rpx;
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
      padding: 24rpx;
      box-sizing: border-box;
      p {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 76rpx;
        font-size: 28rpx;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: #323a45;
        line-height: 76rpx;
      }
    }
  }
}
</style>
