<template>
  <div class="attestation">
    <form bindsubmit="formSubmit" bindreset="formReset">
      <ul class="user">
        <li>
          <span>真实姓名</span>
          <input type="text">
        </li>
        <li>
          <span>身份证号</span>
          <input type="text">
        </li>
      </ul>
      <div class="upload">
        <p>
          上传身份证照片
          <span>(图片png、jpg,大小不超过5M)</span>
        </p>
        <div>
          <div @click='uploadFile'>
            <img  src="https://jnup.oss-cn-beijing.aliyuncs.com/user/2c40e60ccb312858c40533738906e830.jpg" alt="">
          </div>
   
        </div>
      </div>
      <div class="why">
        <h2>为什么需要实名认证?</h2>
        <ul>
          <li>
            <b>●</b>
            根据海关规定,购买跨境商品需要办理清关手续,请您配合进行实名认证,以确保您购买分的商品顺利通过·海关检查。(积纳有品海购承诺所传身份证明只用于办理跨境商品的清关手续,不做他途使用,其他任何人均法查看)
          </li>
          <li>
            <b>●</b>
            实名认证的规则:购买跨境商品需填写积纳账号注册·人的真实姓名、身份证号码及与实名一致的手机号,部分商品下单时需提供收货人的实名信息(含身份证照片)，具体请以下单时的提示为准。
          </li>
        </ul>
      </div>
      <button form-type="submit">保存</button>
    </form>
  </div>
</template>
<script>
export default {
   methods: {
     uploadFile(){
      //  wx.getFileInfo({
      //     success (res) {
      //       console.log('res.size......',res)
      //       // console.log(res.digest)
      //     }
      //   })
     }
   },
}
</script>
<style lang="scss" scoped>
.attestation {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .user {
    border-bottom: 1rpx solid #eee;
    background: #fff;
    li {
      width: 100%;
      height: 100rpx;
      align-items: center;
      display: flex;
      &:nth-child(1) {
        border-bottom: 2rpx solid #f6f6f6;
      }
      span {
        width: 150rpx;
        margin-left: 26rpx;
        font-size: 32rpx;
        font-weight: 700;
      }
      input {
        height: 100rpx;
        flex: 1;
        padding-left: 20rpx;
        font-size: 32rpx;
        cursor: auto;
        display: block;
        height: 1.4rem;
        text-overflow: clip;
        overflow: hidden;
        white-space: nowrap;
        font-family: UICTFontTextStyleBody;
        min-height: 1.4rem;
      }
    }
  }
  .upload {
    width: 100%;
    height: 340rpx;
    background: #fff;
    display: flex;
    flex-direction: column;
    margin-top: 15rpx;
    p {
      font-size: 32rpx;
      padding: 28rpx 30rpx;
      box-sizing: border-box;
      span {
        font-size: 30rpx;
        margin-left: 30rpx;
        display: inline-block;
        color: #999da2;
      }
    }
    > div {
      display: flex;
      box-sizing: border-box;
      justify-content: center;
      div {
        width: 330rpx;
        margin: 0 5px;
        height: 220rpx;
        border-radius: 10rpx;
        border: 1rpx dashed #64e1d3;
        img {
          height: 100%;
          width: 100%;
          border-radius: 10rpx;
        }
      }
    }
  }
  .why {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h2 {
      margin: 20rpx 200rpx;
      font-size: 32rpx;
    }
    ul {
      width: 100%;
      display: flex;
      flex-direction: column;
      li {
        width: 80%;
        font-size: 28rpx;
        color: #999da2;
        line-height: 44rpx;
        margin: 10rpx 10%;
        b {
          padding: 0 10rpx;
          display: inline;
        }
      }
    }
  }
  button {
    height: 80rpx;
    width: 90%;
    background: #64e1d3;
    color: #fff;
    font-size: 36rpx;
    line-height: 80rpx;
    border-radius: 17rpx;
    margin: 0 5%;
  }
}
</style>

