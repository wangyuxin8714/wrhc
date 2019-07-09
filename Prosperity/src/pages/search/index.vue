<template>
  <div class="wrap">
    <div class="header">
      <div class="search">
        <div class="search-bg">
          <img src="../../../static/seek/search.png" alt="">
          <view class="search-input">
            <input placeholder="搜索" auto-focus/>
          </view>
        </div>
        <div class="search-text">取消</div>
      </div>
    </div>
    <main v-if="flag">
      <div class="history">
        <p>历史搜索</p>
        <img src="../../../static/seek/del.png" alt="">
      </div>
      <div class="choice">
        <span> 锅 </span>
      </div>
    </main>
    <main>
      <div class="wrapper">
        <div class="nav">
          <ul>
            <li>综合</li>
            <li>最新</li>
            <li>价格</li>
          </ul>
        </div>
        <div class="content">
          <dl v-for="(item,index) in searchlist" :key="index">
            <dt><span>
              <img :src="item.mainImgUrl" alt="">
            </span></dt>
            <dd>
              <h3>{{item.title}}</h3>
              <div class="price">
                <div>
                  <b>￥</b>
                  <b>{{item.salesPrice}}</b>
                </div>
                <span>￥{{item.vipPrice}}</span>
              </div>
              <span class="tl-content">NEW</span>
            </dd>
          </dl>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
import {mapActions,mapState} from "vuex"
export default {
  props:{
    
  },
  components:{

  },
  data(){
    return {
      flag:false
    }
  },
  computed:{
    ...mapState({
      searchlist:state=>state.search.searchlist
    })
  },
  methods:{
    ...mapActions({
      getsearchlist:"search/getsearchlist"
    })
  },
  created(){
    this.getsearchlist({
      queryWord:'锅',
      queryType:0,
      querySort:'asc',
      pageIndex:1
    })
  },
  mounted(){
  }
}
</script>
<style scoped lang="scss">
.wrap{
  display:flex;
  flex-direction:column;
  height:100%;
  width:100%;
}
.header{
  z-index:666;
  width:100%;
  background:#f9f9f9;
  height:80rpx;
  line-height:80rpx;
  box-sizing:border-box;
  .search{
    display:flex;
    font-size:28rpx;
    height:60rpx;
    margin-top:10rpx;
    .search-bg{
      width:100%;
      height:56rpx;
      box-sizing:border-box;
      display:flex;
      background:#ededed;
      overflow:hidden;
      border-radius:10rpx;
      margin-left:40rpx;
      padding-left:30rpx;
      align-items: center;
      img{
        height:32rpx;
        width:32rpx;
        margin:10rpx;
        display:inline-block;
        overflow:hidden;
      }
      .search-input{
        width:70%;
        line-height:30rpx;
        border:none;
        background:#ededed;
        border-radius:10rpx;
        input{
          cursor:auto;
          display:block;
          height:1.4rem;
          text-overflow:clip;
          overflow:hidden;
          white-space:nowrap;
          font-family:UICTFontTextStyleBody;
          min-height:1.4rem;
        }
      }
    }
    .search-text{
      width:20%;
      height:28rpx;
      font-size:28rpx;
      font-family:PingFangSC-Regular;
      font-weight:400;
      color:#999da2;
      line-height:60rpx;
      margin-left:32rpx;

    }
  }
}
.history{
  display:flex;
  justify-content:space-between;
  p{
    width:112rpx;
    height:40rpx;
    font-size:28rpx;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:#999;
    line-height:40rpx;
    margin-top:30rpx;
    margin-left:40rpx;
    margin-bottom:30rpx;
  }
  img{
    height:28rpx;
    width:28rpx;
    margin-top:30rpx;
    margin-right:40rpx;
  }
}
.choice{
  display:flex;
  flex-wrap:wrap;
  padding-left:40rpx;
  box-sizing:border-box;
  span{
    font-size:28rpx;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:#333;
    padding:10rpx 38rpx 10rpx 34rpx;
    background:#f5f5f4;
    border-radius:12rpx;
    margin-bottom:30rpx;
    margin-right:28rpx;
  }
}
.wrapper{
  width:100%;
  height:100%;
  display:flex;
  flex-direction:column;
  .nav{
    z-index:666;
    width:100%;
    height:80rpx;
    background:#fff;
    ul{
      width:100%;
      height:100%;
      display:flex;
      align-items:center;
      li{
        flex:1;
        height:100%;
        text-align:center;
        line-height:80rpx;
        font-size:26rpx;
        color:#666;
      }
    }
  }
}
.content{
  flex:1;
  width:100%;
  height:100%;
  background:#f3f7f7;
  padding:18rpx 10rpx 0;
  box-sizing:border-box;
  display:flex;
  flex-wrap:wrap;
  justify-content:space-between;
  dl{
    width:363rpx;
    height:536rpx;
    background:#fff;
    border-radius:10rpx;
    display:flex;
    flex-direction:column;
    margin-top:8rpx;
    position:relative;
    dt{
      height:400rpx;
      padding:60rpx 46rpx 30rpx 28rpx;
      span{
        display:block;
        width:295rpx;
        height:277rpx;
        img{
          width:100%;
          height:100%;
        }
      }
    }
    dd{
      width:100%;
      flex:1;
      h3{
        font-size:24rpx;
        padding-left:10rpx;
        color:#323a45;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
      }
      .price{
        width:100%;
        display:flex;
        align-items:flex-end;
        >div{
          display:flex;
          align-items:flex-end;
          padding-left:6rpx;
          b:first-child{
            font-size:28rpx;
            color:#fc5d7b;
          }
          b:last-child{
            font-size:36rpx;
            color:#fc5d7b;
          }
        }
        span{
          font-size:22rpx;
          color:#a87831;
        }
      }
      .tl-content{
        display:block;
        width:50rpx;
        height:26rpx;
        border-radius:4rpx;
        background:linear-gradient(270deg,#ffb848,#ff7737);
        position:absolute;
        top:20rpx;
        right:20rpx;
        color:#fff;
        font-size:18rpx;
        text-align:center;
        line-height:26rpx;

      }
    }
  }
}
</style>
