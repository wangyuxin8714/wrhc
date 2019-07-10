<template>
  <div class="wrap">
    <TopTab :flag="flag" :ind="ind" @tabClick="tabChange"/>

    <div v-if="tabData[goClassIndex]" class="top">
      <dl v-for="(item,index) in tabData[goClassIndex].childs" :key="index" @click="goClass(item)">
        <dt>
          <img :src="item.imgUrl" alt>
        </dt>
        <dd>
          <span>{{item.cname}}</span>
        </dd>
      </dl>
    </div>

    <ChooseTab :classData="classData"/>
  </div>
</template>
<script>
import TopTab from "../../components/topTab";
import ChooseTab from "../../components/chooseTab";
import { mapActions, mapState, mapMutations } from "vuex";
export default {
  props: {},
  components: { TopTab, ChooseTab },
  data() {
    return {
      page: 1,
      flag: false
    };
  },
  computed: {
    ...mapState({
      tabData: state => state.classify.tabData,
      classData: state => state.classify.classData,
      goClassIndex: state => state.classify.goClassIndex
    })
  },
  methods: {
    ...mapActions({
      getTabs: "classify/getTabs",
      getClassData: "classify/getClassData"
    }),
    ...mapMutations({
      changeIndex: "classify/changeIndex"
    }),
    goClass(item) {
      this.$bus.$emit("cid", item.cid);
      this.getClassData({
        pageIndex: 1,
        cid: item.cid,
        sortType: 1
      });
    },
    tabChange(index) {
      this.changeIndex(index);
      this.page = 1;
      this.$bus.$emit("cid", this.tabData[this.goClassIndex].cid);
      this.getClassData({
        pageIndex: this.page,
        cid: this.tabData[this.goClassIndex].cid,
        sortType: 1
      });
    }
  },
  created() {},
  onShow() {
    this.getTabs();
    this.flag = false;
  },
  //上拉加载数据
  onReachBottom() {
    if (this.page > 4) {
      wx.showToast({
        title: "没有更多数据了", //提示的内容,
        icon: "none" //图标,
      });
    } else {
      this.page = this.page + 1;
      this.getClassData({
        pageIndex: this.page,
        cid: this.tabData[this.goClassIndex].cid,
        sortType: 1
      });
    }
  }
};
</script>
<style scoped lang="scss">
.wrap {
  width: 100%;
}
.top {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  background: #fff;
  dl {
    width: 25%;
    display: inline-block;
    padding: 20rpx;
    box-sizing: border-box;
    text-align: center;
    img {
      width: 100rpx;
      height: 100rpx;
    }
    span {
      font-size: 12px;
      display: block;
      padding: 12rpx 0;
      box-sizing: border-box;
    }
  }
}
</style>