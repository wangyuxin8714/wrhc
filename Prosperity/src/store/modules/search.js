import {getsearchlist} from "@/services"
const state={
    searchlist:[]
}

const getters = {

}
//异步
const actions={
    async getsearchlist({commit},payload){
        let data=await getsearchlist(payload)
        commit("getsearchlistlist",data.result)
    }   
}
//同步
const mutations={
    getsearchlistlist(state,payload){
        state.searchlist=payload
    }

}


export default {
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}