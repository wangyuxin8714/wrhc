import { getTabs, getClassData } from "../../services/";

const state = {
  tabData: [],
  classData: [],
  classFlag: true,
  goClassIndex: 0 //跳转到分类页面的下标
};

const getters = {};
//异步
const actions = {
  //获取tab切换数据
  async getTabs({ commit }) {
    const res = await getTabs();
    commit("getsTabs", res.result);
  },
  //获取tab切换数据
  async getClassData({ commit }, payload) {
    const res = await getClassData(payload);
    commit("getclassDates", { index: payload.pageIndex, data: res.result });
  }
};
//同步
const mutations = {
  getclassDates(state, payload) {
    //上拉加载判断
    if (payload.index === 1) {
      state.classData = payload.data;
    } else {
      state.classData = [...state.classData, ...payload.data];
    }
  },
  getsTabs(state, payload) {
    state.tabData = [...payload];
  },
  //跳转到分类页面
  goToClass(state, index) {
    state.classFlag = false;
    state.goClassIndex = index;
    wx.navigateTo({
      url: "../../pages/classify/main"
    });
  },
  //返回首页
  gotoFirst(state) {
    state.classFlag = true;
    wx.switchTab({
      url: "/pages/index/main"
    });
  },
  //改变下标index
  changeIndex(state, index) {
    state.goClassIndex = index;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
