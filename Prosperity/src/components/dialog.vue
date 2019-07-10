<template>
    <div class='dialog'>
        <div class="box">
            <div class="header">
                <p>
                    <span>花色</span>
                    <span>尺寸</span>
                </p>
                <p>X</p>
            </div>
            <dl>
                <dt>
                    <img src="https://jnup.oss-cn-beijing.aliyuncs.com/product/28a3c7a08b7199887e50e7e64f0250df.jpg" alt="">
                </dt>
                <dd>
                    <p>￥135</p>
                    <p>库存：100</p>
                </dd>
            </dl>
            <div class="colors">
                <p>花色</p>
                <ul>
                    <li>绅士</li>
                    <li>绅士</li>
                    <li>绅士</li>
                </ul>
            </div>
            <div class="colors">
                <p>尺寸</p>
                <ul>
                    <li>0.9米床</li>
                    <li>0.9米床</li>
                    <li>0.9米床</li>
                </ul>
            </div>
            <div class="numbox">
                <p>数量</p>
                <div class="num">
                    <span>-</span>
                    <span class="number">1</span>
                    <span>+</span>
                </div>
            </div>
            <button>
                确定
            </button>
        </div> 
    </div>
</template>
<script>
import myCount from "@/components/conut"
import {mapMutations} from "vuex"
export default {
    props:["arr","flag","url"],
    components:{
     myCount
    },
    data(){
        return {
         
        }
    },
    computed:{

    },
    methods:{
    }
}
</script>
<style  scoped lang="scss">
.dialog{
    position: fixed;
    top:0;
    left:0;
    height: 100%;
    width: 100%;
    background: rgba(0,0,0,.3);
    .box{
        width: 100%;
        // height: 80%;
        background: #fff;
        position: absolute;
        bottom: 0;
        .header{
            margin-top:10rpx;
            display:flex;
            justify-content:space-between;
            padding:0 2%;
            box-sizing:border-box;
            p{
                font-size:30rpx;
                span{
                    margin-left:5px;
                }
            }
        }
        dl{
            display:flex;
            padding:0 2%;
            box-sizing:border-box;
            dt{
                margin-right:5px;
                img{
                    width:160rpx;
                    height:160rpx;
                }
            }
            dd{
                p{
                    font-size:30rpx;
                    color:#323a45;
                    line-height:2;
                }
                p:last-child{
                    color:#999da2;
                }
            }
        }
        .colors{
            padding:0 2%;
            box-sizing:border-box;
            margin-top:30rpx;
            p{
                color:#999da2;
                font-size:30rpx;
                line-height:2;
            }
            ul{
                display:flex;
                flex-wrap:wrap;
                li{
                    border:2rpx solid #ccc;
                    padding:6rpx 16rpx;
                    box-sizing:border-box;
                    margin:10rpx 20rpx;
                    font-size:24rpx;
                    border-radius:10rpx;
                }
                .active1{
                    background:#33d6c5;
                    color:#fff;
                    border:2rpx solid #33d6c5;
                }
                .active2{
                    background:#33d6c5;
                    color:#fff;
                    border:2rpx solid #33d6c5;
                }
            }
        }
        .numbox{
            padding:0 2%;
            box-sizing:border-box;
            display:flex;
            justify-content:space-between;
            margin-bottom:20rpx;
            p{
                font-size:30rpx;
                color:#999da2;
                line-height:2;
            }
            .num{
                display:flex;
                span{
                    display:block;
                    line-height:2;
                    font-size:28rpx;
                    text-align:center;
                    padding:0 20rpx;
                    box-sizing:border-box;
                    border:2rpx solid #ccc;
                }
                .number{
                    min-width:80rpx;
                }
            }
        }
        button{
            width:100%;
            height:110rpx;
            line-height:110rpx;
            text-align:center;
            color:#fff;
            background:linear-gradient(217deg,#f86367,#fb2579);
        }
    }
    
}
</style>