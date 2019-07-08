<template>
    <div class='addAddress'>
        <div class="addTop">
            <div>
                <input type="text" placeholder="收货人">
                <span>
                    <img src="/../static/images/lt.svg" alt="">
                </span>
            </div>
            <div>
                <input type="text" placeholder="手机号">
                <span>
                    <span class="iPhone">+86</span>
                    <img src="/../static/images/lt.svg" alt="">
                </span>
            </div>
            <div>
                <picker mode="region" @change="bindRegionChange" v-model="region">
                    <view class="picker">
                      <span v-if='!region.length'>所在地区</span>
                      <span v-else>{{region[0]}}，{{region[1]}}，{{region[2]}}</span>
                    </view>
                </picker>
                <span>
                    <img src="/../static/images/lt.svg" alt="">
                </span>
            </div>
            <div class="text">
                <textarea placeholder="详细地址：如道路、门牌号、小区、楼栋号、单元 室等"></textarea>
            </div>
        </div>
        <div class="addCenter">
            <div class="label">
                <p>标签</p>
                <ul>
                    <li v-for="(item,index) in labelList" :key='index' :class="{'active':index==ind}" @click='changelabel(index)'>{{item.title}}</li>
                </ul>
            </div>
            <div class="switch">
                <p>
                    设置默认地址
                </p>
                 <switch @change="switchChange"/>
            </div>
        </div>
        <button>保存</button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            region:[],
            labelList:[{
                title:'家',
                id:0
            },{
                title:'公司',
                id:1
            },{
                title:'学校',
                id:2
            },{
                title:'其他',
                id:3
            }],
            ind:null
        }
    },
    methods: {
         bindRegionChange: function (e) {
            this.region=e.target.value
        },
        changelabel(ind){
            this.ind=ind
        },
        switchChange(e){
            console.log('switch发送选择改变，携带值为', e.target.value)
        }
    },
}
</script>
<style lang="scss" scoped>
.addAddress{
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
    button{
        width: 90%;
        height: 100rpx;
        background: #33d6c5;
        border-radius: 14rpx;
        color: #fff;
        font-size: 36rpx;
        margin-left: 5%;
        margin-top: 120rpx;
    }
}
.addTop{
    width: 100%;
    display: flex;
    flex-direction: column;
    background: #fff;
    margin-bottom: 20rpx;
    div{
        width: 702rpx;
        height: 90rpx;
        margin: 0 auto;
        display: flex;
        line-height: 90rpx;
        border-bottom: 2rpx solid #f6f6f6;
        font-size: 28rpx;
        input,picker{
            flex: 1;
            height: 90rpx;
            padding-left: 10rpx;
            width: 100%;
        }
        .iPhone{
            margin-right: 10rpx;
        }
        span{
            display: inline-block;
            color: #9ca0a5;
            img{
                width: 10rpx;
                height: 18rpx;
            }
        }
    }
    .text{
        height: 176rpx;
        font-weight: 400;
        line-height: 40rpx;
        font-size: 28rpx;
        border-bottom: 0;
        textarea{
            width: 616rpx;
            height: 176rpx;
            margin: 26rpx 10rpx;
        }
    }
}
.addCenter{
    width: 100%;
    height: 286rpx;
    background: #fff;
    .label{
        width: 702rpx;
        margin: 0 auto;
        border-bottom: 2rpx solid #f6f6f6;
        p{
            font-size: 28rpx;
            font-weight: 400;
            color: #323a45;
            margin-left: 10rpx;
            height: 62rpx;
            line-height: 62rpx;
        }
        ul{
            width: 702rpx;
            height: 134rpx;
            margin: 0 auto;
            display: flex;
            li{
                width: 132rpx;
                height: 52rpx;
                border-radius: 300rpx;
                margin: 2rpx 14rpx;
                border: 2rpx solid #bbb;
                font-size: 30rpx;
                line-height: 52rpx;
                text-align: center;
                color: #323a45;
                &.active{
                    background: #33d6c5;
                    color:#fff;
                }
            }
        }
    }
    .switch{
        display: flex;
        width: 702rpx;
        margin: 0 auto;
        height: 90rpx;
        line-height: 90rpx;
        font-size: 28rpx;
        justify-content: space-between;
        p{
            margin-left: 10rpx;
            flex: 1;
        }
    }
}
</style>
