<template>
  <scroll-view scroll-x class="ul">
      <p class="active">今日推荐</p>
      <p
        @click="tab(index)"
        :class="{active:index===ind}"
        v-for="(item,index) in tabList"
        :key="index"
      >{{item.cname}}</p>
  </scroll-view>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  props: ["list"],
  components: {},
  data() {
    return {
      ind: 0
    };
  },
  computed: {
    ...mapState({
      tabList: state => state.home.tabList
    })
  },
  methods: {
    ...mapActions({
      getTabList: "home/getTabList"
    }),
    tab(index) {
      this.ind = index;
    }
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