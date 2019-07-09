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
        state.orderList=data;
        console.log('order...',state.orderList)
    }
}


export default {
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}