<template>
    <div class="myOrder">
        <div class="orderTab">
            <span v-for="(item,index) in orderList" :key='index'  :class="{'active':index==ind}" @click='changeInd(index)'>{{item.title}}</span>
        </div>
        <div class="orderMain" v-if="orderArr">
            <div class="orderList" v-for="(item,index) in orderArr" :key='index'>
                <p  @click='jump(index)'>
                    <span>{{item.createTime}}</span>
                    <span>{{item.status}}</span>
                </p>
                <dl @click='jumpDetail()'>
                    <dt>
                        <img :src="item.products[0].mainImgUrl" alt="">
                    </dt>
                    <dd>
                        <h5>
                           {{item.products[0].productTitle}}
                        </h5>
                        <h6>规格:{{item.products[0].skuName}}</h6>
                        <p>
                            <span>￥{{item.products[0].salesPrice}}</span>
                            <span>x{{item.products[0].productNumber}}</span>
                        </p>
                    </dd>
                </dl>
                <div @click='jump(index)'>
                  <p> 共1件商品 合计:<span>￥{{item.totalAmount}}</span></p>
                  <div class="cancel" v-if="item.cancleStatus==0">
                    <button @click.stop='cancel(index)'>取消订单</button>
                    <button>去付款</button>
                  </div>
                </div>
            </div>
        </div>
        <div class="orderNull" v-else>
            <div>
                <img src="/../static/images/wudingdan.png" alt="">
                <p>暂时没有订单噢~</p>
            </div>
        </div>
    </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default {
    data(){
        return {
            orderList:[{
                title:'全部',
                id:0
            },{
                title:'待付款',
                id:1
            },{
                title:'待发货',
                id:2
            },{
                title:'待收货',
                id:3
            }],
            ind:0
        }
    },
    computed: {
      ...mapState({
        orderArr:state=>state.order.orderList
      })
    },
    onLoad(option){
      this.ind=option.id
    },
    methods: {
        ...mapActions({
            orderActions:'order/orderActions',
            orderDetailActions:'order/orderDetailActions'
        }),
        async changeInd(ind){
            let data=await this.orderActions({
              pageIndex:1,
              orderStatus:ind
            })
            this.ind=ind;
        },
        cancel(index){
           wx.showModal({
                title: '温馨提示', //提示的标题,
                content: '是否取消订单?', //提示的内容,
                showCancel: true,
                confirmText: '确定', //确定按钮的文字，默认为取消，最多 4 个字符,
                confirmColor: '#197DBF', //确定按钮的文字颜色,
                success: res => {
                  if(res.confirm){
                    this.orderArr[index].cancleStatus=0
                  }
                }
            })
        },
        async jump(index){
          let data=await this.orderDetailActions({
                orderType:this.orderArr[index].orderType,
                orderId:this.orderArr[index].orderId
          })
          if(data.res_code==1){
              wx.navigateTo({
                  url:  "/pages/orderDetail/main"
              })
          }
        },
        jumpDetail(){
            wx.navigateTo({
                url:  "/pages/CommodityDetails/main"
            })
        }
    },
    onShow(){
       this.ind=0;
       this.orderActions({
            pageIndex:1,
            orderStatus:0
        })
    }
}
</script>
<style lang="scss" scoped>
.myOrder {
  width: 100%;
  height: 100%;
  background: #f3f7f7;
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
    .cancel{
      height: 60rpx;
      display: flex;
      button{
        font-size: 28rpx;
        line-height: 60rpx;
        padding: 0 10rpx;
        margin-right: 6px;
        background: #fff;
        &:last-child{
          background: #fc5d7b;
          color: #fff;
        }
      }
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

