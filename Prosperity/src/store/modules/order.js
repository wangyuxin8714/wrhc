import {orderFn,orderDetailFn} from '../../services/order'

function mapArr(data){
    data=data&&data.map(item=>{
        item.createTime=new Date(Number(item.createTime)).toLocaleString();
        item.status=item.cancleStatus==0?'待付款':'全部';
        return item
    })
    return data
}

const state={
    orderList:[],
    orderDetailList:[],
    num:0
}

const getters = {

}
//异步
const actions={
    //获取订单列表
    async orderActions({commit},payload){
        let data=await orderFn(payload)
        if(data.result==null){
            state.orderList=null;
            return data
        }
        state.orderList=mapArr(data.result);
        state.num=data.result.filter(item=>item.cancleStatus==0).length;
        console.log('state.num...',state.orderList)
        return data
    },
    //获取订单详情
    async orderDetailActions({commit},payload){
       let data=await orderDetailFn(payload)
       let arr=[];
       arr.push(data.result);
       state.orderDetailList=mapArr(arr)
       return data
    }
}
//同步
const mutations={ 
    
}


export default {
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}