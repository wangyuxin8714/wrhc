import { details, detailsImg, detailsRemind, detailsChoose,getColorSize,getplaceOrder,getgopayment } from "@/services";
const state = {
  pid: "",
  obj: {},
  sstid: "",
  basePid: "",
  userIdentity: "",
  arr: [],
  remind: "",
  chooseArr: [],
  colorSize:{},
  placeOrder:{}
};

const getters = {};
//异步
const actions = {
  //获取商品详情
  async getDetailList({ commit }) {
    let data = await details(state.pid);
    commit("getList", data.result);
    // console.log("data...",data)
  },
  //获取商品详情图片
  async getDetailImgList({ commit }) {
    let data = await detailsImg({
      pid: state.pid,
      basePid: state.basePid,
      userIdentity: state.userIdentity
    });
    commit("getImgList", data.result);
  },
  //获取商品详情提示
  async getDetailRemind({ commit }) {
    let data = await detailsRemind(state.sstid);
    // console.log("提示data...", data)
    commit("getRemind", data.result);
  },
  //获取商品详情选择
  async getDetailChoose({ commit }) {
    let data = await detailsChoose(state.pid);
    // console.log("选择data...", data)
    commit("getChoose", data.result);
  },
  //获取颜色尺寸
  async getColorSize({commit},payload){
    let data = await getColorSize(payload);
    if(data.res_code===1){
      commit("getColorSizes",data.result)
    }
    return data
  },
  async getplaceOrder({commit},payload){
    let data = await getplaceOrder(payload);
    commit("getplaceOrders",data.result)
    return data
  },
  async getgopayment({commit},payload){
    let data = await getgopayment(payload);
    console.log("data",data)
    // commit("getplaceOrders",data.result)
    // console.log(data)
    return data
  }
};
//同步
const mutations = {
  getplaceOrders(state,payload){
    state.placeOrder=payload
  },
  getColorSizes(state,payload){
    state.colorSize=payload
    state.colorSize.attributeValueJson=JSON.parse(state.colorSize.attributeValueJson)
  },
  gotocommodityDtails(state, obj) {
    if (obj.pid) {
      state.pid = obj.pid;
    } else {
      state.pid = obj.split("&")[1].split("=")[1];
    }
    wx.navigateTo({
      url: "/pages/CommodityDetails/main"
    });
  },
  getList(state, obj) {
    state.obj = obj;
    state.sstid = obj.sstid;
    state.userIdentity = obj.userIdentity;
    state.basePid = obj.basePid;
  },
  getImgList(state, arr) {
    state.arr = arr;
  },
  getRemind(state, remind) {
    state.remind = remind;
  },
  getChoose(state, chooseArr) {
    state.chooseArr = chooseArr;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
