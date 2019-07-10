<template>
  <div class="myView">
      <div class="myHeader">
        <img src="/../static/images/logBg.png" alt="">
        <div>
           <img src="https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTI7Sufpu5lRrLytDLx5cxLXAVKOibVkiaLTiaAnp1W58pQY94vmhxlUvDSY1Zm3gAGRdXBu8K7jCskVQ/132" alt="">
           <div>
              <h5>皮卡丘</h5>
              <p>邀请码:2TWHAR4<span @click="showText">复制</span></p>
           </div>
        </div>
      </div>
      <div class="myMain">
        <div  class='myMainTop'>
          <h5 @click="jumpOrder(0)">我的订单</h5>
          <div>
              <dl @click='jumpOrder(1)'>
                <dt>
                  <span class="num">{{num}}</span>
                  <img src="/../static/images/dfk.png" alt="">
                </dt>
                <dd>
                  待付款
                </dd>
              </dl>
            <dl @click="jumpOrder(2)">
              <dt>
                <img src="/../static/images/dfh.png" alt="">
              </dt>
              <dd>
                 待发货
              </dd>
              </dl>
              <dl @click="jumpOrder(3)">
                <dt>
                  <img src="/../static/images/dsh.png" alt="">
                </dt>
                <dd>
                   待收货
                </dd>
              </dl>
          </div>
        </div>
        <div class="myMainBottom">
          <ul>
            <li @click='jumpCoupon()'>
              <p>
                <img src="/../static/images/yhj.png" alt="">
                <span>我的优惠劵</span>
              </p>
              <img src="/../static/images/jt.png" alt="">
            </li>
            <li @click='jumpAddress()'>
              <p>
                <img src="/../static/images/dz.png" alt="">
                <span>收货地址</span>
              </p>
              <img src="/../static/images/jt.png" alt="">
            </li>
            <li>
              <p>
                <img src="/../static/images/kf.png" alt="">
                <span>联系客服</span>
              </p>
              <img src="/../static/images/jt.png" alt="">
            </li>
            <li @click='jumpAttestation()'>
              <p>
                <img src="/../static/images/sm.png" alt="">
                <span>实名认证</span>
              </p>
              <img src="/../static/images/jt.png" alt="">
            </li>
          </ul>
        </div>
    </div>
  </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default {
    computed: {
      ...mapState({
        num:state=>state.order.num
      })
    },
    methods: {
      ...mapActions({
          orderActions:'order/orderActions'
      }),
      async jumpOrder(id){
          let data=await this.orderActions({
              pageIndex:1,
              orderStatus:id
          })
          if(data.res_code==1||data.res_code==1004){
              wx.navigateTo({
                url:  "/pages/myOrder/main?id="+id
              })
          }
      },
      jumpCoupon(){
        wx.navigateTo({
            url:  "/pages/couponView/main"
        })
      },
      jumpAddress(){
        wx.navigateTo({
            url:  "/pages/addressView/main"
        })
      },
      jumpAttestation(){
         wx.navigateTo({
            url:  "/pages/attestationView/main"
        })
      },
      showText(){
        wx.showToast({
          title: '已复制邀请码到剪切板',
          icon: 'none'
        })
      }
    },
    onLoad(){
      this.orderActions({
          pageIndex:1,
          orderStatus:0
      })
    }
}
</script>
<style lang="scss" scoped>
.myView{
  width:100%;
  height:100%;
  position: fixed;
  background: #f3f7f7;
}
.myHeader{
  width: 100%;
  height: 93px;
  position: relative;
  >img{
    width:100%;
    height:100%;
    position: absolute;
    top:0;
    left:0;
    z-index:-999;
  }
  >div{
    display: flex;
    color:#fff;
    img{
      width: 54px;
      height: 54px;
      margin: 20px;
      border-radius: 50%;
    }
    div{
      margin: 22rpx 20rpx 0;
      h5{
        font-size: 40rpx;
        line-height: 2;
      }
      p{
        font-size: 28rpx;
        span{
          margin-left: 10rpx;
          line-height: 2;
          font-size: 20rpx;
          background: #35cdd0;
          color: #fff;
          padding: 6rpx 10rpx;
          box-sizing: border-box;
          border-radius: 10rpx;
          opacity: .7239;
        }
      }
    }
  }
}
.myMain{
  width:100%;
  position: absolute;
  top: 180rpx;
  .myMainTop{
    width: 96%;
    margin: 0 2%;
    height: 220rpx;
    background: #fff;
    border-radius: 10rpx;
    h5{
      width:100%;
      line-height: 2;
      padding-left: 20rpx;
      box-sizing: border-box;
    }
    >div{
        width:100%;
        display: flex;
        justify-content: space-around;
        dl{
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: relative;
          img{
            width:34px;
            height:34px;
          }
          .num{
            position: absolute;
            left: 60rpx;
            top: -10rpx;
            padding: 2rpx;
            font-size: 24rpx;
            border: 2rpx solid #fc5d7b;
            border-radius: 50%;
            color: #fc5d7b;
            width: 30rpx;
            height: 30rpx;
            text-align: center;
            line-height: 30rpx;
          }
          dd{
            font-size: 24rpx;
            color: #70757d;
          }
        }
     }
  }
  .myMainBottom{
    width: 96%;
    margin: 0 2%;
    margin-top: 20rpx;
    ul{
      background:#fff;
      li{
        display: flex;
        height: 96rpx;
        justify-content: space-between;
        p{
          display: flex;
          img{
            width: 36rpx;
            height: 36rpx;
            margin: 30rpx;
          }
          span{
            font-size: 28rpx;
            margin: 30rpx 30rpx 0 0;
          }
        }
        >img{
          width: 16rpx;
          height: 24rpx;
          margin: 34rpx 36rpx 0 0;
        }
      }
    }
  }
}
</style>
