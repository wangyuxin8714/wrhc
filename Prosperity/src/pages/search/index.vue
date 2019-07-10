<template>
  <div class="wrap" :scrollTop="scrollTop" @scrolltolower="lower" scroll-y @scroll="listscroll">
    <div class="header">
      <div class="search">
        <div class="search-bg">
          <img src="../../../static/seek/search.png" alt />
          <view class="search-input">
            <input
              v-model="text"
              @input="updateinput"
              @confirm="submit"
              placeholder="搜索"
              auto-focus
            />
          </view>
        </div>
        <div class="search-text" @click="cancel">取消</div>
      </div>
    </div>
    <main v-if="flag">
      <div class="history">
        <p>历史搜索</p>
        <img @click="chose" src="../../../static/seek/del.png" alt />
      </div>
      <div class="choice">
        <span @click="golist(item)" v-for="(item,index) in history" :key="index">{{item}}</span>
      </div>
    </main>
    <main v-else>
      <div class="wrapper">
        <div :class="['nav',{'active':updateactive}]">
          <ul>
            <li @click="updateall">综合</li>
            <li @click="updatenew">最新</li>
            <li @click="updateprices('asc')">价格</li>
          </ul>
        </div>
        <div class="flag" v-if="flags">
          <span @click="updateprice('desc')">价格从高到低</span>
          <span @click="updateprice('asc')">价格从低到高</span>
        </div>
        <div class="content">
          <dl v-for="(item,index) in searchlist" :key="index" @click="gotocommodityDtails(item)">
            <dt>
              <span>
                <img :src="item.mainImgUrl" alt />
              </span>
            </dt>
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
import { mapActions, mapState ,mapMutations} from "vuex";
export default {
  props: {},
  components: {},
  data() {
    return {
      flag: true,
      flags: false,
      scrollFlag: true,
      text: "",
      history: [],
      arr: [],
      updateactive: false,
      queryWord: "",
      queryType: 0,
      querySort: "asc",
      pageIndex: 1,
      scrollTop:-1
    };
  },
  computed: {
    ...mapState({
      searchlist: state => state.search.searchlist
    })
  },
  methods: {
    ...mapActions({
      getsearchlist: "search/getsearchlist"
    }),
    ...mapMutations({
      gotocommodityDtails:"commodityDetails/gotocommodityDtails"
    }),
    chose(){
      wx.removeStorageSync('history')
      this.history=[]
    },
    cancel(){
      this.flag=true
      this.text=""
      this.history = wx.getStorageSync("history");
    },
    updateinput(e) {
      this.text = e.target.value;
      if(!e.target.value){
        this.flag=true
      }
      
    },
    submit() {
      if(this.text){
        this.arr.push(this.text);
        wx.setStorage({
          key: "history",
          data: this.arr
        });
        this.queryWord = this.text;
        this.queryType = 0;
        this.querySort = "asc";
        this.pageIndex = 1;
        this.getlist(this.queryWord,this.queryType,this.querySort,this.pageIndex)
        this.flag = false;
      }
    },
    golist(item) {
        this.queryWord = item;
        this.queryType = 0;
        this.querySort = "asc";
        this.pageIndex = 1;
        this.getlist(this.queryWord,this.queryType,this.querySort,this.pageIndex)
        this.flag = false;
        this.text = item;
    },
    updateprices(sort) {
      this.scrollTop=0;
      this.scrollTop=-1;
      this.flags = !this.flags;
      this.queryType = 2;
      this.querySort = sort;
      this.pageIndex = 1;
      this.getlist(this.queryWord,this.queryType,this.querySort,this.pageIndex)
    },
    updateprice(sort) {
      this.flags=false;
      this.scrollTop=0;
      this.scrollTop=-1;
      this.queryWord = this.text;
      this.queryType = 2;
      this.querySort = sort;
      this.pageIndex = 1;
      this.getlist(this.queryWord,this.queryType,this.querySort,this.pageIndex)
    },
    updatenew() {
      this.scrollTop=0;
      this.scrollTop=-1;
      this.queryWord = this.text;
      this.queryType = 1;
      this.querySort = "asc";
      this.pageIndex = 1;
      this.getlist(this.queryWord,this.queryType,this.querySort,this.pageIndex);

    },
    updateall() {
      this.scrollTop=0;
      this.scrollTop=-1;
      this.queryWord = this.text;
      this.queryType = 0;
      this.querySort = "asc";
      this.pageIndex = 1;
      this.getlist(this.queryWord,this.queryType,this.querySort,this.pageIndex)
    },
    getlist(queryWord,queryType,querySort,pageIndex){
      this.getsearchlist({
        queryWord,
        queryType,
        querySort,
        pageIndex
      });
    },
    listscroll(e) {
      this.flags=false;
      if (e.target.scrollTop > 68) {
        this.updateactive = true;
      } else {
        this.updateactive = false;
      }
    },
    lower(e){
      this.pageIndex++;
      this.getlist(this.queryWord,this.queryType,this.querySort,this.pageIndex)
    }
  },

  created() {},
  mounted() {
    this.history = wx.getStorageSync("history");
  }
};
</script>
<style scoped lang="scss">
.active {
  position: fixed;
  left: 0;
  top: 0;
}

.wrap {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}
.header {
  z-index: 666;
  width: 100%;
  background: #f9f9f9;
  height: 80rpx;
  line-height: 80rpx;
  box-sizing: border-box;
  .search {
    display: flex;
    align-items: center;
    font-size: 28rpx;
    height: 80rpx;
    margin-top: 10rpx;
    .search-bg {
      width: 100%;
      height: 56rpx;
      box-sizing: border-box;
      display: flex;
      background: #ededed;
      overflow: hidden;
      border-radius: 10rpx;
      margin-left: 40rpx;
      padding-left: 30rpx;
      align-items: center;
      img {
        height: 32rpx;
        width: 32rpx;
        margin: 10rpx;
        display: inline-block;
        overflow: hidden;
      }
      .search-input {
        width: 70%;
        border: none;
        background: #ededed;
        border-radius: 10rpx;
        input {
          cursor: auto;
          display: block;
          text-overflow: clip;
          overflow: hidden;
          white-space: nowrap;
          font-family: UICTFontTextStyleBody;
        }
      }
    }
    .search-text {
      width: 20%;
      height: 28rpx;
      font-size: 28rpx;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: #999da2;
      line-height: 28rpx;
      margin-left: 32rpx;
    }
  }
}
.history {
  display: flex;
  justify-content: space-between;
  p {
    width: 112rpx;
    height: 40rpx;
    font-size: 28rpx;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: #999;
    line-height: 40rpx;
    margin-top: 30rpx;
    margin-left: 40rpx;
    margin-bottom: 30rpx;
  }
  img {
    height: 28rpx;
    width: 28rpx;
    margin-top: 30rpx;
    margin-right: 40rpx;
  }
}
.choice {
  display: flex;
  flex-wrap: wrap;
  padding-left: 40rpx;
  box-sizing: border-box;
  span {
    font-size: 28rpx;
    color: #333;
    padding: 10rpx 38rpx 10rpx 34rpx;
    background: #f5f5f5;
    border-radius: 12rpx;
    margin-bottom: 30rpx;
    margin-right: 28rpx;
  }
}
.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.nav {
  z-index: 666;
  width: 100%;
  height: 80rpx;
  background: #fff;
  ul {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    background: #fff;
    li {
      flex: 1;
      height: 100%;
      text-align: center;
      line-height: 80rpx;
      font-size: 26rpx;
      color: #666;
    }
  }
}
.content {
  flex: 1;
  width: 100%;
  height: 100%;
  background: #f3f7f7;
  padding: 18rpx 10rpx 0;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  dl {
    width: 363rpx;
    height: 536rpx;
    background: #fff;
    border-radius: 10rpx;
    display: flex;
    flex-direction: column;
    margin-top: 8rpx;
    position: relative;
    dt {
      height: 400rpx;
      padding: 60rpx 46rpx 30rpx 28rpx;
      span {
        display: block;
        width: 295rpx;
        height: 277rpx;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    dd {
      width: 100%;
      flex: 1;
      h3 {
        font-size: 24rpx;
        padding-left: 10rpx;
        color: #323a45;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .price {
        width: 100%;
        display: flex;
        align-items: flex-end;
        > div {
          display: flex;
          align-items: flex-end;
          padding-left: 6rpx;
          b:first-child {
            font-size: 28rpx;
            color: #fc5d7b;
          }
          b:last-child {
            font-size: 36rpx;
            color: #fc5d7b;
          }
        }
        span {
          font-size: 22rpx;
          color: #a87831;
        }
      }
      .tl-content {
        display: block;
        width: 50rpx;
        height: 26rpx;
        border-radius: 4rpx;
        background: linear-gradient(270deg, #ffb848, #ff7737);
        position: absolute;
        top: 20rpx;
        right: 20rpx;
        color: #fff;
        font-size: 18rpx;
        text-align: center;
        line-height: 26rpx;
      }
    }
  }
}
.flag {
  width: 30%;
  height: 100rpx;
  position: fixed;
  top: 165rpx;
  right: 10rpx;
  z-index: 999;
  background: #fff;
  span {
    display: block;
    font-size: 30rpx;
    height: 25px;
    line-height: 25px;
  }
}
</style>
