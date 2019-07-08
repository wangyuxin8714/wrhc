import {getdissertation} from "@/services"
const state={
    dissertationlist:{}
}

const getters = {

}
//异步
const actions={
    async getdissertation({commit},payload){
        let data=await getdissertation(payload)
        console.log("data",data.result)
        commit("getdissertationlist",data.result)
    }   
}
//同步
const mutations={
    getdissertationlist(state,payload){
        state.dissertationlist=payload
    }

}


export default {
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}