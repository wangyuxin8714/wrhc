<template>
    <div class='dialog'>
        <div class="box">
            <div class="top">
                <span>颜色
                    <img :src="url" alt=""/>
                </span>
                <span @click="$emit('cancleClick',flag)">X</span>
            </div>
            <div class="center" v-for="(item,index) in arr" :key="index">
                   <p>{{item.aname}}</p>
                   <ul class="list">
                       <li v-for="(val,index1) in item.attributeValueRelationVoList" :key="index1" :class="{'active':index1==ind[index]}"  @click="chooseClick(index,index1)">
                           {{val.vname}}
                       </li>
                   </ul> 
            </div>
                <my-Count :num="num" @subClick="sub" @addClick="add"/>
                <div class="footer">
                    <button  v-on:click="shopBtn" @click="$emit('cancleClick',flag)">确定</button>
                 </div>
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
         ind:[],
         buyArr:[],
         num:1
        }
    },
    computed:{

    },
    methods:{
        chooseClick(ind,ind1){
         this.ind=this.ind.map((val,key)=>{      
                if(key==ind){
                    val=ind1
                }
                return val
        })
        },
        sub(){
            this.num=this.num>1?this.num-1:1
        },
        add(){
            this.num=this.num+1;
        },
        shopBtn(){
            this.flag=false;
            this.ind.map((val,index)=>{
              this.buyArr.push(this.arr[index].attributeValueRelationVoList[val])
           })
           this.buyArr.push(this.num)
        }
    },
    created(){
    
    },
    mounted(){

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
            height: 80%;
            background: #fff;
            position: absolute;
            bottom: 0;
            .top{
                width: 100%;
                height: 65px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 5px 10px;
                box-sizing: border-box;
                img{
                    width: 50px;
                    height: 50px;
                }
            }
            .center{
                width: 100%;
                height: 25%;
                overflow-y: scroll;    
                p{
                    padding: 0 10px;
                    color: #999;
                    font-size: 17px;
                }
                ul{
                    display: flex;
                    flex-wrap: wrap;
                    li{
                        margin:5px;
                        padding:5px;
                        border:1px solid #ccc;
                        font-size: 15px;
                    }
                    .active{
                        background: #63f8f8;
                        color:#fff;
                    }
                }

            }
            .footer{
                 width: 100%;
                    height: 40px;
                position: absolute;
                bottom:0;
                button{
                    width: 100%;
                    height: 40px;
                    line-height: 40px;
                    background: linear-gradient(217deg, #f86367, #fb2579);
                    color:#fff;
                    text-align: center;
                    border-radius: 0;
                }
            }
        }
    }
</style>