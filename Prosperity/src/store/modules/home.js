import { tabList, chooseTrue, chooseGood } from "../../services/home";

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
  //获取为你精选数据
  async getChooseList({ commit }, params) {
    const res = await chooseTrue(params);
    commit("getChooseLists", res.result);
  },
  //获取为你精选数据
  async getChooseGood({ commit }) {
    const res = await chooseGood();
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
    console.log(res.result);
    commit("getChooseGoods", res.result);
  }
};
//同步
const mutations = {
  getTabLists(state, payload) {
    state.tabList = [...payload];
    // console.log(state.tabList);
  },
  getChooseLists(state, payload) {
    state.chooseList = [...payload];
    // console.log(state.chooseList);
  },
  getChooseGoods(state, payload) {
    state.chooseGoodList = [...payload];
    // console.log(state.chooseGoodList);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
