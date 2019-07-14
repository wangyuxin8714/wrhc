<template>
  <div class="wrap">
    <div class="wrap_top">
      <div class="wrap_top_seach" @click="goSearch">
        <img src="../../../static/images/search.png">
      </div>
      <TopTab :flag="flag"/>
    </div>
    <div class="wrap_main">
      <div v-for="(item,index) in chooseGoodList" :key="index">
        <div class="main_swiper" v-if="item.type === 'carouselImg'">
          <Swipers :swiperList="item.items"/>
        </div>
        <div class="main_go">
          <div class="main_go_div" v-if="item.type==='adThree'">
            <div class="main_go_left">
              <img
                class="main_img"
                @click="godisser(item.items[0].jumpUrl)"
                :src="item.items[0].imgUrl"
              >
            </div>
            <div class="main_go_right">
              <img
                class="main_go_top"
                @click="godisser(item.items[1].jumpUrl)"
                :src="item.items[1].imgUrl"
              >
              <img
                class="main_go_bottom"
                @click="godisser(item.items[2].jumpUrl)"
                :src="item.items[2].imgUrl"
              >
            </div>
          </div>
        </div>
        <div class="main_summer_body">
          <template v-if="item.type === 'adOne'">
            <cover-image
              @click="godisser(item.jumpUrl)"
              class="main_summer_img"
              :src="item.pictUrl"
            />
          </template>

          <template v-if="item.type === 'sixProduct'">
            <Titles/>
            <my-list :types="typeTop" :goodList="item.items"/>
          </template>
        </div>
      </div>
      <Titles titFlag="titFlag"/>
      <my-list :types="typeLeft" :chooseList="chooseList"/>
    </div>
  </div>
</template>

<script>
import TopTab from "../../components/topTab";
import Swipers from "../../components/swiper";
import Titles from "../../components/firstTitle";
import myList from "../../components/list";
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      typeLeft: "left",
      typeTop: "top",
      titFlag: true,
      page: 1,
      flag: true
    };
  },

  components: {
    TopTab,
    Swipers,
    Titles,
    myList
  },
  computed: {
    ...mapState({
      chooseList: state => state.home.chooseList,
      chooseGoodList: state => state.home.chooseGoodList
    })
  },

  methods: {
    ...mapActions({
      getChooseList: "home/getChooseList",
      getChooseGood: "home/getChooseGood",
      getdissertation: "dissertation/getdissertation"
    }),
    goSearch() {
      wx.navigateTo({
        url: "/pages/search/main"
      });
    },
    godisser(url) {
      let id = url.split("&")[1].split("=")[1];
      this.getdissertation(id);
      wx.navigateTo({
        url: "/pages/dissertation/main"
      });
    }
  },
  created() {
    this.getChooseList(this.page);
    this.getChooseGood();
  },
  onShow() {
    this.flag = true;
  },
  //上拉加载数据
  onReachBottom() {
    if (this.page > 10) {
      wx.showToast({
        title: "没有更多数据了", //提示的内容,
        icon: "none" //图标,
      });
    } else {
      this.page = this.page + 1;
      this.getChooseList(this.page);
    }
  }
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
    height: auto;
    margin: 10px 0;
    .main_go_div {
      height: 376rpx;
      display: flex;
      margin-top: 40rpx;
      padding: 0 2%;
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
        .main_go_bottom,
        .main_go_top {
          width: 100%;
          height: 50%;
          display: block;
        }
        .main_go_top {
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
  .main_summer_body {
    width: 100%;
    .main_summer_img {
      width: 96%;
      height: 100%;
      margin: 0 2%;
      border-radius: 30rpx;
    }
  }
}
</style>

