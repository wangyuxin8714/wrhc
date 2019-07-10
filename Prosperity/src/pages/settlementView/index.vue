<template>
  <div class="settlement">
      <div class="timer">
         <img src="/../static/images/remindIcon.png" alt="">
         <p>
           请在<span>{{minute}}:{{second}}</span>内付款，时间结束后订单将会被取消。
         </p>
      </div>
      <div class="main">
        <div class='money'>
            订单应付金额 <span>(包邮)</span>    
        </div>
         <div class="price">{{price}}</div>
         <div class="allPrice">
            订单总计: <span>￥{{price}}</span>
         </div>
      </div>
      <button>去付款</button>
  </div>
</template>
<script>
export default {
  data(){
    return {
      minute:null,
      second:null,
      price:null
    }
  },
  onLoad(option){
    let obj=JSON.parse(option.obj);
    this.minute=obj.minute
    this.second=obj.second
    this.price=obj.price
  }
}
</script>
<style lang="scss" scope>
  .settlement{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #f3f7f7;
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
    .main{
      width: 94%;
      height: 320rpx;
      background: #fff;
      border-radius: 12rpx;
      margin: 0 auto;
      text-align: center;
      margin-top: 22rpx;
      .money{
        width: 420rpx;
        height: 44rpx;
        font-size: 32rpx;
        color: #323a45;
        line-height: 44rpx;
        margin: 0 auto;
        margin-top: 38rpx;
      }
      .price{
        width: 122rpx;
        height: 64rpx;
        font-size: 56rpx;
        color: #fc5d7b;
        font-weight: 700;
        line-height: 64rpx;
        margin: 0 auto;
        margin-top: 26rpx;
        margin-bottom: 34rpx;
      }
      .allPrice{
        width: 208rpx;
        height: 34rpx;
        font-size: 24rpx;
        margin: 0 auto;
        color: #484848;
        margin-top: 10rpx;
      }
    }
    button{
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 110rpx;
      color: #fff;
      border-radius: 0;
      line-height: 110rpx;
      background: linear-gradient(217deg,#f86367,#fb2579);
    }
  }
</style>
