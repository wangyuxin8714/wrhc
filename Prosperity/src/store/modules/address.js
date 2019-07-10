import {addressFn,addAddressFn} from "../../services/address";
const state={
    current: {
        address: '',
        consignee:'',
        consigneePhone: '',
        addressTag: null,
        state: 0,
        region:[],
        code:[],
    },
    addressArr:[]
}

const getters = {

}
//异步
const actions={
    //获取收货地址列表
    async getAddressList({ commit }) {
        const res = await addressFn();
        commit("addressListMu", res.result);
    },
    //添加收货地址
    async addAddressActions({ commit },payload) {
        delete payload.region;
        delete payload.code;
        const res = await addAddressFn(payload);
        return res
    },
}
//同步
const mutations={
    addressListMu(state, payload) {
        state.addressArr = [...payload];
    },
}


export default {
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}