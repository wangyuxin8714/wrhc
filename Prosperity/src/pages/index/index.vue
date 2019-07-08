<template>
  <div class="wrap">
    <div class="wrap_top">
      <div class="wrap_top_seach">
        <cover-image src="/static/images/search.png"/>
      </div>
      <TopTab/>
    </div>
    <div class="wrap_main">
      <div class="main_swiper">
        <Swipers/>
      </div>
      <div class="main_go">
        <div class="main_go_div">
          <div class="main_go_left">
            <cover-image
              class="main_img"
              src="https://jnup.oss-cn-beijing.aliyuncs.com/product/73b9906cea8612b23967553ef93c5c55.png"
            />
          </div>
          <div class="main_go_right">
            <cover-image
              class="main_go_top"
              src="https://jnup.oss-cn-beijing.aliyuncs.com/product/daa273d3f039af3e622f7d2d09680552.png"
            />
            <cover-image
              class="main_go_bottom"
              src="https://jnup.oss-cn-beijing.aliyuncs.com/product/695f4f58282831fe5d1967762032ad15.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopTab from "../../components/topTab";
import Swipers from "../../components/swiper";
export default {
  data() {
    return {};
  },

  components: {
    TopTab,
    Swipers
  },

  methods: {},

  created() {}
};
</script>

<style lang="scss" scoped>
.wrap {
  width: 100%;

  .wrap_top {
    width: 100%;
    height: 80px;
    .wrap_top_seach {
      width: 100%;
      height: 30px;
      padding: 0 10px;
      box-sizing: border-box;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .wrap_main {
    width: 100%;
    .main_swiper {
      width: 100vw;
      padding: 0 10rpx;
      height: 39.5vw;
      margin-bottom: 20rpx;
      margin-top: 10rpx;
      box-sizing: border-box;
    }
  }
  .main_go {
    width: 100%;
    .main_go_div {
      display: flex;
      margin-top: 40rpx;
      padding: 0 2%;
      height: 376rpx;
      box-sizing: border-box;
      .main_go_left {
        width: 40%;
        height: 100%;
        .main_img {
          width: 100%;
          height: 100%;
          padding-right: 4rpx;
          box-sizing: border-box;
        }
      }
      .main_go_right {
        width: 60%;
        height: 100%;
        .main_go_bottom,.main_go_top {
          width: 100%;
          height: 50%;
          display: block;
        }
        .main_go_top{
          padding-bottom: 4rpx;
          box-sizing: border-box;
        }
        .main_go_bottom {
          padding-top: 4rpx;
          box-sizing: border-box;
        }
      }
    }
  }
}
</style>

