import {orderFn} from '../../services/order'


const state={
    orderList:[]
}

const getters = {

}
//异步
const actions={
    async orderActions({commit},payload){
        orderFn(payload).then(res=>{
            commit('orderMu',res.result);
        })
    }
}
//同步
const mutations={ 
    orderMu(state,data){
        console.log('order...',data)
        data=data&&data.map(item=>{
            item.createTime=new Date(Number(item.createTime)).toLocaleString();
            item.status=item.cancleStatus==0?'待付款':'全部';
            return item
        })
        state.orderList=data;
    }
}


export default {
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}