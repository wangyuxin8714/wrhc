<template>
  <div class="detailBox">
    <div class="box">
      <div class="wop-swiper">
        <cover-image
          src="https://jnup.oss-cn-beijing.aliyuncs.com/product/53782027fa7dbc48bcc064b5b5a6b94a.jpg"
        />
      </div>
      <div class="tit">
        <div class="ones">
          <span class="price money">￥</span>
          <span class="price">65</span>
          <span class="num">56.55</span>
          <img src="/static/images/黑卡@2x.png" alt>
        </div>
        <span class="share">分享赚8.45</span>
      </div>
      <div class="title">
        <h3>蓓臣/Babytry 婴儿理发器超静音宝宝家用剃头理发器电推剪充电式1-3岁</h3>
        <p>快递包邮</p>
      </div>
      <ul class="list">
        <li class="lis">
          <span>选择</span>
          <div class="rights">
            <span>颜色</span>
            <span>
              白色(usb充电)
              <img src="/static/images/jt.png" alt>
            </span>
          </div>
        </li>
        <li class="lis">
          <span>说明</span>
          <span class="rights right">充电式 全机身防水 陶瓷刀</span>
        </li>
        <li class="lis">
          <span>提示</span>
          <span class="rights right">西藏自治区,新疆维吾尔自治区不发货。</span>
        </li>
      </ul>
      <div class="imgBox">
        <cover-image src="https://h5.jinaup.com/product_img/1.jpg"/>
        <cover-image
          src="https://jnup.oss-cn-beijing.aliyuncs.com/product/68daa860585aa974a8381be80531f49b.jpg"
        />
        <cover-image src="https://h5.jinaup.com/product_img/2.jpg"/>
      </div>
    </div>
    <footer class="footer">
      <button>分享赚8.45</button>
      <button>立即购买</button>
    </footer>
  </div>
</template>
<script>
//import Dialog from "../../components/dialog"
export default {
  props: {},
  components: {
    //Dialog
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style  lang="scss">
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