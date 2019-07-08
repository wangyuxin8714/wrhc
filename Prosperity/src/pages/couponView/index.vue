<template>
    <div class="coupon">
        <div class="orderTab">
            <span v-for="(item,index) in orderList" :key='index'  :class="{'active':index==ind}">{{item.title}}</span>
        </div>
        <div class="orderNull">
            <div>
                <img src="/../static/images/暂无.png" alt="">
                <p>暂时没有优惠券噢~</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            orderList:[{
                title:'未使用',
                id:0
            },{
                title:'已使用',
                id:1
            },{
                title:'已过期',
                id:2
            }],
            ind:0
        }
    }
}
</script>
<style lang="scss" scope>
.coupon{
    width:100%;
    height:100%;
    .orderTab{
        width:100%;
        height:34px;
        background:#fff;
        display: flex;
        justify-content: space-around;
        box-sizing: border-box;
        font-size: 30rpx;
        position: fixed;
        top:0;
        left:0;
        span{
            padding:0 10px;
            height:34px;
            line-height: 34px;
            &.active{
                border-bottom: 4rpx solid #33d6c5 !important;
            }
        }
    }
    .orderNull{
        width: 100%;
        height: 100%;
        >div{
            width: 100%;
            height: 100%;
            margin-top: 100rpx;
            margin: 0 auto;
            text-align: center;
            font-size: 32rpx;
            color: #999;
            img{
                width: 276rpx;
                height: 276rpx;
                border-radius: 50%;
                margin-top: 300rpx;
            }
        }
    }
} 
</style>
