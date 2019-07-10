﻿import { tabList, chooseTrue, chooseGood } from "../../services";

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
    // console.log("res......",res)
    commit("getTabLists", res.result);
  },
  //获取为你精选好物
  async getChooseList({ commit }, params) {
    const res = await chooseTrue(params);
    commit("getChooseLists",{params,data:res.result})

    
  },
  //获取精选好物数据
  async getChooseGood({ commit }) {
    const res = await chooseGood();
    
    // console.log(res.result);
    commit("getChooseGoods", res);
  }
};
//同步
const mutations = {
  getChooseLists(state,payload){
    //上拉加载判断
    if (payload.params === 1) {
      state.chooseList = payload.data;
    } else {
      state.chooseList = [...state.chooseList, ...payload.data];
    }
  },
  getTabLists(state, payload) {
    state.tabList = [...payload];
  },
  getChooseGoods(state, res) {
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

    state.chooseGoodList = [...res.result];
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
