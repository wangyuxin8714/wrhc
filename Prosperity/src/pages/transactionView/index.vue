<template>
  <div class="transaction">
     <div class="success">
       <img src="/../static/images/success.svg" alt="">
       <span>交易成功</span>
     </div>
     <div class="back">
       <span>返回商城</span>
     </div>
  </div>
</template>
<style lang="scss" scope>
  .transaction{
    background:#fff;
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .success{
      width: 160rpx;
      height: 204rpx;
      margin-top: 68rpx;
      margin-bottom: 144rpx;
      display: flex;
      flex-direction: column;
      align-items: center;
      img{
        width: 120rpx;
        height: 120rpx;
        margin-bottom: 26rpx;
      }
    }
    .back{
      width: 100%;
      height: 116rpx;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-left: 90rpx;
      padding-right: 90rpx;
      box-sizing: border-box;
      span{
        width: 45%;
        height: 100rpx;
        line-height: 100rpx;
        text-align: center;
        border: 2rpx solid #33d6c5;
        color: #33d6c5;
        background: #fff;
        border-radius: 14rpx;
      }
    }
  }
</style>
