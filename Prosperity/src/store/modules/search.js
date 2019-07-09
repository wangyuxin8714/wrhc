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
        // console.log("data",data.result)
        commit("getsearchlistlist",{index:payload.pageIndex,data:data.result})
    }   
}
//同步
const mutations={
    getsearchlistlist(state,payload){
        console.log(payload)
        if(payload.index!==1){
            state.searchlist=[...state.searchlist,...payload.data]
        }else{
            state.searchlist=payload.data
        }
        console.log(state.searchlist)
    }

}


export default {
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}