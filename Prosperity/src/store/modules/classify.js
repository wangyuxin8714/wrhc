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
  async getClassData({ state }, payload) {
    const res = await getClassData(payload);
    //上拉加载判断
    if (payload.pageIndex === 1) {
      state.classData = res.result;
    } else {
      state.classData = [...state.classData, ...res.result];
    }
  }
};
//同步
const mutations = {
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
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
