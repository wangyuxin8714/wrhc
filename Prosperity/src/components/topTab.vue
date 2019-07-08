<template>
  <scroll-view class="nav" scroll-x style="width: 100%">
    <span @click="tab(index)" :class="{active:index===ind}" v-for="(item,index) in list" :key="index">{{item.anchorName}}</span>
  </scroll-view>
</template>
<script>


export default {
  props: ["list"],
  components: {},
  data() {
    return {
      ind:0
    };
  },
  computed: {

  },
  methods: {
    tab(index){
      this.ind=index
    }
  },
  created() {},
  mounted() {
    

  }
};
</script>
<style scoped lang="scss">
.nav{
  width:100%;
  height:92rpx;
  line-height:92rpx;
  display:flex;
  white-space:nowrap;
  border-bottom:2rpx solid #ececec;
  justify-content:space-between;
  background:#fff;
  span{
    height:92rpx;
    margin:0 20rpx;
    flex:1;
    display:inline-block
  }
}
.active{
  color:red;
  border-bottom:4rpx solid red;
}
</style>