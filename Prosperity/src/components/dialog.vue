<template>
    <div class='dialog'>
        <div class="box">
            <div class="header">
                <p>
                    <span>花色</span>
                    <span>尺寸</span>
                </p>
                <p @click="close">X</p>
            </div>
            <dl>
                <dt>
                    <img v-if="!numflag||colorSize.attributeValueJson[0].valueVo.imgUrl===''" :src="url" alt="">
                    <img v-else :src="colorSize.attributeValueJson[0].valueVo.imgUrl" alt="">
                </dt>
                <dd>
                    <p>￥{{numflag?colorSize.salesPrice:0}}</p>
                    <p>库存：{{numflag?colorSize.store:0}}</p>
                </dd>
            </dl>
            <div class="colors" v-for="(item,index) in arr" :key="index">
                <p>{{item.aname}}</p>
                <ul>
                    <li v-for="(val,index1) in item.attributeValueRelationVoList" 
                    :key="val.vid"
                    :class="{'active':index1==ind[index]}"
                    @click="colortab(index,index1,val.vid)"
                    >{{val.vname}}</li>
                </ul>
            </div>
            <div class="numbox">
                <p>数量</p>
                <div class="num">
                    <span @click="updatenum(num-1)">-</span>
                    <span class="number">{{num}}</span>
                    <span @click="updatenum(num+1)">+</span>
                </div>
            </div>
            <button @click="trannum">
                确定
            </button>
        </div> 
    </div>
</template>
<script>
import {mapState,mapMutations,mapActions} from "vuex"
export default {
    props:["arr","url"],
    components:{
    },
    data(){
        return {
            ind:[],
            colorvid:0,
            sizevid:0,
            skukey:0,
            numflag:true,
            num:1
        }
    },
    computed:{
        ...mapState({
            colorSize:state=>state.commodityDetails.colorSize
        })
    },
    methods:{
        ...mapActions({
            getColorSize:"commodityDetails/getColorSize"
        }),
        trannum(){
            this.$bus.$emit("num",{num:this.num,skukey:this.skukey})
        },
        updatenum(num){
            this.num=num
            if(num===1){
                this.num=1
            }
        },
        close(){
            this.$bus.$emit("close",false)
        },
        async colortab(ind,ind1,vid){
            let sizeArr=[];
            this.ind=this.ind.map((val,key)=>{      
                if(key==ind){
                    val=ind1
                }
                return val
            })
            if(ind===0){
                this.colorvid=vid
            }
            if(ind===1){
                this.sizevid=vid
            }           
            sizeArr.push(this.colorvid)
            if(this.colorSize.attributeValueJson.length>1){
                sizeArr.push(this.sizevid)
            }
            sizeArr=JSON.stringify(sizeArr)
            let res=await this.getColorSize({
                pid:this.colorSize.pid,
                vids:sizeArr
            })
            console.log(res)
            if(res.res_code===5000){
                this.numflag=false
            }else{
                this.numflag=true
            }
        }  
    },
    created(){
        console.log("this.colorSize",this.colorSize)
        console.log("this.colorSize",this.colorSize.attributeValueJson[0].valueVo.imgUrl==="")
        this.colorvid=this.colorSize.attributeValueJson[0].valueVo.vid
        if(this.colorSize.attributeValueJson.length>1){
            this.sizevid=this.colorSize.attributeValueJson[1].valueVo.vid
        }
        this.skukey=this.colorSize.skuKey
    },
    mounted() {
    },
    onLoad(){
        this.arr.forEach(val=>{
            if(val){
                this.ind.push(0)
            }
        })

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
                .active{
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
            border-radius: 0;
            background:linear-gradient(217deg,#f86367,#fb2579);
        }
    }
    
}
</style>