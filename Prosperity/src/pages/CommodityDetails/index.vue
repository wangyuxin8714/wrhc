<template>
  <div class="detailBox">
    <div class="box">
      <div class="wop-swiper">
        <div v-if="obj.supplierProductPictureVoList.length">
          <mySwiper :swiperList="obj.supplierProductPictureVoList"/>
        </div>
        <div v-else>
          <img :src="obj.mainImgUrl">
        </div>
      </div>
      <div class="tit">
        <div class="ones">
          <span class="price money">￥</span>
          <span class="price">{{obj.salesPrice}}</span>
          <span class="num">{{obj.vipPrice}}</span>
          <img src="/static/images/黑卡@2x.png" alt>
        </div>
        <span class="share" @click="gotoSharingPage">分享赚{{obj.memberDiscountPrice}}</span>
      </div>
      <div class="title">
        <h3>{{obj.title}}</h3>
        <p>快递包邮</p>
      </div>
      <ul class="list">
        <li class="lis">
          <span>选择</span>
          <div class="rights">
            <span>{{chooseArr[0].aname}}</span>
            <span @click="getDialog">
              <img src="/static/images/jt.png" alt>
            </span>
          </div>
        </li>
        <li class="lis" v-if="obj.description">
          <span>说明</span>
          <span class="rights right">{{obj.description}}</span>
        </li>
        <li class="lis" v-if="remind">
          <span>提示</span>
          <span class="rights right">{{remind}}</span>
        </li>
      </ul>
      <div class="imgBox">
        <div v-for="(item,index) in arr" :key="index">
          <cover-image :src="item.imgUrl"/>
        </div>
      </div>
    </div>
    <footer class="footer">
      <button @click="gotoSharingPage">分享赚{{obj.memberDiscountPrice}}</button>
      <button>立即购买</button>
    </footer>
    <myDialog
      v-if="flag"
      :arr="chooseArr"
      :flag="flag"
      :url="obj.mainImgUrl"
      @cancleClick="cancle"
    />
  </div>
</template>
<script>
import myDialog from "@/components/dialog";
import mySwiper from "@/components/swiper";
import { mapActions, mapState,mapMutations} from "vuex";
export default {
  props: {},
  components: {
    myDialog,
    mySwiper
  },
  data() {
    return {
      flag: false
    };
  },
  computed: {
    ...mapState({
      obj: state => state.commodityDetails.obj,
      arr: state => state.commodityDetails.arr,
      remind: state => state.commodityDetails.remind,
      chooseArr: state => state.commodityDetails.chooseArr
    })
  },
  methods: {
    ...mapActions({
      getDetailList: "commodityDetails/getDetailList",
      getDetailImgList: "commodityDetails/getDetailImgList",
      getDetailRemind: "commodityDetails/getDetailRemind",
      getDetailChoose: "commodityDetails/getDetailChoose",
    }),
    ...mapMutations({
      gotoSharingPage:"commodityDetails/gotoSharingPage"
    }),
    getDialog() {
      this.flag = !this.flag;
    },
    cancle() {
      this.flag = !this.flag;
    },
    gotoSharingPage() {
      wx.navigateTo({
        url: "/pages/sharingPages/main"
      });
    }
  },
  created() {},
  mounted() {},
  onLoad() {
    this.getDetailList(),
      this.getDetailImgList(),
      this.getDetailRemind(),
      this.getDetailChoose();
  }
};
</script>
<style  scoped lang="scss">
.wop-swiper{
  height: 244px;
  >div{
    height: 100%;
  }
}
.detailBox {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  .box {
    flex: 1;
    width: 100%;
    overflow-y: scroll;
    .mySwiper {
      height: 244px !important;
    }
    .tit {
      height: 27px;
      padding: 5rpx 20rpx;
      display: flex;
      justify-content: space-between;
      .ones {
        .price {
          color: #fc5d7b;
          font-size: 44rpx;
          margin-right: 10rpx;
        }
        .money {
          font-size: 26rpx;
        }
        .num {
          height: 64rpx;
          line-height: 64rpx;
          font-size: 30rpx;
          color: #a97a33;
        }
        img {
          width: 40rpx;
          height: 20rpx;
          margin-top: 26rpx;
          margin-left: 10rpx;
        }
      }
      .share {
        font-size: 24rpx;
        border: 2rpx solid #fc5d7b;
        color: #fc5d7b;
        padding: 6rpx 20rpx;
        height: 40rpx;
        line-height: 40rpx;
        border-top-left-radius: 20rpx;
        border-bottom-left-radius: 20rpx;
      }
    }
    .title {
      padding: 20rpx;
      box-sizing: border-box;
      height: 86px;
      h3 {
        font-size: 36rpx;
        color: #323a45;
      }
      p {
        font-size: 24rpx;
        color: #999da2;
        padding: 10px 0;
      }
    }
    .list {
      list-style: none;
      padding: 0 2%;
      box-sizing: border-box;

      .lis {
        display: flex;
        font-size: 26rpx;
        height: 80rpx;
        line-height: 80rpx;
        .lis:first-child {
          color: #676767;
        }
        .rights {
          flex: 1;
          color: #323a45;
          display: flex;
          padding: 0 10rpx;
          box-sizing: border-box;
          justify-content: space-between;
          span {
            img {
              width: 20rpx;
              height: 20rpx;
              margin-top: 20rpx;
            }
          }
        }
        .right {
          color: #fc5d7b;
        }
        div {
          display: flex;
          justify-content: space-between;
        }
      }
    }
    .imgBox {
      width: 100%;
    }
  }
  .footer {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    button {
      flex: 1;
      background: linear-gradient(217deg, #f86367, #fb2579);
      color: #fff;
      border-radius: 0;
      font-size: 36rpx;
    }
  }
}
</style>