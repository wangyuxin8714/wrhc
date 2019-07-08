<template>
    <div class='addAddress'>
        <div class="addTop">
            <div>
                <input type="text" placeholder="收货人" v-model="current.user">
                <span>
                    <img src="/../static/images/lt.svg" alt="">
                </span>
            </div>
            <div>
                <input type="text" placeholder="手机号" v-model="current.iPhone"  maxlength="11">
                <span>
                    <span class="iPhone">+86</span>
                    <img src="/../static/images/lt.svg" alt="">
                </span>
            </div>
            <div>
                <picker mode="region" @change="bindRegionChange" v-model="current.region">
                    <view class="picker">
                      <span v-if='!current.region.length'>所在地区</span>
                      <span v-else>{{current.region[0]}}，{{current.region[1]}}，{{current.region[2]}}</span>
                    </view>
                </picker>
                <span>
                    <img src="/../static/images/lt.svg" alt="">
                </span>
            </div>
            <div class="text">
                <textarea placeholder="详细地址：如道路、门牌号、小区、楼栋号、单元 室等" v-model="current.detailAddress"></textarea>
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
        <button @click="submit">保存</button>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    data(){
        return {
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
    computed: {
         ...mapState({
           current: state=>state.address.current
        }),
    },
    methods: {
         bindRegionChange: function (e) {
            this.current.region=e.target.value
        },
        changelabel(ind){
            this.ind=ind
        },
        switchChange(e){
            console.log('switch发送选择改变，携带值为', e.target.value)
        },
        submit(){
             // 判断收货人是否为空
            if (!this.current.user){
                wx.showToast({
                title: '请输入收货人', //提示的内容,
                icon: 'none', //图标,
                });
                return
            }
           // 判断手机号是否符合规范
            if (!/^1(3|4|5|7|8)\d{9}$/.test(this.current.iPhone) || !/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(this.current.iPhone)){
                wx.showToast({
                title: '请输入面试联系人的手机或座机', //提示的内容,
                icon: 'none', //图标,
                });
                return
            }
            // 判断收货地址是否为空
            if (this.current.region.length==0){
                wx.showToast({
                title: '请输入收货地址', //提示的内容,
                icon: 'none', //图标,
                });
                return
            }
             // 判断详细收货地址是否为空
            if (!this.current.detailAddress){
                wx.showToast({
                title: '请输入详细收货地址', //提示的内容,
                icon: 'none', //图标,
                });
                return
            }
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
