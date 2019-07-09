<template>
  <div class="wrap">
    <div class="header">
      <div class="banner">
        <img :src="dissertationlist.specialImg" alt>
      </div>
      <TopTab :list="dissertationlist.anchors"></TopTab>
    </div>
    <scroll-view class="listwrap" scroll-y>
      <div class="box" v-for="(item,index) in dissertationlist.anchors" :key="index">
        <div class="cake">
          <div class="cake_left">
            <i class="left_line"></i>
            <i class="left_dot"></i>
          </div>
          <p>
            <span>{{item.anchorName}}</span>
          </p>
          <div class="cake_right">
            <i class="left_dot"></i>
            <i class="left_line"></i>
          </div>
        </div>
        <div class="hot1">
          <Dls :list="item.products" :index="index"/>
        </div>
      </div>
    </scroll-view>
  </div>
</template>
<script>
import TopTab from "../../components/topTab";
import Dls from "../../components/dls";
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  props: {},
  components: {
    TopTab,
    Dls
  },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      dissertationlist: state => state.dissertation.dissertationlist
    })
  },
  methods: {
    ...mapActions({
      getdissertation: "dissertation/getdissertation"
    })
  },
  created() {
    this.getdissertation(182);
  },
  onShow() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.wrap {
  width: 100%;
  background: #f3f7f7;
}
.header {
  width: 100%;
  .banner {
    width: 100%;
    img {
      width: 100%;
      height: 300rpx;
    }
  }
}
.listwrap {
  height: 100vh;
  box-sizing: border-box;
  .box {
    display: block;
    .cake {
      width: 100%;
      display: flex;
      height: 150rpx;
      box-sizing: border-box;
      padding: 0 150rpx;
      justify-content: space-between;
      .cake_left {
        display: flex;
      }
      .cake_right {
        display: flex;
      }
      .left_line {
        width: 68rpx;
        height: 2rpx;
        background: #484848;
        margin: 72rpx 0 0;
      }
      .left_dot {
        width: 14rpx;
        height: 14rpx;
        background: #484848;
        margin: 66rpx 10rpx;
        transform: rotate(45deg);
      }
      p {
        width: 300rpx;
        height: 50rpx;
        font-size: 28rpx;
        font-family: PingFangSC-Medium;
        font-weight: 500;
        color: #484848;
        line-height: 50rpx;
        text-align: center;
        margin-top: 50rpx;
        box-sizing: border-box;
        span {
          margin-right: 8rpx;
        }
      }
    }
    .hot1 {
      width: 100%;
    }
  }
}
</style>
