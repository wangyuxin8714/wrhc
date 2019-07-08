<template>
    <div class="orderDetail">
        <div class="orderTop">
           <p>
             订单编号:
             <span>201907081010386177855</span>
           </p>
           <span>复制</span>
        </div>
        <div class="orderCenter">
           <div>
              <h4><span>皮卡丘</span> 15510757517</h4>
              <p>
                <img src="/../static/images/locationIcon.png" alt="">
                <span>天津市天津市河东区皮卡丘专卖店</span>
              </p>
              <img src="/../static/images/orderdetail.png" alt="">
           </div>
        </div>
        <div class="orderBottom">
            <div class="orderList">
                <p>
                    <span>2019-07-08 10:10:10</span>
                </p>
                <dl>
                    <dt>
                        <img src="https://jnup.oss-cn-beijing.aliyuncs.com/product/664b019bff10838e9a6d2594a57c1097.png" alt="">
                    </dt>
                    <dd>
                        <h5>
                            PEPPA PIG/ 小猪佩奇 儿童牛奶香型洗手液 300ML
                        </h5>
                        <h6>规格:默认</h6>
                        <p>
                            <span>￥39</span>
                            <span>x1</span>
                        </p>
                    </dd>
                </dl>
                <div>
                  <p><span>运费</span><span>￥0</span></p>
                  <p><span>订单总计</span><span>￥39</span></p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
   
}
</script>
<style lang="scss" scoped>
.orderDetail{
  width:100%;
  height:100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.orderTop{
  width:96%;
  height:34px;
  background:#fff;
  border-radius: 5px;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  font-size: 24rpx;
  color: #323a45;
  padding: 18rpx 0 0 30rpx;
  padding-bottom: 10px;
  p{
    height:34px;
    line-height: 34px;
  }
  >span{
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
.orderCenter{
  margin-top: 20px;
  width:96%;
  border-radius: 10rpx;
  background-color: #fff;
  position: relative;
  >div{
    width:100%;
    box-sizing: border-box;
    padding:20px;
    h4{
      font-size: 32rpx;
      font-weight: 700;
      margin-bottom: 20rpx;
      span{
        margin-right: 20rpx;
      }
    }
    p{
      font-size: 28rpx;
      display: flex;
      img{
        width: 28rpx;
        height: 28rpx;
        padding-right: 8rpx;
        margin-top: 5rpx;
      }
    }
    >img{
      width:100%;
      height:4px;
      position: absolute;
      bottom:0;
      left:0;
    }
  }
}
.orderBottom{
   margin-top: 20px;
   width:96%;
   border-radius: 10rpx;
  .orderList{
    width: 100%;
    background: #fff;
    border-radius: 12rpx;
    >p{
        width: 100%;
        box-sizing: border-box;
        height: 74rpx;
        line-height: 74rpx;
        span{
            padding: 0 24rpx;
            font-size: 30rpx;
            font-family: PingFangSC-Medium;
            font-weight: bolder;
            color: #323a45;
        }
    }
    >dl{
        height: 208rpx;
        padding: 12rpx 24rpx;
        width: 100%;
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        dt{
            width: 25%;
            height: 100%;
            background: #eee;
            img{
                width:100%;
                height:100%;
            }
        }
        dd{
            width: 70%;
            height: 100%;
            font-size: 28rpx;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            h6{
                color: #999DA2;
                font-size: 12px;
            }
            p{
                width: 100%;
                display: flex;
                justify-content: space-between;
                span{
                    color: #323A45;
                    font-size: 12px;
                }
            }
        }
    }
    >div{
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 24rpx;
        box-sizing: border-box;
        p{
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
