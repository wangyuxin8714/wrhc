import { tabList, chooseTrue, chooseGood } from "../../services/";

const state = {
  tabList: [],
  chooseList: [],
  chooseGoodList: []
};

const getters = {};
//异步
const actions = {
  //获取tab切换数据
  async getTabList({ commit }, params) {
    const res = await tabList(params);
    commit("getTabLists", res.result);
  },
  //获取为你精选好物
  async getChooseList({ state }, params) {
    const res = await chooseTrue(params);
    //上拉加载判断
    if (params === 1) {
      state.chooseList = res.result;
    } else {
      state.chooseList = [...state.chooseList, ...res.result];
    }
  },
  //获取精选好物数据
  async getChooseGood({ commit }) {
    const res = await chooseGood();
    //过滤数据
    res.result = res.result.map((item, index) => {
      if (index > 2) {
        if (item.pictUrl) {
          item.pictUrl = item.pictUrl.slice(0, item.pictUrl.indexOf("?"));
        }
        if (item.items) {
          item.items.map(val => {
            val.imgUrl = val.imgUrl.slice(0, val.imgUrl.indexOf("?"));
            return val;
          });
        }
      }
      return item;
    });
    commit("getChooseGoods", res.result);
  }
};
//同步
const mutations = {
  getTabLists(state, payload) {
    state.tabList = [...payload];
  },
  getChooseGoods(state, payload) {
    state.chooseGoodList = [...payload];
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
