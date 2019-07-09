<template>
  <div class="recommender">
    <img src="/../static/images/man_2.jpg" alt="">
    <div>
      <input type="text " placeholder="请输入邀请码">
      <button>搜索</button>
    </div>
    <p>- 无邀请码可选择以下团队加入 -</p>
  </div>
</template>
<style lang="scss" scoped>
.recommender{
  width:100%;
  height:100%;
  background:#fff;
  img{
    width:100%;
    height: 99.84px;
  }
  >div{
    width: 100%;
    display: flex;
    margin-top: 40rpx;
    margin-bottom: 20rpx;
    input{
      width: 598rpx;
      height: 100rpx;
      background: #f3f7f7;
      border-radius: 16rpx 0 0 16rpx;
      text-align: center;
      line-height: 100rpx;
      margin-left: 34rpx;
    }
    button{
      width: 162rpx;
      height: 100rpx;
      background: #33d6c5;
      border-radius: 0 16rpx 16rpx 0;
      font-size: 32rpx;
      font-family: PingFangSC-Semibold;
      font-weight: 600;
      color: #fff;
      line-height: 100rpx;
      margin-right: 34rpx;
    }
  }
  >p{
    width: 440rpx;
    height: 40rpx;
    font-size: 28rpx;
    font-size: 28rpx;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: #999da2;
    padding: 56rpx 188rpx 44rpx;
  }
}
</style>
