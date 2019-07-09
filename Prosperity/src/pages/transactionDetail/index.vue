<template>
  <div class="transactionDetail">
    <div>
        <div class="top">
           <img src="/../static/images/fail.png" alt="">
           <span>付款失败</span>
           <p>请在<span>25:52</span>内完成付款</p>
        </div>
        <ul class="bottom">
          <li>
             <p>订单总计</p>
             <p>￥86</p>
          </li>
          <li>
            <p>应付金额（含邮费）:</p>
            <p class="color">￥86</p>
          </li>
        </ul>
        <div class="money">
          <div>
            <img src="/../static/images/wx.svg" alt="">
            <span>微信支付</span>
          </div>
          <radio></radio>
        </div>
        <button>去付款</button>
     </div>
     <p class="goShopping">
       返回商城
     </p>
  </div>
</template>
<style lang="scss" scope>
  .transactionDetail{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #f3f7f7;
    font-size: 28rpx;   
    >div{
      width: 100%;
      height: 572rpx;
      background: #fff;
      .top{
        width: 100%;
        height: auto;
        text-align: center;
        font-family: PingFangSC-Medium;
        color: #000;
        >img{
          width: 120rpx;
          height: 120rpx;
          background: #fff;
          margin-top: 68rpx;
          margin-bottom: 26rpx;
        }
        >span{
          font-size: 40rpx;
          margin-top: 6rpx;
          display: block;
        }
        >p{
          margin-top: 6rpx;
          >span{
            color: #fc5d7b;
          }
        }
      }
      .bottom{
        width: 100%;
        height: auto;
        margin: 0 auto;
        padding: 0 28rpx;
        box-sizing: border-box;
        li{
          width: 100%;
          height: auto;
          margin-top: 38rpx;
          display: flex;
          justify-content: space-between;
          .color{
            color: #fc5d7b;
            font-size: 48rpx;
          }
        }
      }
      .money{
        width: 100%;
        height: 100rpx;
        background: #fff;
        margin: 0 auto;
        margin-top: 20rpx;
        display: flex;
        border-top: 20rpx solid #f3f7f7;
        >div{
          width: 90%;
          height: 100%;
          display: flex;
            img{
              width: 40rpx;
              height: 40rpx;
              margin-top: 30rpx;
              margin-left: 30rpx;
              margin-right: 14rpx;
              display: inline-block;
              overflow: hidden;
            }
            span{
              line-height: 100rpx;
            }
        }
        radio{
          width: 10%;
          height: auto;
          margin-top: 20rpx;
        }
      }
      >button{
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
    .goShopping{
      color: #5d9afc;
      text-decoration-line: underline;
      text-align: center;
      font-size: 36rpx;
      margin-top: 180rpx;
    }
  }
</style>
