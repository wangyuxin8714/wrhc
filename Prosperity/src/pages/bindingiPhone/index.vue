<template>
   <div class="binding">
     <ul>
       <li>
         <span>手机号</span>
         <input type="text" placeholder="请输入新手机号">
       </li>
        <li>
         <span>验证码</span>
         <input type="text" placeholder="请输入验证码">
         <button>获取验证码</button>
       </li>
     </ul>
     <button>验证后绑定新手机</button>
   </div>
</template>
<style lang="scss" scoped>
.binding{
  width:100%;
  height:100%;
  display: flex;
  flex-direction: column;
  background: #f3f7f7;
  ul{
    height: 180rpx;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 24rpx;
    box-sizing: border-box;
    background: #fff;
    li{
      width:100%;
      height: 90rpx;
      display: flex;
      align-items: center;
      position: relative;
      border-bottom: 2rpx solid #f3f7f7;
      box-sizing: border-box;
      span{
        color: #323a45;
        line-height: 40rpx;
        padding-left: 10rpx;
        box-sizing: border-box;
        margin-right: 88rpx;
        font-size: 28rpx;
        font-family: PingFangSC-Regular;
        font-weight: 400;
      }
      input{
        font-size: 28rpx;
        font-family: PingFangSC-Regular;
        font-weight: 400;
      }
      button{
        width: 200rpx;
        height: 60rpx;
        padding: 0;
        font-size: 28rpx;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: #fc5d7b;
        line-height: 60rpx;
        background: #fff;
        border-radius: 30rpx;
        border: 2rpx solid #fc5d7b;
        position: absolute;
        right: 0;
      }
    }
  }
  >button{
    width: 92%;
    height: 100rpx;
    margin: 120rpx auto;
    background: #33d6c5;
    border-radius: 14rpx;
    font-size: 36rpx;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: #fff;
    line-height: 100rpx;
    text-align: center;
    opacity: .5;
  }
}
</style>

