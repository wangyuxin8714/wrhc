<template>
  <div class="shareWrap">
    <h2>{{obj.title}}</h2>
    <div class="price">【在售价】{{obj.salesPrice}}</div>
    <div class="center">
      <div class="left">
        <canvas style="width: 240px; height: 320px; border:1px solid #ccc" canvas-id="canvas"></canvas>
      </div>
      <div class="right">
        <div class="prolist">
          <cover-image class="img1" src="/static/images/true2.png"/>
          <img class="img2" :src="obj.mainImgUrl">
        </div>
      </div>
    </div>
    <div class="footer">
      <ul class="list">
        <li @click="cunBtn">
          <cover-image class="imgs" src="/static/images/6.png"/>
          <span>保存到相册</span>
        </li>
        <li>
          <cover-image class="imgs" src="/static/images/7.png"/>
          <span>微信好友</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

//用户信息
const userInfo = {
  avatar: "https://avatars1.githubusercontent.com/u/48471630?s=460&v=4",
  name: "゜ Glory"
};

//二维码
const qrCode = "https://upapi.jinaup.com/static/image/QRCode.png";

export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapState({
      obj: state => state.commodityDetails.obj
    })
  },
  created() {},
  mounted() {
    const that = this;
    //获取canvas
    var ctx = wx.createCanvasContext("canvas");
    //绘制白色背景
    ctx.rect(0, 0, 240, 320);

    //绘制用户信息
    ctx.drawImage(userInfo.avatar, 0, 0, 600, 600, 15, 15, 50, 50);
    ctx.save();
    ctx.setFontSize(12); //设置字体颜色
    ctx.fillText(`${userInfo.name}分享给你一个商品`, 60, 26);
    ctx.fillText(`邀请码: shareaproductwithyou`, 60, 46);
    ctx.restore();

    //绘制大图片和标题
    ctx.save();
    ctx.setFontSize(12);

    let row = 0,
      pos = 0;
    for (let i = 0; i < that.obj.title.length; i++) {
      let str = that.obj.title.slice(pos, i);
      if (
        ctx.measureText(str).width > 188 &&
        ctx.measureText(str).width < 200
      ) {
        ctx.fillText(that.obj.title.slice(pos, i), 20, 215 + 15 * row);
        row++;
        pos = i;
      }
    }
    if (pos < that.obj.title.length) {
      ctx.fillText(
        that.obj.title.slice(pos, that.obj.title.length),
        20,
        215 + 15 * row
      );
    }

    ctx.restore();

    //获取图片的宽高
    wx.getImageInfo({
      src: that.obj.mainImgUrl,
      success(res) {
        let rx, ry, rw, rh;
        if (res.width / res.height > 200 / 280) {
          ry = 0;
          rh = res.height;
          rw = res.height / 280 * 200;
          rx = (res.width - rw) / 2;
        } else {
          rx = 0;
          rw = res.width;
          rh = res.height / 200 * 280;
          ry = (res.height - rh) / 2;
        }
        //绘制商品图
        ctx.drawImage(
          that.obj.mainImgUrl,
          0,
          0,
          res.width,
          res.height,
          50,
          70,
          100,
          120
        );
        ctx.draw(true);
      }
    });

    //绘制二维码
    ctx.save();
    ctx.setFontSize(15);
    ctx.fillText("长按识别二维码访问", 20, 295);
    ctx.restore();
    ctx.drawImage(qrCode, 170, 250, 60, 60);

    // 绘制商品价格
    ctx.save();
    ctx.setFontSize(10);
    ctx.setFillStyle("#ff0000");
    ctx.fillText("￥", 20, 270);
    ctx.setFontSize(18);
    ctx.fillText(that.obj.salesPrice, 30, 270);
    ctx.setFontSize(10);
    ctx.setFillStyle("#999");
    ctx.fillText(
      `￥${that.obj.marketPrice}`,
      150 - ctx.measureText(`￥${that.obj.marketPrice}`).width,
      270
    );
    ctx.restore();

    ctx.draw();
  },
  methods: {
    cunBtn() {
      wx.canvasToTempFilePath({
        canvasId: "canvas",
        fileType: "jpg",
        success(res) {
          wx.saveImageToPhotosAlbum({
            filePath: res.tempFilePath,
            success(res) {
              wx.showToast({
                title: "保存成功",
                icon: "success"
              });
            }
          });
        }
      });
    }
  }
};
</script>
<style scoped lang="scss">
.shareWrap {
  width: 100%;
  height: 100%;
  overflow: hidden;
  h2 {
    font-weight: 600;
    font-size: 40rpx;
    width: 658rpx;
    margin: 0 auto;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .price {
    width: 690rpx;
    height: 60rpx;
    margin: 0 auto;
    margin-top: 20rpx;
  }
  .center {
    width: 800rpx;
    height: 390px;
    margin: 30rpx auto 0;
    display: flex;
    .left {
      height: auto;
      margin-left: 5px;
    }
    .right {
      .prolist {
        width: 100rpx;
        height: 100rpx;
        border: 2rpx solid #ededed;
        margin-left: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        margin-bottom: 18rpx;
        padding: 10px;
        .img1 {
          width: 42rpx;
          height: 42rpx;
          position: absolute;
          top: 4rpx;
          right: 4rpx;
        }
        .img2 {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
.footer {
  height: 175rpx;
  .list {
    display: flex;
    justify-content: space-around;
    li {
      text-align: center;
      font-size: 30rpx;
      display: flex;
      flex-direction: column;
      .imgs {
        width: 100rpx;
        height: 100rpx;
        margin: 15rpx auto;
      }
    }
  }
}
</style>