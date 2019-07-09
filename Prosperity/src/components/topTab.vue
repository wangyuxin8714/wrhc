<template>
  <scroll-view class="ul" scroll-x="true">
    <template v-if="classFlag">
      <p :class="{active:classFlag}">今日推荐</p>
      <p v-for="(item,index) in tabList" :key="index" @click="()=>goToClass(index)">{{item.cname}}</p>
    </template>

    <template v-else>
      <p @click="gotoFirst">今日推荐</p>
      <p
        v-for="(item,index) in tabList"
        :key="index"
        :class="{active:index===ind}"
        @click="$emit('tabClick',index)"
      >{{item.cname}}</p>
    </template>
  </scroll-view>
</template>
<script>
import { mapState, mapActions,mapMutations } from "vuex";
export default {
  props: ["list", "ind"],
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapState({
      tabList: state => state.home.tabList,
      classFlag:state => state.classify.classFlag
    })
  },
  methods: {
    ...mapActions({
      getTabList: "home/getTabList"
    }),
    ...mapMutations({
      goToClass:"classify/goToClass",
      gotoFirst:"classify/gotoFirst"
    })
  },
  created() {
    this.getTabList(0);
  },

  mounted() {}
};
</script>
<style scoped lang="scss">
.ul {
  width: 100%;
  white-space: nowrap;
  height: 50px;
  background: #fff;
  p {
    font-size: 16px;
    display: inline-block;
    height: 50px;
    text-align: center;
    box-sizing: border-box;
    margin: 0 10px;
    line-height: 50px;
    &.active {
      border-bottom: 6rpx solid #56d2bf;
      font-weight: 500;
      color: #56d2bf;
    }
  }
}
</style>