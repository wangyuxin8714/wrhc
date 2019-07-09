<template>
  <div class="wrap">
    <form bindsubmit="formSubmit" bindreset="formReset">
      <div class="head">
        <view class="section">
          <label class="section__title">真实姓名</label>
          <input name="username" placeholder="请输入身份证姓名" />
        </view>
        <view class="section">
          <label class="section__title">身份证号</label>
          <input name="hao" placeholder="请输入身份证号" />
        </view>
      </div>
      <div class="upload">
        <h1>上传身份证照片<span>(图片png、jpg,大小不超过5M)</span></h1>
        <div class="pic">
          <div>
            <img src="" alt="">
          </div>
          <div>
            <img src="" alt="">
          </div>
        </div>
      </div>
      <div class="introduce">
        <h2>为什么需要实名认证?</h2>
        <ul>
          <li><b>●</b>根据海关规定,购买跨境商品需要办理清关手续,请您配合进行实名认证,以确保您购买分的商品顺利通过·海关检查。(积纳有品海购承诺所传身份证明只用于办理跨境商品的清关手续,不做他途使用,其他任何人均法查看)</li>
          <li><b>●</b>实名认证的规则:购买跨境商品需填写积纳账号注册·人的真实姓名、身份证号码及与实名一致的手机号,部分商品下单时需提供收货人的实名信息(含身份证照片)，具体请以下单时的提示为准。</li>
        </ul>
      </div>
      <button form-type="submit">保存</button>

    </form>
  </div>
</template>



<script>


// export default {
//   props:{
    
//   },
//   components:{

//   },
//   data(){
//     return {

//     }
//   },
//   computed:{

//   },
//   methods:{

//   },
//   created(){

//   },
//   mounted(){

//   }
// }
</script>
<style scoped lang="scss">
// .wrap{
//   width: 100%;
//   height: 100%;
//   display:flex;
//   flex-direction:column;
//   background:#f3f7f7;
//   position:relative
// }
// .head{
//   border-bottom:1rpx solid #eee;
//   background:#fff;
//   .section{
//     width:100%;
//     height:100rpx;
//     align-items:center;
//     display:flex;
//     label{
//       width:150rpx;
//       margin-left:26rpx;
//       font-size:32rpx;
//       font-weight:700;
//     }
//     input{
//       height:100rpx;
//       flex:1;
//       padding-left:20rpx;
//       font-size:32rpx;

//     }
//   }
// }
// .upload{
//   width:100%;
//   height:340rpx;
//   background:#fff;
//   display:flex;
//   flex-direction:column;
//   margin-top:15rpx;
//   h1{
//     font-size:32rpx;
//     padding:28rpx 30rpx;
//     box-sizing:border-box;
//     span{
//       font-size:30rpx;
//       margin-left:30rpx;
//       display:inline-block;
//       color:#999da2;

//     }
//   }
//   .pic{
//     display:flex;
//     div{
//       width:330rpx;
//       height:220rpx;
//       border-radius:10rpx;
//       border:1rpx dashed #64e1d3;
//       margin-left:34rpx;
//       position:relative;
//       background: red;
//       img{
//         height:100%;
//         width:100%;
//         border-radius:10rpx;
//       }
//     }
//   }
// }
// .introduce{
//   display:block;
//   h2{
//     margin:20rpx 200rpx;
//     font-size:32rpx;
//   }
//   ul{
//     display:flex;
//     flex-direction:column;
//     li{
//       width:80%;
//       font-size:28rpx;
//       color:#999da2;
//       line-height:44rpx;
//       margin:10rpx 10%;
//       b{
//         padding:0 10rpx;
//         display:inline; 
//       }
//     }
//   }
// }
// button{
//   height:80rpx;
//   width:90%;
//   background:#64e1d3;
//   color:#fff;
//   font-size:36rpx;
//   line-height:80rpx;
//   border-radius:17rpx;
//   margin:0 5%;
// }
</style>
