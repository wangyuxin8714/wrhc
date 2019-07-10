<template>
    <div class="count">
        <span>数量</span>
        <div class="countBox">
            <span class="sub" @click="$emit('subClick',num)">-</span>
            <span class="num">{{num}}</span>
            <span class='add' @click="$emit('addClick',num)">+</span>
        </div>
    </div>
</template>
<script>
export default {
    props:["num"],
    components:{

    },
    data(){
        return {
           
        }
    },
    computed:{

    },
    methods:{
      
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
    .count{
        position: absolute;
        bottom:45px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 0 10px;
        box-sizing: border-box;
         padding:10px;
         box-sizing: border-box;
        .countBox{
            span{
                padding:0 10px;
                border:1px solid #ccc;
            }
        }
    }
</style>
