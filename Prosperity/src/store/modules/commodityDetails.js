import { details, detailsImg, detailsRemind, detailsChoose } from "@/services"
const state = {
    pid: "",
    obj: {},
    sstid:"",
    basePid:"",
    userIdentity:"",
    arr:[],
    remind:"",
    chooseArr:[]
}

const getters = {

}
//异步
const actions = {
    //获取商品详情
    async getDetailList({ commit }) {
        let data = await details(state.pid)
        console.log('商品详情...',data)
        commit("getList", data.result)
        // console.log("data...",data)
    },
    //获取商品详情图片
    async getDetailImgList({ commit }) {
        let data = await detailsImg({pid:state.pid,basePid:state.basePid,userIdentity:state.userIdentity})
        console.log('商品详情图片...',data)
        commit("getImgList",data.result)
    },
    //获取商品详情提示
    async getDetailRemind({ commit }) {
        let data = await detailsRemind(state.sstid)
        // console.log("提示data...", data)
        commit("getRemind",data.result)
    },
    //获取商品详情选择
    async getDetailChoose({ commit }) {
        let data = await detailsChoose(state.pid)
        // console.log("选择data...", data)
        commit("getChoose",data.result)
    }
}
//同步
const mutations = {
    gotocommodityDtails(state, obj) {
        if(obj.pid){
            state.pid = obj.pid;
        }else{
            state.pid=obj.split("&")[1].split("=")[1]
        }
        wx.navigateTo({
            url: '/pages/CommodityDetails/main'
        })
    },
    getList(state, obj) {
        state.obj = obj;
        state.sstid=obj.sstid
        state.userIdentity=obj.userIdentity
        state.basePid=obj.basePid
        console.log("想要的obj...",state.obj)
    },
    getImgList(state,arr){
        state.arr=arr
    },
    getRemind(state,remind){
        state.remind=remind
    },
    getChoose(state,chooseArr){
        state.chooseArr=chooseArr
    }
}


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}